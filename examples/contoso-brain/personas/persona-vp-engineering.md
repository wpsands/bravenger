---
title: "Persona — The VP of Engineering"
persona_id: "P-002"
role: "VP of Engineering / SVP Engineering"
dmu_function: "Economic Buyer / Executive Sponsor"
version: "1.0.0"
last_updated: "2026-03-22"
owner: "Contoso GTM Team"
status: production
---

# The VP of Engineering

## Overview

The VP of Engineering is the executive sponsor and budget holder for data infrastructure decisions. They manage 30-120 engineers across multiple teams and are accountable for shipping product, maintaining infrastructure reliability, and controlling cloud spend. They don't build pipelines themselves — they haven't written production code in 2-4 years — but they feel the impact when data infrastructure slows down the entire organization.

They care about team velocity, engineering retention, and reducing the operational overhead that keeps senior engineers stuck in maintenance mode. They sign the check for Contoso Pipelines, but they rely on the Data Engineering Lead and Platform Engineer to validate the technical decision.

---

## Demographics

| Attribute | Detail |
|-----------|--------|
| **Title** | VP of Engineering, SVP Engineering, VP Infrastructure |
| **Company size** | 200-2000 employees |
| **Industry** | B2B SaaS, fintech, healthtech, e-commerce |
| **Org size** | 30-120 engineers across 4-10 teams |
| **Age range** | 35-48 |
| **Experience** | 12-20 years in software engineering, 4-8 years in management |
| **Background** | Former senior/staff engineer or engineering manager, promoted through IC-to-management track |
| **Education** | CS degree from strong program, occasionally MBA (rare in this cohort) |
| **Location** | SF, NYC, Austin, Seattle. Often hybrid or remote-first. |
| **Compensation** | $280K-$420K total comp (base + equity + bonus) |
| **Reports to** | CTO, CEO, or COO depending on company structure |

---

## Goals and KPIs

| Goal | Metric |
|------|--------|
| **Ship product faster** | Sprint velocity, feature delivery cadence, cycle time |
| **Reduce infrastructure overhead** | % of engineering time on maintenance vs. new development |
| **Control cloud spend** | Monthly cloud cost, cost-per-pipeline, cost trends QoQ |
| **Retain senior engineers** | Attrition rate, engagement scores, time-to-backfill |
| **Justify tooling investments** | ROI on vendor spend, tool adoption rates, consolidation ratio |
| **Maintain reliability** | System uptime, incident count, MTTR across all services |

---

## Pains and Frustrations

1. **"Data infrastructure is eating my engineering budget."** The data team is 8% of headcount but consumes a disproportionate share of on-call time, cloud costs, and cross-team coordination overhead. Every quarter the CFO asks why the cloud bill went up and the answer is always "data pipelines."

2. **"I can't hire data engineers fast enough."** Experienced data engineers command $180K+ and take 3-4 months to hire. Meanwhile, the backlog of pipeline requests grows. Product, finance, and marketing all need data, and engineering is the bottleneck.

3. **"My best engineers are doing plumbing instead of building product."** Senior engineers who should be working on differentiating features are instead maintaining Airflow DAGs and debugging connector failures. This is a morale problem and a retention risk.

4. **"We have too many tools and none of them talk to each other."** The data stack is Fivetran + Airflow + dbt + custom scripts + Datadog + three internal tools. Each has its own config, its own failure modes, its own learning curve. New engineers take weeks to ramp.

5. **"I can't get a clear picture of pipeline health."** When the CEO asks "is our data reliable?" the honest answer is "mostly, probably." There's no single dashboard, no unified SLA tracking, no way to answer confidently.

6. **"Every vendor promises consolidation but delivers another silo."** They've been burned by tools that claimed to simplify the stack but added complexity. Trust is low. Proof-of-value is required.

---

## Current Tools and Stack

| Category | What They Know |
|----------|---------------|
| **Cloud** | AWS, GCP, or Azure — they know the bill, not the configs |
| **Data tools** | Aware of Fivetran, Snowflake, dbt at a product level. Reviews budget, not implementation. |
| **Eng management** | Jira, Linear, or Shortcut for project tracking. Looks at velocity dashboards weekly. |
| **Communication** | Slack, Zoom, Notion or Confluence for docs |
| **Financial** | Reviews cloud cost dashboards (AWS Cost Explorer, Vantage, CloudZero) monthly |

---

## Buying Triggers

- The CFO questions the cloud bill for the third consecutive quarter and the VP can't explain the data infrastructure portion clearly.
- A senior data engineer quits citing "too much maintenance, not enough interesting work" in their exit interview.
- A major data outage impacts a customer-facing feature or a board-level metric.
- The Head of Data presents a consolidation plan that would reduce tooling spend by 30%+ and the VP needs to fund it.
- A board meeting where the CEO commits to a "data-driven" initiative and the VP realizes the infrastructure can't support it.
- Peer VP at another company mentions they cut their data engineering team's maintenance burden in half with a pipeline platform.

---

## Objections

| Objection | What They're Really Saying | Response Strategy |
|-----------|---------------------------|-------------------|
| "We already spend $X on Fivetran/Airbyte." | They see this as additive cost, not consolidation. | Show the total cost of ownership: current tools + engineering time + incident cost + opportunity cost. Contoso replaces 2-3 tools, not adds to the stack. |
| "My team needs to evaluate this." | Good — they're delegating properly. This is not a blocker, it's the process. | Support the evaluation. Provide the technical team with sandbox access, architecture docs, and a comparison framework. Win the technical eval. |
| "What's the ROI timeline?" | The CFO will ask, and the VP needs an answer. | Provide the ROI model. Typical customer sees 40-60% reduction in connector maintenance hours within 90 days. Break-even in 4-6 months including migration. |
| "We're mid-migration to [X]. Can't take on another change." | Timing is bad. They're overloaded. | Respect the timing. Offer to revisit post-migration. Stay in touch. When the migration is done and the new tool doesn't solve everything, they'll remember the conversation. |
| "How do I know you'll be around in 2 years?" | Series B startup risk. They've seen vendors fold. | Share the funding, customer count, retention metrics, and the fact that Contoso configs are portable YAML — no lock-in even in the worst case. |

---

## Messaging Dos and Don'ts

### Do
- Lead with business outcomes: engineering velocity, cost reduction, retention. These are the metrics they report to the CEO and board.
- Frame Contoso as consolidation, not addition. "Replace your ingestion layer, your orchestration glue code, and your monitoring patchwork with one platform."
- Provide a clear ROI model with real numbers. They need to sell this internally to the CFO.
- Acknowledge the team's role in the decision. "Your Data Engineering Lead and Platform Engineer should evaluate this. Here's what we'll provide for their review."
- Reference comparable companies. "Companies at your stage typically have 15-25 data sources and 3-5 data engineers. Here's what they see."

### Don't
- Don't get too technical too fast. They care about architecture quality but don't want to debug YAML configs in a meeting.
- Don't position this as a developer tool. Position it as an engineering platform that makes the team more productive.
- Don't ignore the cost conversation. They're budget-conscious. Be transparent about pricing and total cost of ownership.
- Don't promise things the product can't deliver today. They've been burned. Undersell and overdeliver.
- Don't bypass them to sell to their reports. They need to be in the loop. Going around them is a deal-killer.

---

## Product / UI / UX Hooks

| Hook | Why It Matters |
|------|---------------|
| **Consolidated billing and usage dashboard** | One view of pipeline costs, not five vendor invoices. They can show the CFO a single number that trends down. |
| **Team activity and health metrics** | See which pipelines are consuming the most engineering time. Identify maintenance hotspots. Data for headcount conversations. |
| **Role-based access control** | Matters for compliance and org structure. Data engineers get write access. Analysts get read access. Finance gets cost dashboards. |
| **SOC 2 and compliance posture** | Table stakes for mid-market. If Contoso isn't SOC 2 Type II, the conversation ends. They need this for vendor review. |
| **Migration tooling** | Automated migration from Fivetran/Airbyte configs reduces switching cost. Lowers the risk of the buy decision. |
| **Predictable pricing** | Per-pipeline or per-connector pricing they can model in a spreadsheet. No surprise bills based on data volume. |

---

## Day in the Life

**7:00 AM** — Dana checks email and Slack before the kids wake up. Three threads: an incident from overnight (Salesforce pipeline failure — resolved by the on-call data engineer at 3 AM), a headcount request from the Head of Data, and a message from the CFO asking about Q1 cloud costs.

**8:30 AM** — Leadership team standup. The CPO mentions that the product analytics pipeline has been unreliable and it's affecting their ability to measure the latest feature launch. Dana notes it, messages the Data Engineering Lead afterward: "What's going on with the product analytics pipeline?"

**9:00 AM** — Reviews the Q1 cloud cost report. Data infrastructure is up 22% QoQ. Most of it is Snowflake compute and Fivetran connector costs. The Fivetran contract is up for renewal in 60 days. Dana starts thinking about alternatives.

**10:00 AM** — Engineering managers weekly sync. Two managers raise the same issue: their teams are waiting on data pipelines that the data engineering team hasn't had bandwidth to build. The Stripe integration has been on the roadmap for 8 weeks. Dana asks the Data Engineering Lead for a status update.

**11:00 AM** — 1:1 with the Data Engineering Lead. Alex walks Dana through the current state: 47 items in the backlog, 70/30 maintenance-to-new-work split, and the team is one resignation away from crisis. Alex mentions they've been looking at Contoso Pipelines and thinks it could cut connector maintenance by half. Dana says: "Put together a one-pager. I need to see the numbers before I can take it to the CFO."

**1:00 PM** — Reads the Contoso Pipelines executive overview that Alex forwarded. The consolidation angle catches Dana's attention — replacing Fivetran + custom Airflow connectors + monitoring scripts with a single platform. The ROI model shows break-even in 5 months. Dana forwards it to the Head of Data: "Have you seen this? Thoughts?"

**2:30 PM** — Skip-level 1:1 with a senior data engineer. The engineer mentions they've been thinking about leaving because "I didn't get into engineering to babysit API connectors." Dana makes a mental note: tooling investment is also a retention investment.

**4:00 PM** — Prepares the Q2 budget proposal. Adds a line item for "data pipeline platform evaluation" with a note to consolidate Fivetran + internal tooling. Needs to show a 20%+ cost reduction to get CFO approval.

**5:30 PM** — Final Slack check. The marketing team is asking when the HubSpot pipeline will be fixed (it's the same issue from this morning). Dana doesn't respond — this should be routed through the Head of Data. But it reinforces the point: data infrastructure reliability is everyone's problem.
