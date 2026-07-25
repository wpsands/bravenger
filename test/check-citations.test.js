import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { run, slugify, extractHeadings } from '../scripts/check-citations.js';

const FIXTURE_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), 'fixtures', 'broken-brain');

test('slugify matches GitHub-style heading anchors', () => {
  assert.equal(slugify('P1: Forecasting is guesswork'), 'p1-forecasting-is-guesswork');
  assert.equal(slugify('Words We Avoid'), 'words-we-avoid');
  assert.equal(slugify('  Spaced   Heading  '), 'spaced-heading');
  assert.equal(slugify('Q3 2026 — Priorities!'), 'q3-2026-priorities');
});

test('extractHeadings collects slugs for all heading levels', () => {
  const headings = extractHeadings('# One\n\ntext\n\n## Two Words\n\n###### Deep Heading\nnot # a heading\n');
  assert.ok(headings.has('one'));
  assert.ok(headings.has('two-words'));
  assert.ok(headings.has('deep-heading'));
  assert.equal(headings.size, 3);
});

test('run passes on the shipped company brain', () => {
  const { passed, errors, stats } = run();
  assert.deepEqual(errors, []);
  assert.equal(passed, true);
  assert.ok(stats.total > 0);
  assert.equal(stats.broken, 0);
});

test('run flags citations to missing files but accepts valid ones', () => {
  const { passed, errors, stats } = run(FIXTURE_DIR);
  assert.equal(passed, false);
  assert.equal(stats.broken, 1);
  assert.equal(stats.valid, 1);
  assert.match(errors.join('\n'), /File not found: "missing-file\.md"/);
});
