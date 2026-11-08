import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { renderPrompt, check, sync } from '../scripts/sync-prompts.js';

const AGENT = `---
name: demo
description: Demo agent.
tools: Read
---

You are the demo agent.

- Rule one
`;

test('renderPrompt strips frontmatter and adds a generated banner', () => {
  const out = renderPrompt(AGENT, 'demo');
  assert.match(out, /^<!-- Generated from \.claude\/agents\/demo\.md/);
  assert.doesNotMatch(out, /^---/m);
  assert.doesNotMatch(out, /name: demo/);
  assert.match(out, /You are the demo agent\.\n\n- Rule one\n$/);
});

test('check fails when a prompt is missing or stale, passes after sync', () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sync-prompts-'));
  const agentsDir = path.join(tmp, 'agents');
  const promptsDir = path.join(tmp, 'prompts');
  fs.mkdirSync(agentsDir);
  fs.writeFileSync(path.join(agentsDir, 'demo.md'), AGENT);

  const missing = check(agentsDir, promptsDir, tmp);
  assert.equal(missing.passed, false);
  assert.match(missing.errors[0], /prompts\/demo\.md is out of date/);

  sync(agentsDir, promptsDir);
  assert.deepEqual(check(agentsDir, promptsDir, tmp), { passed: true, errors: [] });

  fs.appendFileSync(path.join(agentsDir, 'demo.md'), '- Rule two\n');
  assert.equal(check(agentsDir, promptsDir, tmp).passed, false);

  fs.rmSync(tmp, { recursive: true, force: true });
});

test('shipped prompts/ is in sync with .claude/agents/', () => {
  assert.deepEqual(check(), { passed: true, errors: [] });
});
