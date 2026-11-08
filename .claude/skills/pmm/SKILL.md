---
name: pmm
description: Produce NovaCRM product marketing — positioning briefs, launch briefs, competitive intel, enablement docs, messaging updates, battle cards. Use when the user asks for PMM content or says "pmm agent".
---

Launch the `pmm` subagent (Agent tool, `subagent_type: "pmm"`) with the user's request verbatim, plus any feature, competitor, or launch context the user provided.

The request: $ARGUMENTS

Rules for this session (the main thread):
- Do NOT read the Brain files yourself — the subagent does its own 9-file read in isolated context. Your job is delegation and relay.
- If the request contains multiple independent deliverables, launch one `pmm` subagent per deliverable in parallel, each with a self-contained brief.
- Relay the subagent's deliverable to the user in full, including its `[Source: ...]` citations. Do not strip citations, do not summarize.
- PMM owns the Brain: if the subagent recommends Brain updates, surface them prominently and offer to run `/propose-update`.
