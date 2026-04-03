---
title: Sales Agent Usage Guide
version: "1.1.0"
last_updated: "2026-04-02"
scope: "Sales team agents and operators"
owner: "Brain Owner"
status: production
discipline: sales
---

# Sales Agent Usage Guide

This guide governs all agents producing sales content for Natter. Read AGENTS.md first — this file supplements, not replaces, the core governance rules.

---

## Role of Sales in the Brain

Sales uses the Brain to prepare for conversations, produce roundtable invitations, handle objections, and write proposal language. Every sales output must:
- Reference the specific persona being engaged
- Connect the conversation to documented pains in `icp.md` and the persona file
- Use approved messaging from `messaging-positioning/messaging-framework.md`
- Handle objections using documented responses from the messaging framework
- Never promise capabilities that aren't supported by use case status fields

---

## Graduated Free Trial Motion

Natter's sales motion is a graduated free trial, not a traditional demo-to-close cycle. The product sells itself through experience.

### Stage 1: Roundtable Invitation
- Natter hosts executive roundtables on strategic topics (GenAI, workforce transformation, employee voice).
- 30-200 senior executives from target accounts participate in peer-to-peer conversations.
- The roundtable IS the product demo. Executives experience Natter by participating.
- Output: AI-generated insight report shared with all participants within 48 hours.

### Stage 2: Session 1 — Champion Builder (30 participants)
- Prospect agrees to run a small session inside their organization.
- 30 employees matched into 1:1 conversations on a topic the CHRO cares about.
- The champion (typically Head of People Analytics) sees the insight report and builds confidence.
- No MSA required. Session 1 is a proof of value.

### Stage 3: Session 2 — Executive Moment (5,000-20,000 participants)
- Full-scale deployment across the organization.
- The CHRO presents Natter-generated insights to the board.
- This is the "executive moment" — the depth and speed of insight creates urgency for an MSA.

### Stage 4: MSA Conversation
- Following the executive moment, the commercial conversation moves to a Master Service Agreement.
- The proof is already in the data. The negotiation is about scope and pricing, not proof of concept.

[Source: icp.md#buying-process]

---

## Signal-Based Outbound

Natter's outbound motion is signal-driven. Do not send generic sequences. Every outbound message must connect to a specific buying signal from `icp.md#buying-signals`.

### Signal to Message Mapping

| Signal | Primary Message | Persona | Approach |
|--------|----------------|---------|----------|
| New CHRO or CPO hire | "New to the role? 50 CHROs are joining a Natter roundtable on [topic]. Join the conversation." | P-001 CHRO | Peer value, roundtable invitation |
| Survey response rates below 50% | "Your engagement survey response rate is declining. What if you could hear from every employee — in their own words — by Friday?" | P-001 CHRO | Pain: survey fatigue, depth gap |
| Major transformation announced | "You just announced [transformation]. How will you know if 50,000 employees understand and support the change?" | P-003 VP Strategy | Pain: alignment gap, readiness data |
| Qualtrics/Glint contract renewal | "Before you renew, ask: does your listening program capture what people actually think — or just what they click?" | P-002 People Analytics | Competitive: depth gap |
| Board-level workforce discussion | "Your board is asking about workforce culture. Natter gives you board-ready insight — from employee conversations, not survey clicks." | P-001 CHRO | Outcome: board-ready data |
| Head of People Analytics hired | "You were hired to deliver workforce intelligence. What if your first initiative captured 100x more insight than a survey?" | P-002 People Analytics | Pain: qualitative data at scale |
| DEI initiative without voice capture | "You've committed to inclusive listening. Natter gives every employee a voice — not just the loudest." | P-001 CHRO | Use case: DEI voice capture |
| Post-M&A integration | "Culture is the #1 reason integrations fail. What if you could hear from both organizations — honestly — within 60 days?" | P-003 VP Strategy | Use case: transformation |

[Source: icp.md#buying-signals]

---

## Discovery Prep

Before every discovery call, the agent should produce a prep doc.

### Company Context
- **Size and industry:** (from LinkedIn, annual reports, or provided data)
- **ICP fit score:** Does this company match `icp.md`? Flag any anti-ICP signals.
- **Current listening tools:** Which survey platform(s) are they on? (Shapes the competitive angle.)
- **Buying signal:** What triggered this conversation?
- **Persona match:** Which persona file best describes the person on the call?

### Pain Hypotheses
Based on the persona and signal, hypothesize which pains from `icp.md#pains` and the persona file are most likely active. Rank by probability.

### Discovery Questions

**For CHRO / Chief People Officer (P-001):**
- "How effective is your current listening program at capturing what employees really think?"
- "How long does it take to go from survey close to board-ready insights?"
- "When was the last time employee feedback directly changed a strategic decision?"
- "How confident are you that frontline employees are represented in your listening data?"
- "If you could hear from every employee — in their own words, not survey clicks — what would you ask them?"

**For VP/Head of People Analytics (P-002):**
- "How much of your qualitative data comes from open-ended survey responses vs. interviews or focus groups?"
- "How long does it take your team to code and analyze open-ended survey responses?"
- "What's your response rate on open-ended questions? How many words does the average response contain?"
- "How does your listening data integrate with your broader analytics stack?"
- "If you could get 1,000+ words per participant instead of 10, how would that change your analysis?"

**For VP Strategy / Transformation Leader (P-003):**
- "How do you gauge whether employees actually understand and support the transformation strategy?"
- "What signal do you have on workforce readiness for the [AI/restructuring/M&A] initiative?"
- "When was the last time workforce sentiment data changed a transformation decision?"
- "How much are you spending on consulting firms for workforce research? How many people do they reach?"
- "If you could hear from 20,000 employees in under an hour — on any strategic topic — what would you ask?"

[Source: personas/persona-chro.md#pains] [Source: personas/persona-people-analytics.md#pains] [Source: personas/persona-vp-strategy.md#pains]

---

## Objection Handling

Use the objection responses from `messaging-positioning/messaging-framework.md#objection-handling`. The six core objections:

1. "We already have Qualtrics/Glint/Peakon."
2. "How is this different from a survey?"
3. "My employees won't talk on video."
4. "What about data privacy?"
5. "This sounds expensive."
6. "We tried focus groups — our employees don't open up."

### Handling Rules
- **Listen first.** Let them state the objection fully before responding.
- **Acknowledge the concern.** It's usually legitimate.
- **Use the documented response.** Don't improvise — the messaging framework has tested responses.
- **Add a proof point.** Every objection response includes one. Use it.
- **Position as complement.** The most common objection is "we already have [survey tool]." The response is always complement, not replace.

---

## Persona-Specific Language Guidance

### When Talking to P-001 CHRO / Chief People Officer
- **Lead with:** Board-ready insight, workforce strategy, employee trust.
- **Use:** Strategic language, board-level framing, peer CHRO references.
- **Avoid:** Technical methodology details, integration specs. The CHRO cares about outcomes.
- **Tone:** Peer-to-peer. Confident. Research-backed.
- **Key phrase:** "Not another survey. A conversation intelligence engine that gives your board the insight surveys can't."

### When Talking to P-002 VP/Head of People Analytics
- **Lead with:** Methodological rigor, qualitative depth at scale, data integration.
- **Use:** Analytics language, research methodology terms, statistical concepts.
- **Avoid:** Board-level strategy talk (that's the CHRO's domain), simplified AI claims.
- **Tone:** Technical peer. Transparent about methodology. Respectful of their expertise.
- **Key phrase:** "1,000+ words per conversation. 100x more qualitative data than a survey. Exportable via API into your analytics stack."

### When Talking to P-003 VP Strategy / Transformation Leader
- **Lead with:** Strategic intelligence, transformation readiness, speed of insight.
- **Use:** Strategy and transformation language, board-quality framing, consulting cost anchors.
- **Avoid:** HR language (engagement, sentiment), survey methodology details.
- **Tone:** Strategic peer. Results-focused. McKinsey-quality framing.
- **Key phrase:** "What if you knew what 50,000 employees really think about the transformation — before the board meeting?"

### When Talking to P-004 Head of Revenue / VP Sales
- **Lead with:** Sales coaching at scale, customer voice, win/loss intelligence.
- **Use:** Revenue language — pipeline, win rate, quota, ramp time, coaching.
- **Avoid:** HR framing entirely. No "engagement" or "sentiment."
- **Tone:** Revenue peer. Action-oriented. ROI-driven.
- **Key phrase:** "Every rep's best practices. Every customer's real voice. At scale."

---

## Proposal Language

When writing proposal or deal language:
- **Scope:** Reference the specific use cases: UC-001 Employee Listening, UC-002 Roundtables, UC-003 GenAI Change Management, UC-004 DEI, UC-005 Product Research.
- **Pricing:** Platform fee ($65K-$100K/year) + per-participant usage ($4-$10/participant). Annual minimum $125K-$200K.
- **Timeline:** Session design in 1-2 weeks. First session within 30 days. Insight report within 24 hours of session.
- **Comparison anchors:** McKinsey $600K+, Qualtrics enterprise $250K+, Natter $200-$400K.

### Language to Use
- "Conversation intelligence engine for enterprise workforce insight."
- "Qualitative depth at quantitative scale — decision-ready in under an hour."
- "Trusted by 150+ enterprises including [relevant named customers]."

### Language to Avoid
- "Survey replacement" (we complement, not replace)
- "Solution" (generic, says nothing)
- "Best-in-class" or "world-class" (unsubstantiated superlatives)

---

## Sales Methodology

### BANT (Qualify)
Budget, Authority, Need, Timeline. Pre-pipeline gate. Every opportunity must clear BANT before entering the pipeline.

### PREDICT (Manage)
7 dimensions scored R/A/G:
- **P**roblem — Is the pain confirmed and quantified?
- **R**elationships — Do we have champion + economic buyer access?
- **E**ngagement — Are they actively participating in the evaluation (roundtable, Session 1)?
- **D**ecision process — Do we understand the procurement path?
- **I**nternal processes — Are legal, security (ISO 27001), and IT aligned?
- **C**ompetitors — Do we know who else is being evaluated?
- **T**iming — Is there a compelling event driving the timeline?

### BATNA (Negotiate)
Best Alternative to a Negotiated Agreement. Strong PREDICT = weak customer BATNA = hold price. The graduated free trial builds PREDICT strength organically — by Session 2, the customer has already experienced the value.

### Forecast
"Will we win?" (PREDICT health) × "When?" (timing confidence). Commit / Best Case / Pipeline auto-categorized.

### Friday Flywheel
1. Friday AM: Auto-assembly of each rep's week from Fathom + Salesforce + email
2. Friday PM: 5-min micro-journal (The Win, The Friction, The Surprise, One Priority)
3. Friday evening: Auto-generated Weekly GTM Digest
4. Monday: 30-min meeting — deal clinic, playbook tension, priorities → Brain commits

---

## Competitive Positioning in Sales

When competitors come up in conversation, reference `messaging-positioning/core-positioning.md#competitive-landscape`.

### Key Talking Points
- **vs. Qualtrics:** "Qualtrics captures what people click on a form. Natter captures what people say to each other. A survey answer averages 10 words. A Natter conversation yields 1,000+. Same people, 100x the insight."
- **vs. CultureAmp:** "CultureAmp is a strong engagement measurement tool. Natter adds the qualitative depth CultureAmp can't — real conversations at scale, not survey responses."
- **vs. Glint/Microsoft:** "Glint gives you frequent pulses. Natter gives you depth. More surveys doesn't mean more insight — it means more survey fatigue."
- **vs. McKinsey/Deloitte consulting:** "McKinsey charges $600K+ for 30 interviews that take 8 weeks. Natter runs 20,000 conversations in an hour for $200-400K. And it's repeatable."
- **vs. Town halls:** "Town halls hear from 5 people. Natter hears from 20,000. Simultaneously. Anonymously."

### Rules
- Never disparage competitors by name. Describe the depth gap.
- Always bring it back to "what people click vs. what people actually say."
- Position as complement to existing survey platforms, not replacement.
- Anchor pricing against consulting ($600K+), not against survey tools ($50K).

[Source: messaging-positioning/core-positioning.md#competitive-landscape]
