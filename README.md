# Bravenger — Company Brain Template

A Company Brain is a structured knowledge base that powers AI agents across Marketing, Sales, Product Marketing, Product, and Customer Success. Every agent reads from the same source of truth. Every output is cited, consistent, and aligned.

This repo is populated with **Natter** (trynatter.com), a conversation intelligence platform for employee listening and workforce insights.

## What's inside

```
company-brain/          ← Natter Company Brain
├── README.md           Brain overview and file map
├── AGENTS.md           Governance rules and 11-step read order
├── brand-vision.md     Mission, voice, values, words we use/avoid
├── icp.md              Ideal customer profile
├── goals.md            Company and quarterly goals
├── personas/           4 personas (CHRO, People Analytics, VP Strategy, Revenue Leader)
├── use-cases/          5 use cases (employee listening, roundtables, GenAI change mgmt, DEI, product research)
├── messaging-positioning/
│   ├── core-positioning.md     Category, differentiators, narratives
│   └── messaging-framework.md  Value props, objections, funnel messaging, sales methodology
└── guidelines/         5 discipline-specific agent instructions

prompts/                ← Pre-configured agent system prompts (one per discipline)
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

1. **Clone or fork this repo**
2. **Run the linter** to validate the Brain:
   ```bash
   npm install
   npm run lint
   ```
3. **Use the agents** in Claude Code:
   ```
   /marketing — write a blog post targeting [persona] about [use case]
   /sales — prep me for a discovery call with [prospect type]
   /pmm — write a competitive response to [competitor]
   /cs — write an onboarding guide for [use case]
   /product — write a feature brief for [capability]
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
last_updated: "2026-04-02"
owner: "Brain Owner"
status: production
---
```

Personas add `persona_id` and `dmu_function`. Use cases add `use_case_id`, `status`, `personas`, and `connected_use_cases`. See `scripts/schemas/` for the full JSON schemas.

## Company: Natter

**Natter** (`company-brain/`) — A conversation intelligence engine that runs thousands of simultaneous peer-to-peer video conversations and uses AI to surface decision-ready insights. London & New York, remote-first. 4 personas, 5 use cases, full messaging framework, all 5 discipline guidelines. Trusted by 150+ enterprises including Legal & General, Accenture, SAP, Deloitte, PwC, Verizon, ServiceNow, and more.

## License

MIT
