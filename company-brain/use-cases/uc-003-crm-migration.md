---
title: "CRM Migration to NovaCRM"
use_case_id: "UC-003"
version: "1.1.0"
last_updated: "2026-03-24"
status: "partially-supported"
owner: "Brain Owner"

personas:
  setup_by: "P-002"
  used_by:
    - "P-002"
    - "P-001"
  evaluated_by: "P-003"

icp_pain: "P5, P6"
current_alternative: "Stay on Salesforce/HubSpot/Pipedrive despite dissatisfaction. Or hire a Salesforce consultant ($50-100K) to 'fix' the current implementation. Or attempt a DIY migration with CSV exports and months of pain."
tools_involved:
  - "NovaCRM migration toolkit"
  - "Field mapping wizard"
  - "Data validation engine"
  - "Parallel running mode"
  - "Adoption tracking dashboard"
proof: "3 beta customers migrated from HubSpot and Pipedrive. Average migration time: 4 weeks. Data accuracy post-migration: 99.2%. Rep adoption at 30 days: 85%."

connected_use_cases:
  - "UC-001"
  - "UC-002"
---

# UC-003: CRM Migration to NovaCRM

## Trigger

A Sales Ops leader or VP Sales decides to evaluate CRM alternatives. The trigger is usually a threshold of accumulated pain, not a single event:

- The current CRM renewal is coming up and the price increase is significant. The team asks "are we getting value from this?"
- A new VP Sales joins and inherits a CRM that doesn't match their operating model. They want a clean start.
- Sales Ops has spent 6+ months trying to fix data quality in the current CRM and is losing the battle. They start to wonder if the tool itself is part of the problem.
- The company outgrows the current CRM's capabilities. Pipedrive was fine at 20 reps; at 80 reps, it's breaking.
- AI deal scoring (UC-001) is a strategic priority and the current CRM can't support it without expensive add-ons.

## Current State

Before migrating to NovaCRM, the team is stuck in one of these situations:

- **Salesforce: powerful but painful.** The company is paying $150-200/user/month for Enterprise. Customization has created a Frankenstein instance. Reports take a Salesforce admin to modify. Reps hate it. But it works, barely, and the switching cost feels enormous.
- **HubSpot: outgrown.** They started on HubSpot's free tier or Starter plan. It was great for the first 20 reps. Now they need features that require Enterprise pricing, the data model is too rigid, and HubSpot's sales tools don't match their process.
- **Pipedrive/Close: too basic.** These tools work well for small teams but lack the reporting depth, integration ecosystem, and customization that a 100+ person company needs. The team has outgrown it.
- **The migration fear is real.** Everyone has a CRM migration horror story. Data was lost. Workflows broke. Reps refused to adopt the new tool. The last migration took 6 months and $100K in consultant fees. Nobody wants to go through that again.
- **Sunk cost mentality.** "We've invested too much in Salesforce to leave." Customizations, integrations, and training represent years of investment. Walking away feels like waste, even if staying is worse.

The result: companies stay on CRMs they've outgrown or that don't serve them because the migration risk feels worse than the status quo. They're trapped.

## Outcome

After migrating to NovaCRM using the guided migration toolkit:

- **Field mapping is automated and validated.** The migration toolkit ingests the source CRM schema, proposes field mappings, and flags conflicts. Sales Ops reviews and adjusts, but they're not starting from a blank spreadsheet.
- **Data validation catches errors before go-live.** The toolkit runs validation rules on every record: missing required fields, duplicate detection, format inconsistencies, orphaned relationships. Issues are surfaced in a report with suggested fixes.
- **Parallel running reduces risk.** Both CRMs run simultaneously for 2-4 weeks. New data is written to both systems. Reps use NovaCRM as primary while Sales Ops validates that nothing is lost. If something goes wrong, the old CRM is still there.
- **Adoption tracking shows real usage.** The migration dashboard tracks which reps are logging into NovaCRM, which features they're using, and where they're falling back to the old system. Sales Ops can target adoption interventions.
- **Historical data powers AI immediately.** Deal history, activity logs, and outcome data from the previous CRM train the AI scoring model (UC-001) from day one. The team doesn't have to wait 6 months for the AI to learn.
- **Timeline: 4-6 weeks from kickoff to full cutover.** Not 6 months. Not $100K in consultants.

## Gotchas

- **Custom objects and fields require manual mapping decisions.** The automated mapper handles standard CRM objects well (contacts, companies, deals, activities). Custom objects, custom fields, and calculated fields need human judgment. The more customized the source CRM, the longer the mapping phase.
- **Workflow migration is manual.** Salesforce workflows, HubSpot sequences, and Pipedrive automations must be rebuilt in NovaCRM's workflow builder. The toolkit doesn't auto-convert workflow logic. Sales Ops should audit which workflows are actually used vs. legacy clutter.
- **Integrations must be reconnected.** Every integration with the old CRM (email sync, calendar, Slack, BI tools) needs to be reconfigured for NovaCRM. The CTO (P-003) should review the integration plan before migration starts.
- **Rep adoption is a people problem, not a tech problem.** NovaCRM can be objectively better, but reps who liked the old system will resist. A structured rollout with champion reps, training sessions, and a clear "why we switched" narrative is essential.
- **Data cleanup should happen before migration, not after.** Migrating dirty data into a new CRM just moves the mess. Sales Ops should run a data cleanup pass in the old CRM before starting the export. NovaCRM's validation catches issues, but fixing them pre-migration is faster.

## Gaps

- **No automated workflow conversion.** Salesforce Process Builder flows, HubSpot workflows, and Pipedrive automations must be manually recreated. An automated conversion tool is on the roadmap but not yet built.
- **Limited Salesforce CPQ migration support.** Companies using Salesforce CPQ for quoting have complex product and pricing data that the current toolkit doesn't handle well. Manual export and restructuring is required.
- **No rollback after cutover.** During parallel running, rollback is straightforward — just keep using the old CRM. After the full cutover, there's no one-click rollback. The recommendation is to keep the old CRM read-only for 90 days as insurance.
- **Migration toolkit supports Salesforce, HubSpot, and Pipedrive only.** Companies migrating from Close, Zoho, or other CRMs must use the generic CSV import, which is functional but less guided.
- **No white-glove migration service yet.** The toolkit is self-serve with documentation. Companies with very complex Salesforce instances (500+ custom fields, 50+ workflow rules) may need more hands-on support than the current toolkit provides. A professional services offering is planned for Q4 2026.
- **Attachment and file migration is limited.** Deal attachments and email attachments from the source CRM can be migrated, but file size limits and format restrictions apply. Large file libraries may need manual migration.

## Connected Use Cases

- **UC-001: Pipeline Forecasting.** The quality of the migration directly impacts AI model accuracy. Complete deal history with outcomes (won/lost/reason) is the training data for the scoring engine. Incomplete migration means slower AI ramp.
- **UC-002: AI-Powered Rep Coaching.** Historical activity data (emails, calls, meetings) from the previous CRM feeds the coaching pattern engine. The more complete the activity migration, the faster coaching insights become accurate.
