---
title: "Persona — The Head of Data"
persona_id: "P-004"
role: "Head of Data / Director of Data"
dmu_function: "Strategic Buyer / Champion"
version: "1.0.0"
last_updated: "2026-03-22"
owner: "Contoso GTM Team"
status: production
---

# The Head of Data

## Overview

The Head of Data owns the data strategy for the organization. They report to the CTO or VP of Engineering and manage a team that typically includes data engineers, analytics engineers, and data analysts. They sit at the intersection of engineering and business — responsible for both the infrastructure that moves data and the insights that come out of it.

They care about data quality, governance, time-to-insight, and warehouse costs. They are a strategic buyer for Contoso Pipelines because they own the problem end-to-end: from source systems to the warehouse to the dashboards that leadership uses to make decisions. If pipelines are unreliable, they hear about it from every team in the company.

---

## Demographics

| Attribute | Detail |
|-----------|--------|
| **Title** | Head of Data, Director of Data, Director of Data Engineering, VP of Data |
| **Company size** | 200-2000 employees |
| **Industry** | B2B SaaS, fintech, healthtech, e-commerce |
| **Team size** | 5-15 people: data engineers (2-5), analytics engineers (1-3), data analysts (2-6), sometimes ML engineers (1-2) |
| **Age range** | 32-45 |
| **Experience** | 8-15 years, typically started as a data analyst or data engineer and moved into management |
| **Background** | Mix of technical (wrote SQL and Python for years) and business (understands revenue metrics, funnel analysis, financial reporting) |
| **Education** | CS, statistics, economics, or quantitative social science. Some have analytics-focused MBAs. |
| **Location** | SF, NYC, Austin, Chicago, London. Often hybrid. |
| **Compensation** | $220K-$340K total comp |
| **Reports to** | CTO, VP of Engineering, or COO. Occasionally reports directly to the CEO at data-centric companies. |

---

## Goals and KPIs

| Goal | Metric |
|------|--------|
| **Reduce time-to-insight** | Days from data source request to analysts having clean data (current: 4-6 weeks, target: < 1 week) |
| **Improve data quality** | Data quality score (freshness, completeness, accuracy), number of data incidents per month |
| **Control warehouse costs** | Monthly Snowflake/BigQuery spend, cost per query, cost per pipeline |
| **Increase data team leverage** | Ratio of analysts served per data engineer (current: 2:1, target: 4:1) |
| **Establish data governance** | % of tables with documented owners, SLAs, and data contracts |
| **Reduce data incidents** | Number of "the dashboard is broken" Slack messages per week (current: 5-8, target: < 2) |

---

## Pains and Frustrations

1. **"We have 40 data sources and no confidence that any of them are fully reliable."** The company runs on Salesforce, HubSpot, Stripe, Netsuite, Intercom, Segment, product analytics, and 30 other tools. Each has a pipeline. Some are Fivetran. Some are custom. Some are "that script that runs on Jake's laptop." The Head of Data can't certify the reliability of any of them.

2. **"The analysts are blocked because the data isn't there."** The analytics team has questions that would take 30 minutes to answer if the data were in the warehouse. But the data isn't there, or it's stale, or the schema is wrong. So instead of answering business questions, the Head of Data is triaging data engineering tickets.

3. **"Warehouse costs are growing faster than revenue."** Snowflake spend increased 35% last quarter. Some of it is legitimate growth. Some of it is inefficient pipelines running full refreshes instead of incremental loads. Some of it is duplicate tables nobody owns. The CFO wants a plan to flatten the curve.

4. **"I can't tell you which data is trustworthy."** There's no data catalog that's actually maintained. There are no SLAs on pipeline freshness. There are no data contracts between teams. When the CEO asks "can I trust this number?" the honest answer is "let me check," which really means "I'll spend 2 hours tracing the lineage manually."

5. **"Data governance is a spreadsheet I update quarterly."** They know they need proper governance — lineage tracking, ownership, access controls, data contracts. But the team is too busy fighting fires to build the foundation. Every quarter they plan to start, and every quarter something else takes priority.

6. **"I'm caught between engineering and business."** Engineering wants to minimize data infrastructure complexity. The business wants more data, faster. The Head of Data is the person who has to balance these competing demands with a team that's understaffed for either goal.

---

## Current Tools and Stack

| Category | Tools |
|----------|-------|
| **Ingestion** | Fivetran (primary), Airbyte (some), custom scripts (legacy) |
| **Transformation** | dbt Cloud or dbt Core |
| **Warehouse** | Snowflake (most common), BigQuery, Redshift (legacy) |
| **BI / Analytics** | Looker, Metabase, Tableau, or Mode |
| **Data catalog** | Atlan, DataHub, or "a Google Sheet with table names" |
| **Orchestration** | Airflow, Dagster, or "Fivetran schedules + dbt Cloud jobs" |
| **Data quality** | Great Expectations, Monte Carlo, Soda, or "dbt tests and hope" |
| **Communication** | Slack (especially #data-questions), Notion, Jira |

---

## Buying Triggers

- The quarterly data incident retro reveals the same root causes (connector failures, schema drift, stale data) for the third time.
- The CFO mandates a 20% reduction in data infrastructure costs for next quarter.
- A new Head of Data joins the company and does a "state of data" audit revealing the actual reliability and cost picture.
- The company is preparing for a SOC 2 audit or enterprise sales motion and realizes data governance is not where it needs to be.
- An analyst builds a report for the board and the numbers don't match the finance team's numbers. The root cause is a pipeline that failed silently two weeks ago.
- The Fivetran contract is up for renewal and the Head of Data wants to evaluate alternatives before auto-renewing.

---

## Objections

| Objection | What They're Really Saying | Response Strategy |
|-----------|---------------------------|-------------------|
| "We already have Fivetran for ingestion." | They've invested in Fivetran and it works for some use cases. They don't want disruption. | Acknowledge Fivetran's strengths. Show where it falls short: custom sources, observability, cost at scale, and the gap between ingestion and orchestration. Contoso handles the full pipeline, not just the first mile. |
| "My team doesn't have bandwidth to migrate." | They're overwhelmed and any change feels like more work. | Show the migration tooling. Offer a phased approach: start with 5 pipelines, prove the value, then expand. The Data Eng Lead can own the migration without the Head of Data managing it day-to-day. |
| "How does this help with data quality?" | They care about what comes out of the pipeline, not just whether it runs. | Show schema validation, data contracts, freshness SLAs, and quality checks built into the pipeline definition. Contoso catches problems before they hit the warehouse, not after. |
| "I need to see the cost model clearly." | They've been surprised by vendor bills before. Snowflake taught them that usage-based pricing is unpredictable. | Provide the pricing calculator. Show per-pipeline pricing that's predictable and modelable. Compare total cost vs. current stack (Fivetran + Airflow + monitoring + engineering time). |
| "We're about to invest in a data catalog / data quality tool." | They're thinking about governance and want to solve it with a dedicated tool. | Show how Contoso's built-in lineage, schema detection, and SLA tracking reduce the need for a separate governance layer. Not a full replacement for a catalog, but eliminates 60% of the use case. |

---

## Messaging Dos and Don'ts

### Do
- Lead with the reliability and trust problem. "Your CEO asked if the numbers are right. You said 'let me check.' Contoso makes the answer 'yes' — with proof."
- Talk about data quality as a pipeline concern, not a separate tool. Quality starts at ingestion, not at the BI layer.
- Show the cost angle. Warehouse costs are their problem. Incremental loads, efficient scheduling, and deduplication directly impact their Snowflake bill.
- Speak in business terms AND technical terms. They're bilingual — they present to the CFO on Monday and review dbt models on Tuesday.
- Reference the team leverage angle. "One data engineer managing 30 pipelines instead of 10" resonates because they can't hire fast enough.

### Don't
- Don't position Contoso as just an engineering tool. The Head of Data cares about engineering efficiency, but they also care about analyst productivity, data quality, and governance.
- Don't ignore the governance angle. Even if Contoso's governance features are early, acknowledge the need and show the roadmap.
- Don't talk only about connectors. They have plenty of connectors. Talk about the full pipeline: connect, transform, validate, deliver, monitor.
- Don't underestimate their technical depth. They may be in a management role, but most wrote production SQL and Python for years. Don't oversimplify.
- Don't use the term "single pane of glass." It's a vendor cliche that triggers immediate skepticism.

---

## Product / UI / UX Hooks

| Hook | Why It Matters |
|------|---------------|
| **Pipeline reliability dashboard** | One view showing freshness, completeness, error rate, and SLA status for every pipeline. This is the view they open every morning. |
| **Schema drift detection and data contracts** | Catches upstream changes before they corrupt the warehouse. Enforces contracts between source systems and the data warehouse. |
| **Cost attribution per pipeline** | Shows which pipelines are expensive and why. Enables the conversation with the CFO about warehouse cost optimization. |
| **Incremental load support** | Reduces warehouse compute costs by loading only changed data. At scale, this saves tens of thousands per month. |
| **Built-in lineage tracking** | Trace any dashboard metric back to its source through every transformation. Answers "where did this number come from?" in seconds, not hours. |
| **Freshness SLAs with alerting** | Define "this pipeline must complete by 6 AM" and get alerted if it doesn't. Simple, but most current setups don't have this. |
| **Team and ownership management** | Assign pipelines to teams, set up ownership, and route alerts to the right people. Prevents the "whose pipeline is this?" problem. |
| **Analyst-friendly monitoring** | A view that analysts can check themselves: "Is the data fresh? When did it last load? Are there known issues?" Reduces the #data-questions Slack traffic. |

---

## Day in the Life

**7:15 AM** — Morgan opens Slack before getting out of bed. Three messages in #data-questions from overnight. One analyst asking why the revenue dashboard shows yesterday's number as $0 (pipeline didn't run). One product manager asking when the Amplitude data will be in Snowflake (it's in the backlog, estimated 3 weeks). One from the CFO's EA: "Can you pull the Q1 pipeline cost breakdown for the board deck?"

**8:00 AM** — Checks the Fivetran dashboard. Two connectors in error state: Salesforce (token expired — takes 10 minutes to fix) and Netsuite (API rate limit hit overnight — needs the data engineer to adjust the schedule). The HubSpot connector is running but the data is 6 hours stale because the sync window was set too conservatively.

**8:45 AM** — Data team standup. The team of 11: 4 data engineers, 2 analytics engineers, 5 data analysts. The data engineers are all working on maintenance except one, who's building the Amplitude integration. The analytics engineers are waiting for clean data to finish the Q1 board metrics. The analysts have a backlog of 23 ad hoc requests from marketing, sales, and finance. Morgan reprioritizes: fix the revenue pipeline first, then the Netsuite schedule, then work the backlog.

**10:00 AM** — Meeting with the VP of Engineering. Topic: data infrastructure costs. Snowflake is at $38K/month, up from $28K last quarter. Fivetran is $12K/month. Airflow hosting is $4K/month. Custom pipeline maintenance is roughly $45K/month in engineering time (estimated). Total data infrastructure cost: ~$99K/month. Morgan presents a plan to reduce costs by 25% over two quarters through incremental loads, pipeline consolidation, and tool rationalization.

**11:00 AM** — The Data Engineering Lead sends Morgan the Contoso Pipelines evaluation summary. Morgan reads it. The cost model is interesting — predictable per-pipeline pricing instead of Fivetran's row-based billing. The schema drift detection is exactly what they need after last month's incident. The built-in lineage tracking would replace the janky Google Sheet they currently use to document data flows. Morgan adds it to the Q2 tooling evaluation agenda.

**12:30 PM** — Lunch meeting with the CPO. The CPO wants a "customer health score" that combines product usage, support tickets, billing data, and NPS scores. Morgan knows this requires data from four different systems, three of which don't have pipelines yet. Estimates 6-8 weeks with the current setup. Thinks: "With Contoso, this could be 1-2 weeks."

**2:00 PM** — Works on the data governance roadmap. Tries to document all 40+ data sources, their owners, their SLAs, and their known quality issues. Gets through 12 before getting pulled into a Slack thread about a discrepancy between the marketing team's lead count and the sales team's lead count (different pipeline, different snapshot timing, same source system).

**3:30 PM** — Reviews the Fivetran renewal proposal. Pricing is up 18% due to row volume growth. Morgan opens a spreadsheet and starts modeling the Contoso alternative: migration cost, annual contract, engineering time savings, Snowflake cost reduction from incremental loads. The math is promising but needs validation. Sends a message to the Data Engineering Lead and the Platform Engineer: "Can we do a 2-week proof of concept with Contoso? I want to test 5 production pipelines before the Fivetran renewal deadline."

**4:30 PM** — Prepares the board deck slides on data infrastructure. Three slides: current state (costs, reliability, team allocation), proposed changes (tooling consolidation, governance investment, team restructuring), and expected outcomes (25% cost reduction, 50% fewer data incidents, 2x faster source onboarding). The numbers are directionally right but Morgan knows the current state is based on estimates because there's no single system that tracks all of it.

**5:45 PM** — Final Slack scan. The revenue pipeline is fixed. The Netsuite schedule is adjusted. The Amplitude integration is still 2 weeks out. The analyst backlog grew by 3 items today. Tomorrow: the Contoso POC kickoff. Morgan sends a note to the team: "Clearing two data engineers for the next two weeks to run this evaluation. If it works, it changes our Q2 plan."
