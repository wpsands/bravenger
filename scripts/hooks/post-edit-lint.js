#!/usr/bin/env node
/**
 * Claude Code PostToolUse hook: lint the Brain immediately after any agent
 * edits a company-brain/ markdown file, so violations are corrected in the
 * same turn instead of surfacing later in CI.
 *
 * Receives hook JSON on stdin. Exits 0 when the edit is out of scope or the
 * Brain passes; exits 2 with errors on stderr so Claude sees the failures
 * and can self-correct.
 */

import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..", "..");
const BRAIN_DIR = path.join(ROOT, "company-brain");

function readStdin() {
  return new Promise((resolve) => {
    let data = "";
    process.stdin.on("data", (chunk) => (data += chunk));
    process.stdin.on("end", () => resolve(data));
  });
}

async function main() {
  let payload;
  try {
    payload = JSON.parse(await readStdin());
  } catch {
    process.exit(0); // malformed input — don't block
  }

  const filePath = payload?.tool_input?.file_path;
  if (!filePath || !filePath.endsWith(".md")) process.exit(0);

  const resolved = path.resolve(filePath);
  if (!resolved.startsWith(BRAIN_DIR + path.sep)) process.exit(0);

  let runFrontmatter, runCitations, runLanguage;
  try {
    ({ run: runFrontmatter } = await import("../validate-frontmatter.js"));
    ({ run: runCitations } = await import("../check-citations.js"));
    ({ run: runLanguage } = await import("../scan-forbidden-language.js"));
  } catch {
    // Dependencies not installed (fresh fork) — skip rather than block edits.
    console.error("Brain lint hook skipped: run `npm install` to enable edit-time linting.");
    process.exit(0);
  }

  const checks = [
    ["Frontmatter", runFrontmatter],
    ["Citations", runCitations],
    ["Forbidden language", runLanguage],
  ];

  const failures = [];
  for (const [name, run] of checks) {
    try {
      const { passed, errors } = run();
      if (!passed) failures.push({ name, errors });
    } catch (err) {
      failures.push({ name, errors: [err.message] });
    }
  }

  if (failures.length === 0) process.exit(0);

  console.error(
    `Brain lint failed after editing ${path.relative(ROOT, resolved)}. Fix these before continuing:`
  );
  for (const { name, errors } of failures) {
    console.error(`\n${name}:`);
    for (const e of errors) console.error(`  • ${e}`);
  }
  process.exit(2);
}

main();
