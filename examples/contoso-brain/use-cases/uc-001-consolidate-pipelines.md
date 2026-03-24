---
title: "Consolidate Fragmented Data Pipelines"
use_case_id: "UC-001"
version: "1.0.0"
last_updated: "2026-03-22"
status: "production"

personas:
  setup_by: "P-002"
  used_by:
    - "P-002"
    - "P-004"
  evaluated_by: "P-001"

icp_pain: "PAIN-1, PAIN-3"
current_alternative: "Run 3-5 different pipeline tools in parallel — Stitch for SaaS sources, custom Python scripts for internal APIs, cron jobs for file drops, Airflow DAGs for orchestration. Each has its own failure modes, monitoring, and tribal knowledge."
tools_involved:
  - "Stitch / Fivetran (partial)"
  - "Custom Python scripts"
  - "Cron jobs"
  - "Airflow / Dagster"
  - "dbt (transform layer)"
  - "Contoso Pipelines (replacement)"
proof: "3 production customers completed full consolidation in Q4 2025. Average: 4.2 tools replaced. Median time-to-new-source dropped from 11 days to 6 hours."

connected_use_cases:
  - "UC-002"
  - "UC-004"
---

# UC-001: Consolidate Fragmented Data Pipelines

## Trigger

A data engineering team realizes their pipeline sprawl has become a liability. The most common trigger event: **a new data source request arrives and the estimated time to deliver is >2 weeks.** Not because the work is hard — because nobody can figure out where the new source fits in the existing tangle of tools.

Other trigger events:

- A critical pipeline fails at 2 AM and the on-call engineer doesn't know which of four systems to check first.
- A new data engineer joins and their onboarding takes 3+ weeks because they need to learn Stitch, Airflow, two custom Python frameworks, and a legacy cron setup.
- Finance asks "why are we paying for Stitch, Fivetran, and an Airflow cluster?" and nobody has a good answer.
- The data eng team does a tool audit and finds 47 pipelines across 5 systems, 12 of which are undocumented.
- An acqui-hire or acquisition brings in a second stack that needs to be merged.

The underlying pattern: **the cost of operating fragmented pipelines — in time, money, cognitive load, and incident risk — crosses the threshold where consolidation becomes cheaper than continuing.**

## Current State

Before Contoso Pipelines, the typical mid-market data engineering team (3-8 engineers, 200-2000 employee company) has accumulated pipeline tools organically:

- **Stitch or Fivetran** handles SaaS source ingestion (Salesforce, HubSpot, Stripe). Works fine for what it does but covers maybe 30% of the team's data sources.
- **Custom Python scripts** handle internal APIs, proprietary data formats, and anything the managed tools don't support. These scripts live in a repo that 2 people understand. No tests. Logging is `print()` statements.
- **Cron jobs** on an EC2 instance or a Kubernetes CronJob handle scheduled file drops, SFTP pulls, and batch exports. The cron tab is the documentation.
- **Airflow or Dagster** orchestrates the complex multi-step pipelines. The DAGs reference the Python scripts, the cron outputs, and sometimes the Stitch destinations. The orchestrator has become the glue layer nobody planned for.
- **dbt** handles transformations in the warehouse. It consumes whatever lands in the raw layer, regardless of which tool put it there.

The result:

- **Mean time to add a new data source: 11 days.** Not because the connector is hard to build, but because the team has to decide which system to use, how to monitor it, where to land the data, and how to wire it into the existing orchestration.
- **On-call rotation is painful.** When a pipeline fails, the first 30 minutes are spent figuring out which system failed and how to access its logs. Stitch has a web UI. Airflow has its own UI. The cron jobs require SSH.
- **Knowledge is siloed.** Engineer A built the Airflow DAGs. Engineer B wrote the Python scripts. Engineer C manages the Stitch account. When any of them is on vacation, their pipelines are effectively unmanaged.
- **Cost is opaque.** The team pays for Stitch ($2,400/mo), an Airflow cluster ($1,800/mo in compute), the EC2 instance running crons ($400/mo), and 2-3 engineers spending ~40% of their time on pipeline maintenance instead of new work. Total visible cost: ~$4,600/mo in tooling. Total real cost including engineering time: $35,000-50,000/mo.

## Desired Outcome

After consolidation onto Contoso Pipelines:

- **Single platform for all pipeline types.** SaaS connectors (200+ pre-built), custom sources (config-driven with the Contoso SDK), file ingestion, API polling, event streaming — all managed in one system.
- **Time to add a new data source: <1 day.** For pre-built connectors, it's minutes. For custom sources, the config-driven approach means a new pipeline is a YAML file and a PR, not a new codebase.
- **Unified monitoring.** Every pipeline — regardless of source type — reports health, latency, row counts, and freshness through the same observability layer. One dashboard, one alerting system, one on-call runbook.
- **Pipelines as code.** Every pipeline is defined in version-controlled configuration. Changes go through PR review. Rollbacks are `git revert`. Audit trail is the commit history.
- **Onboarding drops from 3 weeks to 3 days.** New engineers learn one system, one CLI, one config format. The cognitive surface area shrinks by 70-80%.
- **Cost reduction of 30-50%.** Eliminating redundant tooling licenses and reducing engineering maintenance time. Typical customer sees $15,000-25,000/mo in savings when factoring in engineering time reclaimed.

## Why It Matters

Pipeline consolidation is rarely the *exciting* project. Nobody gets promoted for reducing tool count. But the downstream effects are significant:

- **Data engineering velocity directly correlates with product velocity.** When the data team can add a new source in hours instead of weeks, product teams get the data they need to make decisions. Features ship faster. Experiments run sooner.
- **Incident frequency drops.** Fewer systems = fewer failure modes = fewer 2 AM pages. Data eng teams running 3-5 tools report 3-4x more pipeline incidents than teams on a single platform.
- **Hiring becomes easier.** "You'll work with Contoso Pipelines" is a simpler pitch than "You'll need to learn Stitch, Airflow, our custom Python framework, and a legacy cron setup." The team's bus factor improves.
- **Finance gets a clear cost line.** One vendor, one invoice, one ROI calculation. Instead of explaining five line items to the CFO, the VP of Data Eng has one number.

## Gotchas

- **Migration is not instant.** Consolidation typically takes 6-12 weeks for a team with 40-60 pipelines. The team runs old and new systems in parallel during migration. This means *higher* cost and complexity in the short term before the payoff.
- **Not every pipeline migrates cleanly.** The custom Python scripts that handle proprietary formats or unusual APIs may require rewriting as Contoso SDK connectors. Budget 20-30% of migration time for these edge cases.
- **Stitch/Fivetran connectors may not have 1:1 equivalents.** Contoso has 200+ connectors, but some niche SaaS sources (especially vertical-specific tools) may not be covered. Check connector coverage before committing to full consolidation.
- **Airflow DAGs with complex branching logic need rearchitecting.** Contoso's orchestration model is config-driven, not code-driven. Teams with deeply customized Airflow setups (custom operators, complex XCom patterns) will need to rethink their approach, not just port their configs.
- **Organizational resistance is real.** The engineer who built the custom Python framework may see consolidation as a threat to their role. The team lead who chose Airflow may take it personally. Technical migrations are also political.
- **Data validation during migration is critical.** Running old and new pipelines in parallel and comparing outputs catches discrepancies early. Skipping this step leads to "the numbers changed" conversations with stakeholders weeks after cutover.

## Brain Gaps

- **No migration playbook in the Brain.** The Brain documents the *what* and *why* of consolidation but not the *how*. A migration playbook with week-by-week phases, parallel-run validation checklists, and cutover criteria would strengthen CS onboarding and sales confidence.
- **No connector coverage comparison matrix.** Sales needs a side-by-side comparison of Contoso connectors vs. Stitch/Fivetran/Airbyte. This doesn't exist in the Brain yet.
- **No cost calculator methodology.** The "30-50% cost reduction" claim needs a documented methodology. What assumptions go into the engineering-time calculation? What's the hourly rate used? This needs to be in the Brain so all disciplines cite the same math.
- **No customer migration case study.** The proof field references 3 customers but there's no writeup in the Brain. CS and marketing both need this.
- **Persona P-004 (Data Engineer IC) is underdeveloped.** The day-to-day user of consolidated pipelines is the individual contributor, but the Brain's persona file focuses on leadership. Need more detail on IC motivations, daily workflows, and evaluation criteria.

## Persona-Specific Angles

### P-001: CTO / VP Engineering
Cares about: total cost of ownership, team velocity, incident reduction, hiring/retention. Consolidation is a strategic bet — fewer tools means less surface area for the team to maintain. The CTO evaluates this on a 6-12 month horizon: did we ship more data features? Did on-call get better? Did we stop losing candidates because of our messy stack?

### P-002: VP of Data Engineering
This is their project. They own the decision, run the migration, and are accountable for the outcome. They care about: connector coverage (will Contoso actually replace everything?), migration risk (can we do this without breaking production?), team buy-in (will my engineers adopt it?), and timeline (can we do this in one quarter?). The VP of Data Eng is the primary buyer and the hardest to convince because they've been burned by tool consolidation promises before.

### P-003: Head of Product / Analytics
Doesn't care about the tools. Cares about the *output*: how fast can the data team deliver the data I need? Consolidation matters to them only insofar as it reduces the data eng backlog and gets them new data sources faster. They evaluate success by asking: "When I request a new data source, how many days until it's in the warehouse?"

### P-004: Data Engineer (IC)
The person who actually lives in the tools every day. They care about: developer experience (is the Contoso CLI good? is the config format sane?), debugging (can I trace a failure from alert to root cause in <5 minutes?), flexibility (can I still write custom logic when the config-driven approach isn't enough?), and career growth (does learning Contoso Pipelines make me more marketable or less?).

## Connected Use Cases

- **UC-002: Get Pipeline Observability Without Building It.** Consolidation onto Contoso Pipelines automatically delivers unified observability. Teams doing UC-001 get UC-002 as a side effect. Conversely, teams that start with UC-002 (observability only) often end up doing UC-001 (full consolidation) within 6 months.
- **UC-004: Migrate from Legacy ETL to Modern Stack.** UC-004 is a specific variant of UC-001 where the fragmented tooling is dominated by a single legacy platform (Informatica, Talend, SSIS). The migration pattern is different — it's replacement rather than consolidation — but the outcome is similar.
