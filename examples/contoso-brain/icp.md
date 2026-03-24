---
title: Ideal Customer Profile
version: "1.0.0"
last_updated: "2026-03-22"
authority: primary
owner: "Jamie Torres"
status: production
---

# Ideal Customer Profile

## Summary

Contoso's ideal customer is a mid-market B2B SaaS company with a growing data team that has outgrown custom scripts and managed ELT tools but is not yet large enough for a dedicated data platform team. They need data integration that engineers can own, version, and monitor — without building it from scratch.

---

## Firmographics

| Attribute | Criteria |
|-----------|----------|
| **Stage** | Series A through Series C |
| **Funding** | $10M-$100M raised |
| **Headcount** | 200-2,000 employees |
| **Revenue** | $5M-$50M ARR |
| **Industry** | B2B SaaS (horizontal or vertical) |
| **Engineering team size** | 20-150 engineers, 3-15 data engineers or data-adjacent engineers |
| **Data team maturity** | Has a data team (or data responsibilities distributed across engineering), warehouse or lakehouse in place, some pipelines running but fragmented |
| **Geography** | North America primary, English-speaking markets secondary |

## Technographics

| Attribute | Criteria |
|-----------|----------|
| **Data warehouse** | Snowflake, BigQuery, Redshift, or Databricks |
| **Orchestration** | Airflow (self-managed or MWAA/Cloud Composer), Dagster, or Prefect — often used for integration tasks it was not designed for |
| **Current integration** | Mix of Fivetran/Stitch for some sources, custom Python scripts for others, Airflow DAGs doing extract/load |
| **Version control** | GitHub or GitLab. Engineering culture includes code review and CI/CD. |
| **Infrastructure** | AWS, GCP, or Azure. Terraform or Pulumi for IaC. Docker/Kubernetes in production. |
| **Monitoring** | Datadog, Grafana, or PagerDuty for application monitoring. Little or no monitoring specific to data pipelines. |
| **BI layer** | Looker, Metabase, Mode, or Tableau. Analysts depend on data freshness but have no visibility into pipeline health. |

---

## Pains

These are the real problems we solve. They show up in every discovery call.

### P1: Custom scripts that nobody wants to maintain {#P1}
The data team wrote Python scripts to pull data from Salesforce, Stripe, and the product database. Those scripts work — until they don't. An API changes, a schema evolves, a credential expires. The engineer who wrote the script left six months ago. Now someone has to reverse-engineer it at 2 AM during an incident. Every mid-market data team has at least 5-10 of these scripts. They are technical debt that compounds quarterly.

### P2: Managed ELT tools that engineers cannot control {#P2}
They adopted Fivetran or Stitch for some data sources. It works for the simple cases. But engineers cannot version the configuration, cannot review changes in a pull request, cannot run it in a staging environment, and cannot debug failures beyond "check the dashboard." When something breaks, the engineer's instinct is to look at code — and there is no code to look at. The tool is a black box with a billing page.

### P3: Airflow used as an integration tool {#P3}
Airflow is an orchestrator, not a data integration platform. But most mid-market teams end up using it for both because they already have it running. The result is hundreds of DAGs that mix orchestration logic with extract/load logic, custom operators that duplicate connector functionality, and a system that is simultaneously too complex (for simple syncs) and too fragile (for reliable integration). Engineers spend more time maintaining Airflow DAGs for data movement than building the data products they were hired to build.

### P4: No observability on data pipelines {#P4}
Application monitoring is mature — Datadog, PagerDuty, Grafana. Data pipeline monitoring is not. Most teams find out a pipeline is broken when an analyst says "this dashboard looks wrong" or a customer reports stale data. There is no schema drift detection, no freshness monitoring, no row-count validation. The data team is flying blind, and the on-call engineer's first hour of every incident is figuring out what broke and when.

### P5: Data team blocked by integration work {#P5}
The data engineering team was hired to build data products — real-time features, ML pipelines, analytics infrastructure. Instead, they spend 30-50% of their time maintaining integration scripts, debugging connector failures, and responding to "where is my data?" tickets from analysts. Every new data source means an engineering ticket, a sprint commitment, and 1-3 weeks of work for what should be a configuration change.

### P6: Compliance and lineage gaps {#P6}
SOC 2 auditors ask where customer data flows. GDPR requires documenting data lineage. The data team knows the answer in their heads but cannot produce a documented, auditable map. Custom scripts have no metadata. Fivetran has its own lineage view but does not cover the custom pipelines. There is no single place to answer "where does this data go and who can access it?"

### P7: Schema changes break downstream silently {#P7}
A product engineer adds a column to a database table. The pipeline picks it up — or doesn't. Downstream transformations break — or produce wrong results silently. Nobody finds out until the weekly business review when a metric looks wrong. By then, a week of data is compromised. The fix takes another week. Schema drift is the most common and most expensive data quality failure, and most teams have no automated detection for it.

### P8: Vendor lock-in anxiety {#P8}
The team is evaluating data integration tools and realizes that most of them store pipeline configuration in proprietary formats. If they adopt Fivetran and later need to switch, they start over. Pipeline definitions, sync schedules, transformation logic — all locked in the vendor's system. Engineering teams that value infrastructure-as-code find this deeply uncomfortable.

---

## Buying Signals

These indicate a company is ready for Contoso now.

1. **Data engineer job posting that mentions "integration" or "pipeline maintenance."** They are hiring to maintain plumbing. That is the problem Contoso solves.
2. **Airflow migration or upgrade in progress.** They are already in pain with their orchestrator. If they are touching Airflow, they are open to separating orchestration from integration.
3. **Fivetran or Stitch contract renewal coming up.** Renewal is the natural moment to evaluate alternatives. Especially if the engineering team has been frustrated with lack of control.
4. **New Head of Data or VP of Data Engineering hired.** New data leader means new evaluation of the stack. They want to put their stamp on infrastructure choices.
5. **SOC 2 or compliance initiative underway.** Data lineage and access documentation become urgent. Contoso provides this by default through config-driven pipeline definitions.
6. **Series B just closed.** New capital means scaling the data team. They want to scale on a foundation, not on custom scripts.
7. **"Where is my data?" showing up in Slack.** Analysts asking engineering where their data is = pipeline visibility problem. Contoso's observability layer solves this directly.
8. **Data warehouse migration.** Moving from Redshift to Snowflake or BigQuery to Databricks. Pipeline reconfiguration is required anyway — the right time to adopt a better system.
9. **Engineering blog post about data infrastructure pain.** They are thinking about the problem publicly. They have articulated the pain. They are ready for a solution.
10. **Multiple data sources with no unified management.** Mix of Fivetran for some, custom scripts for others, manual CSV uploads for the rest. Fragmentation is the signal.

---

## Buying Process

### Decision-Making Unit

| Role | Function | File |
|------|----------|------|
| VP of Engineering | Economic buyer, final sign-off on infrastructure decisions | `personas/persona-vp-engineering.md` |
| Head of Data / Data Engineering Lead | Champion, day-to-day evaluator, will own adoption | `personas/persona-head-data.md` |
| Data Engineering Lead | Technical evaluator, runs the proof of concept | `personas/persona-data-eng-lead.md` |
| Platform Engineer | Evaluates operational fit — CI/CD, IaC, monitoring integration | `personas/persona-platform-eng.md` |

### Typical Process
1. **Trigger.** One of the buying signals above. Usually a painful incident, a new data leader, or a contract renewal.
2. **Research.** Data Engineering Lead or Head of Data evaluates alternatives. Reads docs, tries the free tier, looks at connector coverage.
3. **Proof of concept.** 2-4 week POC on 3-5 high-priority data sources. The team configures pipelines in YAML, tests the observability layer, verifies connector quality.
4. **Technical review.** VP of Engineering and Platform Engineer evaluate: Does it fit our CI/CD? Can we monitor it with our existing tools? Is the config portable?
5. **Commercial decision.** VP of Engineering or Head of Data approves the budget. Pricing is transparent — Starter, Growth, or Enterprise based on volume and connector needs.
6. **Rollout.** Phased migration: start with the highest-pain data sources (usually the custom scripts), then migrate managed ELT sources, then add new sources as config.

### Budget
- **Range:** $6,000-$24,000/year for Starter/Growth; custom for Enterprise
- **Budget holder:** VP of Engineering or Head of Data
- **Comparison:** Less than one data engineer's time spent maintaining custom integrations (typically 30-50% of a $150K+ salary). Fivetran at comparable volume often costs $24,000-$60,000/year with less engineering control.

---

## Anti-ICP

Do not pursue these companies. They will waste time and not succeed with the product.

| Signal | Why it's a bad fit |
|--------|-------------------|
| **No data warehouse in place** | They are pre-data-infrastructure. They need a warehouse first, then pipelines. |
| **Fewer than 3 data sources** | Not enough complexity to justify a platform. A script or two is fine at this scale. |
| **All-analyst data team, no engineers** | Contoso is built for engineers. If the data team is all analysts using a GUI tool, the config-driven approach will frustrate them. |
| **Enterprise (5,000+ employees)** | Procurement cycles, security reviews, on-prem requirements, multi-region compliance. Not our sales motion today. |
| **Real-time streaming only** | Contoso focuses on batch and micro-batch. If the primary need is sub-second event streaming, Kafka/Flink is the right answer. |
| **Already deeply invested in dbt + Fivetran and happy with it** | If the current stack is working and the team likes it, there is no pain to solve. Do not create pain that does not exist. |
| **Non-technical decision maker with no engineering champion** | Contoso requires engineering buy-in. If the buyer is a business analyst with no engineering sponsor, adoption will fail. |
| **Companies that want a fully managed "hands-off" service** | Contoso gives engineers control. If they want someone else to run their pipelines entirely, a managed service like Fivetran is a better fit. |
