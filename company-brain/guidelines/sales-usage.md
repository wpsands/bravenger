---
title: Sales Agent Usage Guide
version: "1.0.0"
last_updated: "2026-03-24"
scope: "Sales team agents and operators"
owner: "Brain Owner"
status: production
discipline: sales
---

# Sales Agent Usage Guide

This guide governs all agents producing sales content for NovaCRM. Read AGENTS.md first — this file supplements, not replaces, the core governance rules.

---

## Role of Sales in the Brain

Sales uses the Brain to prepare for conversations, produce outbound sequences, handle objections, and write proposal language. Every sales output must:
- Reference the specific persona being engaged
- Connect the conversation to documented pains in `icp.md` and the persona file
- Use approved messaging from `messaging-positioning/messaging-framework.md`
- Handle objections using documented responses from the messaging framework
- Never promise capabilities that aren't supported by use case status fields

---

## Signal-Based Outbound

NovaCRM's outbound motion is signal-driven. Do not send generic sequences. Every outbound message must connect to a specific buying signal from `icp.md#buying-signals`.

### Signal to Message Mapping

| Signal | Primary Message | Persona | Approach |
|--------|----------------|---------|----------|
| VP Sales / CRO new hire | "New CRO, same old CRM. You inherited a reporting tool." | P-001 VP Sales | Pain: forecast accuracy, rep visibility |
| Sales Ops hire | "You were hired to optimize revenue ops. Your CRM is fighting you." | P-002 Sales Ops | Pain: admin burden, data quality |
| Series B+ funding | "Scaling the sales team? Scale how they sell, not just headcount." | P-001 VP Sales | Outcome: consistent rep performance |
| Salesforce complaints (G2, Reddit) | "Salesforce isn't built for teams your size. You know it." | P-002 Sales Ops | Competitive: mid-market positioning |
| Sales team expansion (10+ reps) | "More reps, more variance. Your best reps' playbook should scale." | P-001 VP Sales | VP3: Learns from YOUR reps |
| CTO hire at sales-led company | "Your new sales CRM should survive a technical evaluation." | P-003 CTO | Technical: explainability, architecture |
| Missed earnings / forecast miss | "Forecast misses aren't a rep problem. They're a CRM problem." | P-001 VP Sales | VP2: Forecast from behavior |
| Competitor CRM contract renewal | "Before you renew, ask: is your CRM helping your reps sell?" | P-002 Sales Ops | Category: reporting vs. selling tool |

[Source: icp.md#buying-signals]

---

## Discovery Prep

Before every discovery call, the agent should produce a prep doc.

### Company Context
- **Stage and size:** (from LinkedIn, Crunchbase, or provided data)
- **ICP fit score:** Does this company match `icp.md`? Flag any anti-ICP signals.
- **Current CRM:** Which CRM are they on? (Shapes the competitive angle.)
- **Buying signal:** What triggered this conversation?
- **Persona match:** Which persona file best describes the person on the call?

### Pain Hypotheses
Based on the persona and signal, hypothesize which pains from `icp.md#pains` and the persona file are most likely active. Rank by probability.

### Discovery Questions

**For VP Sales / CRO (P-001):**
- "How accurate was your last quarterly forecast? What drove the variance?"
- "When a deal stalls, how does your team figure out why?"
- "How do you know what your best reps do differently?"
- "How much of your Monday pipeline review is about understanding what happened versus deciding what to do?"
- "If you could change one thing about your CRM, what would it be?"

**For Sales Ops Manager (P-002):**
- "How much of your week is spent on CRM administration versus strategic work?"
- "What's your rep adoption rate for CRM data entry?"
- "How do you build your forecast today? What's the manual piece?"
- "What broke last time you tried to change something in the CRM?"
- "If your CRM captured rep behavior automatically, what would you do with your time?"

**For CTO (P-003):**
- "How does your current CRM's AI scoring work? Can you audit the model?"
- "What's your data architecture look like for sales data? Any integration pain?"
- "What are your security and compliance requirements for sales tools?"
- "How do you evaluate AI vendors — what does 'explainable AI' mean to you?"
- "What's the integration story with your existing tech stack?"

[Source: personas/persona-vp-sales.md#pains] [Source: personas/persona-sales-ops.md#pains] [Source: personas/persona-cto.md#pains]

---

## Objection Handling

Use the objection responses from `messaging-positioning/messaging-framework.md#objection-handling`. The six core objections:

1. "We're already on Salesforce."
2. "AI scoring sounds like a black box."
3. "Our reps won't adopt another tool."
4. "We just need better reporting."
5. "We're too small / not ready for AI."
6. "How long until we see value?"

### Handling Rules
- **Listen first.** Let them state the objection fully before responding.
- **Acknowledge the concern.** It's usually legitimate.
- **Use the documented response.** Don't improvise — the messaging framework has tested responses.
- **Add a proof point.** Every objection response includes one. Use it.
- **Offer evidence.** "Want to see how a deal score breaks down?" is the strongest response to the black-box objection.

---

## Persona-Specific Language Guidance

### When Talking to P-001 VP Sales / CRO
- **Lead with:** Outcomes — forecast accuracy, rep performance, board confidence.
- **Use:** Revenue language, quota language, pipeline metrics.
- **Avoid:** Technical implementation details, data architecture, API specs.
- **Tone:** Peer-to-peer. Confident. Results-oriented.
- **Key phrase:** "Your CRM should help your team sell, not just report on what they sold."

### When Talking to P-002 Sales Ops Manager
- **Lead with:** Operational efficiency — less admin, better data, smarter workflows.
- **Use:** Ops language, adoption metrics, workflow terms.
- **Avoid:** Board-level outcomes (that's VP Sales territory), deep technical specs.
- **Tone:** Empathetic to their pain. Practical. Outcome-oriented.
- **Key phrase:** "You were hired to optimize the sales process. NovaCRM lets you actually do that."

### When Talking to P-003 CTO
- **Lead with:** Architecture, security, explainability, integration.
- **Use:** Technical language, data model terms, compliance frameworks.
- **Avoid:** Sales outcomes, quota language, coaching narratives.
- **Tone:** Technical peer. Transparent. No hand-waving.
- **Key phrase:** "Explainable AI. Customer-specific models. API-first. SOC 2 compliant."

---

## Proposal Language

When writing proposal or deal language:
- **Scope:** Reference UC-001 Pipeline Forecasting, UC-002 Rep Coaching, UC-003 CRM Migration outcomes.
- **Pricing:** Per-rep/month model. No hidden platform fees.
- **Timeline:** Onboard in weeks. First deal scores in 30 days. Forecast impact in 90 days.
- **Deliverables:** AI-native CRM with behavior-based scoring, coaching engine, parallel migration support.

### Language to Use
- "AI-native CRM that learns from your team's selling behavior."
- "Behavior-based forecasting, rep coaching, and managed migration."
- "Purpose-built for mid-market B2B sales teams."

### Language to Avoid
- "Platform" (sounds enterprise and bloated)
- "Solution" (generic, says nothing)
- "Best-in-class" or "world-class" (unsubstantiated superlatives)

---

## Competitive Positioning in Sales

When competitors come up in conversation, reference `messaging-positioning/core-positioning.md#competitive-landscape`.

### Key Talking Points
- **vs. Salesforce:** "Salesforce is a reporting tool with AI features added. NovaCRM is an AI-native CRM. The AI isn't a layer — it's the product."
- **vs. HubSpot CRM:** "HubSpot's AI is marketing-first. NovaCRM's AI is sales-first — built around rep behavior, not lead scoring."
- **vs. Pipedrive:** "Pipedrive is a pipeline visualization tool. NovaCRM is a pipeline intelligence tool. Visualization shows you the board. Intelligence tells you which deals to play."
- **vs. Close:** "Close optimizes the communication workflow. NovaCRM optimizes the selling strategy."

### Rules
- Never disparage competitors by name. Describe the category gap.
- Always bring it back to the "reporting tool vs. selling tool" distinction.
- Position by architecture, not features.

[Source: messaging-positioning/core-positioning.md#competitive-landscape]
