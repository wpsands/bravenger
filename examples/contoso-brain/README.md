---
title: Contoso Company Brain
version: "1.0.0"
last_updated: "2026-03-22"
owner: "Jamie Torres"
status: production
purpose: "Single source of truth for all Contoso content, messaging, and agent behavior"
---

# Contoso Company Brain

**Contoso Pipelines gives engineering teams config-driven data integration so they can connect, transform, and deliver data across their entire stack without writing custom integrations.**

Pipelines as code. 200+ connectors. Observability built in.

---

## What This Is

This repository is the Contoso Company Brain — the single source of truth that every team and every agent reads before producing any output. It contains our ICP, personas, use cases, positioning, messaging, governance rules, and discipline-specific guidelines.

Every piece of content Contoso produces — marketing pages, sales emails, product briefs, CS playbooks — is generated from this Brain. Agents read these files, cite them, and produce aligned output. If something in this Brain is wrong, our content will be wrong. That is the point. One source of truth means one place to fix, and every downstream output corrects itself.

---

## File Map

### Foundation
| File | Purpose |
|------|---------|
| `icp.md` | Ideal Customer Profile — firmographics, pains, signals, anti-ICP |
| `goals.md` | Company goals, GTM discipline targets, current quarter priorities |
| `brand-vision.md` | Mission, vision, values, voice, tone, category definition |
| `personas/index.md` | Persona registry, selection guide, relationship map |
| `personas/persona-data-eng-lead.md` | The Data Engineering Lead |
| `personas/persona-head-data.md` | The Head of Data |
| `personas/persona-vp-engineering.md` | The VP of Engineering |
| `personas/persona-platform-eng.md` | The Platform Engineer |

### Use Cases
| File | Purpose |
|------|---------|
| `use-cases/index.md` | Use case registry, schema template, lifecycle rules |
| `use-cases/uc-001-consolidate-pipelines.md` | Replace fragile custom scripts with config-driven pipelines |
| `use-cases/uc-002-self-serve-connectors.md` | Let analysts add new data sources without engineering tickets |
| `use-cases/uc-003-pipeline-observability.md` | Monitor, alert, and debug data pipeline failures in one place |
| `use-cases/uc-004-compliance-lineage.md` | Track data lineage for SOC 2, GDPR, and audit readiness |

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
| `metrics.md` | How to measure pipeline adoption, health, and impact |
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

Use cases are foundational. They feed every discipline — not just CS. A use case like "Consolidate Pipelines" shapes marketing content, sales discovery, product roadmap, PMM launches, and CS onboarding simultaneously.

---

## Company Overview

Contoso builds a unified data pipeline platform that lets engineering teams connect, transform, and deliver data across their entire stack without writing custom integrations. The product, Contoso Pipelines, is config-driven: teams define pipelines in YAML, choose from 200+ pre-built connectors, and get observability — schema tracking, freshness monitoring, alerting — built in from day one.

- **Founded:** 2022, Austin, TX
- **Stage:** Series B ($42M raised)
- **Team:** ~85 employees
- **ARR:** ~$8M
- **CEO:** Jamie Torres

We compete in the data integration space alongside Fivetran, Airbyte, and Stitch, but we are positioned differently. We are not an ELT tool for analysts. We are a pipelines-as-code platform for engineering teams who want to own their data infrastructure in version-controlled config, not in a GUI they cannot audit.

---

## Operating Principle

Every file in this repo reflects how Contoso actually operates. The ICP describes our actual customers. The personas reflect real buyers we engage with. The use cases document real workflows our product supports. The messaging sells a real product.

If something in this Brain is wrong, our content will be wrong. One source of truth means one place to fix.

This is not a template. This is a working system.
