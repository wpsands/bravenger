---
title: "Drift Log"
version: "1.1.0"
last_updated: "2026-11-10"
owner: "Brain Owner"
status: production
---

# Drift Log

A running record of **recurring** drift-check violations. One entry per systemic violation found by `/drift-check`. When the same violation type accumulates 3+ entries, that's evidence the Brain — not the content — may be stale: run `/propose-update`.

Entry format (append under Log, newest first):

```
### YYYY-MM-DD — <violation type>
- **Content source:** <where the checked content came from>
- **Pattern:** <describe the violation — name the banned term or rule, don't quote forbidden language verbatim>
- **Rule:** <which Brain file/section it violates>
```

## Log

### 2026-11-10 — Unfaithful citation (Brain-internal, found by /brain-audit)
- **Content source:** `goals.md` discipline target tables and six capability claims across `messaging-positioning/`, `personas/`, and `guidelines/` (Brain files, not external content)
- **Pattern:** Each discipline's targets table cited its `guidelines/*-usage.md` file, but those files describe process and contain none of the cited targets. Separately, positioning, persona hooks, and guideline copy claimed capabilities (Close migration via toolkit, rollback after cutover, Gong connector, objection-handling learning, prescriptive coaching recommendations) that the use case files list as gaps. Resolved 2026-11-10 by the audit remediation pass.
- **Rule:** `AGENTS.md#citation-requirements` rule 2 (citations must be accurate); `AGENTS.md#behavioral-guardrails` Never #8 (customer-facing capability claims come only from use case status fields)
