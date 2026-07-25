#!/usr/bin/env node
/**
 * Validates YAML frontmatter in all Brain markdown files against JSON schemas.
 * - Base schema: every file needs title, version, last_updated, owner, status
 * - Use case schema: use-cases/uc-*.md
 * - Persona schema: personas/persona-*.md
 */

import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';
import { fileURLToPath } from 'node:url';
import { getAllMdFiles, rel, isMain, BRAIN_DIR } from './utils.js';

const SCHEMA_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), 'schemas');

function loadSchema(name) {
  return JSON.parse(fs.readFileSync(path.join(SCHEMA_DIR, name), 'utf8'));
}

const baseSchema = loadSchema('base.schema.json');
const useCaseSchema = loadSchema('use-case.schema.json');
const personaSchema = loadSchema('persona.schema.json');

/**
 * Returns the parsed frontmatter object, `null` if the file has no
 * frontmatter block, or `undefined` if the block fails to parse as YAML.
 */
export function extractFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
  try {
    return yaml.load(match[1]);
  } catch {
    return undefined; // parse error
  }
}

export function getFileType(filePath, brainDir = BRAIN_DIR) {
  const relPath = path.relative(brainDir, filePath).replace(/\\/g, '/');

  if (relPath.startsWith('use-cases/uc-') && relPath.endsWith('.md')) return 'use-case';
  if (relPath.startsWith('personas/persona-') && relPath.endsWith('.md')) return 'persona';
  // Example files have their own schema — require title and type, not base fields
  if (relPath.includes('examples/') && !relPath.endsWith('README.md')) return 'example';
  return 'base';
}

function validateRequired(frontmatter, schema, filePath, root) {
  const errors = [];
  for (const field of schema.required ?? []) {
    if (!(field in frontmatter)) {
      errors.push(`${rel(filePath, root)}: missing required field "${field}"`);
    }
  }
  return errors;
}

function validateEnum(value, allowed, field, filePath, root) {
  if (value && allowed && !allowed.includes(value)) {
    return [`${rel(filePath, root)}: "${field}" is "${value}" — expected one of: ${allowed.join(', ')}`];
  }
  return [];
}

function validatePattern(value, pattern, field, filePath, root) {
  if (value && pattern && !new RegExp(pattern).test(value)) {
    return [`${rel(filePath, root)}: "${field}" value "${value}" doesn't match pattern ${pattern}`];
  }
  return [];
}

// Files that are generated or don't need frontmatter
const SKIP_FILES = new Set(['examples/README.md', 'updates/v2-spec.md']);

function shouldSkip(filePath, brainDir) {
  return SKIP_FILES.has(path.relative(brainDir, filePath).replace(/\\/g, '/'));
}

/** First pass: collect persona/use-case/pain IDs for cross-reference validation. */
function collectIds(files, brainDir) {
  const personaIds = new Set();
  const useCaseIds = new Set();
  const painIds = new Set();

  for (const file of files) {
    const fm = extractFrontmatter(fs.readFileSync(file, 'utf8'));
    if (!fm) continue;
    if (fm.persona_id) personaIds.add(fm.persona_id);
    if (fm.use_case_id) useCaseIds.add(fm.use_case_id);
  }

  const icpPath = path.join(brainDir, 'icp.md');
  if (fs.existsSync(icpPath)) {
    for (const m of fs.readFileSync(icpPath, 'utf8').matchAll(/###\s+(P\d+):/g)) {
      painIds.add(m[1]);
    }
  }

  return { personaIds, useCaseIds, painIds };
}

/** Second pass: validate every file against its schema and cross-references. */
function validate(files, ids, brainDir, root) {
  const errors = [];

  for (const file of files) {
    if (shouldSkip(file, brainDir)) continue;

    const fm = extractFrontmatter(fs.readFileSync(file, 'utf8'));

    if (fm === null) {
      // Some files legitimately have no frontmatter (changelogs, nested examples)
      const relPath = path.relative(brainDir, file).replace(/\\/g, '/');
      if (!relPath.startsWith('updates/') && !relPath.startsWith('messaging-positioning/examples/')) {
        errors.push(`${rel(file, root)}: no YAML frontmatter found`);
      }
      continue;
    }

    if (fm === undefined) {
      errors.push(`${rel(file, root)}: YAML frontmatter parse error`);
      continue;
    }

    const fileType = getFileType(file, brainDir);

    if (fileType === 'example') {
      if (!fm.title) errors.push(`${rel(file, root)}: missing required field "title"`);
      if (!fm.type) errors.push(`${rel(file, root)}: missing required field "type"`);
      continue;
    }

    errors.push(...validateRequired(fm, baseSchema, file, root));

    if (fileType === 'use-case') {
      const ucOnlyRequired = (useCaseSchema.required ?? []).filter(
        (f) => !(baseSchema.required ?? []).includes(f)
      );
      errors.push(...validateRequired(fm, { required: ucOnlyRequired }, file, root));
      errors.push(...validateEnum(fm.status, useCaseSchema.properties.status.enum, 'status', file, root));
      errors.push(
        ...validatePattern(fm.use_case_id, useCaseSchema.properties.use_case_id.pattern, 'use_case_id', file, root)
      );

      if (fm.personas) {
        const { setup_by, used_by, evaluated_by } = fm.personas;
        if (setup_by && !ids.personaIds.has(setup_by)) {
          errors.push(`${rel(file, root)}: personas.setup_by references "${setup_by}" which doesn't exist`);
        }
        if (evaluated_by && !ids.personaIds.has(evaluated_by)) {
          errors.push(`${rel(file, root)}: personas.evaluated_by references "${evaluated_by}" which doesn't exist`);
        }
        if (Array.isArray(used_by)) {
          for (const id of used_by) {
            if (!ids.personaIds.has(id)) {
              errors.push(`${rel(file, root)}: personas.used_by references "${id}" which doesn't exist`);
            }
          }
        }
      }

      if (Array.isArray(fm.connected_use_cases)) {
        for (const id of fm.connected_use_cases) {
          if (!ids.useCaseIds.has(id)) {
            errors.push(`${rel(file, root)}: connected_use_cases references "${id}" which doesn't exist`);
          }
        }
      }

      if (fm.icp_pain) {
        for (const ref of fm.icp_pain.split(',').map((s) => s.trim())) {
          if (!ids.painIds.has(ref)) {
            errors.push(`${rel(file, root)}: icp_pain references "${ref}" — not found in icp.md`);
          }
        }
      }
    }

    if (fileType === 'persona') {
      const pOnlyRequired = (personaSchema.required ?? []).filter(
        (f) => !(baseSchema.required ?? []).includes(f)
      );
      errors.push(...validateRequired(fm, { required: pOnlyRequired }, file, root));
      errors.push(
        ...validatePattern(fm.persona_id, personaSchema.properties.persona_id.pattern, 'persona_id', file, root)
      );
    }
  }

  return errors;
}

export function run(brainDir = BRAIN_DIR, root = path.dirname(brainDir)) {
  const files = getAllMdFiles(brainDir);
  const ids = collectIds(files, brainDir);
  const errors = validate(files, ids, brainDir, root);
  return { passed: errors.length === 0, errors };
}

// --- Standalone CLI ---
if (isMain(import.meta.url)) {
  const { passed, errors } = run();
  if (!passed) {
    console.error(`\n❌ Frontmatter validation failed (${errors.length} errors):\n`);
    for (const e of errors) console.error(`  • ${e}`);
    console.error('');
    process.exit(1);
  }
  console.log('✅ Frontmatter validation passed — all files valid.');
}
