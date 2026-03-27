---
title: Persona Registry
version: "1.1.0"
last_updated: "2026-03-24"
owner: "Brain Owner"
status: production
persona_count: 3
---

# Persona Registry

## Overview

NovaCRM has three primary personas. Each represents a real buyer, champion, or evaluator we encounter in the 100-500 employee B2B companies we sell to. These personas map to the Decision-Making Unit (DMU) for a CRM purchase: the economic buyer who signs the check, the champion who evaluates and implements, and the technical evaluator who gates security and integration.

These personas are used by every discipline — Marketing, Sales, Product, and CS — to tailor content, prioritize features, and structure conversations.

---

## Persona Index

| ID | Name | Role | DMU Function | File |
|----|------|------|-------------|------|
| P-001 | The VP Sales | VP Sales / CRO | Economic Buyer | `persona-vp-sales.md` |
| P-002 | The Sales Ops Leader | Sales Ops / RevOps Manager | Champion | `persona-sales-ops.md` |
| P-003 | The CTO | CTO / VP Engineering | Technical Evaluator | `persona-cto.md` |

---

## Selection Guide

Use this to pick the right persona for your content or conversation.

| Scenario | Primary Persona | Secondary |
|----------|----------------|-----------|
| Cold outbound to sales leader | P-001 VP Sales | — |
| Inbound from RevOps evaluating CRMs | P-002 Sales Ops | P-001 for budget |
| Security questionnaire or API review | P-003 CTO | P-002 for use cases |
| Website hero messaging | P-001 VP Sales | P-002 Sales Ops |
| Case study / proof point | P-001 VP Sales | P-002 Sales Ops |
| Sales discovery call prep | P-001 VP Sales | P-003 CTO |
| Product demo prep | P-002 Sales Ops | P-003 CTO |
| Migration planning conversation | P-002 Sales Ops | P-003 CTO |
| Board-level forecast discussion | P-001 VP Sales | — |
| Integration / API documentation | P-003 CTO | P-002 Sales Ops |
| Rep coaching pitch | P-001 VP Sales | P-002 Sales Ops |

---

## Relationship Map

```
                    +----------------------+
                    |  P-001               |
                    |  VP Sales / CRO      |
                    |  (Economic Buyer)    |
                    +----------+-----------+
                               |
                  +------------+------------+
                  |                         |
                  v                         v
       +------------------+     +------------------+
       | P-002            |     | P-003            |
       | Sales Ops /      |     | CTO /            |
       | RevOps Manager   |     | VP Engineering   |
       | (Champion)       |     | (Tech Evaluator) |
       +------------------+     +------------------+
              |                         |
              |                         |
        Day-to-day CRM            Security, API,
        admin, reporting,         integration, and
        implementation            data architecture
        and adoption              review
```

### Key Relationships

- **VP Sales -> Sales Ops:** The VP Sales relies on Sales Ops to evaluate CRM tools, run the implementation, and maintain data quality. Budget authority sits with the VP Sales, but the recommendation comes from Sales Ops.
- **VP Sales -> CTO:** The VP Sales needs the CTO to approve any tool that touches customer data, integrates with the tech stack, or requires engineering resources for implementation.
- **Sales Ops -> CTO:** Sales Ops surfaces integration requirements and data mapping needs. The CTO evaluates whether the tool meets security, API, and architecture standards.
- **Sales Ops -> VP Sales:** Sales Ops is the champion who builds the internal business case. If Sales Ops says no, the deal is dead before it reaches the VP Sales.

---

## Persona Lifecycle Rules

1. **Every persona must have a file.** No personas exist only in conversation or memory.
2. **Each file follows a standard structure.** Demographics, goals/KPIs, pains, decision process, content preferences, messaging guidance, product/UI/UX hooks.
3. **Personas are grounded in reality.** Every attribute should be traceable to actual customer conversations, not invented archetypes.
4. **Update when the market teaches you something new.** If a discovery call reveals a pain we haven't documented, add it to the persona file.
5. **Use cases reference personas.** Every use case in `use-cases/` must specify which personas set it up, use it, and evaluate it.
