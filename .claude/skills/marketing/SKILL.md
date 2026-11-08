---
name: marketing
description: Produce NovaCRM marketing content — blog posts, Content BOMs, email campaigns, social posts, ad copy, landing pages, case study drafts. Use when the user asks for marketing content or says "marketing agent".
---

Launch the `marketing` subagent (Agent tool, `subagent_type: "marketing"`) with the user's request verbatim, plus any content or context the user pasted.

The request: $ARGUMENTS

Rules for this session (the main thread):
- Do NOT read the Brain files yourself — the subagent does its own 9-file read in isolated context. Your job is delegation and relay.
- If the request contains multiple independent deliverables (e.g., "a blog post AND three LinkedIn posts"), launch one `marketing` subagent per deliverable in parallel, each with a self-contained brief.
- Relay the subagent's deliverable to the user in full, including its `[Source: ...]` citations. Do not strip citations, do not summarize.
- If the subagent flags Brain gaps, surface them at the end and mention `/propose-update`.
