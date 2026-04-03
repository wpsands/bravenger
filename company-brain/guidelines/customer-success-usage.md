---
title: Customer Success Agent Usage Guide
version: "1.1.0"
last_updated: "2026-04-02"
scope: "Customer Success team agents and operators"
owner: "Brain Owner"
status: production
discipline: customer-success
---

# Customer Success Agent Usage Guide

This guide governs all agents producing Customer Success content for Natter. Read AGENTS.md first — this file supplements, not replaces, the core governance rules.

---

## Role of Customer Success in the Brain

CS ensures customers adopt Natter, run successful sessions, receive high-quality insights, and expand from single sessions to ongoing programs. CS uses the Brain to:
- Build persona-specific onboarding guides
- Design session playbooks (conversation prompts, matching rules, communication plans)
- Produce insight delivery guides for customer teams
- Generate health checks and adoption assessments
- Create expansion playbooks (single session → quarterly → continuous)
- Escalate product gaps discovered during customer engagement

Use cases are the primary input for CS. Every CS artifact maps to one or more use cases.

---

## Onboarding Guides

After a customer signs the MSA, CS builds persona-specific onboarding guides.

### Onboarding Guide Template

```markdown
## Onboarding: [Customer Name] — [Use Case Title]

### Use case
- **ID:** [UC-XXX]
- **Status:** [from use case file]
- **Primary user:** [persona who uses this day-to-day]

### What this use case does
[Outcome section from the use case file, adapted for the customer's context]

### Session design
[Conversation prompts, matching rules, and session format — designed for the customer's specific objectives]

### Communication plan
[Internal communication to employees: what Natter is, how anonymity works, what to expect, what happens with the data]

### What to watch for
[Gotchas section from the use case file]

### Known limitations
[Gaps section from the use case file — be transparent]

### Related use cases
[Connected use cases the customer should explore after the first session]

### Success indicators
[How the customer knows this use case is working]
```

### Persona-Specific Onboarding Sequences

**For P-001 CHRO / Chief People Officer:**
1. **Week 1:** Strategic alignment session. Define objectives: What does the CHRO want to learn? Which population? What actions will they take based on the data? Design the conversation prompts together.
2. **Week 2:** Session design review. Finalize conversation prompts, matching rules, and communication plan. CHRO approves the employee communication.
3. **Week 3:** Pilot session (30 participants). Run Session 1. Deliver insight report within 24 hours. Walk through themes, sentiment, and recommended actions with the CHRO.
4. **Week 4:** Session 2 planning. Based on Session 1 results, plan full-scale deployment (5,000-20,000 participants). Prepare the CHRO's board presentation with Session 1 data.

**For P-002 VP/Head of People Analytics:**
1. **Week 1:** Methodology review. Walk through Natter's matching algorithms, AI transcription, theme detection, and sentiment analysis. Address statistical validity questions. Demonstrate the validation dashboard.
2. **Week 2:** Integration setup. Configure HRIS integration for matching and demographic analysis. Set up API export to analytics stack (Visier, Power BI, Tableau). Verify data flows.
3. **Week 3:** Session design collaboration. People Analytics team co-designs conversation prompts and matching rules. Review demographic representation targets.
4. **Week 4:** Pilot session analysis. Review Session 1 insight report in depth. People Analytics validates themes against expert coding. Calibrate AI sensitivity settings.

**For P-003 VP Strategy / Transformation Leader:**
1. **Week 1:** Transformation brief. Understand the strategic initiative. Design conversation prompts that surface readiness, concerns, and alignment data.
2. **Week 2:** Session deployment. Run transformation readiness session. Deliver insight report within 24 hours.
3. **Week 3:** Insight presentation. Help VP Strategy prepare board-quality transformation readiness report using Natter data. Include heatmaps by business unit and geography.
4. **Week 4:** Longitudinal plan. Design follow-up sessions at 90-day and 6-month intervals to track transformation progress.

**For P-004 Head of Revenue / VP Sales:**
1. **Week 1:** Use case scoping. Define whether the focus is sales coaching (peer-to-peer rep conversations), customer voice (customer roundtables), or both.
2. **Week 2:** Session design. Design peer coaching conversation prompts or customer roundtable topics. Configure matching for sales context.
3. **Week 3:** Pilot session. Run first coaching or customer roundtable session.
4. **Week 4:** Revenue integration. Connect Natter insights to Salesforce account records. Design ongoing cadence.

### Onboarding Rules
- Always ground onboarding in use cases, not features. The customer cares about "what insight will I get," not "what buttons exist."
- Be transparent about gaps. If a use case is "partially-supported," say so during onboarding. Don't let the customer discover limitations on their own.
- Tailor every walkthrough to the persona. The CHRO wants to see the board-ready insight report. The People Analytics leader wants to see the methodology and API. The VP Strategy wants to see the transformation readiness heatmap.
- Session design is the most important onboarding activity. The quality of conversation prompts determines the quality of insight.

[Source: use-cases/uc-001-employee-listening.md#outcome] [Source: use-cases/uc-002-thought-leadership-roundtables.md#outcome]

---

## Session Design Playbooks

Session design is the single most important factor in insight quality. CS owns session design.

### Session Design Template

```markdown
## Session Design: [Customer Name] — [Topic]

### Objective
[What does the customer want to learn?]

### Conversation prompts
[2-3 specific, provocative questions designed to surface actionable insight]
- Prompt 1: [...]
- Prompt 2: [...]
- Prompt 3: [...]

### Matching rules
- Match across: [functions, geographies, levels, etc.]
- Avoid matching: [direct reports, same team, etc.]
- Demographic targets: [representation goals]

### Session format
- Live / On-demand / Natalie AI
- Participant count: [target]
- Conversation duration: [7 minutes standard]

### Communication plan
- Employee invite: [who sends, what it says, when]
- Manager briefing: [what managers should know]
- Anonymity assurance: [specific language about PII redaction]

### Insight delivery
- Report delivery: [within X hours]
- Recipient: [CHRO, People Analytics, VP Strategy]
- Format: [executive summary, detailed report, API export]
```

### Prompt Design Principles
- **Specific beats generic.** "What's the one thing that would make the biggest difference to your ability to do your job well?" beats "How do you feel about work?"
- **Provocative beats safe.** "What's the most important thing leadership doesn't understand about the frontline?" produces richer data than "How would you rate your relationship with leadership?"
- **Future-oriented beats backward-looking.** "What should the company do differently in the next 6 months?" produces more actionable data than "How was the last 6 months?"
- **Two prompts per session maximum.** More prompts means less depth per topic. Go deep, not wide.

---

## Expansion Playbook

Expansion from single session to ongoing program is the primary revenue growth lever.

### Expansion Path

| Stage | Trigger | CS Action |
|-------|---------|-----------|
| **Session 1 → Session 2** | CHRO sees insight report and wants to scale | Help plan full-scale deployment. Prepare board presentation with Session 1 data. |
| **Session 2 → Quarterly program** | Board requests recurring insight | Design quarterly session cadence with rotating topics. Show longitudinal theme tracking. |
| **Quarterly → Continuous (Natalie AI)** | Customer wants always-on listening | Deploy Natalie AI agent. Design always-on conversation library. Train customer team on continuous insight dashboard. |
| **People → Additional use cases** | Customer sees value in People and wants Revenue, DEI, or Product Research | Cross-sell additional use case. Design new session with new persona stakeholders. |
| **Single BU → Enterprise-wide** | One business unit's success creates demand from others | Help champion present results to other BU leaders. Standardize session design across the enterprise. |

### Expansion Signals
- CHRO asks to present Natter insights at board meeting
- People Analytics asks about API integration for continuous data feed
- VP Strategy requests a transformation readiness session
- Customer asks about pricing for larger participant counts
- Customer refers Natter to a peer organization

### Expansion Blockers
- Insight report didn't surface surprising or actionable themes (session design problem)
- Participation rate was low (communication/trust problem)
- Customer couldn't translate insights into visible action (insight-to-action gap)
- Champion left the organization (relationship risk)
- Budget cycle doesn't align with expansion timing (timing problem)

---

## Health Checks

CS should periodically assess whether the customer is getting value from Natter.

### Health Indicators

| Indicator | Healthy | At Risk | Unhealthy |
|-----------|---------|---------|-----------|
| **Session frequency** | Quarterly or continuous sessions running | Annual or irregular | No sessions run in 6+ months |
| **Participation rate** | 80%+ of target population participates | 50-80% participation | Below 50% participation |
| **Insight quality** | Themes are specific, actionable, and surprising | Themes are expected and generic | Customer doesn't review insight report |
| **Action taken** | Customer acts on themes within 4 weeks | Customer acknowledges themes but delays action | No visible action taken |
| **Expansion signal** | Customer asks about additional use cases or larger scale | Customer is satisfied but not growing | Customer questions renewal |
| **Champion engagement** | Champion (P-002) is active, engaged, and promoting internally | Champion is passive | Champion has left or disengaged |

### Remediation Actions

| Risk Level | Action |
|------------|--------|
| **Healthy** | Quarterly check-in. Share new feature updates. Propose expansion opportunities. |
| **At Risk** | Schedule session design review. Diagnose: Is it a prompt quality issue? A communication/trust issue? An insight-to-action issue? Re-design the next session to address the gap. |
| **Unhealthy** | Escalate immediately. Diagnose root cause: Is it a participation problem (employees won't join)? A value problem (insights aren't actionable)? A champion problem (key stakeholder left)? A trust problem (employees don't believe in anonymity)? |

### Persona-Specific Health Signals

**P-001 CHRO disengaged:** They're not reviewing insight reports or presenting to the board. Re-engage with a "what would you ask your workforce right now?" conversation. Redesign the next session around a topic the CHRO cares about today — GenAI readiness, transformation progress, culture measurement.

**P-002 People Analytics disengaged:** They've stopped requesting API exports or analyzing demographic breakdowns. Re-engage with a methodology improvement session — new matching algorithms, enhanced theme detection, or integration with a new analytics tool.

**P-003 VP Strategy requesting different data:** They want transformation readiness data but the sessions are producing engagement themes. Re-design conversation prompts to address strategic questions, not HR questions. The session design determines the data.

**P-004 Revenue Leader not seeing ROI:** Sales coaching sessions aren't producing measurable coaching insights. Review conversation prompts — are they specific enough? Review matching — are reps being paired effectively? Consider a customer roundtable format instead if coaching isn't landing.

[Source: use-cases/uc-001-employee-listening.md] [Source: use-cases/uc-002-thought-leadership-roundtables.md] [Source: goals.md#gtm-goals-by-discipline]
