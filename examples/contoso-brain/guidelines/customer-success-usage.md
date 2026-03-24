---
title: Customer Success Agent Usage Guide
version: "1.0.0"
last_updated: "2026-03-22"
scope: "Customer Success team agents and operators"
owner: "Contoso GTM Team"
status: production
discipline: customer-success
---

# Customer Success Agent Usage Guide

This guide governs all agents producing Customer Success content for Contoso. Read AGENTS.md first — this file supplements, not replaces, the core governance rules.

---

## Role of Customer Success in the Brain

CS ensures customers adopt Contoso Pipelines and get measurable value from the platform. CS uses the Brain to:
- Build onboarding guides from documented use cases
- Create migration playbooks for teams moving off custom scripts, Airflow, or competing tools
- Produce health checks that assess pipeline adoption and platform utilization
- Identify and execute expansion plays based on use case maturity
- Generate QBR (Quarterly Business Review) content grounded in metrics

Use cases are the primary input for CS. Every CS artifact maps to one or more use cases.

---

## Onboarding Guides

After a customer signs, CS builds an onboarding guide tailored to their primary use case and persona.

### Onboarding Guide Template

```markdown
## Onboarding: [Customer Name] — [Use Case Title]

### Use Case
- **ID:** [UC-XXX]
- **Status:** [from use case file]
- **Primary user persona:** [P-XXX — who will use this day-to-day]
- **Executive sponsor persona:** [P-XXX — who approved the purchase]

### What This Use Case Does
[Outcome section from the use case file, adapted for the customer's context]

### When to Use It
[Trigger section from the use case file, adapted for the customer's context]

### What to Watch For
[Gotchas section from the use case file — these are the common failure modes]

### Onboarding Milestones

| Milestone | Target Date | Owner | Status |
|-----------|------------|-------|--------|
| Account provisioned and team invited | Day 1 | CS | |
| First pipeline defined in YAML and deployed | Day 3 | Customer (P-001) | |
| 5 connectors configured and syncing | Week 1 | Customer (P-001) | |
| Observability alerts configured | Week 2 | Customer (P-001/P-003) | |
| First legacy pipeline decommissioned | Week 3 | Customer (P-001) | |
| Team onboarding session completed | Week 2 | CS | |
| 30-day health check scheduled | Day 1 | CS | |

### Success Criteria (30-day)
- [ ] At least 10 pipelines running on Contoso
- [ ] At least 3 team members with active accounts
- [ ] Observability dashboard reviewed weekly
- [ ] Zero unresolved pipeline failures older than 24 hours
- [ ] Customer confirms: "This is easier than what we had before"
```

### Onboarding by Plan

| Plan | Onboarding Motion | CS Touch |
|------|------------------|----------|
| **Starter** | Self-serve with docs and email support | Automated onboarding emails, 30-day check-in email |
| **Growth** | Guided onboarding via Slack | Dedicated Slack channel, 2 onboarding calls, 30-day review |
| **Enterprise** | White-glove with dedicated CSM | Dedicated CSM, custom onboarding plan, weekly check-ins for 60 days |

---

## Migration Playbooks

Many customers come from custom scripts, Airflow, or a competing tool. CS builds migration playbooks from the "current state" sections of use case files.

### Migration Playbook Template

```markdown
## Migration Playbook: [Source] to Contoso Pipelines

### Source Environment
- **Current tool:** [e.g., Custom Python scripts, Airflow, Fivetran, Stitch]
- **Pipeline count:** [Number of pipelines to migrate]
- **Connector count:** [Number of data sources]
- **Team size:** [Number of people who interact with pipelines]

### Migration Phases

#### Phase 1: Audit (Week 1)
- Inventory all existing pipelines, connectors, and transforms
- Map each pipeline to a Contoso YAML config structure
- Identify pipelines that can migrate as-is vs. those needing custom transforms
- Flag any connectors not yet supported by Contoso (escalate to Product)

#### Phase 2: Parallel Run (Weeks 2-3)
- Deploy Contoso pipelines alongside existing infrastructure
- Run both systems in parallel for critical pipelines
- Compare output: row counts, freshness, schema accuracy
- Configure observability and alerts in Contoso

#### Phase 3: Cutover (Week 4)
- Decommission legacy pipelines one at a time, starting with lowest-risk
- Monitor Contoso pipeline health for 48 hours after each cutover
- Escalate any failures to CS + Engineering

#### Phase 4: Cleanup (Week 5)
- Remove legacy infrastructure
- Document the final Contoso pipeline architecture
- Conduct team training on YAML config, observability, and troubleshooting
- Schedule 30-day post-migration health check

### Migration Risk Matrix

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| Unsupported connector | Medium | High | Pre-audit connector coverage, escalate to Product early |
| Custom transform incompatibility | Medium | Medium | Identify during Phase 1, use Python UDF bridge |
| Team resistance to config-as-code | Low | High | Run a workshop showing the YAML workflow before migration |
| Data discrepancy during parallel run | Medium | Medium | Row count and schema comparison automated in Phase 2 |
| Downtime during cutover | Low | High | Cutover one pipeline at a time, never batch |
```

### Migration Paths by Source

| Source | Typical Timeline | Key Challenges | Success Rate |
|--------|-----------------|----------------|-------------|
| Custom Python scripts | 3-5 weeks | Undocumented logic, no tests, tribal knowledge | 90% (most common migration) |
| Airflow DAGs | 4-6 weeks | Complex DAG dependencies, custom operators | 85% |
| Fivetran | 2-3 weeks | Simple migration, main risk is connector parity | 95% |
| Stitch | 1-2 weeks | Minimal complexity, straightforward mapping | 98% |
| No existing tool (greenfield) | 1-2 weeks | Not a migration — pure onboarding | 99% |

---

## Health Checks

CS performs regular health checks to assess whether customers are getting value from the platform.

### Health Check Template

```markdown
## Health Check: [Customer Name] — [Date]

### Account Overview
- **Plan:** [Starter / Growth / Enterprise]
- **MRR:** [$X]
- **Pipelines active:** [N]
- **Connectors in use:** [N]
- **Rows/month:** [N]
- **Team members active (last 30 days):** [N]

### Use Case Adoption

| Use Case | Status | Adoption Level | Notes |
|----------|--------|---------------|-------|
| UC-001 Consolidate Pipelines | [Active/Inactive] | [Full/Partial/None] | |
| UC-002 Self-Serve Connectors | [Active/Inactive] | [Full/Partial/None] | |
| UC-003 Pipeline Observability | [Active/Inactive] | [Full/Partial/None] | |
| UC-004 Compliance and Lineage | [Active/Inactive] | [Full/Partial/None] | |

### Health Score

| Dimension | Score (1-5) | Signal |
|-----------|------------|--------|
| **Usage depth** | | Pipelines active, rows processed, daily logins |
| **Usage breadth** | | Team members active, connectors in use |
| **Feature adoption** | | Observability configured, RBAC set up, Git sync enabled |
| **Support health** | | Ticket volume, resolution time, sentiment |
| **Expansion signals** | | Approaching row limits, requesting new connectors, asking about Enterprise features |

### Overall Health: [Healthy / At Risk / Critical]

### Recommended Actions
1. [Action 1]
2. [Action 2]
3. [Action 3]
```

### Health Score Thresholds

| Score | Classification | CS Action |
|-------|---------------|-----------|
| 4.0-5.0 | **Healthy** | Maintain cadence, look for expansion opportunities |
| 3.0-3.9 | **Needs attention** | Schedule proactive check-in, identify underused features |
| 2.0-2.9 | **At risk** | Immediate outreach, identify blockers, escalate if needed |
| 1.0-1.9 | **Critical** | Executive escalation, rescue plan, consider product gaps |

---

## Expansion Plays

CS identifies expansion opportunities based on use case maturity and usage signals.

### Expansion Signal Matrix

| Signal | Expansion Play | Target Persona |
|--------|---------------|----------------|
| Approaching 10 connector limit (Starter) | Upgrade to Growth | P-002 VP Engineering |
| Approaching 50M row limit (Growth) | Upgrade to Enterprise | P-002 VP Engineering |
| Multiple teams requesting access | RBAC conversation, upgrade to Growth+ | P-003 Platform Engineer |
| SOC 2 audit approaching | Compliance and lineage features, Enterprise | P-002 VP Engineering, P-004 Head of Data |
| New data sources requested frequently | Self-serve connectors, additional connector packages | P-001 Data Eng Lead |
| Pipeline count growing rapidly | Enterprise for unlimited pipelines + dedicated CSM | P-004 Head of Data |
| Custom connector requests | Enterprise with custom connector development | P-003 Platform Engineer |

### Expansion Conversation Framework

1. **Ground in data.** Show the customer their usage metrics. "You're at 45 of 50 connectors."
2. **Connect to their pain.** Reference the persona pain that drove the original purchase. "When you started, the problem was connector sprawl. That's solved. Now the challenge is scaling the platform to the whole org."
3. **Propose the next use case.** "You've consolidated pipelines. The natural next step is pipeline observability — catching failures before they hit production."
4. **Quantify the value.** "Your team spent 12 hours last month debugging pipeline failures. With observability, the median debug time drops to under 15 minutes."
5. **Reference the plan.** "The Enterprise plan includes unlimited connectors, dedicated CSM, and SLA-backed uptime. Based on your growth trajectory, it makes sense to evaluate."

[Source: pricing.md#packages] [Source: use-cases/index.md]

---

## QBR (Quarterly Business Review) Content

For Growth and Enterprise customers, CS produces QBR materials grounded in Brain data.

### QBR Template

```markdown
## Quarterly Business Review: [Customer Name] — Q[X] [Year]

### Executive Summary
[2-3 sentences on account health, key wins, and priorities for next quarter]

### Usage Summary

| Metric | Last Quarter | This Quarter | Trend |
|--------|-------------|-------------|-------|
| Active pipelines | | | |
| Connectors in use | | | |
| Rows processed/month | | | |
| Active team members | | | |
| Pipeline failures (P0/P1) | | | |
| Mean time to recovery | | | |

### Use Case Progress
[For each use case the customer is pursuing, show adoption level and progress]

### Value Delivered
- **Engineering hours reclaimed:** [Estimate based on pipeline migration]
- **Pipeline incidents reduced:** [Compare to pre-Contoso baseline]
- **New data sources onboarded:** [Count of connectors added this quarter]
- **Compliance readiness:** [Lineage coverage percentage]

### Recommendations for Next Quarter
1. [Recommendation grounded in use case gaps or expansion signals]
2. [Recommendation grounded in persona needs]
3. [Recommendation grounded in product roadmap]

### Open Items
| Item | Owner | Target Date |
|------|-------|------------|
| | | |
```

---

## Handoff Documentation

### Sales-to-CS Handoff

When a deal closes, Sales provides CS with a handoff doc. CS validates it against the Brain.

```markdown
## Sales to CS Handoff: [Customer Name]

### Deal Context
- **Plan:** [Starter / Growth / Enterprise]
- **Primary buyer:** [Name, title — map to persona P-XXX]
- **Champion:** [Name, title — map to persona P-XXX]
- **Buying signal:** [What triggered the deal — from icp.md#buying-signals]
- **Primary use case:** [UC-XXX]
- **Secondary use cases discussed:** [UC-XXX, UC-XXX]

### Customer Environment
- **Current pipeline tooling:** [What are they replacing or augmenting?]
- **Data warehouse:** [Snowflake / BigQuery / Redshift / Databricks / other]
- **Team size (data engineering):** [N]
- **Pipeline count (estimated):** [N]
- **Compliance requirements:** [SOC 2, GDPR, HIPAA, none]

### Expectations Set During Sales
[What did Sales promise? Be specific. CS must deliver against these expectations.]

### Risks and Gotchas
[Anything CS should know — internal politics, tight timeline, previous bad experience with similar tools]
```

### CS Validation Checklist
After receiving a handoff, CS validates:
- [ ] Primary use case exists in the Brain and status is accurate
- [ ] Persona mapping is correct (buyer and champion mapped to real persona files)
- [ ] No capabilities were promised that aren't supported (check use case status fields)
- [ ] Migration complexity is realistic given the customer's current environment
- [ ] Onboarding timeline aligns with the plan's CS motion (self-serve, guided, or white-glove)

[Source: use-cases/index.md] [Source: personas/index.md] [Source: pricing.md#packages]
