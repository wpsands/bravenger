#!/usr/bin/env node
/**
 * Validates all [Source: filename#section] citations in Brain files.
 * - Checks that the cited file exists
 * - Checks that the cited section heading exists in that file
 */

import fs from 'node:fs';
import path from 'node:path';
import { getAllMdFiles, rel, isMain, BRAIN_DIR } from './utils.js';

// Citation pattern: [Source: filename#section] or [Source: filename]
const CITATION_RE = /\[Source:\s*([^\]]+)\]/g;

export function slugify(heading) {
  return heading
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function extractHeadings(content) {
  const headings = new Set();
  for (const line of content.split('\n')) {
    const match = line.match(/^#{1,6}\s+(.+?)(?:\s*\{#.*\})?\s*$/);
    if (match) headings.add(slugify(match[1]));
  }
  return headings;
}

export function run(brainDir = BRAIN_DIR, root = path.dirname(brainDir)) {
  // Build heading cache for all files
  const headingCache = new Map();
  const files = getAllMdFiles(brainDir);

  for (const file of files) {
    const relPath = path.relative(brainDir, file).replace(/\\/g, '/');
    headingCache.set(relPath, extractHeadings(fs.readFileSync(file, 'utf8')));
  }

  const errors = [];
  const stats = { total: 0, valid: 0, broken: 0 };

  for (const file of files) {
    const lines = fs.readFileSync(file, 'utf8').split('\n');

    for (let i = 0; i < lines.length; i++) {
      for (const match of lines[i].matchAll(CITATION_RE)) {
        const raw = match[1].trim();

        // Placeholder citations in templates and directory-level references
        if (raw.startsWith('filename') || raw.endsWith('/')) continue;

        stats.total++;

        const [citedFile, ...sectionParts] = raw.split('#');
        const cited = citedFile.trim();
        const citedSection = sectionParts.length ? sectionParts.join('#').trim() : null;

        const resolvedPath = headingCache.has(cited)
          ? cited
          : [...headingCache.keys()].find((k) => k.endsWith(`/${cited}`)) ?? null;

        if (!resolvedPath) {
          errors.push({
            file: rel(file, root),
            line: i + 1,
            citation: match[0],
            error: `File not found: "${cited}"`,
          });
          stats.broken++;
          continue;
        }

        if (citedSection) {
          const headings = headingCache.get(resolvedPath);
          const sectionSlug = slugify(citedSection);

          if (!headings.has(sectionSlug)) {
            const looseMatch = [...headings].some(
              (h) => h.includes(sectionSlug) || sectionSlug.includes(h)
            );

            if (!looseMatch) {
              errors.push({
                file: rel(file, root),
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

  return {
    passed: errors.length === 0,
    errors: errors.map((e) => `${e.file}:${e.line} — ${e.citation}\n    ${e.error}`),
    stats,
  };
}

// --- Standalone CLI ---
if (isMain(import.meta.url)) {
  const { passed, errors, stats } = run();
  if (!passed) {
    console.error(`\n❌ Citation check failed (${stats.broken} broken out of ${stats.total} total):\n`);
    for (const e of errors) console.error(`  • ${e}`);
    console.error('');
    process.exit(1);
  }
  console.log(`✅ Citation check passed — ${stats.total} citations verified, all valid.`);
}
