#!/usr/bin/env node
/**
 * Uploads all Brain markdown files to Anthropic Files API.
 * Writes a manifest to scripts/brain-manifest.json mapping
 * relative file paths to Files API IDs.
 *
 * Usage: ANTHROPIC_API_KEY=sk-... node scripts/upload-brain.js
 * Flags: --dry-run  (list files, skip upload)
 *        --force    (re-upload even if file_id exists in manifest)
 */

const fs = require('fs');
const path = require('path');
const { getAllMdFiles, rel } = require('./utils');

const BRAIN_DIR = path.resolve(__dirname, '..', 'company-brain');
const MANIFEST_PATH = path.join(__dirname, 'brain-manifest.json');
const API_KEY = process.env.ANTHROPIC_API_KEY;

const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const FORCE = args.includes('--force');

function loadManifest() {
  if (fs.existsSync(MANIFEST_PATH)) {
    return JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
  }
  return { generated_at: null, files: {} };
}

function saveManifest(manifest) {
  manifest.generated_at = new Date().toISOString();
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n');
}

async function uploadFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const response = await fetch('https://api.anthropic.com/v1/files', {
    method: 'POST',
    headers: {
      'x-api-key': API_KEY,
      'anthropic-version': '2023-06-01',
      'anthropic-beta': 'files-api-2025-04-14',
      'content-type': 'application/json',
    },
    body: JSON.stringify({ content, filename: path.basename(filePath) }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Upload failed for ${rel(filePath)}: ${response.status} ${error}`);
  }

  const data = await response.json();
  return data.id;
}

async function main() {
  if (!DRY_RUN && !API_KEY) {
    console.error('Error: ANTHROPIC_API_KEY environment variable is required.');
    console.error('Usage: ANTHROPIC_API_KEY=sk-... node scripts/upload-brain.js');
    process.exit(1);
  }

  const files = getAllMdFiles(BRAIN_DIR);
  const manifest = loadManifest();

  console.log(`Found ${files.length} Brain files.\n`);

  if (DRY_RUN) {
    console.log('Dry run — listing files (no uploads):\n');
    for (const file of files) {
      const relPath = rel(file);
      const existing = manifest.files[relPath];
      console.log(`  ${relPath}${existing ? ` (existing: ${existing})` : ''}`);
    }
    console.log(`\nTotal: ${files.length} files`);
    return;
  }

  let uploaded = 0;
  let skipped = 0;

  for (const file of files) {
    const relPath = rel(file);

    if (!FORCE && manifest.files[relPath]) {
      console.log(`  ⏭ ${relPath} (already uploaded: ${manifest.files[relPath]})`);
      skipped++;
      continue;
    }

    try {
      const fileId = await uploadFile(file);
      manifest.files[relPath] = fileId;
      console.log(`  ✅ ${relPath} → ${fileId}`);
      uploaded++;
    } catch (err) {
      console.error(`  ❌ ${relPath}: ${err.message}`);
    }
  }

  saveManifest(manifest);
  console.log(`\nDone. Uploaded: ${uploaded}, Skipped: ${skipped}`);
  console.log(`Manifest written to ${MANIFEST_PATH}`);
}

main().catch(err => {
  console.error(`Fatal error: ${err.message}`);
  process.exit(1);
});
