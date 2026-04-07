# Bravenger — Company Brain Template

A Company Brain is a structured knowledge base that powers AI agents across Marketing, Sales, Product Marketing, Product, and Customer Success. Every agent reads from the same source of truth. Every output is cited, consistent, and aligned.

This repo is a working template. Fork it, replace the example company with yours, and your AI agents have context from day one.

## What's inside

```
company-brain/          ← Primary example (NovaCRM, a fictional AI-powered CRM)
├── README.md           Brain overview and file map
├── AGENTS.md           Governance rules and 11-step read order
├── brand-vision.md     Mission, voice, values, words we use/avoid
├── icp.md              Ideal customer profile
├── goals.md            Company and quarterly goals
├── personas/           3 personas (VP Sales, Sales Ops, CTO)
├── use-cases/          3 use cases (forecasting, coaching, migration)
├── messaging-positioning/
│   ├── core-positioning.md     Category, differentiators, narratives
│   └── messaging-framework.md  Value props, objections, funnel messaging
└── guidelines/         5 discipline-specific agent instructions

prompts/                ← Canonical agent system prompts (one per discipline)
.claude/commands/       ← Thin wrappers that load prompts/ + pass $ARGUMENTS
scripts/                ← Brain validation tools (lint, frontmatter, citations, language)
```

## How it works

The Brain has three layers:

**Foundation** — Who you sell to and what they're trying to do.
ICP, personas, use cases, and goals. This is the ground truth that feeds everything else.

**Positioning & Messaging** — How you talk about it.
Category definition, differentiators, value propositions, objection handlers, and funnel-stage messaging. All grounded in the foundation layer.

**Governance** — Rules for AI agents.
An 11-step read order, citation requirements, discipline-specific guidelines, and forbidden language. This ensures every agent produces aligned output.

## Quick start

1. **Fork this repo**
2. **Replace `company-brain/`** with your own company data. Keep the file structure and YAML frontmatter schema.
3. **Run the linter** to validate your Brain:
   ```bash
   npm install
   npm run lint
   ```
4. **Use the agents** in Claude Code:
   ```
   marketing agent — write a blog post targeting [persona] about [use case]
   sales agent — prep me for a discovery call with [prospect type]
   pmm agent — write a competitive response to [competitor]
   ```

See `prompts/README.md` for the full list of agent commands and examples.

## Validation

The Brain ships with four validation scripts:

| Script | What it checks |
|--------|---------------|
| `npm run lint` | Runs all checks |
| `npm run lint:frontmatter` | YAML frontmatter matches required schemas |
| `npm run lint:citations` | `[Source: filename#section]` citations point to real files and headings |
| `npm run lint:language` | No forbidden words from `brand-vision.md` appear in Brain files |

## File schema

Every Brain file uses YAML frontmatter:

```yaml
---
title: "File title"
version: "1.0.0"
last_updated: "2026-03-24"
owner: "Brain Owner"
status: production
---
```

Personas add `persona_id` and `dmu_function`. Use cases add `use_case_id`, `status`, `personas`, and `connected_use_cases`. See `scripts/schemas/` for the full JSON schemas.

## Example included

**NovaCRM** (`company-brain/`) — A fictional AI-powered CRM for mid-market sales teams. Series A, 45 employees. 3 personas, 3 use cases, full messaging framework, all 5 discipline guidelines. Replace with your own company data.

## License

MIT
