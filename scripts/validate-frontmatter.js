#!/usr/bin/env node
/**
 * Validates YAML frontmatter in all Brain markdown files against JSON schemas.
 * - Base schema: every file needs title, version, last_updated, owner, status
 * - Use case schema: use-cases/*.md (not index.md)
 * - Persona schema: personas/persona-*.md
 */

const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");
const { getAllMdFiles, rel } = require("./utils");

const BRAIN_DIR = path.resolve(__dirname, "..", "company-brain");

const baseSchema = JSON.parse(
  fs.readFileSync(path.join(__dirname, "schemas", "base.schema.json"), "utf8")
);
const useCaseSchema = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "schemas", "use-case.schema.json"),
    "utf8"
  )
);
const personaSchema = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "schemas", "persona.schema.json"),
    "utf8"
  )
);

// Collect all known persona IDs and use case IDs for cross-reference validation
const knownPersonaIds = new Set();
const knownUseCaseIds = new Set();
const knownPainIds = new Set();

function extractFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  try {
    return yaml.load(match[1]);
  } catch {
    return undefined; // parse error
  }
}

function validateRequired(frontmatter, schema, filePath) {
  const errors = [];
  for (const field of schema.required || []) {
    if (!(field in frontmatter)) {
      errors.push(`${rel(filePath)}: missing required field "${field}"`);
    }
  }
  return errors;
}

function validateEnum(value, allowed, field, filePath) {
  if (value && allowed && !allowed.includes(value)) {
    return [
      `${rel(filePath)}: "${field}" is "${value}" — expected one of: ${allowed.join(", ")}`,
    ];
  }
  return [];
}

function validatePattern(value, pattern, field, filePath) {
  if (value && pattern && !new RegExp(pattern).test(value)) {
    return [`${rel(filePath)}: "${field}" value "${value}" doesn't match pattern ${pattern}`];
  }
  return [];
}

function getFileType(filePath) {
  const relPath = path
    .relative(BRAIN_DIR, filePath)
    .replace(/\\/g, "/");

  if (
    relPath.startsWith("use-cases/uc-") &&
    relPath.endsWith(".md")
  ) {
    return "use-case";
  }
  if (
    relPath.startsWith("personas/persona-") &&
    relPath.endsWith(".md")
  ) {
    return "persona";
  }
  // Example files have their own schema — require title and type, not base fields
  if (relPath.includes("examples/") && !relPath.endsWith("README.md")) {
    return "example";
  }
  return "base";
}

// Skip files that are generated or don't need frontmatter
const SKIP_FILES = new Set(["examples/README.md", "updates/v2-spec.md"]);

function shouldSkip(filePath) {
  const relPath = path.relative(BRAIN_DIR, filePath).replace(/\\/g, "/");
  return SKIP_FILES.has(relPath);
}

// --- First pass: collect known IDs ---
function collectIds(files) {
  for (const file of files) {
    const content = fs.readFileSync(file, "utf8");
    const fm = extractFrontmatter(content);
    if (!fm || fm === undefined) continue;

    if (fm.persona_id) knownPersonaIds.add(fm.persona_id);
    if (fm.use_case_id) knownUseCaseIds.add(fm.use_case_id);
  }

  // Extract pain IDs from icp.md
  const icpPath = path.join(BRAIN_DIR, "icp.md");
  if (fs.existsSync(icpPath)) {
    const icpContent = fs.readFileSync(icpPath, "utf8");
    const painMatches = icpContent.matchAll(/###\s+(P\d+):/g);
    for (const m of painMatches) {
      knownPainIds.add(m[1]);
    }
  }
}

// --- Second pass: validate ---
function validate(files) {
  const errors = [];

  for (const file of files) {
    if (shouldSkip(file)) continue;

    const content = fs.readFileSync(file, "utf8");
    const fm = extractFrontmatter(content);

    if (fm === null) {
      // Some files may legitimately have no frontmatter (like changelogs nested content)
      // Only warn for files that should have it
      const relPath = path.relative(BRAIN_DIR, file).replace(/\\/g, "/");
      if (!relPath.startsWith("updates/") && !relPath.startsWith("messaging-positioning/examples/")) {
        errors.push(`${rel(file)}: no YAML frontmatter found`);
      }
      continue;
    }

    if (fm === undefined) {
      errors.push(`${rel(file)}: YAML frontmatter parse error`);
      continue;
    }

    const fileType = getFileType(file);

    // Example files have a different schema — just need title and type
    if (fileType === "example") {
      if (!fm.title) errors.push(`${rel(filePath)}: missing required field "title"`);
      if (!fm.type) errors.push(`${rel(filePath)}: missing required field "type"`);
      continue;
    }

    // Base validation for all files
    errors.push(...validateRequired(fm, baseSchema, file));

    if (fileType === "use-case") {
      // Use case schema includes its own required fields beyond base
      const ucOnlyRequired = (useCaseSchema.required || []).filter(
        (f) => !(baseSchema.required || []).includes(f)
      );
      const ucPartialSchema = { required: ucOnlyRequired };
      errors.push(...validateRequired(fm, ucPartialSchema, file));
      errors.push(
        ...validateEnum(
          fm.status,
          useCaseSchema.properties.status.enum,
          "status",
          file
        )
      );
      errors.push(
        ...validatePattern(
          fm.use_case_id,
          useCaseSchema.properties.use_case_id.pattern,
          "use_case_id",
          file
        )
      );

      // Validate persona references
      if (fm.personas) {
        const { setup_by, used_by, evaluated_by } = fm.personas;
        if (setup_by && !knownPersonaIds.has(setup_by)) {
          errors.push(
            `${rel(file)}: personas.setup_by references "${setup_by}" which doesn't exist`
          );
        }
        if (evaluated_by && !knownPersonaIds.has(evaluated_by)) {
          errors.push(
            `${rel(file)}: personas.evaluated_by references "${evaluated_by}" which doesn't exist`
          );
        }
        if (Array.isArray(used_by)) {
          for (const id of used_by) {
            if (!knownPersonaIds.has(id)) {
              errors.push(
                `${rel(file)}: personas.used_by references "${id}" which doesn't exist`
              );
            }
          }
        }
      }

      // Validate connected use case references
      if (Array.isArray(fm.connected_use_cases)) {
        for (const id of fm.connected_use_cases) {
          if (!knownUseCaseIds.has(id)) {
            errors.push(
              `${rel(file)}: connected_use_cases references "${id}" which doesn't exist`
            );
          }
        }
      }

      // Validate icp_pain references
      if (fm.icp_pain) {
        const painRefs = fm.icp_pain
          .split(",")
          .map((s) => s.trim());
        for (const ref of painRefs) {
          if (!knownPainIds.has(ref)) {
            errors.push(
              `${rel(file)}: icp_pain references "${ref}" — not found in icp.md`
            );
          }
        }
      }
    }

    if (fileType === "persona") {
      const pOnlyRequired = (personaSchema.required || []).filter(
        (f) => !(baseSchema.required || []).includes(f)
      );
      errors.push(...validateRequired(fm, { required: pOnlyRequired }, file));
      errors.push(
        ...validatePattern(
          fm.persona_id,
          personaSchema.properties.persona_id.pattern,
          "persona_id",
          file
        )
      );
    }
  }

  return errors;
}

// --- Exported run function ---
function run() {
  knownPersonaIds.clear();
  knownUseCaseIds.clear();
  knownPainIds.clear();
  const files = getAllMdFiles(BRAIN_DIR);
  collectIds(files);
  const errors = validate(files);
  return { passed: errors.length === 0, errors };
}

module.exports = { run };

// --- Standalone CLI ---
if (require.main === module) {
  const { passed, errors } = run();
  if (!passed) {
    console.error(`\n❌ Frontmatter validation failed (${errors.length} errors):\n`);
    for (const e of errors) {
      console.error(`  • ${e}`);
    }
    console.error("");
    process.exit(1);
  } else {
    console.log("✅ Frontmatter validation passed — all files valid.");
  }
}
