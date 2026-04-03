---
title: Product Agent Usage Guide
version: "1.1.0"
last_updated: "2026-04-02"
scope: "Product team agents and operators"
owner: "Brain Owner"
status: production
discipline: product
---

# Product Agent Usage Guide

This guide governs all agents producing product content for Natter. Read AGENTS.md first — this file supplements, not replaces, the core governance rules.

---

## Role of Product in the Brain

Product uses the Brain to make grounded decisions about what to build, who to build for, and how to evaluate success. The Brain provides:
- **Personas** with product hooks — what each persona needs from the Natter experience
- **Use cases** with status fields, gaps, and connected use cases — the product landscape
- **ICP pains** — the market problems the product must solve
- **Competitive landscape** — where competitors are weak and where they're catching up

Product does not own the Brain (PMM does), but Product is a critical contributor — especially to use case status fields, gap documentation, and technical feasibility assessments.

---

## Core Product Capabilities

Natter's product is built around these capabilities:

1. **Conversation orchestration** — Matching 1 to 20,000+ participants into 1:1 peer-to-peer video conversations using intelligent algorithms
2. **AI transcription and analysis** — Real-time transcription, theme detection, sentiment analysis, and priority scoring from every conversation
3. **Insight delivery** — Decision-ready reports with themes, sentiment, demographic breakdowns, and recommended actions within an hour
4. **Participant matching** — Intelligent matching that accounts for role, geography, tenure, demographic goals, and conversation history
5. **Session formats** — Live sessions, on-demand sessions, and always-on Natalie AI agent
6. **Privacy and trust** — PII redaction at transcription, ISO 27001, GDPR/CCPA compliance

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

#### P-001 CHRO / Chief People Officer
- **Relevance:** [High/Medium/Low]
- **Expected reaction:** [Based on P-001 product hooks]
- **Why they care:** [Specific outcome this enables]

#### P-002 VP/Head of People Analytics
- **Relevance:** [High/Medium/Low]
- **Expected reaction:** [Based on P-002 product hooks]
- **Why they care:** [Specific analytical or methodological improvement]

#### P-003 VP Strategy / Transformation Leader
- **Relevance:** [High/Medium/Low]
- **Expected reaction:** [Based on P-003 product hooks]
- **Why they care:** [Specific transformation or strategic value]

#### P-004 Head of Revenue / VP Sales
- **Relevance:** [High/Medium/Low]
- **Expected reaction:** [Based on P-004 product hooks]
- **Why they care:** [Specific revenue or coaching value]

### Use Case Impact
- **Use case:** [UC-XXX]
- **Current status:** [from use case file]
- **New status after feature ships:** [projected]
- **Gaps closed:** [specific gaps from the use case file]
- **Gaps remaining:** [what's still missing]

### Trust and Safety Considerations
[Every feature must be evaluated for impact on psychological safety, anonymity, and employee trust. If the feature could be perceived as surveillance or could compromise anonymity, document the risk and the mitigation.]

### Acceptance Criteria
[Grounded in persona expectations and use case outcomes]

### Citations
[Source files used]
```

---

## Persona Reaction Assessment

When evaluating any product decision (feature, UX, session format, matching algorithm, AI model change), produce a persona reaction assessment.

### Per-Persona Assessment
For each relevant persona:
1. **Read the persona file.** Focus on goals, pains, and product hooks.
2. **Predict the reaction.** Will this persona view this positively, negatively, or neutrally?
3. **Ground the prediction.** Cite the specific persona attribute that drives the reaction.
4. **Identify risks.** What could go wrong for this persona?

### Example Format
```
**P-001 CHRO**
Reaction: Positive
Reason: This feature directly improves insight delivery speed, which
addresses their #4 pain (insight-to-action gap).
[Source: personas/persona-chro.md#pains]
Risk: If the insight report format requires interpretation by a data
analyst, the CHRO won't use it directly. Must be board-ready out of the box.

**P-002 People Analytics Leader**
Reaction: Cautious
Reason: New AI model changes theme detection methodology.
[Source: personas/persona-people-analytics.md#decision-process]
Risk: If the methodology change isn't documented and validated,
People Analytics will lose confidence in the data quality.
```

---

## Adoption Scoring

Use cases have status fields. Product should track adoption metrics that map to each use case.

### Adoption Criteria by Use Case

| Use Case | Adoption Indicator | Measurement |
|----------|--------------------|-------------|
| UC-001 Employee Listening | Sessions run and insight reports delivered | # sessions/quarter, participant count, insight report completion rate |
| UC-002 Roundtables | Roundtables hosted and attendee conversion | # roundtables/quarter, attendee → Session 1 conversion rate |
| UC-003 GenAI Change Management | Transformation sessions with longitudinal tracking | # sessions with follow-up sessions, theme shift tracking |
| UC-004 DEI Inclusive Voice | DEI-focused sessions with demographic analysis | # DEI sessions, demographic representation rates |
| UC-005 Product Research | Product research sessions with feature themes | # product research sessions, integration with product tools |

### Scoring Framework
- **Fully adopted:** Use case is core to the customer's quarterly workflow. Previous approach deprecated or supplemented.
- **Partially adopted:** Use case is used but episodically, not as part of an ongoing program.
- **Not adopted:** Use case was enabled but the customer hasn't run a session yet.

---

## Roadmap Candidates from Brain Gaps

The Brain provides structured roadmap input through use case gaps.

### Process
1. Read every use case file's `## Gaps` section.
2. Compile a gap inventory — every documented gap across all use cases.
3. Prioritize gaps by: persona impact (which personas are affected?), pain severity (does the gap block a critical workflow?), competitive exposure (does a competitor address this gap?), and technical feasibility.
4. Translate high-priority gaps into feature candidates.
5. Write feature briefs using the template above.

### Key Gaps from Current Use Cases

| Gap | Source | Persona Impact | Priority |
|-----|--------|:---:|:---:|
| Audio-only mode for frontline workers | UC-001, UC-004 | P-001, P-002 | High |
| Real-time translation for multilingual sessions | UC-001, UC-004 | P-001, P-002 | High |
| Automated insight-to-action tracking | UC-001 | P-001 | High |
| Multi-round conversation formats | UC-002 | P-001, P-003 | Medium |
| White-label roundtable hosting | UC-002 | P-001 | Medium |
| Integration with survey platforms (Qualtrics, CultureAmp) | UC-001 | P-002 | High |
| Manager-level insight dashboards | UC-003 | P-001, P-003 | Medium |
| Integration with product analytics tools | UC-005 | P-004 | Medium |
| In-product session invitations | UC-005 | P-004 | Medium |

---

## Design Evaluation Criteria

When evaluating design concepts (session UX, insight dashboards, matching interfaces, AI outputs), assess against persona expectations.

### Persona-Specific Design Principles

**For P-001 (CHRO):**
- Board-ready out of the box. Insight reports must be presentable without reformatting.
- Outcomes prominent, mechanisms hidden. They want to see themes and actions, not AI model details.
- Executive summary first. Details available on drill-down but never required.

**For P-002 (People Analytics Leader):**
- Methodology visible. How themes were detected, confidence scores, supporting quotes — all inspectable.
- Demographic analysis built in. Slice by function, geography, level, tenure, custom demographics.
- API-first. Every data output accessible via API for integration with analytics stack.

**For P-003 (VP Strategy):**
- Strategic framing. Dashboards labeled "Transformation Readiness" not "Employee Engagement."
- Longitudinal views. Theme shifts across sessions over time.
- Board-ready export. One-click PowerPoint or PDF with executive summary.

**For P-004 (Revenue Leader):**
- Sales-formatted. Pipeline, win rate, coaching metrics — not HR dashboards.
- Peer coaching prompts. AI-generated conversation starters based on deal data and win patterns.
- Customer intelligence views. Themes from customer roundtables mapped to accounts and segments.

### Evaluation Criteria

| Criteria | Source | Question |
|----------|--------|----------|
| **Persona fit** | Persona product hooks | Does this design match how the persona works? |
| **Use case support** | use-cases/ | Does this design enable the documented use cases? |
| **Trust and safety** | brand-vision.md#core-values | Does this design maintain psychological safety and anonymity? |
| **Competitive edge** | core-positioning.md | Does this design reinforce "Conversational Insights Platform" positioning? |
| **Adoption risk** | Persona pains | Will this create friction that blocks participation or adoption? |

---

## Rules for Product Agents

1. **Ground every feature in a use case gap.** If a feature doesn't close a documented gap, question why it exists.
2. **Evaluate trust impact before shipping.** Every feature must be assessed for impact on psychological safety and anonymity. If a feature could be perceived as surveillance, it needs a trust mitigation plan.
3. **Check persona reactions before shipping.** Every significant feature should have a persona reaction assessment.
4. **Update use case status fields when features ship.** If a gap is closed, the use case file must reflect it.
5. **Don't build for personas we don't serve.** If a feature request comes from outside the ICP, flag it.
6. **Coordinate with PMM on positioning impact.** If a feature changes a differentiator or competitive claim, PMM must update the Brain.
7. **Document what we chose NOT to build.** Rejected roadmap candidates with rationale are as valuable as accepted ones.

[Source: messaging-positioning/core-positioning.md#differentiators] [Source: personas/] [Source: use-cases/]
