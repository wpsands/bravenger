---
title: Sales Agent Usage Guide
version: "1.0.0"
last_updated: "2026-03-18"
scope: "Sales team agents and operators"
owner: "Page Sands"
status: production
discipline: sales
---

# Sales Agent Usage Guide

This guide governs all agents producing sales content for Bravenger. Read AGENTS.md first — this file supplements, not replaces, the core governance rules.

---

## Role of Sales in the Brain

Sales uses the Brain to prepare for conversations, produce outbound sequences, handle objections, and write proposal language. Every sales output must:
- Reference the specific persona being engaged
- Connect the conversation to documented pains in `icp.md` and the persona file
- Use approved messaging from `messaging-positioning/messaging-framework.md`
- Handle objections using documented responses
- Never promise capabilities the Brain doesn't support (check use case status fields)

---

## Signal-Based Outbound

Bravenger's outbound motion is signal-driven. Do not send generic sequences. Every outbound message must connect to a specific buying signal from `icp.md#buying-signals`.

### Signal → Message Mapping

| Signal | Primary Message | Persona | Template Reference |
|--------|----------------|---------|-------------------|
| New marketing hire | "You need a foundation before you can build" | P-002 Head of Mktg | examples/README.md#template-1 |
| New PMM hire | "Build the foundation in a week, not a quarter" | P-003 First PMM | Adapt template 1 |
| Post-funding | "New hires need one story, not five" | P-001 Founder | examples/README.md#template-2 |
| Website redesign | "What will the new site say?" | P-002 Head of Mktg | Custom |
| AI content initiative | "Your AI tools need context" | P-001 Founder | examples/README.md#template-3 |
| SE team changes | "Product knowledge shouldn't leave with people" | P-004 VP Product | Custom |
| Competitive pressure | "Differentiation requires consistency" | P-001 Founder | Custom |
| Founder stepping back | "Your team needs to pitch without you" | P-001 Founder | Custom |

[Source: icp.md#buying-signals]

---

## Discovery Prep

Before every discovery call, the agent should produce a prep doc with:

### Company Context
- **Stage and size:** (from LinkedIn, Crunchbase, or provided data)
- **ICP fit score:** Does this company match `icp.md`? Flag any anti-ICP signals.
- **Buying signal:** What triggered this conversation?
- **Persona match:** Which persona file best describes the person on the call?

### Pain Hypotheses
Based on the persona and signal, hypothesize which pains from `icp.md#pains` and the persona file are most likely active. Rank them by probability.

### Discovery Questions
Produce 5-8 questions tailored to the persona and hypothesized pains:

**For Technical Founders (P-001):**
- "Where does your positioning live right now? Notion? A deck? Your head?"
- "When you hired [marketing person], what did you hand them?"
- "Are your AI tools producing content about the product? How accurate is it?"
- "If you couldn't be on the next sales call, would the rep get the pitch right?"
- "What happened after your last positioning exercise?"

**For Head of Marketing (P-002):**
- "What was waiting for you when you started? What did you inherit?"
- "How does your team decide what to say about the product?"
- "When you produce content, where do you go for the source of truth?"
- "Does your sales team use the materials you create?"
- "How do you ensure consistency across everything you publish?"

**For First PMM (P-003):**
- "What's the state of positioning and messaging documentation?"
- "How do you handle competitive intel right now?"
- "What does the launch process look like today?"
- "How long did it take you to understand the product and market when you joined?"
- "Who maintains the messaging? Is it a system or a person?"

**For VP Product (P-004):**
- "How grounded are your persona definitions? Are they based on data?"
- "How do you document use cases today?"
- "When marketing publishes something about the product, is it accurate?"
- "How do new PMs learn the product, market, and customer landscape?"
- "What do you wish the sales and marketing teams understood about the product?"

[Source: personas/persona-founder.md#pains] [Source: personas/persona-head-marketing.md#pains] [Source: personas/persona-first-pmm.md#pains] [Source: personas/persona-vp-product.md#pains]

---

## Objection Handling

Use the objection responses from `messaging-positioning/messaging-framework.md#objection-handling`. These are the six core objections:

1. "We already did a positioning exercise."
2. "We can build this ourselves."
3. "This is just a fancy wiki."
4. "$10-15K is expensive for a week of work."
5. "We don't use AI for content yet."
6. "How do we know it won't go stale?"

### Handling Rules
- **Listen first.** Let them state the objection fully before responding.
- **Acknowledge the concern.** It's usually legitimate, not a brush-off.
- **Use the documented response.** Don't improvise — the messaging framework has tested responses.
- **Add a proof point.** Every objection response includes one. Use it.
- **Offer evidence.** "Want to see our Brain?" is the strongest response to most objections.

---

## Proposal Language

When writing proposal or deal language, pull from:
- **Scope description:** UC-001 outcome section defines what they get.
- **Pricing:** $10-15K, one-time, fixed price. [Source: icp.md#buying-process]
- **Timeline:** One week.
- **Deliverables:** Structured Company Brain including ICP, personas, use cases, positioning, messaging, governance, and discipline guidelines.

### Language to Use
- "A working Company Brain, built in one week."
- "Structured knowledge base covering ICP, personas, use cases, positioning, messaging, and agent governance."
- "Same architecture we use for our own Brain — proven, repeatable, durable."

### Language to Avoid
- "Consulting engagement" (sounds like billable hours and scope creep)
- "Strategy deliverable" (sounds like a slide deck)
- "Assessment" or "audit" (sounds like it produces a report, not a system)

---

## Competitive Positioning in Sales

When competitors come up in conversation, reference `messaging-positioning/core-positioning.md#competitive-landscape`.

### Key Talking Points
- **vs. Positioning consultants:** "They deliver a deck. We deliver a system. Can their deck be read by AI agents?"
- **vs. Messaging agencies:** "They produce static documents for one discipline. We produce a structured system for five."
- **vs. DIY Notion/Wiki:** "A wiki has no schema, no governance, no agent readability. It becomes a graveyard."
- **vs. AI writing tools:** "They optimize the output. We optimize the input. Without a Brain, their output is a well-formatted guess."

### Rules
- Never disparage competitors by name. Describe the category gap.
- Always bring it back to the system vs. document distinction.
- Offer to show our Brain as proof. The architecture speaks for itself.

[Source: messaging-positioning/core-positioning.md#competitive-landscape]

---

## Anti-ICP Qualification

Before investing time, check the prospect against `icp.md#anti-icp`. Disqualify fast:

| Red Flag | Action |
|----------|--------|
| Pre-PMF | "You're still finding product-market fit. The Brain is for companies that have it and need to scale the message." |
| Enterprise (500+) | "Our motion is built for 20-150 person companies. We'd be happy to refer you to [alternative]." |
| Resists Markdown | "The Brain is a repo. If that doesn't fit how your team works, it won't deliver value." |
| No AI intent | "The Brain's value multiplies with AI adoption. If AI isn't on your roadmap, the timing may not be right." |
| Wants "just messaging" | "We build a system, not a messaging doc. If you need a one-pager, a positioning consultant may be a better fit." |

[Source: icp.md#anti-icp]
