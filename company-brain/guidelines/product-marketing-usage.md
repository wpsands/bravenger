---
title: Product Marketing Agent Usage Guide
version: "1.1.0"
last_updated: "2026-04-02"
scope: "Product Marketing team agents and operators"
owner: "Brain Owner"
status: production
discipline: product-marketing
---

# Product Marketing Agent Usage Guide

This guide governs all agents producing product marketing content for Natter. Read AGENTS.md first — this file supplements, not replaces, the core governance rules.

---

## Role of Product Marketing in the Brain

Product Marketing OWNS the Brain. PMM is responsible for:
- Maintaining positioning and messaging accuracy across all disciplines
- Updating personas when customer conversations and roundtable data reveal new insights
- Ensuring use case status fields reflect current product reality
- Producing launch content, competitive intel, and sales enablement
- Measuring and fixing messaging drift across marketing, sales, and CS output

PMM is the bridge between Product (what we build), Sales (what we sell), Marketing (what we say), and CS (what we deliver). The Brain is the mechanism that makes that bridge operational.

---

## Positioning Maintenance

### Quarterly Positioning Review
Every quarter, PMM should:
1. Re-read `messaging-positioning/core-positioning.md` against current market reality.
2. Verify each differentiator still holds. Has Qualtrics or CultureAmp closed a gap?
3. Check strategic narratives against recent customer conversations and roundtable data. Are the pains still accurate?
4. Review the value proposition hierarchy. Has persona priority shifted?
5. Validate the "Conversational Insights Platform" category claim still differentiates as competitors add AI conversation features.
6. Log changes in a commit message with clear rationale.

### When to Update Positioning
- Competitor launches a conversation-based listening feature or similar category claim
- Natter ships a capability that changes a use case status field (e.g., Natalie AI goes GA)
- Roundtable data or customer conversations consistently surface a new pain not in `icp.md`
- Win/loss analysis reveals a positioning weakness
- The "Conversational Insights Platform" category is evolving (new entrants, analyst coverage, terminology shifts)

### Update Process
1. Draft the change in the relevant file.
2. Check downstream impact: Does this change affect messaging-framework.md? Agent guidelines? Sales materials?
3. Update all affected files in the same commit.
4. Notify Sales, Marketing, and CS of the change and its implications.

---

## Positioning Briefs

PMM produces positioning briefs when entering new segments, launching major features, or responding to competitive shifts.

### Positioning Brief Template

```markdown
## Positioning Brief: [Topic]

### Context
[What changed? New competitor feature, new Natter capability, new market signal?]

### Current positioning
[Relevant section from core-positioning.md]

### Proposed change
[What needs to update and why]

### Persona impact
- **P-001 CHRO:** [How does this affect their narrative?]
- **P-002 People Analytics:** [How does this affect their narrative?]
- **P-003 VP Strategy:** [How does this affect their narrative?]
- **P-004 Revenue Leader:** [How does this affect their narrative?]

### Downstream files affected
[List every Brain file that needs updating]

### Competitive implication
[How does this change our competitive landscape section?]

### Citations
[Source files used]
```

---

## Launch Briefs

### Launch Tier Framework

| Tier | Criteria | Content Scope |
|------|----------|--------------|
| **Tier 1** | New use case, new session format, or major capability (e.g., Natalie AI) | Full launch: research report, blog, email, social, sales enablement, roundtable, CS notification |
| **Tier 2** | Significant improvement to existing capability (e.g., enhanced matching) | Blog + email + sales enablement + CS notification |
| **Tier 3** | Minor improvement or iteration | Product update + CS notification |

### Launch Brief Template

```markdown
## Launch: [Feature/Capability Name]

### Use case impact
- **Use case:** [UC-XXX from use-cases/]
- **Status change:** [e.g., "partially-supported -> fully-supported"]
- **New capability:** [What can the customer do now?]

### Persona impact
- **P-001 CHRO:** [Expected reaction, relevance]
- **P-002 People Analytics:** [Expected reaction, relevance]
- **P-003 VP Strategy:** [Expected reaction, relevance]
- **P-004 Revenue Leader:** [Expected reaction, relevance]

### Messaging
- **Primary VP:** [From messaging-framework.md]
- **Approved language:** [Specific phrases for this launch]
- **Category reinforcement:** [How does this reinforce "Conversational Insights Platform"?]

### Content plan
- [ ] Brain update (use case file, status field)
- [ ] Research report using the new capability
- [ ] Blog post (target persona, use case angle)
- [ ] Email to customers (persona-specific versions)
- [ ] Sales enablement (talk track + objection update)
- [ ] Roundtable featuring the new capability
- [ ] Social post (LinkedIn, CEO voice)
- [ ] Changelog entry

### Citations
[Source files used]
```

---

## Competitive Intelligence

### Competitive Intel Structure
For each competitor, document:
- **What they are:** Category, target market, pricing tier.
- **Their listening story:** What do they claim? How does it actually work?
- **Gap vs. Natter:** What they can't do that Natter does — specifically the depth gap (10 words vs. 1,000+) and the scale gap (8-person focus groups vs. 20,000 conversations).
- **When they come up:** Which persona mentions them and in what context.
- **Response:** Approved talking points for sales and marketing.

### Competitive Monitoring
Track quarterly:
- Qualtrics AI feature releases and conversation capabilities
- CultureAmp product announcements and upmarket moves
- Workday/Peakon listening feature evolution
- Glint/Microsoft Viva integration depth
- Remesh scale improvements and conversation features
- New entrants claiming "conversational insights" or similar positioning
- Analyst coverage of employee listening category evolution

### Rules
- Document facts, not opinions. Cite sources.
- Never disparage competitors by name in external content.
- Focus on the depth gap (10 words vs. 1,000+) and the scale gap (12-person focus group vs. 20,000 conversations), not feature comparison.
- Position Natter as complement to survey platforms, not replacement.
- Update quarterly or when a material competitive change occurs.

[Source: messaging-positioning/core-positioning.md#competitive-landscape]

---

## Sales Enablement

PMM produces enablement content that Sales agents and reps consume.

### Include
- Talk tracks per persona (reference persona language guidance in sales-usage.md)
- Objection handling updates (from messaging-framework.md, with new context)
- Use case overviews (from use-cases/, with current status)
- Competitive battle cards (from competitive intel, approved language only)
- Research proof points (from Natter's own research reports, with methodology citations)
- Roundtable playbooks (how to invite, what to say, follow-up sequences)

### Exclude
- Internal strategy that shouldn't be shared externally
- Aspirational claims not supported by use case status
- Feature lists without persona/outcome framing

### Format
- Short. Sales reps don't read long documents.
- Structured. Talk track then objection then proof point.
- Persona-tagged. Every piece of enablement identifies which persona it serves.

---

## Drift Detection and Remediation

PMM owns drift detection. This is the discipline's most critical ongoing responsibility.

### Monthly Drift Check
1. Select 10-15 pieces of live content (website, blog, sales decks, email sequences, social posts, roundtable invitations).
2. For each piece, verify: correct category language ("conversational insights platform"), persona targeting, VP alignment, competitive accuracy, complement (not replacement) framing.
3. Flag divergences: "employee engagement platform" language, technology-leading copy, blurred persona targeting, stale competitive claims, "survey replacement" framing.
4. Categorize: Is the content wrong, or is the Brain outdated?
5. Fix the source. Update content or update the Brain.
6. Log findings and fixes in a commit with clear rationale.

### Drift Severity Scale

| Severity | Definition | Action |
|----------|-----------|--------|
| **Critical** | Content says "survey replacement" or makes a false product claim | Fix immediately. Notify all disciplines. |
| **High** | VP or competitive positioning materially different from Brain | Fix within 1 week. |
| **Medium** | Persona targeting is unclear or tone drifts from evidence-led to hype | Fix in next content update cycle. |
| **Low** | Minor language inconsistency, no customer impact | Log and fix when file is next updated. |

[Source: messaging-positioning/core-positioning.md] [Source: messaging-positioning/messaging-framework.md]
