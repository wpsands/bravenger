import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getAllMdFiles, rel, ROOT, BRAIN_DIR } from '../scripts/utils.js';

const FIXTURE_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), 'fixtures', 'broken-brain');

test('getAllMdFiles finds markdown files recursively', () => {
  const files = getAllMdFiles(FIXTURE_DIR).map((f) => rel(f, FIXTURE_DIR));
  assert.deepEqual(files.sort(), [
    'brand-vision.md',
    'icp.md',
    'personas/persona-broken.md',
    'use-cases/uc-001-broken.md',
  ]);
});

test('getAllMdFiles ignores non-markdown files', () => {
  const files = getAllMdFiles(ROOT);
  assert.ok(files.length > 0);
  assert.ok(files.every((f) => f.endsWith('.md')));
});

test('rel returns forward-slash paths relative to the given root', () => {
  const abs = path.join(BRAIN_DIR, 'personas', 'index.md');
  assert.equal(rel(abs), 'company-brain/personas/index.md');
  assert.equal(rel(abs, BRAIN_DIR), 'personas/index.md');
});
