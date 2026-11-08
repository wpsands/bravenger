---
name: cs
description: Produce NovaCRM customer success outputs — onboarding guides, migration playbooks, use case walkthroughs, health checks, handoff docs. Use when the user asks for CS content or says "cs agent".
---

Launch the `cs` subagent (Agent tool, `subagent_type: "cs"`) with the user's request verbatim, plus any customer context the user provided.

The request: $ARGUMENTS

Rules for this session (the main thread):
- Do NOT read the Brain files yourself — the subagent does its own 9-file read in isolated context. Your job is delegation and relay.
- If the request contains multiple independent deliverables, launch one `cs` subagent per deliverable in parallel, each with a self-contained brief.
- Relay the subagent's deliverable to the user in full, including its `[Source: ...]` citations and gotcha/gap warnings. Do not strip citations, do not summarize.
- If the subagent flags a missing gotcha or new gap, surface it and offer to run `/propose-update`.
