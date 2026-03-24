---
title: Core Positioning
version: "1.0.0"
last_updated: "2026-03-22"
owner: "Contoso GTM"
status: production
---

# Core Positioning

## Category

**Pipelines as Code.**

Contoso Pipelines is a config-driven data pipeline platform that lets engineering teams connect, transform, and deliver data across their stack without writing custom integrations. Pipelines are defined in YAML, version-controlled in Git, tested in CI, and observable in production.

This is not a drag-and-drop ETL tool. It is not a fully managed black box. It is not a collection of Airflow DAGs held together by tribal knowledge. It is infrastructure — config files that describe your data flows, a runtime that executes them, and observability that tells you when something breaks before your stakeholders do.

---

## Positioning Statement

For mid-market engineering teams (200-2,000 employees) running data pipelines held together by custom scripts, brittle Airflow DAGs, or expensive managed services they can't customize, Contoso Pipelines is the config-driven data pipeline platform that fits how modern engineering teams actually work. Unlike Fivetran, which is fully managed but expensive and inflexible at scale, or Airbyte, which is flexible but operationally heavy, Contoso Pipelines gives you 200+ connectors, Git-native pipeline definitions, and built-in observability at mid-market pricing — so your data team ships reliable pipelines instead of maintaining plumbing.

---

## Five Differentiators

### 1. Pipelines as Code, Not Drag-and-Drop
**What it means:** Every pipeline is a YAML config file. You define sources, transforms, destinations, and schedules in code. Pipelines live in your repo, go through code review, and deploy through your existing CI/CD. No clicking through a UI to configure a sync.

**Proof points:**
- Customers report 73% fewer pipeline configuration errors after moving from UI-based tools to config-driven definitions (internal cohort analysis, Q4 2025, n=34 accounts).
- Average time to clone and modify an existing pipeline: 4 minutes. Average time to configure a new sync in Fivetran: 12-18 minutes per the Fivetran docs.
- 100% of Contoso pipeline configs are diffable, reviewable, and revertible — because they're plain text in Git.

**Why it matters:** Engineering teams already work in code. They use Git, CI/CD, and code review for everything else. Their data pipelines should work the same way. Drag-and-drop tools create a parallel workflow that doesn't integrate with engineering practices. Config-driven pipelines do.

### 2. Git-Native Version Control
**What it means:** Pipeline definitions are Git objects. Branch, merge, diff, revert — all standard Git operations work on your pipelines. Pipeline changes go through pull requests. You can roll back a broken pipeline by reverting a commit.

**Proof points:**
- 92% of Contoso customers use Git-based deployment for their pipelines (usage telemetry, Feb 2026).
- Mean time to recover from a bad pipeline change: 3.2 minutes (revert commit + redeploy) vs. 47 minutes for customers who previously used UI-based tools (migration cohort survey, n=28).
- Pipeline audit trail is your Git history — no separate audit log to maintain or query.

**Why it matters:** When a pipeline breaks at 2am, you need to know what changed, who changed it, and how to undo it. Git gives you all three. UI-based tools give you an activity log you have to interpret and manual steps to undo.

### 3. Built-In Observability
**What it means:** Every pipeline run produces structured telemetry: row counts, schema changes, latency, error rates, data freshness SLAs. Observability is not a premium add-on or a separate product — it ships with every pipeline.

**Proof points:**
- Median time to detect a pipeline failure: 94 seconds (from pipeline run start to alert delivery, P50 across all production accounts, Feb 2026).
- 68% reduction in "where's my data?" tickets reported by customers in first 90 days (onboarding cohort analysis, n=41).
- Schema drift detection catches breaking changes before they propagate — 12,400+ schema change alerts fired in Q4 2025 across the customer base.

**Why it matters:** Most pipeline tools tell you a sync succeeded or failed. They don't tell you that row counts dropped 40%, that a column type changed upstream, or that your SLA is about to breach. Contoso treats observability as a first-class concern because data teams are judged on data quality, not sync status.

### 4. 200+ Connectors, All Production-Grade
**What it means:** Contoso maintains 200+ connectors — databases, SaaS APIs, warehouses, event streams. Every connector is tested against live APIs on a weekly cadence, versioned independently, and covered by Contoso's SLA. No community-contributed connectors with unknown maintenance status.

**Proof points:**
- 200+ connectors in the catalog, 100% maintained by Contoso engineering (not community-contributed).
- Weekly automated integration tests against live API endpoints — 99.4% connector pass rate in Feb 2026.
- Average time to ship a new connector: 12 business days from request to production (trailing 6-month average).
- Connector versioning lets you pin a specific version and upgrade on your schedule.

**Why it matters:** Connector coverage is table stakes. Connector reliability is not. Airbyte has 300+ connectors, but community connectors break without warning and nobody owns the fix. Fivetran connectors are reliable but you can't customize the sync behavior. Contoso connectors are maintained, tested, and configurable.

### 5. Mid-Market Pricing That Scales
**What it means:** Pricing is based on active pipelines and data volume, not per-connector or per-user. No surprise bills when you add a team member. No penalty for connecting a new source. Pricing is published, not gated behind a sales call.

**Proof points:**
- Average customer spend: $2,800/month at the 50th percentile, $7,200/month at the 90th percentile (Feb 2026 billing data).
- Customers migrating from Fivetran report 38-52% cost reduction at equivalent data volumes (migration cohort, n=16).
- No per-seat charges. The entire engineering team can access the platform.
- Published pricing on the website — no "contact sales for pricing" games.

**Why it matters:** Mid-market companies need predictable costs. Fivetran's consumption-based pricing works at small scale and shocks at large scale. Airbyte's open-source version is "free" until you count the engineering hours to operate it. Contoso prices for the mid-market: enough value to justify the spend, enough predictability to survive a budget review.

---

## Competitive Landscape

### Direct Competitors

| Competitor | Positioning | Strengths | Weaknesses | Contoso Advantage |
|---|---|---|---|---|
| **Fivetran** | Fully managed ELT. Market leader. | Largest connector library. Strong brand. Zero-maintenance promise. | Expensive at scale. Limited customization. Opaque sync behavior. No config-as-code. | Config-driven flexibility. 38-52% lower cost at equivalent volumes. Git-native workflows. |
| **Airbyte** | Open-source ELT. Community-driven. | Free tier. Large connector catalog. Extensibility. | Operational burden (self-hosted). Community connectors unreliable. No built-in observability. | Production-grade connectors. Built-in observability. No ops burden. |
| **Stitch (Talend)** | Simple managed ELT. | Easy setup. Low entry price. | Stagnating product. Limited connector quality. Acquisition limbo. | Active development. Superior observability. Broader connector reliability. |
| **Custom scripts / Airflow** | DIY. The status quo. | Total control. No vendor lock-in. | Brittle. No observability. High maintenance. Tribal knowledge. | Structured configs replace scripts. Built-in observability. 200+ maintained connectors replace custom code. |
| **Informatica / SSIS** | Enterprise legacy ETL. | Deep enterprise penetration. Mature tooling. | Expensive. Not cloud-native. Heavy implementation. | Cloud-native. Config-driven. Mid-market pricing. Deploys in days, not months. |

### Approved Competitive Claims
These claims are supported by data and can be used in external-facing content:

- "38-52% lower cost than Fivetran at equivalent data volumes" (migration cohort, n=16, Q4 2025)
- "Median pipeline failure detection in under 2 minutes" (production telemetry, Feb 2026)
- "200+ connectors, all maintained by Contoso engineering" (connector catalog, verified monthly)
- "73% fewer configuration errors with config-driven pipelines vs. UI-based tools" (cohort analysis, n=34)
- "3-minute mean time to recover from bad pipeline changes via Git revert" (migration cohort survey, n=28)

### Forbidden Competitive Claims
Do not use these. They are unsubstantiated, legally risky, or strategically counterproductive:

- "Fivetran is unreliable" — They're not. They're expensive and inflexible. Attack the economics and the workflow, not the reliability.
- "Airbyte connectors don't work" — Some do. The issue is consistency and maintenance ownership, not blanket failure.
- "We're cheaper than everyone" — We're not. We're mid-market priced. Airbyte OSS is free. Stitch has lower entry pricing. We compete on value, not floor price.
- "We replace Airflow" — We complement it for many teams. Some customers use Contoso for extraction/loading and Airflow for orchestration. Don't claim full replacement.
- "Enterprise-grade" — We're not targeting enterprise. This term sets expectations we don't intend to meet (dedicated support pods, custom SLAs, on-prem deployment).
- Any claim that a competitor's product is "dying" or "dead" — Stitch is stagnating, but it has customers and revenue. State facts, not predictions.

---

## Strategic Narratives

### Origin Story: "We Were the Team Writing Custom Scripts at 3am"
Contoso was founded by a data engineering team that spent three years maintaining 140+ custom Python scripts to move data between systems at a mid-market SaaS company. Every Monday started with a broken pipeline. Every quarter included a "data infrastructure sprint" that produced no business value. Every new data source meant another fragile script.

They tried Fivetran — too expensive at their volume, and they couldn't customize anything. They tried Airbyte — flexible but operating it was a second job. They tried building on Airflow — powerful but they were writing plumbing code, not pipeline logic.

So they built what they actually needed: a platform where pipelines are config files, connectors are maintained by someone else, and observability is built in. Then they realized every mid-market data team had the same problem.

### Why Now: "The Data Stack Grew Up. The Plumbing Didn't."
Mid-market companies adopted modern data warehouses (Snowflake, BigQuery, Databricks) and modern BI tools (Looker, Metabase, Hex). But the layer that moves data into those systems is still either (a) expensive managed services designed for enterprise, (b) open-source tools that require a platform team to operate, or (c) custom scripts that nobody wants to maintain.

The data stack matured. The data plumbing didn't. Contoso closes that gap for the teams that are too big for manual scripts and too pragmatic for enterprise pricing.

Three forces making this urgent now:
1. **Data volume growth:** Mid-market companies are generating 3-5x the data they were three years ago. Custom scripts that worked at low volume collapse at scale.
2. **AI/ML adoption:** Every company wants to feed ML models. That requires reliable, observable data pipelines — not cron jobs and prayer.
3. **Engineering hiring costs:** A senior data engineer costs $180-220K. Spending their time maintaining pipeline plumbing is the most expensive way to move data.

### Vision: "Data Plumbing Should Be Boring"
Contoso's long-term vision is that data pipelines should be as reliable and unremarkable as a database connection. You define what you want in config. It runs. It tells you when something is wrong. You don't think about it otherwise.

We're not building a "data platform" or a "data operating system." We're building the plumbing layer so well that data teams stop talking about plumbing and start talking about the things that actually matter — analysis, models, products, decisions.

The measure of success is silence. If your data team never mentions pipelines in standup, we've done our job.

---

## Value Proposition Hierarchy

### Primary VP (Company Level)
Contoso Pipelines lets engineering teams connect, transform, and deliver data across their stack with config-driven pipelines, production-grade connectors, and built-in observability — without writing custom integrations.

### Secondary VPs (By Outcome)
1. **Reliability:** Pipelines defined in code, tested in CI, observable in production. No more 3am surprises.
2. **Speed:** New pipelines ship in minutes, not sprints. Clone a config, modify, deploy.
3. **Cost efficiency:** Mid-market pricing that scales predictably. No shock bills. No hidden per-seat fees.
4. **Engineering workflow fit:** Git-native, CI/CD-compatible, code-reviewable. Works the way your team already works.
5. **Observability:** Know when something breaks before your stakeholders do. Row counts, schema changes, SLA tracking — built in.
