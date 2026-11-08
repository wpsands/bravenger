---
name: brain-audit
description: Run a full Brain health audit — semantic citation faithfulness, internal contradictions, staleness. Use when the user asks to audit the Brain, check Brain health, or on a recurring schedule.
---

Run the Brain health audit.

Arguments (optional): $ARGUMENTS — a number here overrides the staleness threshold in days (default 90).

## Process

1. First run the mechanical linters: `npm run lint`. If they fail, report those failures first — no point auditing semantics on top of broken structure.
2. Run the `brain-audit` workflow (Workflow tool, `name: "brain-audit"`, args `{ staleDays: <threshold> }`). It has four phases: citation faithfulness (does each cited section still *say* what the citing text claims — the thing `check-citations.js` can't check), contradiction finders across four dimensions, a staleness scan, and a synthesized report.
3. Relay the synthesized report to the user in full, led by the summary counts.
4. For each finding, the report names the fix and the applicable `/update-*` skill — offer to run them. If findings suggest the Brain has drifted from reality (not just from itself), suggest `/propose-update`.
5. If the audit is clean, say so plainly and record nothing.

## Scheduling

To make this recurring, the user can run: `/schedule` (cloud routine, e.g. weekly) or `/loop 1w /brain-audit` in a long-lived session. Recommend weekly for an actively-edited Brain, monthly otherwise.
