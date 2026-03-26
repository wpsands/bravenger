---
title: NovaCRM Company Brain
version: "1.0.0"
last_updated: "2026-03-24"
owner: "Brain Owner"
status: production
purpose: "Single source of truth for all NovaCRM content, messaging, and agent behavior"
---

# NovaCRM Company Brain

**NovaCRM is an AI-powered CRM for mid-market B2B sales teams. Our deal scoring learns from individual rep behavior patterns — not just firmographic data — so every forecast is grounded in how your team actually sells.**

AI that learns how you sell. Not how everyone sells.

---

## What This Is

This repository is the NovaCRM Company Brain — the single source of truth that every team and every agent reads before producing any output. It contains our ICP, personas, use cases, positioning, messaging, governance rules, and discipline-specific guidelines.

Every piece of content NovaCRM produces — marketing pages, sales emails, product briefs, CS playbooks — is generated from this Brain. Agents read these files, cite them, and produce aligned output. If something in this Brain is wrong, our content will be wrong. That is the point. One source of truth means one place to fix, and every downstream output corrects itself.

---

## File Map

### Foundation Layer
| File | Purpose |
|------|---------|
| `brand-vision.md` | Mission, vision, values, voice, tone, category definition |
| `icp.md` | Ideal Customer Profile — firmographics, pains, signals, anti-ICP |
| `goals.md` | Company goals, GTM discipline targets, current quarter priorities |
| `personas/index.md` | Persona registry, selection guide, relationship map |
| `personas/persona-vp-sales.md` | The VP of Sales / CRO |
| `personas/persona-sales-ops.md` | The Sales Ops Manager |
| `personas/persona-cto.md` | The CTO / Technical Evaluator |

### Use Cases
| File | Purpose |
|------|---------|
| `use-cases/index.md` | Use case registry, schema template, lifecycle rules |
| `use-cases/uc-001-pipeline-forecasting.md` | Improve forecast accuracy with AI deal scoring trained on rep behavior |
| `use-cases/uc-002-rep-coaching.md` | Coach reps with AI insights trained on their own winning patterns |
| `use-cases/uc-003-crm-migration.md` | Migrate from HubSpot/Pipedrive/Salesforce to NovaCRM |

### Messaging & Positioning
| File | Purpose |
|------|---------|
| `messaging-positioning/core-positioning.md` | Category, positioning statement, differentiators, narratives |
| `messaging-positioning/messaging-framework.md` | Value props, objection handling, funnel-stage messaging |

### Governance & Guidelines
| File | Purpose |
|------|---------|
| `AGENTS.md` | Agent read order, citation rules, output formats, guardrails |
| `guidelines/marketing-usage.md` | Marketing agent guide |
| `guidelines/sales-usage.md` | Sales agent guide |
| `guidelines/product-marketing-usage.md` | Product Marketing agent guide |
| `guidelines/product-usage.md` | Product agent guide |
| `guidelines/customer-success-usage.md` | Customer Success agent guide |

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

---

## The Architecture

```
Foundation Layer
├── Brand Vision (who we are, how we sound)
├── ICP (who we sell to)
├── Goals (what we are trying to achieve right now)
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

The Foundation Layer is the source of truth. Everything in the Positioning & Messaging Layer is derived from Foundation files. The Governance Layer controls how agents read, cite, and produce output from the other two layers.

Use cases are foundational. They feed every discipline — not just CS. A use case like "Forecast Accuracy" shapes marketing content, sales discovery, product roadmap, PMM launches, and CS onboarding simultaneously.

---

## Company Overview

NovaCRM builds an AI-powered CRM for mid-market B2B sales teams. The core differentiator is an AI deal scoring engine that learns from individual rep behavior patterns — how each rep runs discovery, how they multi-thread deals, what their email cadence looks like on deals they win — rather than relying solely on firmographic data or generic scoring models. The result is forecasts and deal intelligence that reflect how your specific team sells, not industry averages.

- **Founded:** 2023, Austin, TX
- **Stage:** Series A ($12M raised from Gradient Ventures and FirstMark Capital)
- **Team:** ~45 employees
- **ARR:** ~$3M
- **Structure:** Remote-first
- **Founder:** Technical (ML background), built the scoring engine

We compete in the CRM space alongside Salesforce, HubSpot CRM, Pipedrive, and Close.com, but we are positioned differently. We are not an enterprise CRM with AI bolted on. We are not a free-tier CRM hoping you upgrade. We are the CRM built from the ground up around AI deal intelligence for sales teams that have outgrown HubSpot free/starter but are not ready for Salesforce enterprise — and who believe their own selling data should train their own AI.

---

## Operating Principle

Every file in this repo reflects how NovaCRM actually operates. The ICP describes our actual customers. The personas reflect real buyers we engage with. The use cases document real workflows our product supports. The messaging sells a real product.

If something in this Brain is wrong, our content will be wrong. One source of truth means one place to fix.

This is not a template. This is a working system.
