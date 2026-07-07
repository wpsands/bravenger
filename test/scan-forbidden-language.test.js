import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { run, extractForbiddenWords } from '../scripts/scan-forbidden-language.js';

const FIXTURE_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), 'fixtures', 'broken-brain');

test('extractForbiddenWords parses the Words We Avoid table', () => {
  const content = [
    '## Words We Avoid',
    '',
    '| Word/Phrase | Why | Use Instead |',
    '|-------------|-----|-------------|',
    '| **Synergy** | Filler | Be specific |',
    '| **Revolutionary / game-changing** | Hype | Describe the change |',
    '',
    '## Next Section',
  ].join('\n');

  const words = extractForbiddenWords(content);
  assert.deepEqual(words.sort(), ['game-changing', 'revolutionary', 'synergy']);
});

test('extractForbiddenWords throws when the section is missing', () => {
  assert.throws(() => extractForbiddenWords('# No such section\n'), /Words We Avoid/);
});

test('run passes on the shipped company brain', () => {
  const { passed, errors } = run();
  assert.deepEqual(errors, []);
  assert.equal(passed, true);
});

test('run flags forbidden words used outside exempt contexts', () => {
  const { passed, errors } = run(FIXTURE_DIR);
  assert.equal(passed, false);
  assert.equal(errors.length, 1);
  assert.match(errors[0], /uc-001-broken\.md/);
  assert.match(errors[0], /"synergy"/);
});
