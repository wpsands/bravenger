---
title: Use Case Registry
version: "1.0.0"
last_updated: "2026-03-24"
owner: "Brain Owner"
status: production
use_case_count: 3
---

# Use Case Registry

## Overview

Use cases are foundational to the NovaCRM Company Brain. They are not a CS artifact or a product appendix — they feed every discipline. A use case shapes marketing content, sales discovery questions, product roadmap priorities, and CS onboarding paths simultaneously.

Every use case follows the schema below. No exceptions.

---

## Use Case Index

| ID | Title | Status | Primary Persona |
|----|-------|--------|----------------|
| UC-001 | Pipeline Forecasting with AI Deal Scoring | fully-supported | P-001 VP Sales |
| UC-002 | AI-Powered Rep Coaching | fully-supported | P-001 VP Sales |
| UC-003 | CRM Migration to NovaCRM | partially-supported | P-002 Sales Ops |

---

## Schema Template

Every use case file must include this YAML frontmatter:

```yaml
---
title: "Use Case Title"
use_case_id: "UC-XXX"
version: "1.0.0"
last_updated: "YYYY-MM-DD"
status: "fully-supported | partially-supported | manual-workaround | on-roadmap | not-supported"
owner: "Brain Owner"

personas:
  setup_by: "persona-id"       # Who configures or initiates this use case
  used_by:                      # Who performs this use case day-to-day (can be multiple)
    - "persona-id"
  evaluated_by: "persona-id"   # Who judges whether it's working

icp_pain: "Reference to icp.md pain ID (e.g., P1, P2)"
current_alternative: "What they do today without NovaCRM"
tools_involved:
  - "Tool or system involved"
proof: "Evidence this use case works"

connected_use_cases:
  - "UC-XXX"
---
```

### Required Body Sections

After frontmatter, every use case file must include these sections:

1. **Trigger** — What event or condition causes someone to initiate this use case.
2. **Current State** — What the world looks like before NovaCRM. The pain in action.
3. **Outcome** — What the world looks like after. Specific, measurable, observable.
4. **Gotchas** — Real-world complications, edge cases, things that can go wrong.
5. **Gaps** — What NovaCRM cannot do yet for this use case. Honest assessment.
6. **Connected Use Cases** — How this use case relates to others in the registry.

### What NOT to Include

- **No steps section.** Steps are operational. They belong in docs, playbooks, or runbooks — not the Brain. The Brain holds strategic knowledge: trigger, current state, outcome, gotchas, gaps.
- **No implementation detail.** "Click this button" or "run this command" is docs content.
- **No aspirational use cases.** If the status is "not-supported," the use case should still be documented but clearly marked.

---

## Status Definitions

| Status | Meaning |
|--------|---------|
| **fully-supported** | NovaCRM delivers this use case completely within the product. |
| **partially-supported** | NovaCRM enables this use case but some elements require manual effort or external tools. |
| **manual-workaround** | Achievable but requires significant manual work outside NovaCRM. |
| **on-roadmap** | Planned for a future version of the product. |
| **not-supported** | Not currently possible. Documented for transparency and roadmap input. |

---

## Lifecycle Rules

1. **Every use case gets a file.** Even if the status is "not-supported." Documentation is transparency.
2. **Use cases reference personas.** The `setup_by`, `used_by`, and `evaluated_by` fields must point to real persona IDs from `personas/index.md`.
3. **Use cases reference ICP pains.** The `icp_pain` field must point to a pain documented in `icp.md`.
4. **Status reflects product reality.** Not marketing aspiration. If it's partially supported, say so.
5. **Connected use cases form a graph.** Use cases don't exist in isolation. Document the relationships.
6. **Gaps drive the roadmap.** The gaps section in each use case is the product team's backlog input. If a gap is resolved, update the status and log the change.
7. **Use cases feed every discipline.** Marketing uses them for content topics. Sales uses them for discovery. Product uses them for prioritization. CS uses them for onboarding.
