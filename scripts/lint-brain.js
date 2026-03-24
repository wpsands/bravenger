#!/usr/bin/env node
/**
 * Main Brain lint runner. Executes all validators and reports results.
 * Usage: node scripts/lint-brain.js
 * Exit code: 0 if all pass, 1 if any fail.
 */

const { execSync } = require("child_process");
const path = require("path");

const checks = [
  { name: "Frontmatter Validation", script: "validate-frontmatter.js" },
  { name: "Citation Check", script: "check-citations.js" },
  { name: "Forbidden Language Scan", script: "scan-forbidden-language.js" },
];

let failed = false;

console.log("🔍 Running Brain lint checks...\n");

for (const check of checks) {
  const scriptPath = path.join(__dirname, check.script);
  try {
    const output = execSync(`node "${scriptPath}"`, {
      encoding: "utf8",
      stdio: ["pipe", "pipe", "pipe"],
    });
    console.log(output.trim());
  } catch (err) {
    failed = true;
    // Print both stdout and stderr
    if (err.stdout) console.log(err.stdout.trim());
    if (err.stderr) console.error(err.stderr.trim());
  }
  console.log("");
}

if (failed) {
  console.error("❌ Brain lint failed. Fix the errors above before committing.");
  process.exit(1);
} else {
  console.log("✅ All Brain lint checks passed.");
}
