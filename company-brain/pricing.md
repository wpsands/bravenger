---
title: Pricing & Packaging
version: "1.0.0"
last_updated: "2026-03-18"
owner: "Page Sands"
status: production
visibility: internal
---

# Pricing & Packaging

This file governs how Bravenger is priced, packaged, and scoped. Sales and Marketing agents reference this file for proposal language, pricing objection handling, and scope descriptions. This file is internal — do not share pricing details in marketing content. Pricing is disclosed in sales conversations and proposals only.

---

## Packages

### Brain Build — Core

**Price:** $10,000
**Timeline:** 5 business days
**For:** Series A companies, 20–60 employees, first-time GTM foundation

**Deliverables:**

| Deliverable | Detail |
|-------------|--------|
| ICP file | Firmographics, technographics, 5+ pains, buying signals, anti-ICP |
| 3 persona files | Primary buyer personas with demographics, goals, pains, messaging guidance, product/UI/UX hooks |
| 3 use case files | Foundational use cases with trigger, current state, outcome, gotchas, gaps, connected use cases. Multi-persona schema. Honest status fields. |
| Core positioning | Category definition, positioning statement, 3 differentiators, competitive landscape, strategic narrative per persona |
| Messaging framework | 5 value propositions with approved/forbidden language, 4 objection handlers, funnel-stage messaging |
| Brand vision | Mission, voice attributes, tone by context, words we use/avoid |
| Agent governance | AGENTS.md with read order, citation rules, output formats, behavioral guardrails |
| 3 discipline guidelines | Marketing, Sales, and one additional (PMM, Product, or CS — customer chooses) |
| Examples | 3 approved hero variants, 2 outbound email templates, 2 social posts |
| README | File map, architecture diagram, usage instructions for humans and agents |
| Changelog | v1.0 entry documenting all decisions |

**Process:**
1. Day 1: Founder interview (2 hours) + existing content audit
2. Day 2: ICP, personas, and use case drafts
3. Day 3: Positioning, messaging framework, brand vision
4. Day 4: Agent governance, discipline guidelines, examples
5. Day 5: Review, revisions, handoff

**What the customer needs to provide:**
- 2 hours of founder time for interviews
- Access to existing positioning materials (docs, decks, Notion pages — whatever exists)
- A designated Brain owner (usually Head of Marketing or First PMM) for handoff

---

### Brain Build — Full

**Price:** $15,000
**Timeline:** 5 business days
**For:** Series B companies, 60–150 employees, multi-team alignment needed

**Everything in Core, plus:**

| Additional Deliverable | Detail |
|------------------------|--------|
| 4–5 persona files (instead of 3) | Extended persona coverage — may include end users, CS personas, or secondary buyers |
| 5–8 use case files (instead of 3) | Deeper use case coverage with connected use case mapping |
| 5 discipline guidelines (instead of 3) | All five: Marketing, Sales, PMM, Product, CS |
| Expanded messaging framework | 7 value propositions, 6 objection handlers, message testing matrix |
| Expanded examples | 5 hero variants, 3 outbound templates, 4 social posts, conference messaging |
| Competitive deep-dive | Detailed competitive landscape with alternatives, gaps, and category differentiation |
| Use case schema template | So the customer can add new use cases following the same schema post-delivery |

**Process:**
1. Day 1: Founder interview (2 hours) + marketing/PMM interview (1 hour) + content audit
2. Day 2: ICP, personas, and use case drafts
3. Day 3: Positioning, messaging framework, brand vision, competitive landscape
4. Day 4: Agent governance, all 5 discipline guidelines, examples
5. Day 5: Review, revisions, handoff + Brain owner onboarding session (1 hour)

**What the customer needs to provide:**
- 2 hours of founder time
- 1 hour of marketing/PMM time
- Optional: 30 minutes from a product lead or sales lead for use case validation
- Access to existing materials
- A designated Brain owner

---

## Add-Ons

| Add-On | Price | Detail |
|--------|-------|--------|
| **Additional personas** | $1,500 each | Full persona file following the standard schema |
| **Additional use cases** | $1,000 each | Full use case file following the standard schema |
| **Additional discipline guideline** | $1,500 each | If Core customer wants a 4th or 5th guideline post-delivery |
| **Brain refresh** | $5,000 | Quarterly update: re-interview stakeholders, update stale files, add new use cases, revise positioning if market changed. 2 business days. |
| **Brain owner coaching** | $2,500 | 3x 1-hour sessions over 6 weeks. Teach the PMM or marketing lead how to maintain, extend, and govern the Brain independently. |

---

## What's NOT Included

| Excluded | Why | Alternative |
|----------|-----|-------------|
| Content production | We build the Brain, not the content. The Brain powers agents that produce content. | Customer uses agents + Brain to produce content themselves |
| AI tool setup | We deliver the Brain. We don't configure Claude, ChatGPT, Jasper, or any specific AI tool. | Customer points their tools at the Brain repo |
| Ongoing content review | We don't review or approve content after delivery. | Brain owner uses drift detection (UC-003) to self-monitor |
| Website redesign | The Brain informs website copy, but we don't design or build websites. | Customer uses Marketing agent + Brain to generate website copy |
| Sales training | The Brain includes sales guidelines, but we don't train reps. | Sales agent + Brain produces discovery prep and objection handling |

---

## Pricing Rationale

Use these points when justifying the price in sales conversations.

**$10K Core vs. alternatives:**

| Alternative | Cost | Timeline | Output | Durability |
|-------------|------|----------|--------|-----------|
| Positioning consultant | $15–30K | 4–8 weeks | Slide deck | Decays in weeks |
| Messaging agency | $10–20K/month | Ongoing | Documents per project | Requires retainer |
| Freelance content strategist | $8–12K/month | Ongoing | Content without a system | Dependent on the person |
| DIY (Head of Marketing builds it) | $0 (time cost) | 2–3 months | Varies wildly | Usually stale within weeks |
| **Bravenger Core** | **$10K one-time** | **1 week** | **Working system (23+ files)** | **Persists — agents consume it daily** |

**$15K Full vs. alternatives:**

Same comparison, but the Full package includes all 5 disciplines, 5–8 use cases, expanded messaging, and competitive deep-dive. This is the complete foundation a Series B company needs before their next board meeting.

[Source: messaging-framework.md#objection-4]

---

## Proposal Language

### For Core ($10K)

> Bravenger will build a Company Brain for [Company] in one week (5 business days) for a fixed fee of $10,000.
>
> The Brain will include: ICP definition, 3 persona files, 3 use case files, core positioning, messaging framework, brand vision, agent governance (AGENTS.md), and 3 discipline-specific agent guidelines.
>
> The deliverable is a git repository of structured Markdown files with YAML frontmatter. [Company] owns the files outright. No ongoing subscription. No vendor lock-in.
>
> We require 2 hours of founder time for stakeholder interviews and access to existing positioning materials.

### For Full ($15K)

> Bravenger will build a Company Brain for [Company] in one week (5 business days) for a fixed fee of $15,000.
>
> The Brain will include: ICP definition, 4–5 persona files, 5–8 use case files, core positioning with competitive deep-dive, expanded messaging framework (7 VPs, 6 objection handlers), brand vision, agent governance, and all 5 discipline-specific agent guidelines (Marketing, Sales, PMM, Product, CS).
>
> The deliverable is a git repository of structured Markdown files with YAML frontmatter. [Company] owns the files outright. No ongoing subscription. No vendor lock-in.
>
> We require 2 hours of founder time, 1 hour of marketing/PMM time, and access to existing positioning materials. Delivery includes a 1-hour Brain owner onboarding session.

---

## Discount Policy

- **No discounts.** The price is the price. We don't negotiate. The value is clear, the alternatives are more expensive, and the timeline is one week. If $10K is too much, the company is not at the right stage for Bravenger.
- **Multi-Brain exception:** If a company needs Brains for multiple products or business units, price the second Brain at $7,500 (Core) or $12,000 (Full). The architecture is established; the second build is faster.

---

## Internal Metrics

Track these to evaluate pricing health:

| Metric | Target |
|--------|--------|
| Close rate on proposals | >50% |
| Average deal size | $12K+ |
| Time from proposal to signature | <2 weeks |
| Upsell rate (Core → add-ons) | >30% |
| Brain refresh retention (quarterly) | >40% of customers |
| Price objection frequency | <20% of deals |
