#!/usr/bin/env node
/**
 * Validates all [Source: filename#section] citations in Brain files.
 * - Checks that the cited file exists
 * - Checks that the cited section heading exists in that file
 */

const fs = require("fs");
const path = require("path");
const { getAllMdFiles, rel } = require("./utils");

const BRAIN_DIR = path.resolve(__dirname, "..", "company-brain");

function extractHeadings(content) {
  const headings = new Set();
  for (const line of content.split("\n")) {
    const match = line.match(/^#{1,6}\s+(.+?)(?:\s*\{#.*\})?\s*$/);
    if (match) {
      headings.add(slugify(match[1]));
    }
  }
  return headings;
}

function slugify(heading) {
  return heading
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

// Citation pattern: [Source: filename#section] or [Source: filename]
const CITATION_RE = /\[Source:\s*([^\]]+)\]/g;

// --- Exported run function ---
function run() {
  // Build heading cache for all files
  const headingCache = new Map();
  const files = getAllMdFiles(BRAIN_DIR);

  for (const file of files) {
    const relPath = path.relative(BRAIN_DIR, file).replace(/\\/g, "/");
    const content = fs.readFileSync(file, "utf8");
    headingCache.set(relPath, extractHeadings(content));
  }

  const errors = [];
  const stats = { total: 0, valid: 0, broken: 0 };

  for (const file of files) {
    const content = fs.readFileSync(file, "utf8");
    const lines = content.split("\n");

    for (let i = 0; i < lines.length; i++) {
      let match;
      const citationRe = new RegExp(CITATION_RE.source, "g");

      while ((match = citationRe.exec(lines[i])) !== null) {
        const raw = match[1].trim();

        if (raw.startsWith("filename") || raw === "filename#section") {
          continue;
        }
        if (raw.endsWith("/")) {
          continue;
        }

        stats.total++;

        const parts = raw.split("#");
        const citedFile = parts[0].trim();
        const citedSection = parts.length > 1 ? parts.slice(1).join("#").trim() : null;

        let resolvedPath = null;
        const candidates = [
          citedFile,
          ...Array.from(headingCache.keys()).filter(
            (k) => k.endsWith("/" + citedFile) || k === citedFile
          ),
        ];

        for (const candidate of candidates) {
          if (headingCache.has(candidate)) {
            resolvedPath = candidate;
            break;
          }
        }

        if (!resolvedPath) {
          errors.push({
            file: rel(file),
            line: i + 1,
            citation: match[0],
            error: `File not found: "${citedFile}"`,
          });
          stats.broken++;
          continue;
        }

        if (citedSection) {
          const headings = headingCache.get(resolvedPath);
          const sectionSlug = slugify(citedSection);

          if (!headings.has(sectionSlug)) {
            const looseMatch = Array.from(headings).some(
              (h) => h.includes(sectionSlug) || sectionSlug.includes(h)
            );

            if (!looseMatch) {
              errors.push({
                file: rel(file),
                line: i + 1,
                citation: match[0],
                error: `Section not found: "${citedSection}" in ${resolvedPath}`,
              });
              stats.broken++;
              continue;
            }
          }
        }

        stats.valid++;
      }
    }
  }

  return { passed: errors.length === 0, errors: errors.map(e => `${e.file}:${e.line} — ${e.citation}\n    ${e.error}`), stats };
}

module.exports = { run };

// --- Standalone CLI ---
if (require.main === module) {
  const { passed, errors, stats } = run();
  if (!passed) {
    console.error(
      `\n❌ Citation check failed (${stats.broken} broken out of ${stats.total} total):\n`
    );
    for (const e of errors) {
      console.error(`  • ${e}`);
    }
    console.error("");
    process.exit(1);
  } else {
    console.log(
      `✅ Citation check passed — ${stats.total} citations verified, all valid.`
    );
  }
}
