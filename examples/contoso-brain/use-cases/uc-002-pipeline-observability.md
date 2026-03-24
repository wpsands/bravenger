---
title: "Get Pipeline Observability Without Building It"
use_case_id: "UC-002"
version: "1.0.0"
last_updated: "2026-03-22"
status: "production"

personas:
  setup_by: "P-002"
  used_by:
    - "P-002"
    - "P-004"
  evaluated_by: "P-001"

icp_pain: "PAIN-2, PAIN-4"
current_alternative: "Build observability in-house: custom Datadog dashboards, Slack alerts from cron scripts, manual freshness checks in the warehouse, or — most commonly — no pipeline monitoring at all until something breaks visibly."
tools_involved:
  - "Datadog / Grafana (partial, self-built)"
  - "Slack alerting (custom webhooks)"
  - "dbt tests (transform-layer only)"
  - "Great Expectations (if adopted)"
  - "Contoso Pipelines Observability (replacement)"
proof: "Internal benchmarking across 12 customers shows median MTTR for pipeline incidents dropped from 47 minutes to 11 minutes after enabling Contoso observability. Two customers avoided data-quality incidents that had previously caused incorrect board-level reporting."

connected_use_cases:
  - "UC-001"
  - "UC-003"
---

# UC-002: Get Pipeline Observability Without Building It

## Trigger

A data incident exposes the team's lack of pipeline visibility. The canonical trigger: **a stakeholder discovers that a dashboard or report has been showing stale or incorrect data for hours (or days), and nobody on the data team knew.**

Other trigger events:

- The CEO presents a board deck with numbers that are 3 days stale because a Salesforce sync silently failed over the weekend. The data eng team finds out on Monday morning from an angry Slack message.
- A pipeline starts running 4x slower than normal. Nobody notices for two weeks until the warehouse compute bill arrives and it's $8,000 higher than expected.
- An engineer manually checks pipeline status every morning by querying the warehouse for max timestamps. They go on vacation. Nobody picks up the ritual. Three sources go stale.
- The data team adopts dbt tests for the transform layer but realizes they have zero visibility into the ingestion and delivery layers upstream of dbt.
- A compliance audit asks "how do you know your data pipelines are running correctly?" and the answer is "we don't, systematically."

The underlying pattern: **the team has pipelines but no instrumentation. They find out about problems from downstream consumers, not from their own systems.**

## Current State

Before Contoso Pipelines observability, mid-market data teams typically have one of three monitoring postures:

### Posture 1: Nothing (most common, ~60% of prospects)
No pipeline monitoring exists. The team knows pipelines are running because the dashboards update. When a pipeline fails silently — the job runs but produces zero rows, or the API returns partial data, or the connector hits a rate limit and retries indefinitely — nobody knows until a human notices the downstream impact. Mean time to detection: **4-48 hours** depending on how frequently someone looks at the affected dashboard.

### Posture 2: DIY Monitoring (~30% of prospects)
The team has cobbled together monitoring from existing tools:
- **Datadog or Grafana dashboards** tracking cron job exit codes and Airflow task states. Covers orchestration health but not data quality. The dashboard shows "the job ran" but not "the job produced correct data."
- **Slack webhooks** that post on failure. These fire for hard failures (job crashes) but miss soft failures (job completes but data is wrong or incomplete).
- **Warehouse-layer freshness checks.** A dbt test or a scheduled SQL query checks `max(updated_at)` on key tables. This catches staleness but not schema changes, row count anomalies, or partial loads.
- **Great Expectations or Soda** for data quality checks on the transform layer. Powerful but only covers what's been explicitly configured, and only downstream of ingestion.

Total engineering investment to build and maintain this patchwork: **2-4 engineer-weeks to set up, 4-8 hours/week ongoing maintenance.** And it still has blind spots.

### Posture 3: Managed Tool for Part of the Stack (~10% of prospects)
The team uses Monte Carlo, Bigeye, or similar for warehouse-layer observability. These tools detect anomalies in the warehouse but have limited visibility into the pipeline layer *before* data lands. When an anomaly is detected, the root cause investigation still requires SSHing into the pipeline system and reading logs manually.

**Regardless of posture, the common gap is the same: no single view across the full pipeline lifecycle — from source extraction through transformation to delivery — with alerting, SLA tracking, and root cause context.**

## Desired Outcome

After enabling Contoso Pipelines observability:

- **Real-time pipeline health dashboard.** Every pipeline — pre-built connector, custom source, file ingestion, event stream — reports status, latency, throughput, and error state to a unified dashboard. One URL for the entire data platform's health.
- **Automated alerting on failure AND anomaly.** Hard failures (job crashes, auth errors, API timeouts) trigger alerts immediately. Soft anomalies (row count drops >50% from baseline, unexpected schema changes, latency exceeds 2x historical average) trigger alerts with context.
- **SLA tracking per pipeline.** The team defines freshness SLAs per data source: "Salesforce data must be <1 hour old in the warehouse." Contoso tracks actual freshness against SLA and alerts before the SLA is breached, not after.
- **Root cause context in every alert.** When a pipeline fails, the alert includes: what failed, when, the error message, the last successful run, the affected downstream tables, and a link to the detailed log. Mean time to root cause drops from 30+ minutes to <5 minutes.
- **Historical observability.** Pipeline performance over time: latency trends, throughput trends, failure frequency. The VP of Data Eng can answer "are our pipelines getting more reliable or less?" with data, not gut feel.
- **Zero engineering investment to set up.** Observability is built into the platform. There's no separate tool to configure, no Datadog integration to maintain, no custom dashboards to build. It exists because the pipelines exist.

## Why It Matters

- **Data trust is fragile.** When stakeholders discover stale or incorrect data once, they stop trusting the dashboards. They start asking "is this number right?" on every report. Rebuilding that trust takes months. Pipeline observability prevents the trust-destroying incident from happening in the first place.
- **MTTR is the metric that matters.** Pipelines will fail — APIs change, credentials expire, sources go down. The difference between a good data team and a struggling one is not failure *frequency* but failure *response time*. Dropping MTTR from 47 minutes to 11 minutes means the difference between "the morning dashboard was stale for an hour" and "the morning dashboard was stale for 5 minutes."
- **Engineering time reclaimed.** Teams in Posture 2 spend 4-8 hours/week maintaining DIY monitoring. That's 200-400 hours/year of engineering time spent on plumbing instead of pipeline development. At $150/hour fully loaded, that's $30,000-60,000/year in maintenance cost for a system that still has blind spots.
- **Compliance and audit readiness.** SOC 2, HIPAA, and GDPR audits increasingly ask about data pipeline reliability. "We have SLA tracking and historical observability for every pipeline" is a better answer than "we check Slack for error messages."

## Gotchas

- **Observability without action is noise.** If alerts fire and nobody responds — because the team is too small, the on-call rotation doesn't exist, or the alerts aren't routed correctly — the observability layer becomes another ignored notification channel. Alerting policy and on-call process must be set up alongside the tool.
- **Alert fatigue is a real risk.** Default anomaly detection thresholds will produce false positives. The team needs to tune thresholds in the first 2-4 weeks: suppress noisy alerts on volatile sources, tighten thresholds on critical SLA-bound pipelines. Contoso provides recommended defaults but the team must customize.
- **SLA definitions require stakeholder alignment.** "How fresh does this data need to be?" is a question the data eng team often can't answer alone. The product team, finance team, or ops team needs to define acceptable freshness. This is a process challenge, not a technology challenge.
- **Observability for custom sources requires instrumentation.** Pre-built connectors emit metrics automatically. Custom sources built with the Contoso SDK emit metrics if the developer follows the SDK conventions. Custom sources that bypass the SDK (raw scripts wrapped in Contoso orchestration) will have limited observability.
- **Historical data starts from day one.** There's no backfill of observability data from before Contoso was adopted. Trend analysis and baseline comparison require 2-4 weeks of data collection before they become useful.

## Brain Gaps

- **No alerting policy template.** The Brain should include a recommended alerting policy: which alerts should page, which should go to Slack, which should be daily digest. This would accelerate CS onboarding and reduce alert fatigue in the first month.
- **No SLA definition guide.** A framework for helping customers define freshness SLAs per data source type (transactional data = 15 min, marketing data = 1 hour, financial data = daily) would help both sales and CS.
- **No competitive positioning against Monte Carlo / Bigeye.** Customers in Posture 3 (managed observability tool) need to understand why Contoso's built-in observability is better than their current standalone tool. The Brain doesn't document this comparison yet.
- **No MTTR benchmark methodology.** The "47 minutes to 11 minutes" claim needs a documented measurement methodology. How is MTTR defined? What's included in the measurement? This needs to be in the Brain.
- **No observability-only onboarding path.** Some customers want observability before full consolidation. The Brain doesn't document this as a standalone adoption path — it assumes UC-001 (consolidation) comes first.

## Persona-Specific Angles

### P-001: CTO / VP Engineering
Cares about: risk reduction, team efficiency, audit readiness. The CTO wants to know that data infrastructure is reliable without having to ask. They evaluate observability by asking: "When was the last time a stakeholder found a data problem before the data team did?" If the answer is "last week," the observability isn't working. If the answer is "I can't remember," it is.

### P-002: VP of Data Engineering
This is their operational win. They care about: MTTR reduction (fewer fire drills, less burnout), SLA tracking (proving the team's reliability to stakeholders), and engineering time saved (killing the DIY monitoring maintenance burden). The VP of Data Eng evaluates observability by the on-call experience: are pages actionable? Do alerts include enough context to resolve without investigation? Can they sleep through the night?

### P-003: Head of Product / Analytics
Doesn't interact with the observability tool directly. Cares about the *result*: data is fresh and correct when they need it. Their evaluation criterion is simple: "Do I trust the dashboards?" If yes, observability is working. If they're still asking "is this number right?" on every report, it's not. They also care about SLA transparency — can they see a dashboard showing "Salesforce data is 23 minutes old, SLA is 1 hour" instead of guessing?

### P-004: Data Engineer (IC)
The primary user of the observability layer. They care about: alert quality (signal vs. noise), debugging speed (can I go from alert to root cause without context-switching across three tools?), and maintenance burden (do I have to configure this thing, or does it just work?). The IC evaluates observability during incidents: did the alert tell me what broke, or did I have to figure it out myself?

## Connected Use Cases

- **UC-001: Consolidate Fragmented Data Pipelines.** Consolidation delivers observability as a side effect — all pipelines in one platform means all pipelines in one monitoring layer. Teams that start with UC-002 (observability as the initial wedge) often expand to UC-001 (full consolidation) once they see the benefit of a unified platform.
- **UC-003: Enable Self-Serve Data Access for Product Teams.** Self-serve data access requires trust in the underlying pipelines. Observability provides the transparency layer that makes product teams comfortable configuring their own sources: they can see pipeline health without relying on data eng to tell them "it's working."
