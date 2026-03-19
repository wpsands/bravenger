---
title: Use Case Registry
version: "1.0.0"
last_updated: "2026-03-18"
owner: "Page Sands"
status: production
use_case_count: 4
---

# Use Case Registry

## Overview

Use cases are foundational to the Bravenger Company Brain. They are not a CS artifact or a product appendix — they feed every discipline. A use case shapes marketing content, sales discovery questions, product roadmap priorities, PMM launch plans, and CS onboarding paths simultaneously.

Every use case follows the schema below. No exceptions.

---

## Use Case Index

| ID | Title | Status | Primary Persona |
|----|-------|--------|----------------|
| UC-001 | Build a Company Brain from a positioning doc | fully-supported | P-001 Technical Founder |
| UC-002 | Generate aligned content from the Brain | fully-supported | P-002 Head of Marketing |
| UC-003 | Detect and fix messaging drift | partially-supported | P-003 First PMM |
| UC-004 | Measure Brain impact | partially-supported | P-003 First PMM |

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

personas:
  setup_by: "persona-id"       # Who configures or initiates this use case
  used_by:                      # Who performs this use case day-to-day (can be multiple)
    - "persona-id"
  evaluated_by: "persona-id"   # Who judges whether it's working

icp_pain: "Reference to icp.md pain ID (e.g., P1, P2)"
current_alternative: "What they do today without Bravenger"
tools_involved:
  - "Tool or system involved"
proof: "Evidence this use case works — ideally dogfooding"

connected_use_cases:
  - "UC-XXX"
---
```

### Required Body Sections

After frontmatter, every use case file must include these sections:

1. **Trigger** — What event or condition causes someone to initiate this use case.
2. **Current State** — What the world looks like before Bravenger. The pain in action.
3. **Outcome** — What the world looks like after. Specific, measurable, observable.
4. **Gotchas** — Real-world complications, edge cases, things that can go wrong.
5. **Gaps** — What Bravenger cannot do yet for this use case. Honest assessment.
6. **Connected Use Cases** — How this use case relates to others in the registry.

### What NOT to Include

- **No steps section.** Steps are operational. They belong in docs, playbooks, or runbooks — not the Brain. The Brain holds strategic knowledge: trigger, current state, outcome, gotchas, gaps.
- **No implementation detail.** "Click this button" or "run this command" is docs content.
- **No aspirational use cases.** If the status is "not-supported," the use case should still be documented but clearly marked.

---

## Status Definitions

| Status | Meaning |
|--------|---------|
| **fully-supported** | Bravenger delivers this use case end-to-end in the productized service. |
| **partially-supported** | The Brain enables this use case but some elements require manual effort or external tools. |
| **manual-workaround** | Achievable but requires significant manual work outside the Brain. |
| **on-roadmap** | Planned for a future version of the service or product. |
| **not-supported** | Not currently possible. Documented for transparency and roadmap input. |

---

## Lifecycle Rules

1. **Every use case gets a file.** Even if the status is "not-supported." Documentation is transparency.
2. **Use cases reference personas.** The `setup_by`, `used_by`, and `evaluated_by` fields must point to real persona IDs from `personas/index.md`.
3. **Use cases reference ICP pains.** The `icp_pain` field must point to a pain documented in `icp.md`.
4. **Status reflects product reality.** Not marketing aspiration. If it's partially supported, say so.
5. **Connected use cases form a graph.** Use cases don't exist in isolation. Document the relationships.
6. **Gaps drive the roadmap.** The gaps section in each use case is the product team's backlog input. If a gap is resolved, update the status and log the change.
7. **Use cases feed every discipline.** Marketing uses them for content topics. Sales uses them for discovery. PMM uses them for launches. Product uses them for prioritization. CS uses them for onboarding.
