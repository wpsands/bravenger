---
title: Persona Registry
version: "1.1.0"
last_updated: "2026-04-02"
owner: "Brain Owner"
status: production
persona_count: 4
---

# Persona Registry

## Overview

Natter has four primary personas. Each represents a real buyer, champion, or use case sponsor we encounter in the Fortune 500 and Global Enterprise organizations we sell to. These personas map to the Decision-Making Unit (DMU) for a conversational insights platform purchase: the economic buyer who owns workforce strategy, the champion who evaluates listening tools and builds the business case, and use case sponsors who drive adoption within their domain.

These personas are used by every discipline — Marketing, Sales, Product Marketing, Product, and CS — to tailor content, prioritize features, and structure conversations.

---

## Persona Index

| ID | Name | Role | DMU Function | File |
|----|------|------|-------------|------|
| P-001 | The CHRO | CHRO / Chief People Officer | Economic Buyer | `persona-chro.md` |
| P-002 | The People Analytics Leader | VP/Head of People Analytics | Champion | `persona-people-analytics.md` |
| P-003 | The Transformation Leader | VP Strategy / Chief Transformation Officer | Use Case Sponsor | `persona-vp-strategy.md` |
| P-004 | The Revenue Leader | Head of Revenue / VP Sales | Use Case Sponsor | `persona-vp-revenue.md` |

---

## Selection Guide

Use this to pick the right persona for your content or conversation.

| Scenario | Primary Persona | Secondary |
|----------|----------------|-----------|
| Cold outbound to people leader | P-001 CHRO | — |
| Inbound from analytics team evaluating listening tools | P-002 People Analytics | P-001 for budget |
| Roundtable invitation for senior executives | P-001 CHRO | P-003 Transformation |
| Website hero messaging | P-001 CHRO | P-002 People Analytics |
| Case study / proof point | P-001 CHRO | P-002 People Analytics |
| Sales discovery call prep | P-001 CHRO | P-002 People Analytics |
| Session design conversation | P-002 People Analytics | P-001 CHRO |
| Transformation / change management pitch | P-003 Transformation | P-001 CHRO |
| Revenue / sales coaching pitch | P-004 Revenue | P-001 CHRO |
| Board-level workforce insight discussion | P-001 CHRO | P-003 Transformation |
| Data privacy / compliance review | P-002 People Analytics | P-001 CHRO |
| Thought leadership research report | P-001 CHRO | P-002 People Analytics |
| DEI initiative listening program | P-001 CHRO | P-002 People Analytics |
| Post-M&A culture integration | P-003 Transformation | P-001 CHRO |

---

## Relationship Map

```
                    +----------------------+
                    |  P-001               |
                    |  CHRO / CPO          |
                    |  (Economic Buyer)    |
                    +----------+-----------+
                               |
                  +------------+------------+
                  |                         |
                  v                         v
       +------------------+     +------------------+
       | P-002            |     | P-003            |
       | VP/Head People   |     | VP Strategy /    |
       | Analytics        |     | CTO (Transform)  |
       | (Champion)       |     | (Use Case Sponsor)|
       +------------------+     +------------------+
              |
              |
              v
       +------------------+
       | P-004            |
       | Head of Revenue  |
       | / VP Sales       |
       | (Use Case Sponsor)|
       +------------------+
```

### Key Relationships

- **CHRO -> People Analytics:** The CHRO relies on the People Analytics leader to evaluate listening tools, design the measurement strategy, and build the business case. Budget authority sits with the CHRO, but the recommendation and technical validation come from People Analytics.
- **CHRO -> VP Strategy:** The CHRO partners with the VP Strategy on transformation programs, M&A integration, and strategic alignment initiatives. When Natter is used for transformation listening, both are involved in the buying decision.
- **People Analytics -> CHRO:** People Analytics is the champion who evaluates the platform, runs the pilot session, and presents the insight report. If People Analytics says the data is robust and actionable, the CHRO moves to procurement.
- **People Analytics -> VP Strategy:** People Analytics provides the data infrastructure and analytical rigor. The VP Strategy provides the use case and executive sponsorship for transformation-related sessions.
- **Revenue Leader (P-004):** Typically a separate buying center within the same organization. The Revenue solution (sales coaching, customer voice) is sold independently or as an expansion after the People solution is established.

---

## Persona Lifecycle Rules

1. **Every persona must have a file.** No personas exist only in conversation or memory.
2. **Each file follows a standard structure.** Demographics, goals/KPIs, pains, decision process, content preferences, messaging guidance, product/UI/UX hooks.
3. **Personas are grounded in reality.** Every attribute should be traceable to actual customer conversations, research reports, or roundtable data — not invented archetypes.
4. **Update when the market teaches you something new.** If a roundtable or discovery conversation reveals a pain we haven't documented, add it to the persona file.
5. **Use cases reference personas.** Every use case in `use-cases/` must specify which personas set it up, use it, and evaluate it.
