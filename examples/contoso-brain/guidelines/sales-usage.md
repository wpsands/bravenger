---
title: Sales Agent Usage Guide
version: "1.0.0"
last_updated: "2026-03-22"
scope: "Sales team agents and operators"
owner: "Contoso GTM Team"
status: production
discipline: sales
---

# Sales Agent Usage Guide

This guide governs all agents producing sales content for Contoso. Read AGENTS.md first — this file supplements, not replaces, the core governance rules.

---

## Role of Sales in the Brain

Sales uses the Brain to prepare for conversations, produce outbound sequences, handle objections, and write proposal language. Every sales output must:
- Reference the specific persona being engaged
- Connect the conversation to documented pains in `icp.md` and the persona file
- Use approved messaging from `messaging-positioning/messaging-framework.md`
- Handle objections using documented responses
- Never promise capabilities the product doesn't support (check use case status fields)

---

## Signal-Based Outbound

Contoso's outbound motion is signal-driven. Do not send generic sequences. Every outbound message must connect to a specific buying signal from `icp.md#buying-signals`.

### Signal to Message Mapping

| Signal | Primary Message | Persona | Sequence Approach |
|--------|----------------|---------|-------------------|
| Hiring data engineers | "Your new hires will inherit 30 custom scripts. Or they could inherit config files." | P-001 Data Eng Lead | 3-email technical sequence |
| New Head of Data hire | "You're building the data strategy. Start with pipelines that don't break." | P-004 Head of Data | 4-email strategic sequence |
| SOC 2 / compliance initiative | "Auditors want lineage. Custom scripts don't have it." | P-002 VP Engineering | 3-email compliance-focused |
| Series B+ funding | "You're scaling the team. Your pipeline architecture should scale too." | P-002 VP Engineering | 4-email growth sequence |
| Job posting mentions Airflow/Dagster | "You're hiring pipeline engineers. What if you needed fewer?" | P-001 Data Eng Lead | 3-email technical sequence |
| Data warehouse migration | "Moving to Snowflake/Databricks? Move the pipelines too." | P-004 Head of Data | 4-email migration sequence |
| Platform team forming | "Self-service connectors for the whole org. Zero custom code." | P-003 Platform Engineer | 3-email platform sequence |
| 3 AM PagerDuty / on-call complaints | "Pipeline observability that catches failures before your engineers do." | P-001 Data Eng Lead | 3-email pain-focused |

[Source: icp.md#buying-signals]

### Outbound Sequence Rules
1. **Never send without a signal.** Cold spray does not work with technical buyers. They will ignore you or blacklist you.
2. **Lead with the pain, not the product.** First email should describe their problem, not our features.
3. **Be specific.** Reference their tech stack, team size, or hiring patterns. Generic messages get deleted.
4. **Short emails.** 100-150 words maximum. Technical buyers skim.
5. **CTA is always low-friction.** "Worth a 15-minute look?" or "Want to see the config?" — never "Let me show you a deck."

---

## Discovery Prep

Before every discovery call, the agent should produce a prep doc with:

### Company Context
- **Stage and size:** (from LinkedIn, Crunchbase, or provided data)
- **ICP fit score:** Does this company match `icp.md`? Flag any anti-ICP signals.
- **Buying signal:** What triggered this conversation?
- **Persona match:** Which persona file best describes the person on the call?
- **Tech stack signals:** What data tools are they using? (from job postings, GitHub, BuiltWith)

### Pain Hypotheses
Based on the persona and signal, hypothesize which pains from `icp.md#pains` and the persona file are most likely active. Rank them by probability.

### Discovery Questions

**For Data Engineering Leads (P-001):**
- "How many data pipelines does your team maintain right now? How many are custom scripts?"
- "When a pipeline breaks at 2 AM, what's the runbook? How long does it take to diagnose?"
- "How do you onboard a new data engineer to the existing pipeline infrastructure?"
- "What's the process when an analyst needs a new data source connected?"
- "Are your pipelines version-controlled today? What does the deployment process look like?"

**For VP of Engineering (P-002):**
- "How much engineering time goes to maintaining data pipelines vs. building product?"
- "When you think about SOC 2 or audit readiness, can you trace data lineage end-to-end?"
- "How do you evaluate build-vs-buy for data infrastructure?"
- "What's the on-call burden for pipeline failures? Is it sustainable as you scale?"
- "If you doubled the data team tomorrow, would the pipeline architecture handle it?"

**For Platform Engineers (P-003):**
- "What does your internal developer platform look like for data teams?"
- "How do data engineers request new connectors or pipeline changes today?"
- "What's your GitOps story for data infrastructure? Is it on par with your application infra?"
- "How do you enforce standards across pipelines built by different teams?"
- "What observability do you have into pipeline health? Schema changes? Freshness?"

**For Head of Data (P-004):**
- "What's your data strategy for the next 12 months? Where do pipelines fit?"
- "How confident are you in the freshness and quality of data reaching your warehouse?"
- "What's the biggest bottleneck when analysts need new data sources?"
- "How do you think about data lineage and governance as you scale?"
- "Are you spending more time firefighting pipeline issues or building data products?"

[Source: personas/persona-data-eng-lead.md#pains] [Source: personas/persona-vp-engineering.md#pains] [Source: personas/persona-platform-engineer.md#pains] [Source: personas/persona-head-data.md#pains]

---

## Objection Handling

Use the objection responses from `messaging-positioning/messaging-framework.md#objection-handling`. Core objections include:

1. "We already use Fivetran / Airbyte / Stitch."
2. "We can build this ourselves with Airflow."
3. "Our custom scripts work fine."
4. "$2,000/month is expensive."
5. "We don't want to rip and replace."
6. "How is this different from another ELT tool?"

### Handling Rules
- **Listen first.** Let them state the objection fully before responding.
- **Acknowledge legitimacy.** Every objection reflects a real concern.
- **Use the documented response.** The messaging framework has tested responses. Don't improvise the core argument.
- **Add a proof point.** Reference a specific metric, architecture detail, or customer outcome.
- **Offer evidence.** "Want to see a pipeline config? It's 40 lines of YAML." The product demo is the strongest objection handler.

### Objection Response Examples

**"We already use Fivetran."**
> "Fivetran is great for analyst-managed ELT. If your analysts own the pipelines, stay with Fivetran. But if your engineering team owns the data infrastructure and wants version-controlled, config-driven pipelines with built-in observability — that's a different problem. We built Contoso for engineering teams, not analysts."

**"We can build this ourselves with Airflow."**
> "You can. Many of our customers did. The question is: should your engineers spend time maintaining DAG definitions, connector updates, and custom monitoring — or should they define pipelines in YAML and let the platform handle the rest? We typically see teams reclaim 15-20 hours per engineer per month after switching from custom Airflow setups."

**"Our custom scripts work fine."**
> "They work until they don't. When the person who wrote the script leaves, when you need to add SOC 2 lineage, when a schema change breaks three downstream pipelines at midnight. Custom scripts work fine at 5 pipelines. At 50, they're a liability."

[Source: messaging-positioning/messaging-framework.md#objection-handling]

---

## Proposal Language

When writing proposals, pull from:
- **Scope:** Use case outcome sections define what they get.
- **Pricing:** Reference `pricing.md` for current packages.
- **Timeline:** Starter and Growth are self-serve. Enterprise has a scoping conversation.

### Proposal Language Templates

**For Growth deals ($2,000/mo):**

> Contoso Pipelines gives [Company]'s engineering team a config-driven data pipeline platform with up to 50 connectors, 50M rows/month, full observability, RBAC, and Git sync.
>
> Pipelines are defined in YAML, version-controlled in your existing Git workflow, and monitored with built-in schema tracking, freshness alerts, and failure diagnostics.
>
> The Growth plan includes Slack-based support and onboarding assistance. No custom integration work. No long-term contract.

**For Enterprise deals (custom):**

> Contoso Pipelines provides [Company] with an unlimited, enterprise-grade data pipeline platform: unlimited connectors, unlimited row volume, dedicated CSM, SLA-backed uptime, SSO/SAML, audit logs, and custom connector development.
>
> The platform integrates into [Company]'s existing GitOps workflow, provides end-to-end data lineage for compliance requirements, and includes a dedicated Customer Success Manager for onboarding and ongoing optimization.

### Language to Use
- "Config-driven data pipelines"
- "Pipelines as code — version-controlled, auditable, repeatable"
- "200+ pre-built connectors with schema tracking"
- "Observability built in from day one"
- "Engineering teams, not analysts"

### Language to Avoid
- "Seamless integration" (vague, overused)
- "Best-in-class" (meaningless without context)
- "ETL tool" (we are a pipeline platform, not an ETL tool)
- "Democratize data" (we serve engineering teams, not everyone)
- "AI-powered" unless specifically referencing a feature that uses AI

---

## Competitive Positioning in Sales

When competitors come up, reference `messaging-positioning/core-positioning.md#competitive-landscape`.

### Key Talking Points

| Competitor | Contoso Position |
|-----------|-----------------|
| **Fivetran** | "Fivetran is an ELT tool for analysts. Contoso is a pipeline platform for engineers. Different buyer, different architecture, different control model." |
| **Airbyte** | "Airbyte gives you open-source connectors. Contoso gives you config-driven pipelines with observability built in. If you want to self-host and manage, Airbyte works. If you want to define and ship, Contoso works." |
| **Stitch** | "Stitch is simple and cheap. If you have 5 connectors and an analyst managing them, Stitch is fine. At engineering scale, you need config-as-code, RBAC, and real observability." |
| **Custom Airflow** | "Airflow is a workflow orchestrator. You still have to write and maintain every connector, every transform, every monitor. Contoso is the pipeline layer that sits above orchestration." |
| **dbt** | "dbt transforms data in the warehouse. Contoso moves data to the warehouse. We're complementary — many customers use both." |

### Rules
- Never disparage competitors by name in writing. In conversation, be factual and specific.
- Always bring it back to the engineering-team-first distinction.
- Offer a technical comparison: "Here's our config file for that same pipeline. Compare the complexity."

[Source: messaging-positioning/core-positioning.md#competitive-landscape]

---

## Anti-ICP Qualification

Before investing time, check the prospect against `icp.md#anti-icp`. Disqualify fast:

| Red Flag | Action |
|----------|--------|
| Fewer than 50 employees | "You probably don't have a dedicated data engineering team yet. Start with Stitch or Fivetran and come back when you scale." |
| No engineering ownership of data | "If analysts own your pipelines, an analyst-friendly tool like Fivetran is a better fit. We built Contoso for engineering teams." |
| Looking for a BI tool | "We move data. We don't visualize it. Happy to recommend a BI tool that pairs well with us." |
| Single data source | "If you have one pipeline, you don't need a platform. Revisit us when connector count grows." |
| Wants a managed service (zero ops) | "Our Growth plan is mostly hands-off, but we're config-driven — your team writes YAML. If they want zero config, we may not be the right fit." |

[Source: icp.md#anti-icp]
