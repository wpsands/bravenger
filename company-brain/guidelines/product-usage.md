---
title: Product Agent Usage Guide
version: "1.0.0"
last_updated: "2026-03-24"
scope: "Product team agents and operators"
owner: "Brain Owner"
status: production
discipline: product
---

# Product Agent Usage Guide

This guide governs all agents producing product content for NovaCRM. Read AGENTS.md first — this file supplements, not replaces, the core governance rules.

---

## Role of Product in the Brain

Product uses the Brain to make grounded decisions about what to build, who to build for, and how to evaluate success. The Brain provides:
- **Personas** with product hooks — what each persona needs from the NovaCRM experience
- **Use cases** with status fields, gaps, and connected use cases — the product landscape
- **ICP pains** — the market problems the product must solve
- **Competitive landscape** — where competitors are weak and where they're catching up

Product does not own the Brain (PMM does), but Product is a critical contributor — especially to use case status fields, gap documentation, and technical feasibility assessments.

---

## Feature Briefs

When producing a feature brief, the agent must ground every decision in Brain data.

### Feature Brief Template

```markdown
## Feature: [Name]

### Problem
- **ICP pain:** [Reference icp.md#pains — which pain does this address?]
- **Persona pain:** [Reference specific persona file — which persona pain?]
- **Use case gap:** [Reference use-cases/ — which gap does this close?]

### Proposal
[What does the feature do? Keep it concise.]

### Persona Impact

#### P-001 VP Sales / CRO
- **Relevance:** [High/Medium/Low]
- **Expected reaction:** [Based on P-001 product hooks]
- **Why they care:** [Specific outcome this enables]

#### P-002 Sales Ops Manager
- **Relevance:** [High/Medium/Low]
- **Expected reaction:** [Based on P-002 product hooks]
- **Why they care:** [Specific workflow this improves]

#### P-003 CTO
- **Relevance:** [High/Medium/Low]
- **Expected reaction:** [Based on P-003 product hooks]
- **Why they care:** [Technical quality this demonstrates]

### Use Case Impact
- **Use case:** [UC-XXX]
- **Current status:** [from use case file]
- **New status after feature ships:** [projected]
- **Gaps closed:** [specific gaps from the use case file]
- **Gaps remaining:** [what's still missing]

### Acceptance Criteria
[Grounded in persona expectations and use case outcomes]

### Citations
[Source files used]
```

---

## Persona Reaction Assessment

When evaluating any product decision (feature, UX, pricing, integration, data model change), produce a persona reaction assessment.

### Per-Persona Assessment
For each relevant persona:
1. **Read the persona file.** Focus on goals, pains, and product hooks.
2. **Predict the reaction.** Will this persona view this positively, negatively, or neutrally?
3. **Ground the prediction.** Cite the specific persona attribute that drives the reaction.
4. **Identify risks.** What could go wrong for this persona?

### Example Format
```
**P-001 VP Sales / CRO**
Reaction: Positive
Reason: This feature directly improves forecast visibility, which is their
#1 reported pain. [Source: personas/persona-vp-sales.md#pains]
Risk: If the forecast UI requires manual configuration, adoption drops.
VP Sales wants outcomes, not setup work.

**P-003 CTO**
Reaction: Cautious
Reason: New data pipeline introduces a dependency they'll want to audit.
[Source: personas/persona-cto.md#decision-process]
Risk: If the architecture isn't documented, CTO blocks the rollout.
```

---

## Adoption Scoring

Use cases have status fields. Product should track adoption metrics that map to each use case.

### Adoption Criteria by Use Case

| Use Case | Adoption Indicator | Measurement |
|----------|--------------------|-------------|
| UC-001 Pipeline Forecasting | Forecast generated from behavior data | % of forecast sourced from AI scores vs. manual stage-based |
| UC-002 Rep Coaching | Coaching alerts acted upon | # of coaching alerts generated per week, % acknowledged by managers |
| UC-003 CRM Migration | Migration complete, old CRM deprecated | % of team active in NovaCRM, parallel run ended |

### Scoring Framework
- **Fully adopted:** Use case is core to the team's weekly workflow. Old process is deprecated.
- **Partially adopted:** Use case is used but the old process runs in parallel or adoption is uneven across reps.
- **Not adopted:** Use case was enabled but the team hasn't integrated it into their workflow.

---

## Roadmap Candidates from Brain Gaps

The Brain provides structured roadmap input through use case gaps.

### Process
1. Read every use case file's `## Gaps` section.
2. Compile a gap inventory — every documented gap across all use cases.
3. Prioritize gaps by: persona impact (which personas are affected?), pain severity (does the gap block a critical workflow?), competitive exposure (does a competitor address this gap?), and technical feasibility.
4. Translate high-priority gaps into feature candidates.
5. Write feature briefs using the template above.

### Gap Prioritization Matrix

| Gap | Persona Impact | Pain Severity | Competitive Exposure | Priority |
|-----|:---:|:---:|:---:|:---:|
| [Gap from UC-001] | P-001, P-002 | High | Salesforce has this | Critical |
| [Gap from UC-002] | P-001 | Medium | No competitor has this | Medium |
| [Gap from UC-003] | P-002, P-003 | High | HubSpot has partial | High |

---

## Design Evaluation Criteria

When evaluating design concepts (UX, workflows, dashboards), assess against persona expectations.

### Persona-Specific Design Principles

**For P-001 (VP Sales / CRO):**
- Dashboard-first. Forecast and coaching insights visible without drilling down.
- Outcomes prominent, mechanisms hidden. They want to see the score, not how it was calculated.
- Mobile-friendly. VP Sales reviews pipeline from their phone.

**For P-002 (Sales Ops Manager):**
- Configuration without code. Ops builds workflows, scoring rules, and reports without engineering.
- Bulk operations. Ops manages data at scale, not record-by-record.
- Audit trail. Ops needs to see what changed and when.

**For P-003 (CTO):**
- API-first. Every feature accessible via API.
- Model explainability. The AI model's inputs, weights, and outputs are inspectable.
- Security posture visible. SOC 2 compliance, data residency, encryption — documented and auditable.

### Evaluation Criteria

| Criteria | Source | Question |
|----------|--------|----------|
| **Persona fit** | Persona product hooks | Does this design match how the persona works? |
| **Use case support** | use-cases/ | Does this design enable the documented use cases? |
| **Competitive edge** | core-positioning.md | Does this design reinforce "AI-native" positioning? |
| **Adoption risk** | Persona pains | Will this create friction that blocks adoption? |
| **Technical credibility** | P-003 hooks | Would the CTO trust this architecture? |

---

## Rules for Product Agents

1. **Ground every feature in a use case gap.** If a feature doesn't close a documented gap, question why it exists.
2. **Check persona reactions before shipping.** Every significant feature should have a persona reaction assessment.
3. **Update use case status fields when features ship.** If a gap is closed, the use case file must reflect it.
4. **Don't build for personas we don't serve.** If a feature request comes from outside the ICP, flag it.
5. **Coordinate with PMM on positioning impact.** If a feature changes a differentiator or competitive claim, PMM must update the Brain.
6. **Document what we chose NOT to build.** Rejected roadmap candidates with rationale are as valuable as accepted ones.

[Source: messaging-positioning/core-positioning.md#differentiators] [Source: personas/] [Source: use-cases/]
