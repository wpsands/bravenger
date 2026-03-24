---
title: Persona Registry
version: "1.0.0"
last_updated: "2026-03-22"
owner: "Contoso GTM Team"
status: production
persona_count: 4
---

# Persona Registry

## Overview

Contoso Pipelines has four primary personas. Each represents a real buyer, evaluator, or user we encounter in mid-market engineering organizations (200-2000 employees). These personas are used by every discipline — Marketing, Sales, PMM, Product, and CS — to tailor content, prioritize features, and structure conversations.

Our buyers are technical. They evaluate tools by reading docs, testing APIs, and reviewing architecture before they ever talk to sales. Messaging that works for them is specific, honest, and grounded in engineering reality.

---

## Persona Index

| ID | Name | Role | DMU Function | File |
|----|------|------|-------------|------|
| P-001 | The Data Engineering Lead | IC-to-Lead, Data Engineering | Primary Buyer / Champion | `persona-data-eng-lead.md` |
| P-002 | The VP of Engineering | VP/SVP Engineering | Economic Buyer / Executive Sponsor | `persona-vp-engineering.md` |
| P-003 | The Platform Engineer | Staff/Senior Platform Engineer | Technical Evaluator / Influencer | `persona-platform-engineer.md` |
| P-004 | The Head of Data | Head/Director of Data | Strategic Buyer / Champion | `persona-head-data.md` |

---

## Selection Guide

Use this to pick the right persona for your content or conversation.

| Scenario | Primary Persona | Secondary |
|----------|----------------|-----------|
| Cold outbound to engineering team | P-001 Data Eng Lead | P-002 for budget |
| Inbound from "pipelines" search | P-001 Data Eng Lead | P-003 for architecture eval |
| Executive sponsor introduction | P-002 VP Engineering | P-004 for data strategy alignment |
| Platform team evaluating tooling | P-003 Platform Engineer | P-001 for pipeline-specific needs |
| Data strategy / governance conversation | P-004 Head of Data | P-002 for budget approval |
| Website hero messaging | P-001 Data Eng Lead | P-003 Platform Engineer |
| Case study / proof point | P-001 Data Eng Lead | P-004 Head of Data |
| Sales discovery call prep | P-001 Data Eng Lead | P-002 VP Engineering |
| CS onboarding | P-001 Data Eng Lead | P-003 Platform Engineer |
| Product roadmap prioritization | P-003 Platform Engineer | P-001 Data Eng Lead |
| ROI / business case content | P-002 VP Engineering | P-004 Head of Data |
| Technical deep-dive / demo | P-003 Platform Engineer | P-001 Data Eng Lead |
| Pricing page optimization | P-002 VP Engineering | P-004 Head of Data |

---

## Relationship Map

```
                    ┌──────────────────────────┐
                    │  P-002                   │
                    │  VP of Engineering       │
                    │  (Economic Buyer)        │
                    └──────┬───────────────────┘
                           │
              ┌────────────┼────────────────┐
              │            │                │
              ▼            ▼                ▼
   ┌──────────────┐ ┌─────────────┐ ┌──────────────────┐
   │ P-001        │ │ P-003       │ │ P-004            │
   │ Data Eng     │ │ Platform    │ │ Head of Data     │
   │ Lead         │ │ Engineer    │ │ (Strategic Buyer) │
   │ (Champion)   │ │ (Evaluator) │ │                  │
   └──────┬───────┘ └──────┬──────┘ └────────┬─────────┘
          │                │                  │
          └────────┬───────┘                  │
                   │                          │
             Day-to-day pipeline        Data quality,
             building, config,          governance, and
             and observability          warehouse strategy
```

### Key Relationships

- **VP Engineering → Data Eng Lead:** The VP hired or promoted this person to own pipeline reliability. The Data Eng Lead surfaces tooling needs; the VP controls budget. The Data Eng Lead is the most common entry point for Contoso deals.
- **VP Engineering → Head of Data:** Peers or direct report relationship. The Head of Data owns the data strategy that the VP Engineering must resource. They co-own the business case for pipeline tooling.
- **Data Eng Lead → Platform Engineer:** Close collaborators. The Platform Engineer builds the internal developer platform that data engineers consume. They evaluate Contoso's API quality, config model, and GitOps compatibility together.
- **Head of Data → Data Eng Lead:** The Head of Data sets priorities (which pipelines matter, what SLAs look like, which sources to onboard). The Data Eng Lead executes. Contoso must satisfy both the strategic and operational perspective.
- **Platform Engineer → All technical users:** The Platform Engineer is the gatekeeper for self-service tooling. If Contoso doesn't pass their architecture review, it doesn't get adopted regardless of what leadership wants.

---

## Persona Lifecycle Rules

1. **Every persona must have a file.** No personas exist only in conversation or memory.
2. **Each file follows a standard structure.** Frontmatter, overview, demographics, goals/KPIs, pains, current tools, buying triggers, objections, messaging dos/don'ts, product hooks, day-in-the-life scenario.
3. **Personas are grounded in reality.** Every attribute should be traceable to actual customer conversations, not invented archetypes.
4. **Update when the market teaches you something new.** If a discovery call reveals a pain we haven't documented, add it to the persona file and the changelog.
5. **Use cases reference personas.** Every use case in `use-cases/` must specify which personas set it up, use it, and evaluate it.
