# Bravenger — Company Brain Template

[![CI](https://github.com/wpsands/bravenger/actions/workflows/ci.yml/badge.svg)](https://github.com/wpsands/bravenger/actions/workflows/ci.yml)

A Company Brain is a structured knowledge base that powers AI agents across Marketing, Sales, Product Marketing, Product, and Customer Success. Every agent reads from the same source of truth. Every output is cited, consistent, and aligned.

This repo is a working template. Fork it, run `/setup` in Claude Code, and your AI agents have context from day one.

## What's inside

```
company-brain/          ← Primary example (NovaCRM, a fictional AI-powered CRM)
├── README.md           Brain overview and file map
├── AGENTS.md           Governance rules and 11-step read order
├── brand-vision.md     Mission, voice, values, words we use/avoid
├── icp.md              Ideal customer profile
├── goals.md            Company and quarterly goals
├── drift-log.md        Recurring drift violations (feedback signal)
├── personas/           3 personas (VP Sales, Sales Ops, CTO)
├── use-cases/          3 use cases (forecasting, coaching, migration)
├── messaging-positioning/
│   ├── core-positioning.md     Category, differentiators, narratives
│   └── messaging-framework.md  Value props, objections, funnel messaging
└── guidelines/         5 discipline-specific agent instructions

.claude/agents/         ← 6 subagents: marketing, sales, pmm, product, cs, drift-check
.claude/skills/         ← 17 skills: content, governance, Brain evolution, setup
.claude/workflows/      ← 4 multi-agent workflows: cascade-check, citation-audit, brain-audit, eval
.claude/settings.json   ← PostToolUse hook: every Brain edit is linted instantly
evals/                  ← Golden briefs + rubric: proof the Brain works
prompts/                ← Canonical prompts for non-Claude-Code tools (ChatGPT, API, etc.)
scripts/                ← Mechanical validation (lint, frontmatter, citations, language)
test/                   ← Test suite for the validators (Node built-in test runner)
```

## How it works

The Brain has three layers:

**Foundation** — Who you sell to and what they're trying to do.
ICP, personas, use cases, and goals. This is the ground truth that feeds everything else.

**Positioning & Messaging** — How you talk about it.
Category definition, differentiators, value propositions, objection handlers, and funnel-stage messaging. All grounded in the foundation layer.

**Governance** — Rules for AI agents, enforced by machinery.
An 11-step read order, citation requirements, and forbidden language (`company-brain/AGENTS.md`) — enforced three ways: a PostToolUse hook lints every Brain edit the moment it happens, CI lints every push, and agentic audits catch what linters can't (see below).

## The agent layer (Claude Code)

**Discipline subagents.** `/marketing`, `/sales`, `/pmm`, `/product`, `/cs` each launch an isolated subagent that does the full 9-file Brain read in its own context and returns cited output. Your main conversation stays clean, and independent deliverables run in parallel. Content agents are read-only — they cannot edit the Brain.

**Drift checking.** `/drift-check` reviews any content against the Brain with a skeptical, isolated reviewer. Systemic violations are logged to `company-brain/drift-log.md`; when the same violation recurs, that's treated as evidence the Brain may be stale, not the content.

**Brain evolution with cascades.** The `/update-*` skills edit Brain files, then run the `cascade-check` workflow: one agent per Brain file hunts stale references to the old content, and every finding is adversarially verified before you're asked to approve fixes.

**Semantic audits.** `/brain-audit` runs what no linter can: a citation-faithfulness sweep (does the cited section still *say* what the citing text claims?), contradiction finders across four dimensions, and a staleness scan — synthesized into one prioritized report. Schedule it weekly with `/schedule`.

**The feedback loop.** `/propose-update` ingests field evidence — won/lost deal notes, support tickets, recurring drift-log entries — and proposes cited Brain amendments for human approval. Reality flows back into the Brain instead of drifting away from it.

**Evals.** `/eval` generates output for golden briefs (`evals/golden/`) using the real discipline subagents, then scores each output with a three-judge panel against `evals/rubric.md`. This is the answer to "does the Brain actually work" — run it after `/setup` and after major messaging changes.

## Quick start

Requires [Node.js](https://nodejs.org) 20 or later.

1. **Fork this repo**
2. **Open it in Claude Code and run `/setup`** — a staged interview replaces NovaCRM with your company, preserving every schema, and finishes by running your evals. (Manual alternative: replace `company-brain/` by hand, keep the file structure and frontmatter schemas.)
3. **Install and validate:**
   ```bash
   npm install
   npm run lint
   ```
4. **Use the agents:**
   ```
   /marketing write a blog post targeting the VP Sales persona about UC-001
   /sales prep me for a discovery call with a CTO who thinks AI scoring is a black box
   /drift-check [paste content]
   ```

Using something other than Claude Code? The `prompts/` directory has the canonical per-discipline prompts — see `prompts/README.md`.

## Validation

Three layers, mechanical to semantic:

| Layer | What | When |
|-------|------|------|
| `npm run lint` | Frontmatter schemas, citation links, forbidden language | Edit-time (hook), CI, on demand |
| `/drift-check` | Content vs Brain: voice, persona, positioning violations | Before publishing anything |
| `/brain-audit` | Brain vs itself: citation faithfulness, contradictions, staleness | Weekly, or after edit bursts |
| `/eval` | Output quality: golden briefs scored by judge panel | After setup and messaging changes |

The validators themselves are covered by a test suite built on Node's built-in test runner — no test framework dependency:

```bash
npm test          # run the test suite
npm run check     # lint + test, same as CI
```

CI runs lint and tests on Node 20 and 22 for every pull request and every push to `main`.

## File schema

Every Brain file uses YAML frontmatter:

```yaml
---
title: "File title"
version: "1.0.0"
last_updated: "2026-07-25"
owner: "Brain Owner"
status: production
---
```

Personas add `persona_id` and `dmu_function`. Use cases add `use_case_id`, `status`, `personas`, and `connected_use_cases`. See `scripts/schemas/` for the full JSON schemas.

## Example included

**NovaCRM** (`company-brain/`) — A fictional AI-powered CRM for mid-market sales teams. Series A, 45 employees. 3 personas, 3 use cases, full messaging framework, all 5 discipline guidelines. Replace with your own company data via `/setup`.

## License

MIT
