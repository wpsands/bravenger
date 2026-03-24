---
title: "Persona — The Platform Engineer"
persona_id: "P-003"
role: "Staff/Senior Platform Engineer"
dmu_function: "Technical Evaluator / Influencer"
version: "1.0.0"
last_updated: "2026-03-22"
owner: "Contoso GTM Team"
status: production
---

# The Platform Engineer

## Overview

The Platform Engineer builds and maintains the internal developer platform that engineering teams use to ship, run, and observe their services. They are the person who decides which tools get adopted into the "golden path" and which get rejected. They care about API quality, configuration-driven approaches, GitOps workflows, and whether a tool fits into the platform they've built.

They are not the buyer — they rarely control budget — but they are the most influential technical evaluator. If the Platform Engineer says "this doesn't fit our architecture," the deal is dead. If they say "this is solid," the Data Engineering Lead and VP of Engineering will trust their judgment.

---

## Demographics

| Attribute | Detail |
|-----------|--------|
| **Title** | Staff Platform Engineer, Senior Platform Engineer, Platform Tech Lead, Developer Experience Engineer |
| **Company size** | 200-2000 employees |
| **Industry** | B2B SaaS, fintech, healthtech — companies mature enough to have a platform team |
| **Team size** | Works on a platform team of 3-8 engineers. May be the most senior IC on the team. |
| **Age range** | 28-40 |
| **Experience** | 5-12 years in software engineering, 2-5 years specifically in platform/infra roles |
| **Background** | Backend engineering, SRE, or DevOps. Transitioned to platform engineering as the discipline matured. |
| **Education** | CS degree. Some systems engineering or distributed systems specialization. |
| **Location** | Remote-first. Strong representation in SF, NYC, Berlin, London. |
| **Compensation** | $190K-$300K total comp (staff-level IC at mid-market companies) |

---

## Goals and KPIs

| Goal | Metric |
|------|--------|
| **Increase developer self-service** | % of infrastructure requests that don't require platform team involvement |
| **Reduce time to production** | Minutes from merge to deploy for standard services |
| **Standardize tooling** | Number of tools in the "golden path" vs. shadow IT tools in use |
| **Maintain platform reliability** | Platform uptime, API latency p99, deployment success rate |
| **Reduce cognitive load for dev teams** | Onboarding time for new engineers, support tickets from internal teams |
| **Keep the platform composable** | Number of integration points, API coverage, config-driven vs. custom-coded workflows |

---

## Pains and Frustrations

1. **"Every team picks their own data tools and I have to support all of them."** The data team uses Airflow. The ML team uses Prefect. The analytics team uses Fivetran through a web UI. There's no standard, no shared config format, no unified observability. The platform team gets pulled into supporting tools they didn't choose.

2. **"Most vendor tools have terrible APIs."** They've evaluated dozens of tools. Most have APIs that are afterthoughts — poorly documented, inconsistent, missing critical endpoints, or requiring manual UI steps that can't be automated. If they can't automate it, they don't want it.

3. **"I need config-driven, not click-driven."** The platform they've built is declarative: YAML configs, Terraform modules, Helm charts. When a data tool requires clicking through a web UI to set up a connector, it breaks the entire workflow. It can't be version-controlled, peer-reviewed, or rolled back.

4. **"GitOps is non-negotiable."** Every change goes through a PR. Every deployment is triggered by a merge. Every config is in a Git repo. Tools that can't fit into this workflow are rejected, regardless of their features.

5. **"Vendor lock-in is a design flaw."** They've seen what happens when a vendor raises prices 3x or gets acquired. Portability matters. Open formats, standard protocols, and the ability to export/migrate are not nice-to-haves — they're requirements.

6. **"I evaluate tools for the whole org, not just one team."** When the data team wants a new tool, the Platform Engineer evaluates whether it fits the platform architecture, meets security requirements, supports SSO/RBAC, and can be managed at scale. This evaluation is thorough and takes time.

---

## Current Tools and Stack

| Category | Tools |
|----------|-------|
| **Platform** | Kubernetes (EKS/GKE), Backstage or Port for developer portal |
| **IaC** | Terraform, Crossplane, or Pulumi |
| **CI/CD** | GitHub Actions, ArgoCD, or Flux for GitOps |
| **Observability** | Datadog, Grafana stack, or Honeycomb |
| **Service mesh** | Istio or Linkerd (not always) |
| **Secrets** | Vault or AWS Secrets Manager |
| **Config management** | YAML + Jsonnet or CUE, validated by CI |
| **Languages** | Go, Python, TypeScript. HCL for Terraform. YAML everywhere. |

---

## Buying Triggers

- The platform team is asked to "integrate" a third data tool this quarter and there's no standard way to do it.
- A production incident caused by a data pipeline that wasn't observable through the standard platform monitoring stack.
- The data engineering team requests a new tool and the Platform Engineer realizes they could standardize on one platform instead of supporting three.
- A security audit flags a data tool that doesn't support SSO, RBAC, or audit logging.
- The company adopts a GitOps mandate and existing data tools can't comply.
- A new Platform Engineer joins from a company that used Contoso and asks "why aren't we using this?"

---

## Objections

| Objection | What They're Really Saying | Response Strategy |
|-----------|---------------------------|-------------------|
| "Your API docs are incomplete." | They've already started evaluating and hit a wall. This is a critical blocker. | Take the feedback seriously. Share the full API reference, OpenAPI spec, and SDK repos. If docs are actually incomplete, fix them and tell the evaluator when they're updated. |
| "Can I define everything in YAML and deploy via GitOps?" | This is a yes/no gate. If the answer is "partially" or "we're working on it," they'll wait. | Show the full config-as-code workflow: YAML pipeline definition, PR-based review, merge-to-deploy via GitHub Actions or ArgoCD. Live demo, not slides. |
| "How does this fit with our Backstage portal?" | They want to integrate Contoso into their existing developer platform, not run it as a standalone tool. | Show the Backstage plugin or API integration. If it doesn't exist yet, be honest and provide the API surface they'd need to build it. |
| "What's the data residency and compliance story?" | Security and compliance are their responsibility. If this doesn't pass infosec review, it's over. | Lead with SOC 2 Type II, data residency options, encryption at rest/in transit, SSO (SAML/OIDC), RBAC, and audit logs. Provide the security questionnaire proactively. |
| "We already have Terraform modules for our data stack." | They've invested heavily in their current platform and don't want to throw it away. | Show the Terraform provider for Contoso. Demonstrate that Contoso pipelines can be managed via Terraform alongside everything else in their platform. |

---

## Messaging Dos and Don'ts

### Do
- Lead with architecture. Show the system design, the API surface, the config format. They evaluate tools by reading architecture docs, not feature lists.
- Provide an OpenAPI spec, SDKs, and a CLI. These are the interfaces they care about.
- Show GitOps compatibility in the first five minutes. PR-based pipeline deployment is the hook that earns attention.
- Be honest about limitations. If something requires a UI click today, say so. They'll respect the honesty and check back when it's fixed.
- Talk about composability. How does Contoso fit into their existing Kubernetes, Terraform, and ArgoCD setup? That's the question.

### Don't
- Don't lead with a dashboard screenshot. They don't care about the UI first — they care about the API first.
- Don't use the phrase "easy to use." They want "well-designed" and "automatable." Easy is subjective and often means "dumbed down."
- Don't hide the config format behind a UI. If they can't see the underlying YAML/JSON, they'll assume it's a black box.
- Don't assume they'll adopt Contoso as a standalone tool. They want to integrate it into their platform. Show how.
- Don't send a PDF. Send a link to docs, a repo with examples, or an OpenAPI spec.

---

## Product / UI / UX Hooks

| Hook | Why It Matters |
|------|---------------|
| **Full API coverage** | Every action available in the UI must be available via API. No exceptions. They will automate everything. |
| **YAML-native pipeline definitions** | The pipeline config format is the product for this persona. It needs to be clean, well-documented, and version-controllable. |
| **Terraform provider** | Manage Contoso resources alongside the rest of their infrastructure. This is how they provision everything. |
| **GitOps deployment model** | Merge a PR, pipeline deploys. No manual steps. This is the baseline expectation. |
| **OpenAPI spec and generated SDKs** | They'll build internal tooling on top of Contoso's API. The spec needs to be accurate, complete, and versioned. |
| **Backstage plugin or integration** | The developer portal is the front door for all platform services. Contoso needs to appear there alongside everything else. |
| **Webhook and event system** | They need Contoso to emit events (pipeline started, failed, completed) that they can route to their observability and alerting stack. |
| **SSO/SAML, RBAC, audit logs** | Non-negotiable for platform adoption. If the security review fails, the tool doesn't get in. |

---

## Day in the Life

**8:00 AM** — Jordan starts the day by reviewing overnight alerts. The platform is stable — 99.97% uptime this month. But there's a thread in #data-engineering about a pipeline failure that wasn't visible in Datadog. Jordan investigates: the pipeline runs in Airflow, which has its own monitoring, separate from the platform's Grafana stack. Another observability gap.

**9:00 AM** — PR review queue. Three PRs from the data team: one Terraform module for a new Fivetran connector, one Airflow DAG update, and one custom Python script that runs on a cron job in Kubernetes. Jordan reviews the Terraform module (clean), the DAG (acceptable), and the Python script (rejects it — no health check, no structured logging, no config separation). Leaves a comment: "This needs to be config-driven. Can you extract the parameters into a YAML file?"

**10:00 AM** — Platform team sync. The team discusses the proposal to standardize data pipeline tooling. Currently, three different teams use three different approaches. Jordan presents the evaluation criteria: API quality, config-as-code support, GitOps compatibility, observability integration, SSO/RBAC, and Terraform provider availability. The team agrees to evaluate two vendors over the next two weeks.

**11:00 AM** — Starts the Contoso Pipelines evaluation. First stop: the API docs. Jordan reads the OpenAPI spec, checks for pagination, filtering, error response formats, and rate limiting documentation. Tries the CLI — creates a pipeline from a YAML config, deploys it, checks the status. Notes: "CLI is solid. Config format is clean. API has full coverage. Need to test the Terraform provider."

**12:30 PM** — Lunch. Skims the Contoso GitHub repo — examples, Terraform provider, Backstage plugin (beta). Stars the repo. Sends a Slack message to the Data Engineering Lead: "Contoso's config model is actually good. Want to co-evaluate this week?"

**2:00 PM** — Writes a Terraform module that provisions a Contoso pipeline alongside the Snowflake warehouse and the monitoring stack. Tests the GitOps flow: push config to a branch, open a PR, merge, verify the pipeline deploys. It works. Jordan documents the integration pattern for the team wiki.

**3:30 PM** — Security review meeting. Jordan walks through the Contoso security questionnaire with the infosec team. SOC 2 Type II — check. SSO via SAML — check. RBAC with custom roles — check. Data encrypted at rest and in transit — check. Audit logs exportable to SIEM — check. Infosec gives a conditional green light pending a penetration test review.

**4:30 PM** — Writes up the evaluation summary. Compares Contoso against the two alternatives on 12 criteria. Contoso scores highest on API quality, config-as-code, and GitOps support. One alternative scores higher on existing ecosystem integrations. Jordan sends the summary to the VP of Engineering and the Data Engineering Lead with a recommendation: "Contoso fits our platform architecture. I'd recommend a proof-of-concept with 3-5 production pipelines."

**5:15 PM** — Final PR review. Approves a Helm chart update and a Backstage catalog entry. Closes the laptop.
