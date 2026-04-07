#!/usr/bin/env node
/**
 * Main Brain lint runner. Imports validators as modules and reports results.
 * Usage: node scripts/lint-brain.js
 * Exit code: 0 if all pass, 1 if any fail.
 */

const { run: runFrontmatter } = require('./validate-frontmatter');
const { run: runCitations }   = require('./check-citations');
const { run: runLanguage }    = require('./scan-forbidden-language');

console.log("🔍 Running Brain lint checks...\n");

const results = [
  { name: 'Frontmatter Validation', ...runFrontmatter() },
  { name: 'Citation Check',         ...runCitations() },
  { name: 'Language Scan',          ...runLanguage() },
];

const failed = results.filter(r => !r.passed);

results.forEach(r => {
  if (r.passed) {
    console.log(`✅ ${r.name}`);
  } else {
    console.error(`❌ ${r.name} (${r.errors.length} errors)`);
    for (const e of r.errors) {
      console.error(`  • ${e}`);
    }
  }
  console.log("");
});

if (failed.length) {
  console.error("❌ Brain lint failed. Fix the errors above before committing.");
  process.exit(1);
} else {
  console.log("✅ All Brain lint checks passed.");
}
