---
title: Brand Vision
version: "1.0.0"
last_updated: "2026-03-22"
owner: "Jamie Torres"
status: production
---

# Brand Vision

## Mission

Give every engineering team a data pipeline layer they can read, version, and trust — so they spend time building product, not maintaining plumbing.

## Vision

Data integration becomes infrastructure that engineers own and operate like any other part of their stack — config-driven, version-controlled, observable, and boring in the best way. Contoso is the company that made pipelines as code the obvious default for mid-market engineering teams.

---

## Category Definition

**Pipelines as code.**

Contoso Pipelines is a config-driven data integration platform. Engineering teams define their pipelines in YAML, choose from 200+ pre-built connectors, and get observability — schema tracking, freshness monitoring, alerting — built in from day one. It replaces the fragile combination of custom scripts, managed ELT tools that engineers cannot audit, and Airflow DAGs that nobody wants to maintain.

We are not an ELT tool for analysts. We are not a drag-and-drop integration builder. We are a pipelines-as-code platform for engineering teams who want to own their data infrastructure the same way they own their application infrastructure: in code, in version control, with tests and monitoring.

---

## Core Values

### 1. Config Over Custom Code
The best data pipeline is one you can read in a YAML file, review in a pull request, and deploy with your existing CI/CD. We believe configuration should replace custom integration code wherever possible — not because code is bad, but because most integration code is undifferentiated plumbing that nobody wants to maintain.

### 2. Engineers First
We build for the people who get paged when pipelines break. Every product decision, every UX choice, every piece of documentation starts with the question: does this make the on-call engineer's life better or worse?

### 3. Observable by Default
A pipeline you cannot monitor is a pipeline you cannot trust. Observability is not an add-on or a premium tier feature. Schema tracking, freshness monitoring, row-count validation, and alerting are built into every pipeline from the first run.

### 4. Honest About Trade-offs
Every architectural choice has trade-offs. We document ours. Config-driven means less flexibility than raw code for edge cases. 200+ connectors means some are more mature than others. We tell you which ones, and we tell you what to expect.

### 5. Boring Infrastructure
The highest compliment for infrastructure is "it just runs." We aspire to be boring. Reliable, predictable, well-documented, and invisible when everything is working. The exciting part is what our customers build on top of reliable data — not the pipelines themselves.

### 6. Open Where It Matters
Pipeline definitions are portable YAML. Connector specs are open source. We do not lock your pipeline logic into a proprietary format. If you leave Contoso, your pipeline definitions go with you. We earn retention through product quality, not switching costs.

---

## Voice Attributes

### Technical
We write for engineers. We use precise technical language — connectors, schemas, DAGs, YAML, CI/CD, observability. We do not water down technical concepts for a general audience. When we need to communicate with non-technical buyers, we translate to outcomes without losing precision.

### Direct
Short sentences. Active voice. Say what the product does, not what it "helps you achieve." If a feature has limits, state them. If a connector is in beta, say so. Directness builds trust with engineers faster than any marketing claim.

### Practical
Every piece of content should leave the reader knowing what to do next. No abstraction without a code example. No architecture diagram without a config snippet. No claim without a way to verify it.

### Confident, Not Arrogant
We know our product is good because we measure it — deployment frequency, pipeline uptime, mean time to recovery. We state facts and let them speak. We do not claim to be better than every alternative in every dimension. We are specific about where we win and honest about where we don't.

### No Hype
No "revolutionary." No "game-changing." No "magic." We describe what the system does in plain language. Engineers can smell hype from a mile away, and it destroys credibility instantly.

---

## Tone by Context

| Context | Tone | Example |
|---------|------|---------|
| **Website hero** | Direct, outcome-focused, technical | "Define your data pipelines in YAML. Deploy with git push. Monitor everything from day one." |
| **Sales outbound** | Empathetic, specific, signal-driven | "You just posted a senior data engineer role. If your team is still maintaining custom Airflow DAGs for integrations, that new hire is going to spend their first quarter on plumbing." |
| **Product documentation** | Clear, structured, code-first | "To add a new source, create a YAML file in `pipelines/sources/` and define the connector type, credentials reference, and sync schedule." |
| **Conference talk** | Story-driven, technical, honest | "I'll show you our actual pipeline configs. This is what 200+ connectors looks like when you treat integration as infrastructure." |
| **CS onboarding** | Supportive, methodical, use-case-driven | "Let's start with your three highest-priority data sources. We'll configure the pipelines together, verify the first sync, and set up alerts." |
| **LinkedIn** | Opinionated, concise, proof-backed | "Your data team is spending 40% of their time maintaining integration scripts. That is not a data engineering problem. It is an infrastructure problem." |
| **Developer blog** | Technical, tutorial-style, code-heavy | "Here is the YAML for a Postgres-to-Snowflake pipeline with schema drift detection and Slack alerting. Four files. Zero custom code." |

---

## Words We Use

| Word/Phrase | Why |
|-------------|-----|
| Pipelines as code | Our category. The core idea. Always use this phrase. |
| Config-driven | Describes how pipelines are defined. YAML, not GUI, not custom scripts. |
| Connectors | The pre-built integrations. 200+ of them. Specific and countable. |
| Observability | What we build in from day one. Schema tracking, freshness, alerting. |
| Version-controlled | Pipelines live in git. Reviewable, auditable, rollbackable. |
| Infrastructure | Data integration is infrastructure, not a feature. Treat it like infrastructure. |
| Schema drift | A specific, measurable problem we detect and alert on. |
| Freshness monitoring | Another specific capability. Data arrived on time or it didn't. |
| On-call engineer | The person we build for. The one who gets paged at 2 AM. |
| Pipeline definition | The YAML file that describes a pipeline. Portable, readable, testable. |

## Words We Avoid

| Word/Phrase | Why | Use Instead |
|-------------|-----|-------------|
| Revolutionary / game-changing | Hype. Engineers tune it out immediately. | Describe the specific capability. |
| Magic / automagically | Implies we hide complexity. Engineers distrust hidden complexity. | Describe how it actually works. |
| No-code / low-code | Mispositions us. We are config-driven and code-friendly, not no-code. | Config-driven, pipelines as code. |
| Just works | Nothing just works. Be honest about what configuration is required. | Describe the setup and what happens after. |
| Seamless | Nothing is seamless. There are always edges. | Describe the actual integration experience. |
| Best-in-class | Unverifiable. | State the specific metric or capability. |
| Leverage | Corporate jargon. Engineers don't talk like this. | Use. |
| Empower | Vague. Soft. | Equip, give, enable. |
| Unlock | Implies something was locked. Dramatic. | Enable, support, add. |
| Solution | Vague. Means nothing. | Say what it actually is: platform, tool, connector. |
| End-to-end | Overused. Describe the actual scope. | Describe what is covered: ingest, transform, deliver, monitor. |
| Synergy | No. | No. |
| ETL tool | We are not an ETL tool. We are a pipelines-as-code platform. | Contoso Pipelines, data pipeline platform. |
| Simple / easy | Dismissive of real engineering complexity. | Straightforward, well-documented, config-driven. |
| Disrupt | We are not disrupting anything. We are building better infrastructure. | Describe the specific improvement. |
