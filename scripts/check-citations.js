#!/usr/bin/env node
/**
 * Validates all [Source: filename#section] citations in Brain files.
 * - Checks that the cited file exists
 * - Checks that the cited section heading exists in that file
 */

const fs = require("fs");
const path = require("path");

const BRAIN_DIR = path.resolve(__dirname, "..", "company-brain");

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

function rel(filePath) {
  return path.relative(path.resolve(__dirname, ".."), filePath).replace(/\\/g, "/");
}

// Build heading cache for all files
const headingCache = new Map();
const files = getAllMdFiles(BRAIN_DIR);

for (const file of files) {
  const relPath = path.relative(BRAIN_DIR, file).replace(/\\/g, "/");
  const content = fs.readFileSync(file, "utf8");
  headingCache.set(relPath, extractHeadings(content));
}

// Citation pattern: [Source: filename#section] or [Source: filename]
const CITATION_RE = /\[Source:\s*([^\]]+)\]/g;

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

      // Skip template/example citations that use placeholder names
      if (raw.startsWith("filename") || raw === "filename#section") {
        continue;
      }
      // Skip directory references like "guidelines/"
      if (raw.endsWith("/")) {
        continue;
      }

      stats.total++;

      // May contain multiple citations separated by spaces/commas within one bracket
      // or it could be "filename#section"
      const parts = raw.split("#");
      const citedFile = parts[0].trim();
      const citedSection = parts.length > 1 ? parts.slice(1).join("#").trim() : null;

      // Resolve the file path — citations may omit directory prefixes or .md extension
      let resolvedPath = null;
      const citedFileWithMd = citedFile.endsWith(".md") ? citedFile : citedFile + ".md";
      const candidates = [
        citedFile,
        citedFileWithMd,
        // Common patterns: just filename without directory
        ...Array.from(headingCache.keys()).filter(
          (k) => k.endsWith("/" + citedFile) || k === citedFile ||
                 k.endsWith("/" + citedFileWithMd) || k === citedFileWithMd
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
          // Try a looser match — check if any heading contains the section text
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

// --- Output ---
if (errors.length > 0) {
  console.error(
    `\n❌ Citation check failed (${stats.broken} broken out of ${stats.total} total):\n`
  );
  for (const e of errors) {
    console.error(`  • ${e.file}:${e.line} — ${e.citation}`);
    console.error(`    ${e.error}`);
  }
  console.error("");
  process.exit(1);
} else {
  console.log(
    `✅ Citation check passed — ${stats.total} citations verified, all valid.`
  );
}
