---
title: Product Agent Usage Guide
version: "1.0.0"
last_updated: "2026-03-22"
scope: "Product team agents and operators"
owner: "Contoso GTM Team"
status: production
discipline: product
---

# Product Agent Usage Guide

This guide governs all agents producing product content for Contoso. Read AGENTS.md first — this file supplements, not replaces, the core governance rules.

---

## Role of Product in the Brain

Product uses the Brain to make grounded decisions about what to build, who to build for, and how to evaluate success. The Brain provides:
- **Personas** with product hooks — what each persona needs from the platform experience
- **Use cases** with status fields, gaps, and connected use cases — the product landscape
- **ICP pains** — the market problems the product must solve
- **Competitive landscape** — what alternatives exist and where the gaps are

Product does not own the Brain (PMM does), but Product is a critical contributor — especially to use case status fields, gap documentation, and connector roadmap inputs.

---

## Feature Briefs

When producing a feature brief, the agent must ground every decision in Brain data.

### Feature Brief Template

```markdown
## Feature: [Name]

### Problem
- **ICP pain:** [Reference icp.md#pains — which pain does this address?]
- **Persona pain:** [Reference specific persona file — which persona pain?]
- **Use case gap:** [Reference use-cases/ — which gap does this close?]

### Proposal
[What does the feature do? Keep it concise. Include the config/YAML implications.]

### Persona Impact

#### P-001 Data Engineering Lead
- **Relevance:** [High/Medium/Low]
- **Expected reaction:** [Based on persona-data-eng-lead.md#product-hooks]
- **Why they care:** [Specific product hook]

#### P-002 VP of Engineering
- **Relevance:** [High/Medium/Low]
- **Expected reaction:** [Based on persona-vp-engineering.md#product-hooks]
- **Why they care:** [Specific product hook]

#### P-003 Platform Engineer
- **Relevance:** [High/Medium/Low]
- **Expected reaction:** [Based on persona-platform-engineer.md#product-hooks]
- **Why they care:** [Specific product hook]

#### P-004 Head of Data
- **Relevance:** [High/Medium/Low]
- **Expected reaction:** [Based on persona-head-data.md#product-hooks]
- **Why they care:** [Specific product hook]

### Use Case Impact
- **Use case:** [UC-XXX]
- **Current status:** [from use case file]
- **New status after feature ships:** [projected]
- **Gaps closed:** [specific gaps from the use case file]
- **Gaps remaining:** [what's still missing]

### Technical Scope
- **Config change:** [What changes in the YAML pipeline definition?]
- **API change:** [New endpoints, changed behavior?]
- **Connector impact:** [Does this affect connector behavior?]
- **Observability impact:** [New metrics, alerts, or dashboards?]

### Acceptance Criteria
[Grounded in persona expectations and use case outcomes]

### Citations
[Source files used]
```

---

## Persona Reaction Assessment

When evaluating any product decision (feature, design, pricing, UX change), produce a persona reaction assessment.

### Per-Persona Assessment
For each relevant persona:
1. **Read the persona file.** Focus on goals, pains, and product hooks.
2. **Predict the reaction.** Will this persona view this positively, negatively, or neutrally?
3. **Ground the prediction.** Cite the specific persona attribute that drives the reaction.
4. **Identify risks.** What could go wrong for this persona?

### Example Format
```
**P-001 Data Engineering Lead**
Reaction: Positive
Reason: This feature adds pipeline-level observability to the YAML config,
matching their preference for config-driven monitoring.
[Source: personas/persona-data-eng-lead.md#product-hooks]
Risk: If observability requires leaving the CLI for a GUI dashboard, adoption
will be slower. P-001 prefers terminal-first workflows.
```

### Reaction Matrix Template

| Persona | Reaction | Primary Driver | Risk |
|---------|----------|---------------|------|
| P-001 Data Eng Lead | [+/-/neutral] | [Cited attribute] | [What could go wrong] |
| P-002 VP Engineering | [+/-/neutral] | [Cited attribute] | [What could go wrong] |
| P-003 Platform Engineer | [+/-/neutral] | [Cited attribute] | [What could go wrong] |
| P-004 Head of Data | [+/-/neutral] | [Cited attribute] | [What could go wrong] |

---

## Roadmap Inputs from the Brain

The Brain provides structured roadmap input through use case gaps and persona pains.

### Process
1. Read every use case file's `## Gaps` section.
2. Compile a gap inventory — every documented gap across all use cases.
3. Prioritize gaps by persona impact (which personas are affected?), pain severity (does the gap block a critical workflow?), and competitive exposure (does a competitor address this gap?).
4. Translate high-priority gaps into feature candidates.
5. Write feature briefs using the template above.

### Gap Prioritization Framework

| Priority | Criteria | Action |
|----------|----------|--------|
| **P0 — Critical** | Gap blocks a use case for P-001 or P-002 AND a competitor addresses it | Feature brief immediately, schedule for next sprint |
| **P1 — High** | Gap limits a use case OR affects 2+ personas OR appears in competitive losses | Feature brief within 2 weeks, schedule for current quarter |
| **P2 — Medium** | Gap documented but workaround exists, affects 1 persona | Feature brief in backlog, schedule for next quarter |
| **P3 — Low** | Gap is aspirational or affects edge cases | Document in backlog, revisit quarterly |

### Current Gap Inventory

**UC-001 Consolidate Pipelines:**
- No automated migration from Airflow DAGs to Contoso YAML
- Limited custom transform support (Python UDFs in beta)
- No multi-region pipeline deployment
- Schema evolution handling is manual

**UC-002 Self-Serve Connectors:**
- No connector marketplace for community contributions
- Custom connector SDK documentation is incomplete
- No approval workflow for new connector requests
- Rate limiting configuration is per-account, not per-connector

**UC-003 Pipeline Observability:**
- No anomaly detection on pipeline metrics
- Alert routing is Slack/email only (no PagerDuty native integration)
- Historical observability data retained for 30 days only
- No cross-pipeline dependency visualization

**UC-004 Compliance and Lineage:**
- Lineage tracking does not cover transformations (source-to-destination only)
- No automated SOC 2 report generation
- GDPR data deletion propagation is manual
- Audit log export is CSV only (no API)

[Source: use-cases/uc-001-consolidate-pipelines.md#gaps] [Source: use-cases/uc-002-self-serve-connectors.md#gaps] [Source: use-cases/uc-003-pipeline-observability.md#gaps] [Source: use-cases/uc-004-compliance-lineage.md#gaps]

---

## Adoption Scoring

Use cases have status fields. Product should track adoption metrics that map to each use case.

### Adoption Criteria by Use Case

| Use Case | Adoption Indicator | Measurement |
|----------|--------------------|-------------|
| UC-001 Consolidate Pipelines | Custom scripts replaced with config-driven pipelines | % of pipelines migrated to Contoso YAML within 90 days |
| UC-002 Self-Serve Connectors | Non-engineering users adding connectors | # of connectors added without engineering tickets per month |
| UC-003 Pipeline Observability | Team uses Contoso dashboards as primary monitoring | % of pipeline alerts handled in Contoso vs. custom monitoring |
| UC-004 Compliance and Lineage | Lineage data used in audit or compliance review | Lineage queries per month, audit report exports |

### Scoring Framework
- **Fully adopted:** Use case is the primary workflow, team relies on it daily, custom alternatives decommissioned.
- **Partially adopted:** Use case is in use but runs alongside legacy tooling or has manual workarounds.
- **Not adopted:** Feature is available but the customer hasn't integrated it into their workflow.
- **Blocked:** Customer wants to adopt but a gap prevents it. Escalate to Product.

### Health Signals by Adoption Level

| Level | Signal | Action |
|-------|--------|--------|
| Fully adopted | Daily active config commits, alerts configured, team trained | Expand: upsell additional use cases |
| Partially adopted | Sporadic usage, some pipelines still in scripts | CS intervention: identify blockers, provide migration support |
| Not adopted | Account provisioned but no pipelines deployed | CS intervention: re-onboard, validate use case fit |
| Blocked | Support tickets referencing gaps | Product: prioritize the blocking gap |

---

## Design and UX Principles

When evaluating design concepts, assess against persona expectations.

### Persona-Specific Design Principles

**For P-001 (Data Engineering Lead):**
- CLI-first. Every action possible in the terminal.
- YAML config files are the source of truth, not a GUI reflection.
- Keyboard shortcuts and command palette in any web UI.
- Error messages should be as good as compiler errors — specific, actionable, with line numbers.

**For P-002 (VP of Engineering):**
- Dashboards that answer: "Are our pipelines healthy?" in one glance.
- Cost visibility without digging into settings.
- Team-level views: who owns what, what's failing, what's unused.
- Audit trail visible without exporting CSVs.

**For P-003 (Platform Engineer):**
- API-first. Everything in the UI should be automatable via API.
- Terraform provider or equivalent for infrastructure-as-code.
- Self-service admin: RBAC, connector provisioning, environment management.
- GitOps integration should feel native, not bolted on.

**For P-004 (Head of Data):**
- Data lineage visualized — source to destination, with transforms.
- Quality metrics: freshness, schema drift, row counts.
- Strategic views: which data sources are active, which are stale, which are requested.
- Governance controls visible: who has access to what data.

[Source: personas/persona-data-eng-lead.md#product-hooks] [Source: personas/persona-vp-engineering.md#product-hooks] [Source: personas/persona-platform-engineer.md#product-hooks] [Source: personas/persona-head-data.md#product-hooks]

---

## Connector Roadmap Inputs

Connectors are a core product lever. Product should prioritize connectors using Brain data.

### Connector Prioritization Criteria

| Criteria | Weight | Source |
|----------|--------|--------|
| ICP tech stack prevalence | High | icp.md#technographics, data-sources.md |
| Customer request volume | High | Support tickets, CS feedback |
| Competitive gap | Medium | core-positioning.md#competitive-landscape |
| Self-serve potential | Medium | Can the connector be configured without engineering help? |
| Revenue signal | Medium | Is this connector blocking a deal? |
| Community demand | Low | GitHub issues, forum requests |

### Connector Categories

| Category | Examples | ICP Relevance |
|----------|----------|---------------|
| Data warehouses | Snowflake, BigQuery, Redshift, Databricks | Critical — every customer has one |
| SaaS applications | Salesforce, HubSpot, Stripe, Zendesk | High — common data sources |
| Databases | PostgreSQL, MySQL, MongoDB, DynamoDB | High — production data replication |
| Event streams | Kafka, Kinesis, Pub/Sub | Medium — real-time pipeline use cases |
| File storage | S3, GCS, Azure Blob, SFTP | Medium — batch and legacy data |
| APIs | REST, GraphQL, webhook ingestion | High — custom source coverage |
