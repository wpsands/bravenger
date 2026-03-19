---
title: Bravenger Company Brain
version: "1.0.0"
last_updated: "2026-03-18"
owner: "Page Sands"
status: production
purpose: "Single source of truth for all Bravenger content, messaging, and agent behavior"
---

# Bravenger Company Brain

**Bravenger turns your positioning doc into a system that produces aligned content for every team.**

One brain. Aligned teams. Zero drift.

---

## What This Is

This repository is the Bravenger Company Brain — the single source of truth that every team and every agent reads before producing any output. It contains our ICP, personas, use cases, positioning, messaging, governance rules, and discipline-specific guidelines.

This Brain serves two purposes simultaneously:

1. **Internal operating system.** Every piece of content Bravenger produces — marketing pages, sales emails, product briefs, CS playbooks — is generated from this Brain. Agents read these files, cite them, and produce aligned output.
2. **Product demo.** This is what we build for customers. When a Series A/B SaaS company buys Bravenger's productized service, they get a Brain built to this exact architecture. This repo is proof the system works.

We call this dogfooding. Bravenger runs on what we sell.

---

## File Map

### Foundation
| File | Purpose |
|------|---------|
| `icp.md` | Ideal Customer Profile — firmographics, pains, signals, anti-ICP |
| `brand-vision.md` | Mission, vision, values, voice, tone, category definition |
| `personas/index.md` | Persona registry, selection guide, relationship map |
| `personas/persona-founder.md` | The Technical Founder |
| `personas/persona-head-marketing.md` | The Head of Marketing |
| `personas/persona-first-pmm.md` | The First PMM |
| `personas/persona-vp-product.md` | The VP/Head of Product |

### Use Cases
| File | Purpose |
|------|---------|
| `use-cases/index.md` | Use case registry, schema template, lifecycle rules |
| `use-cases/uc-001-build-brain.md` | Build a Company Brain from a positioning doc |
| `use-cases/uc-002-generate-aligned-content.md` | Generate aligned content from the Brain |
| `use-cases/uc-003-detect-drift.md` | Detect and fix messaging drift |
| `use-cases/uc-004-measure-brain-impact.md` | Measure whether the Brain is used and working |

### Messaging & Positioning
| File | Purpose |
|------|---------|
| `messaging-positioning/core-positioning.md` | Category, positioning statement, differentiators, narratives |
| `messaging-positioning/messaging-framework.md` | Value props, objection handling, funnel-stage messaging |
| `messaging-positioning/examples/README.md` | Approved heroes, outbound templates, social, conference |

### Governance & Guidelines
| File | Purpose |
|------|---------|
| `AGENTS.md` | Agent read order, citation rules, output formats, guardrails |
| `guidelines/marketing-usage.md` | Marketing agent guide |
| `guidelines/sales-usage.md` | Sales agent guide |
| `guidelines/product-marketing-usage.md` | Product Marketing agent guide |
| `guidelines/product-usage.md` | Product agent guide |
| `guidelines/customer-success-usage.md` | Customer Success agent guide |

### Supporting
| File | Purpose |
|------|---------|
| `pricing.md` | Packages, pricing, add-ons, proposal language, discount policy (internal) |
| `metrics.md` | How to measure Brain adoption, health, and impact |
| `access.md` | How different roles access the Brain — three tiers, per-role setup, anti-patterns |
| `data-sources.md` | External data sources for ICP research |
| `updates/changelog.md` | Version history and change rationale |

---

## How to Use This Brain

### For Humans
1. Read `brand-vision.md` to understand voice and values.
2. Read `icp.md` to understand who we sell to.
3. Read the relevant persona file for your audience.
4. Check `use-cases/` for the scenario you are addressing.
5. Produce content. Cite your sources.

### For Agents
1. Follow the mandatory read order in `AGENTS.md`.
2. Read the discipline-specific guideline for your task.
3. Cite every claim using `[Source: filename#section]` format.
4. Never invent facts not in the Brain.
5. When in doubt, say what you don't know.

### For Prospects
Browse this repo. This is the product. If the content is clear, consistent, and useful — that is the Brain working. If you want the same thing for your company, that is what we build.

---

## The Architecture

```
Foundation Layer
├── ICP (who we sell to)
├── Personas (who we talk to)
└── Use Cases (what they are trying to do)
    ↓ feeds everything ↓
Positioning & Messaging Layer
├── Core Positioning (category, differentiators, narratives)
└── Messaging Framework (value props, objections, approved language)
    ↓ governed by ↓
Governance Layer
├── AGENTS.md (rules for all agents)
└── Discipline Guidelines (marketing, sales, PMM, product, CS)
```

Use cases are foundational. They feed every discipline — not just CS. A use case like "Build a Company Brain" shapes marketing content, sales discovery, product roadmap, PMM launches, and CS onboarding simultaneously.

---

## Business Model

Bravenger is a productized service. We build Company Brains for Series A/B B2B SaaS companies. One week, fixed price. Same architecture every time. Every engagement produces a Brain like this one — tailored to the customer's positioning, personas, and use cases.

Revenue from the service funds the eventual software product.

---

## Dogfooding Statement

Every file in this repo was written using the Bravenger architecture. The ICP describes our actual customers. The personas reflect real people we talk to. The use cases document real workflows. The messaging sells a real service.

If something in this Brain is wrong, our content will be wrong. That is the point. One source of truth means one place to fix, and every downstream output corrects itself.

This is not a template. This is a working system.
