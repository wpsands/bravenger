---
title: Persona Registry
version: "1.0.0"
last_updated: "2026-03-18"
owner: "Page Sands"
status: production
persona_count: 4
---

# Persona Registry

## Overview

Bravenger has four primary personas. Each represents a real buyer or evaluator we encounter in the Series A/B B2B SaaS companies we sell to. These personas are used by every discipline — Marketing, Sales, PMM, Product, and CS — to tailor content, prioritize features, and structure conversations.

---

## Persona Index

| ID | Name | Role | DMU Function | File |
|----|------|------|-------------|------|
| P-001 | The Technical Founder | CEO/CTO | Economic Buyer | `persona-founder.md` |
| P-002 | The Head of Marketing | First Marketing Leader | Champion / Buyer | `persona-head-marketing.md` |
| P-003 | The First PMM | First Product Marketer | Champion / Brain Owner | `persona-first-pmm.md` |
| P-004 | The VP/Head of Product | Product Leader | Technical Evaluator | `persona-vp-product.md` |

---

## Selection Guide

Use this to pick the right persona for your content or conversation.

| Scenario | Primary Persona | Secondary |
|----------|----------------|-----------|
| Cold outbound to founder | P-001 Technical Founder | — |
| Inbound from marketing hire | P-002 Head of Marketing | P-001 for budget |
| PMM just started, needs foundation | P-003 First PMM | P-002 for alignment |
| Product team evaluating architecture | P-004 VP Product | P-001 for technical depth |
| Website hero messaging | P-001 Technical Founder | P-002 Head of Marketing |
| Case study / proof point | P-002 Head of Marketing | P-003 First PMM |
| Sales discovery call prep | P-001 Technical Founder | P-002 Head of Marketing |
| CS onboarding | P-003 First PMM | P-002 Head of Marketing |
| Product roadmap prioritization | P-004 VP Product | P-001 Technical Founder |

---

## Relationship Map

```
                    ┌──────────────────────┐
                    │  P-001               │
                    │  Technical Founder   │
                    │  (Economic Buyer)    │
                    └──────┬───────────────┘
                           │
              ┌────────────┼────────────┐
              │            │            │
              ▼            ▼            ▼
   ┌──────────────┐ ┌───────────┐ ┌──────────────┐
   │ P-002        │ │ P-003     │ │ P-004        │
   │ Head of Mktg │ │ First PMM │ │ VP Product   │
   │ (Champion)   │ │ (Owner)   │ │ (Evaluator)  │
   └──────────────┘ └───────────┘ └──────────────┘
         │                │              │
         └────────┬───────┘              │
                  │                      │
            Day-to-day Brain        Architecture
            usage & content          & data model
            production               evaluation
```

### Key Relationships

- **Founder → Head of Marketing:** The founder hired this person to take GTM off their plate. They trust them to evaluate and champion tools. Budget flows through the founder.
- **Founder → VP Product:** Technical peers. The founder cares about data model quality and agent architecture. The VP Product evaluates whether the Brain is technically sound.
- **Head of Marketing → First PMM:** The Head of Marketing may have hired the PMM, or the PMM reports to them. The PMM becomes the Brain owner post-delivery.
- **First PMM → All disciplines:** The PMM is the primary consumer and maintainer of the Brain. They produce messaging, update positioning, and ensure agents stay aligned.

---

## Persona Lifecycle Rules

1. **Every persona must have a file.** No personas exist only in conversation or memory.
2. **Each file follows a standard structure.** Demographics, goals/KPIs, pains, decision process, content preferences, messaging guidance, product/UI/UX hooks.
3. **Personas are grounded in reality.** Every attribute should be traceable to actual customer conversations, not invented archetypes.
4. **Update when the market teaches you something new.** If a discovery call reveals a pain we haven't documented, add it to the persona file and the changelog.
5. **Use cases reference personas.** Every use case in `use-cases/` must specify which personas set it up, use it, and evaluate it.
