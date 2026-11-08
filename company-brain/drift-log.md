---
title: "Drift Log"
version: "1.0.0"
last_updated: "2026-07-04"
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

*(empty — populated by /drift-check)*
