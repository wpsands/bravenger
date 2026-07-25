import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { run, extractFrontmatter, getFileType } from '../scripts/validate-frontmatter.js';
import { BRAIN_DIR } from '../scripts/utils.js';

const FIXTURE_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), 'fixtures', 'broken-brain');

test('extractFrontmatter parses a valid block', () => {
  const fm = extractFrontmatter('---\ntitle: "Hello"\nversion: "1.0.0"\n---\n\n# Body\n');
  assert.equal(fm.title, 'Hello');
  assert.equal(fm.version, '1.0.0');
});

test('extractFrontmatter returns null when no frontmatter exists', () => {
  assert.equal(extractFrontmatter('# Just a heading\n\nBody text.\n'), null);
});

test('extractFrontmatter returns undefined on malformed YAML', () => {
  assert.equal(extractFrontmatter('---\ntitle: "unclosed\nbad: [\n---\n'), undefined);
});

test('extractFrontmatter handles CRLF line endings', () => {
  const fm = extractFrontmatter('---\r\ntitle: "CRLF"\r\n---\r\n\r\n# Body\r\n');
  assert.equal(fm.title, 'CRLF');
});

test('getFileType classifies brain files', () => {
  assert.equal(getFileType(path.join(BRAIN_DIR, 'use-cases', 'uc-001-pipeline-forecasting.md')), 'use-case');
  assert.equal(getFileType(path.join(BRAIN_DIR, 'personas', 'persona-cto.md')), 'persona');
  assert.equal(getFileType(path.join(BRAIN_DIR, 'icp.md')), 'base');
  assert.equal(getFileType(path.join(BRAIN_DIR, 'use-cases', 'index.md')), 'base');
});

test('run passes on the shipped company brain', () => {
  const { passed, errors } = run();
  assert.deepEqual(errors, []);
  assert.equal(passed, true);
});

test('run reports schema and cross-reference errors on a broken brain', () => {
  const { passed, errors } = run(FIXTURE_DIR);
  assert.equal(passed, false);

  const all = errors.join('\n');
  assert.match(all, /persona-broken\.md: missing required field "role"/);
  assert.match(all, /persona-broken\.md: "persona_id" value "PX-01" doesn't match pattern/);
  assert.match(all, /uc-001-broken\.md: "status" is "invalid-status"/);
  assert.match(all, /uc-001-broken\.md: personas\.setup_by references "P-999" which doesn't exist/);
  assert.match(all, /uc-001-broken\.md: personas\.used_by references "P-999" which doesn't exist/);
  assert.match(all, /uc-001-broken\.md: connected_use_cases references "UC-888" which doesn't exist/);
  assert.match(all, /uc-001-broken\.md: icp_pain references "P9" — not found in icp\.md/);
});
