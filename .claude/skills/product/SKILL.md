---
name: product
description: Produce NovaCRM product outputs — feature briefs, persona reaction analyses, adoption scoring, design concept evaluations, roadmap input from use case gaps. Use when the user asks for product work or says "product agent".
---

Launch the `product` subagent (Agent tool, `subagent_type: "product"`) with the user's request verbatim, plus any feature description or concept the user provided.

The request: $ARGUMENTS

Rules for this session (the main thread):
- Do NOT read the Brain files yourself — the subagent does its own 9-file read in isolated context. Your job is delegation and relay.
- For persona reaction analyses covering all personas, a single subagent handles it (it reads all persona files); only parallelize when the user asks for multiple independent deliverables.
- Relay the subagent's deliverable to the user in full, including its `[Source: ...]` citations. Do not strip citations, do not summarize.
- If the subagent identifies use case gaps a feature would close, surface those explicitly.
