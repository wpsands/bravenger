---
title: Product Agent Usage Guide
version: "1.0.0"
last_updated: "2026-03-18"
scope: "Product team agents and operators"
owner: "Page Sands"
status: production
discipline: product
---

# Product Agent Usage Guide

This guide governs all agents producing product content for Bravenger. Read AGENTS.md first — this file supplements, not replaces, the core governance rules.

---

## Role of Product in the Brain

Product uses the Brain to make grounded decisions about what to build, who to build for, and how to evaluate success. The Brain provides:
- **Personas** with product/UI/UX hooks — what each persona needs from the product experience
- **Use cases** with status fields, gaps, and connected use cases — the product landscape
- **ICP pains** — the market problems the product must solve
- **Competitive landscape** — what alternatives exist and where the gaps are

Product does not own the Brain (PMM does), but Product is a critical contributor — especially to use case status fields and gap documentation.

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

#### P-001 Technical Founder
- **Relevance:** [High/Medium/Low]
- **Expected reaction:** [Based on persona-founder.md#product-hooks]
- **Why they care:** [Specific product hook]

#### P-002 Head of Marketing
- **Relevance:** [High/Medium/Low]
- **Expected reaction:** [Based on persona-head-marketing.md#product-hooks]
- **Why they care:** [Specific product hook]

#### P-003 First PMM
- **Relevance:** [High/Medium/Low]
- **Expected reaction:** [Based on persona-first-pmm.md#product-hooks]
- **Why they care:** [Specific product hook]

#### P-004 VP Product
- **Relevance:** [High/Medium/Low]
- **Expected reaction:** [Based on persona-vp-product.md#product-hooks]
- **Why they care:** [Specific product hook]

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

When evaluating any product decision (feature, design, pricing, UX change), produce a persona reaction assessment.

### Per-Persona Assessment
For each relevant persona:
1. **Read the persona file.** Focus on goals, pains, and product/UI/UX hooks.
2. **Predict the reaction.** Will this persona view this positively, negatively, or neutrally?
3. **Ground the prediction.** Cite the specific persona attribute that drives the reaction.
4. **Identify risks.** What could go wrong for this persona?

### Example Format
```
**P-001 Technical Founder**
Reaction: Positive
Reason: This feature aligns with their preference for CLI-friendly interfaces
and structured data. [Source: personas/persona-founder.md#product-hooks]
Risk: If it requires a GUI-only workflow, adoption drops.
```

---

## Adoption Scoring

Use cases have status fields. Product should track adoption metrics that map to each use case.

### Adoption Criteria by Use Case

| Use Case | Adoption Indicator | Measurement |
|----------|--------------------|-------------|
| UC-001 Build Brain | Brain delivered and in use | Active git commits to Brain repo within 30 days of delivery |
| UC-002 Generate Content | Content produced from Brain | # of agent-generated outputs per week with citations |
| UC-003 Detect Drift | Drift detection performed | # of drift checks per month, # of corrections made |

### Scoring Framework
- **Fully adopted:** Use case is performed weekly with consistent outputs.
- **Partially adopted:** Use case is performed but inconsistently or with gaps.
- **Not adopted:** Use case was delivered but the team hasn't integrated it into their workflow.

---

## Design Concept Evaluation

When evaluating design concepts (UX, interface, workflow), the agent should assess against persona expectations.

### Evaluation Criteria

| Criteria | Source | Question |
|----------|--------|----------|
| **Persona fit** | Persona product hooks | Does this design match how the persona works? |
| **Brand alignment** | brand-vision.md | Does the design reflect our values (structure enables speed, practical over theoretical)? |
| **Use case support** | use-cases/ | Does this design enable or hinder the documented use cases? |
| **Technical credibility** | P-004 persona hooks | Would the VP Product trust this design? |
| **Accessibility for non-technical** | P-002 persona hooks | Can the Head of Marketing use this without CLI comfort? |

### Persona-Specific Design Principles

**For P-001 (Technical Founder):**
- Markdown-native. CLI-friendly. No forced GUI.
- Git-based versioning visible.
- Structured data (YAML) exposed, not hidden behind UI.

**For P-002 (Head of Marketing):**
- Clear navigation. Visual file map.
- Examples prominent and accessible.
- No required technical knowledge.

**For P-003 (First PMM):**
- Editing and maintenance workflows clear.
- Cross-reference between files visible.
- Changelog and versioning accessible.

**For P-004 (VP Product):**
- Schema definitions visible.
- Data model integrity verifiable.
- Gap documentation prominent.

[Source: personas/persona-founder.md#product-hooks] [Source: personas/persona-head-marketing.md#product-hooks] [Source: personas/persona-first-pmm.md#product-hooks] [Source: personas/persona-vp-product.md#product-hooks]

---

## Roadmap Input from the Brain

The Brain provides structured roadmap input through use case gaps.

### Process
1. Read every use case file's `## Gaps` section.
2. Compile a gap inventory — every documented gap across all use cases.
3. Prioritize gaps by persona impact (which personas are affected?), pain severity (does the gap block a critical workflow?), and competitive exposure (does a competitor address this gap?).
4. Translate high-priority gaps into feature candidates.
5. Write feature briefs using the template above.

### Current Gap Inventory
From this Brain's use cases:

**UC-001 Gaps:**
- No automated onboarding
- No real-time sync with product changes
- Limited to English
- No multi-Brain management

**UC-002 Gaps:**
- No automated citation validation
- No content approval workflow
- No output quality scoring
- No multi-format output

**UC-003 Gaps:**
- No automated content ingestion
- No drift scoring algorithm
- No continuous monitoring
- No verbal channel coverage
- No dashboard

[Source: use-cases/uc-001-build-brain.md#gaps] [Source: use-cases/uc-002-generate-aligned-content.md#gaps] [Source: use-cases/uc-003-detect-drift.md#gaps]
