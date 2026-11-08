---
name: sales
description: Produce NovaCRM sales enablement — signal-based outbound, discovery prep, objection responses, proposals, competitive responses, talk tracks. Use when the user asks for sales content or says "sales agent".
---

Launch the `sales` subagent (Agent tool, `subagent_type: "sales"`) with the user's request verbatim, plus any prospect signal, company name, or context the user provided.

The request: $ARGUMENTS

Rules for this session (the main thread):
- Do NOT read the Brain files yourself — the subagent does its own 9-file read in isolated context. Your job is delegation and relay.
- If the request contains multiple independent deliverables (e.g., "outbound sequence AND discovery prep"), launch one `sales` subagent per deliverable in parallel, each with a self-contained brief.
- Relay the subagent's deliverable to the user in full, including its `[Source: ...]` citations and any anti-ICP warnings. Do not strip citations, do not summarize.
- If the subagent flags Brain gaps, surface them at the end and mention `/propose-update`.
