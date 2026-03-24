---
title: Product Marketing Agent Usage Guide
version: "1.0.0"
last_updated: "2026-03-22"
scope: "Product Marketing team agents and operators"
owner: "Contoso GTM Team"
status: production
discipline: product-marketing
---

# Product Marketing Agent Usage Guide

This guide governs all agents producing product marketing content for Contoso. Read AGENTS.md first — this file supplements, not replaces, the core governance rules.

---

## Role of Product Marketing in the Brain

Product Marketing is the discipline that OWNS the Brain. PMM is responsible for:
- Maintaining positioning and messaging accuracy
- Updating personas when customer conversations reveal new insights
- Ensuring use case status fields reflect current product reality
- Producing launch content, competitive intel, and sales enablement
- Measuring and fixing messaging drift

PMM is the bridge between Product (what we build), Sales (what we sell), Marketing (what we say), and CS (what customers experience). The Brain is the mechanism that makes that bridge work.

---

## Positioning Maintenance

### Quarterly Positioning Review
Every quarter, PMM should:
1. Re-read `messaging-positioning/core-positioning.md` against current market reality.
2. Verify each differentiator still holds. If a competitor closed a gap, update the competitive landscape.
3. Check strategic narratives against recent customer conversations. Are the pains still accurate?
4. Review the value proposition hierarchy. Has priority shifted?
5. Log changes in `updates/changelog.md`.

### When to Update Positioning
- New competitor enters the market or existing competitor ships a major feature
- Contoso ships a capability that changes what we can claim
- Customer conversations consistently surface a new pain not in `icp.md`
- Win/loss analysis reveals a positioning weakness
- The data integration category is evolving (new terminology, new buyer expectations)

### Update Process
1. Draft the change in the relevant file.
2. Check downstream impact: Does this change affect messaging-framework.md? Examples? Agent guidelines?
3. Update all affected files.
4. Notify Marketing, Sales, and CS that messaging has changed.
5. Log the change in `updates/changelog.md` with rationale.

---

## Launch Briefs

Every product launch — from major features to minor improvements — gets a launch brief grounded in the Brain.

### Launch Brief Template

```markdown
## Launch Brief: [Feature Name]

### Classification
- **Tier:** [1 = major / 2 = notable / 3 = minor]
- **Ship date:** [Date]
- **PM owner:** [Name]

### What It Does
[2-3 sentences. What the feature does in plain engineering language.]

### Why It Matters
- **ICP pain addressed:** [From icp.md#pains]
- **Persona impact:** [Which personas care and why — cite persona files]
- **Use case impact:** [Which use case status changes or gaps close — cite use-case files]
- **Competitive impact:** [Does this close a gap vs. a competitor?]

### Messaging

#### Headline (external)
[One sentence, approved language from messaging-framework.md]

#### Supporting Copy (external)
[2-3 sentences for website, blog, changelog]

#### Internal Positioning
[How Sales and CS should talk about this. What questions it answers. What objections it handles.]

### Enablement
| Asset | Owner | Due |
|-------|-------|-----|
| Sales one-pager | PMM | [Date] |
| CS onboarding update | CS | [Date] |
| Docs update | Product | [Date] |
| Blog post | Marketing | [Date] |

### Brain Files to Update
- [ ] `use-cases/[affected use case].md` — update status or gaps
- [ ] `messaging-positioning/core-positioning.md` — if differentiators change
- [ ] `messaging-positioning/messaging-framework.md` — if new VP or objection handler needed
- [ ] `updates/changelog.md` — log the change
```

### Launch Tiers

| Tier | Criteria | GTM Motion |
|------|----------|-----------|
| **Tier 1** | New use case enabled, major competitive gap closed, or pricing change | Blog + email campaign + sales enablement + docs + changelog + social |
| **Tier 2** | Existing use case improved, notable UX change, new connector category | Blog + docs + changelog + sales Slack notification |
| **Tier 3** | Bug fix, minor UX polish, individual connector addition | Docs + changelog only |

---

## Competitive Intelligence

### Competitive Tracking Framework

PMM maintains a competitive landscape in `messaging-positioning/core-positioning.md#competitive-landscape`. Update it when:
- A competitor ships a feature that affects our positioning
- A competitor changes pricing
- A new competitor enters the mid-market pipeline space
- Win/loss data reveals a competitive pattern

### Competitive Intel Template

```markdown
## Competitive Update: [Competitor Name]

### Date: [Date]
### Change: [What happened]
### Impact on Contoso Positioning:
- **Differentiator affected:** [Which of our differentiators is impacted?]
- **Severity:** [High / Medium / Low]
- **Recommended action:** [Update positioning / Update objection handler / No action needed]

### Sales Talking Points
[2-3 bullets Sales can use immediately]

### Brain Files to Update
[List files that need changes]
```

### Competitive Positioning Matrix

Maintain this matrix in `core-positioning.md` and update quarterly:

| Capability | Contoso | Fivetran | Airbyte | Stitch | Custom Airflow |
|-----------|---------|----------|---------|--------|----------------|
| Config-as-code pipelines | Yes | No | Partial | No | Manual |
| 200+ pre-built connectors | Yes | Yes | Yes | Partial | Build your own |
| Built-in observability | Yes | Partial | No | No | Build your own |
| Git-native workflow | Yes | No | Partial | No | Yes |
| RBAC | Growth+ | Yes | Enterprise | No | Manual |
| Data lineage | Yes | Yes | Partial | No | Build your own |
| Self-serve connector setup | Yes | Yes | Partial | Yes | No |
| Engineering-first UX | Yes | No | Yes | No | Yes |

---

## Enablement Materials

### Sales Enablement Cadence

| Cadence | Asset | Purpose |
|---------|-------|---------|
| Per launch (Tier 1-2) | One-pager | Quick reference for Sales on what shipped and how to talk about it |
| Monthly | Competitive update | Summary of competitor moves and updated talking points |
| Quarterly | Messaging refresh | Updated VPs, new objection handlers, refreshed proof points |
| Ad hoc | Battlecard | For specific competitive situations surfaced by Sales |

### One-Pager Template

```markdown
## [Feature Name] — Sales One-Pager

### What is it?
[1 sentence]

### Who cares?
- **P-001 Data Eng Lead:** [Why they care]
- **P-002 VP Engineering:** [Why they care]

### What pain does it solve?
[Reference icp.md#pains]

### How to demo it
[2-3 steps to show this in a live demo]

### Objections to expect
| Objection | Response |
|-----------|----------|
| [Objection 1] | [Response from messaging-framework.md] |

### Proof point
[Specific metric or customer outcome]
```

### Battlecard Template

```markdown
## Battlecard: Contoso vs. [Competitor]

### When this comes up
[Typical scenario where this competitor enters the conversation]

### Their pitch
[How the competitor positions themselves — be factual, not dismissive]

### Our response
[3-5 bullets grounded in core-positioning.md#differentiators]

### Their weakness
[Specific, verifiable limitation — not FUD]

### Our weakness
[Be honest. What do they do better? How do we address it?]

### Trap questions to set
[Questions that expose their weakness without being adversarial]

### Proof point
[Customer story or metric that demonstrates our advantage]
```

---

## Messaging Drift Ownership

PMM owns drift detection and correction. This is the single most important ongoing responsibility.

### Drift Detection Process
1. **Weekly:** Scan 5 pieces of content (across Marketing, Sales, CS) for alignment with messaging-framework.md.
2. **Monthly:** Run a full drift check against all published materials from the past 30 days.
3. **Quarterly:** Deep audit — interview 2 Sales reps and 1 CS manager. Are they using Brain language or inventing their own?

### Drift Severity Levels

| Level | Definition | Action | SLA |
|-------|-----------|--------|-----|
| **Critical** | Wrong category claim, unsupported capability, forbidden language on public site | Fix immediately, notify all teams | Same day |
| **High** | Persona mismatch, outdated differentiator, stale competitive claim | Fix within 1 week, update Brain | 5 business days |
| **Medium** | Tone drift, sub-optimal VP usage, missing citations in internal docs | Fix in next content cycle | 2 weeks |
| **Low** | Style inconsistency, formatting deviation, non-standard CTA | Fix opportunistically | Next quarter |

### Common Drift Patterns in Pipeline SaaS

| Drift Type | Example | Root Cause |
|-----------|---------|-----------|
| Category confusion | Calling Contoso an "ETL tool" or "data warehouse" | Positioning not internalized by Sales or Marketing |
| Audience drift | Marketing to analysts instead of engineers | Fivetran-influenced messaging habits |
| Feature-first messaging | Leading with "200+ connectors" instead of engineering outcome | Product-centric thinking instead of persona-centric |
| Competitor obsession | Spending more time on "vs. Fivetran" than on Contoso value | Reactive instead of proactive positioning |

[Source: messaging-positioning/core-positioning.md#category] [Source: brand-vision.md#words-we-avoid]
