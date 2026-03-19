---
title: Product Marketing Agent Usage Guide
version: "1.0.0"
last_updated: "2026-03-18"
scope: "Product Marketing team agents and operators"
owner: "Page Sands"
status: production
discipline: product-marketing
---

# Product Marketing Agent Usage Guide

This guide governs all agents producing product marketing content for Bravenger. Read AGENTS.md first — this file supplements, not replaces, the core governance rules.

---

## Role of Product Marketing in the Brain

Product Marketing is the discipline that OWNS the Brain. PMM is responsible for:
- Maintaining positioning and messaging accuracy
- Updating personas when customer conversations reveal new insights
- Ensuring use case status fields reflect current product reality
- Producing launch content, competitive intel, and sales enablement
- Measuring and fixing messaging drift

PMM is the bridge between Product (what we build), Sales (what we sell), Marketing (what we say), and CS (what we deliver). The Brain is the mechanism that makes that bridge work.

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
- New competitor enters the market
- Product ships a major feature that changes capability claims
- Customer conversations consistently surface a new pain not in `icp.md`
- Win/loss analysis reveals a positioning weakness
- The market category is evolving (new terminology, new expectations)

### Update Process
1. Draft the change in the relevant file.
2. Check downstream impact: Does this change affect messaging-framework.md? Examples? Agent guidelines?
3. Update all affected files.
4. Log in changelog.
5. Notify relevant disciplines.

---

## Messaging Frameworks

PMM produces and maintains the messaging framework. When updating or creating messaging:

### Value Proposition Creation
Each VP must have:
- **Statement:** One sentence describing the value.
- **Approved language:** 3-5 phrases agents and humans can use verbatim.
- **Forbidden language:** Phrases that are commonly used but misrepresent the value.
- **Dogfooding hook:** How Bravenger's own usage proves this VP.
- **Persona relevance:** Which personas care most (reference the message testing matrix).

### Message Testing Matrix
Maintain the matrix in `messaging-framework.md#message-testing-matrix`. Update it when:
- Customer conversations validate or invalidate a message-persona pairing.
- A/B testing reveals unexpected resonance or failure.
- New messages are added to the framework.

---

## Competitive Intelligence

### Competitive Intel Structure
For each significant competitor or alternative, document:
- **What they are:** Category, product type, target market.
- **What they deliver:** Specific deliverables, format, timeline.
- **Gap vs. Bravenger:** What they can't do that the Company Brain does.
- **When they come up:** Which persona mentions them and in what context.
- **Response:** Approved talking points for sales and marketing.

### Competitive Intel Sources
- Customer and prospect conversations (win/loss analysis)
- Competitor websites and content
- G2, Gartner Peer Insights reviews (for adjacent categories)
- Industry analyst reports
- Community discussions (Pavilion, PMM Alliance, etc.)

### Rules
- Document facts, not opinions. Cite sources.
- Never disparage competitors by name in external content.
- Focus on the category gap (system vs. document), not feature-by-feature comparison.
- Update quarterly or when a material competitive change occurs.

[Source: messaging-positioning/core-positioning.md#competitive-landscape]

---

## Launch Planning

### Launch Tier Framework

| Tier | Criteria | Content Scope |
|------|----------|--------------|
| **Tier 1** | New use case or major capability change | Full launch: blog, email, social, sales enablement, product update, CS notification |
| **Tier 2** | Significant improvement to existing use case | Blog + email + sales enablement |
| **Tier 3** | Minor improvement or iteration | Product update + CS notification |

### Launch Brief Template

```markdown
## Launch: [Feature/Capability Name]

### Use case impact
- **Use case:** [UC-XXX from use-cases/]
- **Status change:** [e.g., "partially-supported → fully-supported"]
- **New capability:** [What can the customer do now that they couldn't before?]

### Persona impact
- **Primary persona:** [Who benefits most?]
- **Expected reaction:** [Reference persona file — product hooks section]

### Messaging
- **Primary VP:** [From messaging-framework.md]
- **Approved language:** [Specific phrases for this launch]
- **Positioning connection:** [How does this reinforce our category position?]

### Content plan
- [ ] Brain update (use case file, status field)
- [ ] Blog post (target persona, use case angle)
- [ ] Email to customers
- [ ] Sales enablement (talk track + objection update)
- [ ] Social post
- [ ] Changelog entry

### Citations
[Source files used to build this brief]
```

---

## Sales Enablement

PMM produces enablement content that Sales agents and reps consume. Enablement content must:

### Include
- Talk tracks per persona (reference persona dos/don'ts)
- Objection handling (from messaging-framework.md, with context)
- Use case overviews (from use-cases/, with real status)
- Competitive responses (from competitive intel, approved language only)
- Proof points (dogfooding examples, customer outcomes)

### Exclude
- Internal strategy that shouldn't be shared externally
- Aspirational claims not supported by use case status
- Generic feature lists without persona/outcome framing

### Format
- Short. Sales reps don't read long documents.
- Structured. Talk track → objection → proof point.
- Citable. Every claim references a Brain file.

---

## Drift Detection and Remediation

PMM owns drift detection. This is the discipline's most critical ongoing responsibility.

### Monthly Drift Check
1. Select 10-15 pieces of live content (website pages, blog posts, sales decks, email templates).
2. For each piece, compare claims against the relevant Brain files.
3. Flag divergences: wrong VP, outdated feature claim, persona mismatch, tone drift.
4. Categorize: Is the content wrong, or is the Brain outdated?
5. Fix the source. If the content is wrong, update the content. If the Brain is outdated, update the Brain.
6. Log findings and fixes in changelog.

### Drift Severity Scale
| Severity | Definition | Action |
|----------|-----------|--------|
| **Critical** | Claim contradicts product reality or makes a false promise | Fix immediately. Notify sales and CS. |
| **High** | VP or positioning is materially different from Brain | Fix within 1 week. |
| **Medium** | Tone or language drifts from brand-vision.md | Fix in next content update cycle. |
| **Low** | Minor inconsistency, no customer impact | Log and fix when file is next updated. |

[Source: use-cases/uc-003-detect-drift.md]
