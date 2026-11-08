#!/usr/bin/env node
/**
 * Generates the tool-agnostic prompts in prompts/ from the Claude Code
 * subagents in .claude/agents/. The agent files are the single source of
 * truth; prompts/*.md are derived and must never be edited by hand.
 *
 * Usage:
 *   node scripts/sync-prompts.js          # rewrite prompts/ from agents
 *   node scripts/sync-prompts.js --check  # exit 1 if prompts/ is out of date
 */

import fs from 'node:fs';
import path from 'node:path';
import { ROOT, rel, isMain } from './utils.js';

export const AGENTS_DIR = path.join(ROOT, '.claude', 'agents');
export const PROMPTS_DIR = path.join(ROOT, 'prompts');

const FRONTMATTER = /^---\r?\n[\s\S]*?\r?\n---\r?\n/;

/** Strips the subagent frontmatter and prepends a do-not-edit banner. */
export function renderPrompt(agentContent, agentName) {
  const body = agentContent.replace(FRONTMATTER, '').replace(/^\s+/, '').replace(/\s+$/, '');
  return [
    `<!-- Generated from .claude/agents/${agentName}.md by scripts/sync-prompts.js. Do not edit; run npm run sync:prompts. -->`,
    '',
    body,
    '',
  ].join('\n');
}

/** Returns [{ agentName, promptPath, expected }] for every agent file. */
export function plan(agentsDir = AGENTS_DIR, promptsDir = PROMPTS_DIR) {
  return fs
    .readdirSync(agentsDir)
    .filter((f) => f.endsWith('.md'))
    .sort()
    .map((f) => {
      const agentName = f.replace(/\.md$/, '');
      const expected = renderPrompt(fs.readFileSync(path.join(agentsDir, f), 'utf8'), agentName);
      return { agentName, promptPath: path.join(promptsDir, f), expected };
    });
}

/** Returns { passed, errors } listing prompts that differ from their agent. */
export function check(agentsDir = AGENTS_DIR, promptsDir = PROMPTS_DIR, root = ROOT) {
  const errors = [];
  for (const { promptPath, expected } of plan(agentsDir, promptsDir)) {
    const actual = fs.existsSync(promptPath) ? fs.readFileSync(promptPath, 'utf8') : null;
    if (actual !== expected) {
      errors.push(`${rel(promptPath, root)} is out of date with its agent file. Run: npm run sync:prompts`);
    }
  }
  return { passed: errors.length === 0, errors };
}

/** Writes every prompt file. Returns the list of paths written. */
export function sync(agentsDir = AGENTS_DIR, promptsDir = PROMPTS_DIR) {
  fs.mkdirSync(promptsDir, { recursive: true });
  const written = [];
  for (const { promptPath, expected } of plan(agentsDir, promptsDir)) {
    fs.writeFileSync(promptPath, expected);
    written.push(promptPath);
  }
  return written;
}

if (isMain(import.meta.url)) {
  if (process.argv.includes('--check')) {
    const { passed, errors } = check();
    if (!passed) {
      for (const e of errors) console.error(`❌ ${e}`);
      process.exit(1);
    }
    console.log('✅ prompts/ is in sync with .claude/agents/');
  } else {
    for (const p of sync()) console.log(`wrote ${rel(p)}`);
  }
}
