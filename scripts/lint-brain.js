#!/usr/bin/env node
/**
 * Main Brain lint runner. Imports validators as modules and reports results.
 * Usage: node scripts/lint-brain.js
 * Exit code: 0 if all pass, 1 if any fail.
 */

import { run as runFrontmatter } from './validate-frontmatter.js';
import { run as runCitations } from './check-citations.js';
import { run as runLanguage } from './scan-forbidden-language.js';

console.log('🔍 Running Brain lint checks...\n');

function safe(name, fn) {
  try {
    return { name, ...fn() };
  } catch (err) {
    return { name, passed: false, errors: [err.message] };
  }
}

const results = [
  safe('Frontmatter Validation', runFrontmatter),
  safe('Citation Check', runCitations),
  safe('Language Scan', runLanguage),
];

for (const r of results) {
  if (r.passed) {
    console.log(`✅ ${r.name}`);
  } else {
    console.error(`❌ ${r.name} (${r.errors.length} errors)`);
    for (const e of r.errors) console.error(`  • ${e}`);
  }
  console.log('');
}

if (results.some((r) => !r.passed)) {
  console.error('❌ Brain lint failed. Fix the errors above before committing.');
  process.exit(1);
}
console.log('✅ All Brain lint checks passed.');
