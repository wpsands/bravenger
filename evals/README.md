# Brain Evals

Proof that the Brain works. Each golden brief in `golden/` is a realistic request for one discipline, with checkable expectations grounded in the Brain's actual content. The `/eval` skill (backed by the `eval` workflow) generates output for each brief with the real discipline subagent, then scores it with a panel of three independent judges against `rubric.md`.

Run it:

```
/eval            # all five disciplines
/eval marketing  # one discipline
```

Why this exists: linters check that the Brain is *well-formed*; drift checks catch violations in *content you already have*. Evals answer the question forks actually care about — does a customized Brain make agent output measurably better than a bare prompt? Run `/eval` after replacing the NovaCRM example with your own company data, and again after any major messaging change.

Scores are relative to *your* Brain: a failing eval either means the agent misbehaved or your golden expectations no longer match your Brain. Keep `golden/` briefs updated when the Brain changes — stale expectations produce false failures.

## Files

- `rubric.md` — the six scored dimensions and the pass bar
- `golden/<discipline>.md` — one brief + expectations per discipline. Add more by copying the format; the eval workflow picks up every file in `golden/` automatically.
