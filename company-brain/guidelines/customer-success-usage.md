---
title: Customer Success Agent Usage Guide
version: "1.0.0"
last_updated: "2026-03-24"
scope: "Customer Success team agents and operators"
owner: "Brain Owner"
status: production
discipline: customer-success
---

# Customer Success Agent Usage Guide

This guide governs all agents producing Customer Success content for NovaCRM. Read AGENTS.md first — this file supplements, not replaces, the core governance rules.

---

## Role of Customer Success in the Brain

CS ensures customers adopt NovaCRM and achieve measurable value from the three core use cases. CS uses the Brain to:
- Build persona-specific onboarding guides
- Create CRM migration playbooks
- Produce use case walkthroughs for customer teams
- Generate health checks and adoption assessments
- Escalate product gaps discovered during customer engagement

Use cases are the primary input for CS. Every CS artifact maps to one or more use cases.

---

## Onboarding Guides

After a customer signs and migration begins, CS builds persona-specific onboarding guides.

### Onboarding Guide Template

```markdown
## Onboarding: [Customer Name] — [Use Case Title]

### Use case
- **ID:** [UC-XXX]
- **Status:** [from use case file]
- **Primary user:** [persona who uses this day-to-day]

### What this use case does
[Outcome section from the use case file, adapted for the customer's context]

### When to use it
[Trigger section from the use case file, adapted for the customer's workflow]

### What to watch for
[Gotchas section from the use case file]

### Known limitations
[Gaps section from the use case file — be transparent]

### Related use cases
[Connected use cases the customer should know about]

### Success indicators
[How the customer knows this use case is working]
```

### Persona-Specific Onboarding Sequences

**For P-001 VP Sales / CRO:**
1. **Week 1:** Forecast dashboard walkthrough. Show behavior-based scores vs. deal-stage forecasts. Demonstrate the coaching alert feed.
2. **Week 2:** First AI-generated forecast review. Compare NovaCRM forecast to their existing process. Highlight where scores diverged from gut feel.
3. **Week 3:** Coaching workflow activation. Show how to act on coaching alerts. Connect alerts to 1:1 meeting prep.
4. **Week 4:** Board reporting setup. Configure the forecast views the VP Sales needs for board and exec meetings.

**For P-002 Sales Ops Manager:**
1. **Week 1:** System configuration walkthrough. Scoring rules, pipeline stages, integration setup. Confirm data flowing correctly from email, calendar, and meeting tools.
2. **Week 2:** Migration validation. Run parallel reports — old CRM vs. NovaCRM. Verify data integrity. Flag discrepancies.
3. **Week 3:** Rep adoption monitoring. Track which reps are active. Address adoption blockers. Configure team-level dashboards.
4. **Week 4:** Handoff to steady state. Sales Ops owns configuration going forward. CS shifts to support.

**For P-003 CTO:**
1. **Week 1:** Architecture review. Walk through data model, API endpoints, security posture. Answer integration questions.
2. **Week 2:** AI model explainability session. Show how deal scores are computed. Walk through a sample score's behavior inputs.
3. **Week 3:** Security and compliance validation. SOC 2 documentation review. Data residency confirmation. Audit trail demonstration.
4. **Week 4:** Technical sign-off. CTO confirms architecture meets requirements. No open technical blockers.

### Onboarding Rules
- Always ground onboarding in use cases, not features. The customer cares about "what can I achieve," not "what buttons exist."
- Be transparent about gaps. If a use case is "partially-supported," say so during onboarding. Don't let the customer discover limitations on their own.
- Tailor every walkthrough to the persona. The VP Sales wants to see the forecast. The Sales Ops Manager wants to see the configuration. The CTO wants to see the architecture.

[Source: use-cases/uc-001-pipeline-forecasting.md#outcome] [Source: use-cases/uc-002-rep-coaching.md#outcome] [Source: use-cases/uc-003-crm-migration.md#outcome]

---

## Migration Playbooks

Migration playbooks help customers transition from their current CRM to NovaCRM.

### Migration Playbook Template

```markdown
## Migration: [Current CRM] to NovaCRM

### Current state
[Which CRM? How long have they been on it? Key customizations?]

### What changes
[Specific changes to the customer's sales workflow]

### What stays the same
[Tools, processes, or habits that don't change — reduce perceived disruption]

### Migration path
1. Phase 1: NovaCRM deployed in parallel. Historical data imported. AI begins learning.
2. Phase 2: Reps begin using NovaCRM for forecasting and coaching. Old CRM still live for reference.
3. Phase 3: NovaCRM is primary CRM. Old CRM deprecated. Parallel run ends.

### Risks
[From use case gotchas + customer-specific risks]

### Success criteria
[How we know migration is complete and successful]
```

### Common Migration Sources

| From | Key Challenge | NovaCRM Advantage |
|------|---------------|-------------------|
| **Salesforce** | Complex customizations, admin dependency, data sprawl | Parallel migration. No admin required. AI learns from historical Salesforce data before cutover. |
| **HubSpot CRM** | Marketing-sales data entanglement, limited sales AI | Clean separation of marketing and sales data. Sales-first AI from day one. |
| **Pipedrive** | Lightweight tool to sophisticated tool transition, team readjustment | Familiar pipeline UX with AI layer. Reps don't lose the visual model they know. |
| **Close** | Communication workflow dependency, call data migration | Communication integrations preserved. Call data imported for AI behavior analysis. |
| **Spreadsheets / no CRM** | No historical data, no process discipline | AI starts learning from day one. No legacy data problems. Clean start advantage. |

### Migration Rules
- **Never force a big-bang cutover.** Parallel migration is mandatory. The old CRM stays live until the team is confident.
- **Validate data integrity before declaring migration complete.** Run comparison reports between old and new systems.
- **Set realistic timelines.** Straightforward migrations (Pipedrive, Close) take 2-4 weeks. Complex migrations (Salesforce) take 4-8 weeks.
- **Flag customization risk early.** If the customer has heavy Salesforce customizations, scope the migration carefully and set expectations about what translates and what doesn't.

---

## Use Case Walkthroughs

CS produces walkthroughs for each active use case, adapted to the customer's context.

### Walkthrough Structure
1. **Name and context.** What is this use case and why does this customer care?
2. **Trigger.** When should the customer use this? (From use case trigger section.)
3. **What NovaCRM provides.** Which features and data drive this use case.
4. **Expected outcome.** What does good look like? (From use case outcome section.)
5. **Common gotchas.** What can go wrong? (From use case gotchas section.)
6. **Known gaps.** What NovaCRM can't do yet. (From use case gaps section.)

### Rules
- Walkthroughs explain the "what" and "why," not step-by-step clicks. NovaCRM has product documentation for the "how."
- Adapt to the customer's context. Reference their team size, their sales process, their industry.
- Include gaps. Transparency prevents support tickets and builds trust.

---

## Health Checks

CS should periodically assess whether the customer is getting value from NovaCRM.

### Health Indicators

| Indicator | Healthy | At Risk | Unhealthy |
|-----------|---------|---------|-----------|
| **Forecast usage** | Weekly AI forecast reviewed by VP Sales | Monthly or sporadic | Never reviewed |
| **Coaching alerts** | Alerts acknowledged and acted upon weekly | Alerts generated but ignored | Alerts disabled |
| **Rep adoption** | 80%+ of reps active in NovaCRM weekly | 50-80% active | Below 50% active |
| **Data quality** | Behavior data flowing from all integrations | Some integrations broken | Manual entry only |
| **Migration status** | Old CRM deprecated | Parallel run past 8 weeks | Team reverted to old CRM |

### Remediation Actions

| Risk Level | Action |
|------------|--------|
| **Healthy** | Quarterly check-in. Offer new feature walkthroughs as product evolves. |
| **At Risk** | Schedule an adoption review. Identify which persona is disengaged and why. Re-run relevant onboarding walkthrough. |
| **Unhealthy** | Escalate immediately. Diagnose root cause: Is it an adoption problem (reps won't use it)? A data problem (integrations broken)? A champion problem (Sales Ops left)? A value problem (AI scores aren't accurate yet)? |

### Persona-Specific Health Signals

**P-001 VP Sales disengaged:** They're not reviewing the AI forecast. The coaching alerts aren't reaching them. Re-engage with a forecast accuracy comparison — show them what NovaCRM caught that their old process missed.

**P-002 Sales Ops disengaged:** They've stopped configuring and optimizing. They may feel the system is "set and forget" or they've hit a wall. Re-engage with a configuration optimization session.

**P-003 CTO raising concerns:** Technical debt, security questions, or integration issues surfacing post-deployment. Schedule a technical review. Address concerns with documentation and architecture transparency.

[Source: use-cases/uc-001-pipeline-forecasting.md] [Source: use-cases/uc-002-rep-coaching.md] [Source: use-cases/uc-003-crm-migration.md]
