---
name: eval
description: Run the Brain eval harness — generate output for golden briefs with the real discipline subagents, score with a 3-judge panel against evals/rubric.md. Use when the user asks to eval, test, or benchmark the Brain or its agents.
---

Run the Brain evals.

Arguments (optional): $ARGUMENTS — a discipline name (marketing, sales, pmm, product, cs) limits the run to that discipline.

## Process

1. Run the `eval` workflow (Workflow tool, `name: "eval"`, args `{ discipline: "<name>" }` if one was given, no args otherwise).
2. Present the scoreboard as a table: | Discipline | Brief | Six dimension scores | Mean | Pass |. Below it, quote each brief's worst findings — those are the actionable part.
3. For failures, diagnose which side is wrong: the agent's output, the Brain content it relied on, or a stale golden expectation in `evals/golden/`. Recommend the specific fix (`/update-*` skill, subagent prompt tweak, or golden-brief edit).
4. If everything passes, say so and report the mean scores — a passing eval is the answer to "does the Brain actually work."
