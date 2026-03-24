---
title: Use Case Registry
version: "1.0.0"
last_updated: "2026-03-22"
owner: "Contoso Data Platform Team"
status: production
use_case_count: 4
---

# Use Case Registry

## Overview

Use cases are the backbone of the Contoso Company Brain. They are not documentation artifacts or support appendices — they feed every discipline. A use case shapes marketing content, sales discovery questions, product roadmap priorities, PMM launch plans, and CS onboarding paths simultaneously.

Contoso Pipelines solves different problems for different teams at different moments. Use cases capture the *why now* — the trigger that turns a passive pain into an active initiative — and map it to personas, outcomes, and honest gaps.

Every use case follows the schema below. No exceptions.

---

## Use Case Index

| ID | Title | Status | Primary Persona |
|----|-------|--------|----------------|
| UC-001 | Consolidate Fragmented Data Pipelines | production | P-002 VP of Data Engineering |
| UC-002 | Get Pipeline Observability Without Building It | production | P-002 VP of Data Engineering |
| UC-003 | Enable Self-Serve Data Access for Product Teams | validated | P-003 Head of Product / Analytics |
| UC-004 | Migrate from Legacy ETL to Modern Stack | validated | P-001 CTO / VP Engineering |

---

## Schema Template

Every use case file must include this YAML frontmatter:

```yaml
---
title: "Use Case Title"
use_case_id: "UC-XXX"
version: "1.0.0"
last_updated: "YYYY-MM-DD"
status: "production | validated | proposed | deprecated"

personas:
  setup_by: "persona-id"       # Who configures or initiates this use case
  used_by:                      # Who performs this use case day-to-day (can be multiple)
    - "persona-id"
  evaluated_by: "persona-id"   # Who judges whether it's working

icp_pain: "Reference to icp.md pain ID (e.g., PAIN-1, PAIN-2)"
current_alternative: "What they do today without Contoso Pipelines"
tools_involved:
  - "Tool or system involved"
proof: "Evidence this use case works — customer reference, benchmark, or internal dogfooding"

connected_use_cases:
  - "UC-XXX"
---
```

### Required Body Sections

After frontmatter, every use case file must include these sections:

1. **Trigger** — What event or condition causes someone to initiate this use case.
2. **Current State** — What the world looks like before Contoso Pipelines. The pain in action.
3. **Desired Outcome** — What the world looks like after. Specific, measurable, observable.
4. **Why It Matters** — Business impact. Revenue, velocity, risk, team health.
5. **Gotchas** — Real-world complications, edge cases, things that can go wrong.
6. **Brain Gaps** — What the Brain doesn't yet document for this use case. Honest assessment.
7. **Persona-Specific Angles** — How each relevant persona experiences and evaluates this use case differently.
8. **Connected Use Cases** — How this use case relates to others in the registry.

### What NOT to Include

- **No steps section.** Steps are operational. They belong in docs, playbooks, or runbooks — not the Brain. The Brain holds strategic knowledge: trigger, current state, outcome, gotchas, gaps.
- **No implementation detail.** "Click this button" or "run this command" is docs content.
- **No aspirational use cases.** If the status is "proposed," the use case should still be documented but clearly marked.

---

## Status Definitions (Lifecycle)

| Status | Meaning | Entry Criteria | Exit Criteria |
|--------|---------|---------------|---------------|
| **proposed** | Hypothesized use case based on market signal or customer request. Not yet validated with real usage. | Product or GTM team identifies a recurring pattern. | Validated with 3+ customer conversations or 1+ pilot deployment. |
| **validated** | Confirmed with real customers. Contoso Pipelines can deliver this outcome but the workflow may require guidance or is not yet fully streamlined. | 3+ customers have described this trigger and achieved this outcome. | Full product support, documented onboarding path, 5+ production customers. |
| **production** | Fully supported. Standard onboarding path exists. Sales can sell it, CS can onboard it, marketing can promote it. | 5+ customers in production. Onboarding playbook exists. Success metrics defined. | N/A (remains production unless deprecated). |
| **deprecated** | No longer actively supported or promoted. May still work but is not a GTM priority. | Product or GTM decision to wind down. | Fully removed from marketing, sales, and onboarding materials. |

### Lifecycle Rules

1. **Every use case gets a file.** Even if the status is "proposed." Documentation is transparency.
2. **Use cases reference personas.** The `setup_by`, `used_by`, and `evaluated_by` fields must point to real persona IDs from `personas/index.md`.
3. **Use cases reference ICP pains.** The `icp_pain` field must point to a pain documented in `icp.md`.
4. **Status reflects product reality.** Not marketing aspiration. If it's validated but not production, say so.
5. **Connected use cases form a graph.** Use cases don't exist in isolation. Document the relationships.
6. **Brain Gaps drive the roadmap.** The gaps section in each use case is the product team's backlog input. If a gap is resolved, update the status and log the change.
7. **Use cases feed every discipline.** Marketing uses them for content topics. Sales uses them for discovery. PMM uses them for launches. Product uses them for prioritization. CS uses them for onboarding.
8. **Deprecation requires a migration note.** When a use case is deprecated, the file must include a note explaining what replaces it and how existing customers should transition.
