#!/usr/bin/env node
/**
 * Scans all Brain files for forbidden language defined in brand-vision.md.
 * Skips brand-vision.md itself (where forbidden words are defined) and
 * lines that reference forbidden words in order to warn against them.
 */

import fs from 'node:fs';
import path from 'node:path';
import { getAllMdFiles, rel, isMain, BRAIN_DIR } from './utils.js';

/** Extracts forbidden words from the "Words We Avoid" table in brand-vision.md content. */
export function extractForbiddenWords(brandVisionContent) {
  const words = [];

  const section = brandVisionContent.match(/## Words We Avoid\r?\n([\s\S]*?)(?=\r?\n## |\r?\n---|$)/);
  if (!section) {
    throw new Error("Could not find 'Words We Avoid' section in brand-vision.md");
  }

  // Extract the first column from each table row
  const tableLines = section[1].split('\n').filter((l) => l.startsWith('|'));
  for (const line of tableLines) {
    const cols = line.split('|').map((c) => c.trim());
    // cols[0] is empty (before first |), cols[1] is the first column
    const firstCol = (cols[1] ?? '').toLowerCase().replace(/\*+/g, '');

    // Skip header and separator rows
    if (!firstCol || firstCol === 'word/phrase' || firstCol.startsWith('---')) continue;

    // Handle "X / Y" format (e.g., "Revolutionary / game-changing")
    for (const w of firstCol.split('/')) {
      const cleaned = w.trim();
      if (cleaned.length > 2) words.push(cleaned);
    }
  }

  return [...new Set(words)];
}

// Files to skip entirely — they define or discuss forbidden language
const SKIP_FILES = new Set(['brand-vision.md', 'updates/v2-spec.md', 'updates/changelog.md']);

/** Lines that are defining/referencing forbidden language, not using it. */
function isExemptLine(line) {
  const lower = line.toLowerCase();
  return (
    // Defining forbidden language
    lower.includes('forbidden language') ||
    lower.includes('words we avoid') ||
    // Instructing not to use a word (e.g., "Don't call it a 'platform'")
    lower.includes("don't call") ||
    lower.includes("don't use") ||
    lower.includes("don't say") ||
    lower.includes('do not use') ||
    lower.includes('do not call') ||
    lower.includes('never say') ||
    lower.includes('never call') ||
    lower.includes('avoid:') ||
    // Quoting forbidden words in the context of warning against them
    (lower.includes('"') && (lower.includes("don't") || lower.includes('not'))) ||
    // Table rows that explicitly mark something as forbidden
    (lower.includes('|') && (lower.includes('why') || lower.includes('use instead')))
  );
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function run(brainDir = BRAIN_DIR, root = path.dirname(brainDir)) {
  const brandVisionPath = path.join(brainDir, 'brand-vision.md');
  const forbiddenWords = extractForbiddenWords(fs.readFileSync(brandVisionPath, 'utf8'));

  if (forbiddenWords.length === 0) {
    return { passed: false, errors: ['No forbidden words found. Check brand-vision.md format.'] };
  }

  // Pre-compile all forbidden word patterns once
  const compiledPatterns = forbiddenWords.map((word) => ({
    word,
    re: new RegExp(`\\b${escapeRegExp(word)}\\b`, 'i'),
  }));

  const files = getAllMdFiles(brainDir);
  const violations = [];

  for (const file of files) {
    const relPath = path.relative(brainDir, file).replace(/\\/g, '/');
    if (SKIP_FILES.has(relPath)) continue;

    const lines = fs.readFileSync(file, 'utf8').split('\n');

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
          continue;
        }
      }

      if (isExemptLine(line)) continue;

      const lower = line.toLowerCase();
      for (const { word, re } of compiledPatterns) {
        if (!re.test(lower)) continue;

        // "Platform" is fine when naming third-party products
        if (word === 'platform' && /\b(linkedin|twitter|slack|github|notion)\b/i.test(lower)) {
          continue;
        }
        // Code blocks and inline code
        if (line.trim().startsWith('```') || line.trim().startsWith('`')) continue;
        // Discussing competitor language or quoting the word to critique it
        if (
          lower.includes('competitor') ||
          lower.includes('everyone says') ||
          lower.includes('none of those') ||
          lower.includes('overused') ||
          lower.includes('meaningless') ||
          (/["“”]/.test(line) && lower.includes(word))
        ) {
          continue;
        }

        violations.push({
          file: rel(file, root),
          line: i + 1,
          word,
          context: line.trim().substring(0, 120),
        });
      }
    }
  }

  return {
    passed: violations.length === 0,
    errors: violations.map((v) => `${v.file}:${v.line} — "${v.word}"\n    ${v.context}`),
    forbiddenWordCount: forbiddenWords.length,
  };
}

// --- Standalone CLI ---
if (isMain(import.meta.url)) {
  const { passed, errors, forbiddenWordCount } = run();
  if (!passed) {
    console.error(`\n❌ Forbidden language scan found ${errors.length} violation(s):\n`);
    for (const e of errors) console.error(`  • ${e}`);
    console.error('');
    process.exit(1);
  }
  console.log(`✅ Forbidden language scan passed — no violations found (checked ${forbiddenWordCount} forbidden terms).`);
}
