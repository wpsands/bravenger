---
title: Company Goals
version: "1.0.0"
last_updated: "2026-03-22"
owner: "Jamie Torres"
status: production
review_cadence: quarterly
visibility: internal
---

# Company Goals

This file defines what Contoso is trying to achieve and when. Every agent reads this file to prioritize output — not just produce aligned content, but produce content that serves the current business objectives.

Goals are reviewed quarterly. If a goal changes mid-quarter, update this file and log the change in `updates/changelog.md`.

---

## Company-Level Goals

### FY2026 Annual Goals

| Goal | Target | Metric | Connected Brain Files |
|------|--------|--------|----------------------|
| **ARR growth** | $8M to $14M ARR by EOY | Net new ARR + expansion | `pricing.md`, `icp.md` |
| **Customer count** | 180 to 320 paying customers | New logos | `icp.md`, `personas/` |
| **Net revenue retention** | 125% NRR | Expansion + churn | `pricing.md`, `use-cases/` |
| **Connector coverage** | 200 to 280 production-grade connectors | Connectors in GA status | `messaging-positioning/core-positioning.md` |
| **Developer awareness** | Contoso recognized in "pipelines as code" conversations | Inbound, GitHub stars, community mentions, conference invitations | `messaging-positioning/core-positioning.md#category` |
| **SOC 2 Type II completion** | Certification by Q3 2026 | Audit complete, report issued | `use-cases/uc-004-compliance-lineage.md` |

---

## GTM Goals by Discipline

### Marketing

| Goal | Target | Why It Matters | Primary VP |
|------|--------|---------------|------------|
| **Build awareness of the "pipelines as code" category** | 4 blog posts/month, 3 LinkedIn posts/week, 2 developer tutorials/month | Engineers search for specific problems, not categories. We need content that ranks for "Airflow data integration alternative," "config-driven ETL," and "data pipeline observability." | VP1: Pipelines as Code |
| **Drive inbound through technical content** | 40% of MQLs from content (blog, tutorials, docs) | Engineers evaluate tools by reading docs and trying them. Content is the top of our funnel, not ads. | VP2: 200+ Connectors |
| **Developer community engagement** | 500 GitHub stars on open-source connector SDK, 200 community Slack members | Community is a distribution channel for mid-market engineering teams. If engineers recommend us to each other, our CAC drops. | VP5: Open Where It Matters |

[Source: guidelines/marketing-usage.md]

### Sales

| Goal | Target | Why It Matters | Primary Persona |
|------|--------|---------------|----------------|
| **Signal-based outbound volume** | 30 personalized outbound emails/week | Every email tied to a buying signal from `icp.md#buying-signals`. Target data engineering leads and heads of data at companies showing signals. | P-002, P-003 |
| **POC-to-close conversion** | >55% of POCs result in paid contracts | If the POC goes well, the product sells itself. Improve POC scoping and support. | P-001 |
| **Average deal size growth** | $18K ACV average (up from $14K) | Move more customers from Starter to Growth tier during initial sale. Lead with the observability value prop to justify the price. | P-003 |

[Source: guidelines/sales-usage.md]

### Product Marketing

| Goal | Target | Why It Matters |
|------|--------|---------------|
| **Competitive positioning updated quarterly** | Review `core-positioning.md#competitive-landscape` every 90 days | Fivetran, Airbyte, and dbt are all moving fast. Our positioning must reflect what they ship, not what they shipped six months ago. |
| **Launch process for every connector milestone** | Every 50-connector milestone and every tier-1 connector gets a launch brief | Connector launches are our most shareable content. They drive SEO, community buzz, and evaluation triggers. |
| **Sales enablement refresh** | Updated battle cards and objection handlers every quarter | Sales needs current ammunition. Stale competitive intel costs deals. |

[Source: guidelines/product-marketing-usage.md]

### Product

| Goal | Target | Why It Matters |
|------|--------|---------------|
| **Ship 80 new connectors** | From 200 to 280 GA connectors by EOY | Connector coverage is the number-one evaluation criterion. Every missing connector is a lost deal. |
| **Pipeline observability v2** | Schema drift detection, automated remediation suggestions, lineage visualization | Observability is our primary differentiator against Fivetran. V2 makes it defensible. |
| **Self-serve onboarding** | Time-to-first-pipeline under 15 minutes for Starter tier | Engineering teams evaluate tools on weekends and evenings. If setup takes more than 15 minutes, they move on. |
| **Terraform provider GA** | Full pipeline lifecycle manageable via Terraform | Mid-market engineering teams use Terraform. If they cannot manage Contoso pipelines alongside their other infrastructure, we are not truly infrastructure-as-code. |

[Source: guidelines/product-usage.md]

### Customer Success

| Goal | Target | Why It Matters |
|------|--------|---------------|
| **Time-to-value** | First production pipeline running within 7 days of contract start | Fast TTV predicts retention. If a customer does not have a production pipeline in week one, churn risk doubles. |
| **Expansion pipeline** | 40% of Growth-tier customers evaluating Enterprise within 12 months | Expansion is the primary growth lever at $14M ARR. CS owns the relationship that drives it. |
| **Pipeline coverage per account** | Average 15 active pipelines per Growth account by month 6 | More pipelines = more value = stickier account. Accounts with fewer than 5 pipelines at month 6 are at risk. |
| **NPS** | >55 NPS across all tiers | Mid-market B2B SaaS benchmarks are 30-40. We need to be meaningfully above because our growth depends on word-of-mouth in engineering communities. |

[Source: guidelines/customer-success-usage.md]

---

## Current Quarter Priorities — Q1 2026

These are the 3 things that matter most right now. When an agent produces content and multiple directions are equally valid, weight toward these priorities.

### Priority 1: Win the Mid-Market Data Engineering Audience

**Why:** Our product is strong but our awareness is weak. Mid-market data engineering leads don't know Contoso exists. They search for "Fivetran alternative" or "Airflow replacement for integration" and find blog posts from competitors. We need to own the conversation about config-driven data integration for engineering teams.

**What this means for agents:**
- Marketing: every piece of content should target a specific engineering pain from `icp.md#pains`. Write for the Data Engineering Lead persona first, then expand to others. Prioritize technical blog posts and tutorials over thought leadership.
- Sales: outbound sequences should lead with the engineering pain, not the product. Reference the specific signal that triggered the outreach.
- PMM: competitive content is urgent. Battle cards against Fivetran (control), Airbyte (managed vs. self-hosted), and Airflow-as-integration (wrong tool for the job).

**Connected:** `icp.md#pains`, `personas/persona-data-eng-lead.md`, `messaging-positioning/core-positioning.md#competitive-landscape`

### Priority 2: Increase POC Win Rate to 55%

**Why:** We generate enough POCs but convert only 45%. The gap is in POC execution — customers try too many sources, hit a connector gap, or don't experience the observability layer. Better POC scoping and hands-on support will close the gap.

**What this means for agents:**
- Sales: POC proposals should scope to 3-5 high-impact data sources, not "try everything." Include observability setup in every POC plan.
- CS: POC support playbooks should include day-1, day-7, and day-14 checkpoints. Proactively surface the observability features — customers often don't discover them on their own.
- Product: track which connectors are requested during POCs but not available. These are the highest-priority additions to the connector roadmap.

**Connected:** `use-cases/uc-001-consolidate-pipelines.md`, `use-cases/uc-003-pipeline-observability.md`, `pricing.md`

### Priority 3: Ship Pipeline Observability v2

**Why:** Observability is our best differentiator against Fivetran and Airbyte. V1 (schema tracking, freshness monitoring, basic alerting) is solid. V2 adds schema drift auto-remediation suggestions, cross-pipeline lineage visualization, and integration with Datadog/Grafana/PagerDuty. This turns observability from a feature into a reason to switch.

**What this means for agents:**
- Product: feature briefs for each v2 capability. Acceptance criteria must reference the on-call engineer persona and the pipeline observability use case.
- Marketing: when v2 ships, it is the biggest content moment of the quarter. Prepare launch content: blog post, demo video, comparison page, developer tutorial.
- PMM: update competitive positioning to reflect v2 capabilities. "Fivetran shows you a dashboard. Contoso pages you in PagerDuty with the exact schema change and a suggested fix."

**Connected:** `use-cases/uc-003-pipeline-observability.md`, `personas/persona-data-eng-lead.md`, `messaging-positioning/core-positioning.md#differentiators`

---

## How Agents Use This File

1. **Read this file after `icp.md` and before `personas/`.** Goals provide the "why now" context that shapes which personas and use cases to prioritize.
2. **Weight output toward current quarter priorities.** If a blog post could target the VP of Engineering or the Data Engineering Lead and both are valid, check which one serves Priority 1 (win the mid-market data engineering audience) better.
3. **Cite this file when relevant.** If a piece of content is specifically designed to serve a goal, cite it: `[Source: goals.md#priority-1]`.
4. **Do not invent goals.** If the user requests content that doesn't connect to any goal in this file, produce the content but note: "This output does not directly serve a current quarter priority. Consider whether it should."
