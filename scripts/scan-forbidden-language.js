#!/usr/bin/env node
/**
 * Scans all Brain files for forbidden language defined in brand-vision.md.
 * Skips the brand-vision.md file itself (where forbidden words are defined)
 * and the words-we-avoid table in other files that reference them.
 */

const fs = require("fs");
const path = require("path");

const BRAIN_DIR = path.resolve(__dirname, "..", "company-brain");
const BRAND_VISION = path.join(BRAIN_DIR, "brand-vision.md");

function getAllMdFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...getAllMdFiles(full));
    } else if (entry.name.endsWith(".md")) {
      results.push(full);
    }
  }
  return results;
}

function rel(filePath) {
  return path.relative(path.resolve(__dirname, ".."), filePath).replace(/\\/g, "/");
}

// Extract forbidden words from brand-vision.md
function extractForbiddenWords() {
  const content = fs.readFileSync(BRAND_VISION, "utf8");
  const words = [];

  // Look for the "Words We Avoid" section and extract from table
  const section = content.match(
    /## Words We Avoid\n([\s\S]*?)(?=\n## |\n---|$)/
  );
  if (!section) {
    console.error("Could not find 'Words We Avoid' section in brand-vision.md");
    process.exit(1);
  }

  // Extract first column from each table row
  const tableLines = section[1].split("\n").filter((l) => l.startsWith("|"));
  for (const line of tableLines) {
    const cols = line.split("|").map((c) => c.trim());
    // cols[0] is empty (before first |), cols[1] is first column
    const firstCol = (cols[1] || "").toLowerCase().replace(/\*+/g, "");

    // Skip header and separator rows
    if (
      !firstCol ||
      firstCol === "word/phrase" ||
      firstCol.startsWith("---")
    ) {
      continue;
    }

    // Handle "X / Y" format (e.g., "Revolutionary / game-changing")
    for (const w of firstCol.split("/")) {
      const cleaned = w.trim();
      if (cleaned.length > 2) {
        words.push(cleaned);
      }
    }
  }

  return [...new Set(words)];
}

// Files to skip entirely — they define or discuss forbidden language
const SKIP_FILES = new Set([
  "brand-vision.md",
  "updates/v2-spec.md",
  "updates/changelog.md",
]);

// Lines that are defining/referencing forbidden language, not using it
function isExemptLine(line) {
  const lower = line.toLowerCase();
  return (
    // Defining forbidden language
    lower.includes("forbidden language") ||
    lower.includes("words we avoid") ||
    // Instructing not to use a word (e.g., "Don't call it a 'platform'")
    lower.includes("don't call") ||
    lower.includes("don't use") ||
    lower.includes("don't say") ||
    lower.includes("do not use") ||
    lower.includes("do not call") ||
    lower.includes("never say") ||
    lower.includes("never call") ||
    lower.includes("avoid:") ||
    // Quoting forbidden words in context of warning against them
    (lower.includes('"') && (lower.includes("don't") || lower.includes("not"))) ||
    // Table rows that explicitly mark something as forbidden
    (lower.includes("|") && (lower.includes("why") || lower.includes("use instead")))
  );
}

// --- Main ---
const forbiddenWords = extractForbiddenWords();

if (forbiddenWords.length === 0) {
  console.error("No forbidden words found. Check brand-vision.md format.");
  process.exit(1);
}

const files = getAllMdFiles(BRAIN_DIR);
const violations = [];

for (const file of files) {
  const relPath = path.relative(BRAIN_DIR, file).replace(/\\/g, "/");
  if (SKIP_FILES.has(relPath)) continue;

  const content = fs.readFileSync(file, "utf8");
  const lines = content.split("\n");

  // Track if we're inside a "Forbidden language:" block
  let inForbiddenBlock = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Detect forbidden language definition blocks (in messaging framework)
    if (/^\*\*Forbidden language:\*\*/.test(line)) {
      inForbiddenBlock = true;
      continue;
    }
    if (inForbiddenBlock) {
      // Block ends at next section, heading, or non-list line
      if (/^(\*\*|###|---|$)/.test(line) && !/^- /.test(line)) {
        inForbiddenBlock = false;
      } else {
        continue; // Skip lines inside forbidden language definition blocks
      }
    }

    if (isExemptLine(line)) continue;

    const lower = line.toLowerCase();
    for (const word of forbiddenWords) {
      // Word boundary match to avoid false positives
      const re = new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
      if (re.test(lower)) {
        // Context-aware exemptions:
        // - "platform" referring to an external platform (LinkedIn, etc.) is fine
        if (word === "platform" && /\b(linkedin|twitter|slack|github|notion)\b/i.test(lower)) {
          continue;
        }
        // - Words inside code blocks or inline code
        if (line.trim().startsWith("```") || line.trim().startsWith("`")) {
          continue;
        }
        // - Words used critically — quoting what competitors say, mocking bad language
        if (
          lower.includes("competitor") ||
          lower.includes("everyone says") ||
          lower.includes("none of those") ||
          lower.includes("overused") ||
          lower.includes("meaningless") ||
          /[""\u201C\u201D]/.test(line) && lower.includes(word)
        ) {
          continue;
        }

        violations.push({
          file: rel(file),
          line: i + 1,
          word: word,
          context: line.trim().substring(0, 120),
        });
      }
    }
  }
}

// --- Output ---
if (violations.length > 0) {
  console.error(
    `\n❌ Forbidden language scan found ${violations.length} violation(s):\n`
  );
  for (const v of violations) {
    console.error(`  • ${v.file}:${v.line} — "${v.word}"`);
    console.error(`    ${v.context}`);
  }
  console.error("");
  process.exit(1);
} else {
  console.log(
    `✅ Forbidden language scan passed — no violations found (checked ${forbiddenWords.length} forbidden terms).`
  );
}
