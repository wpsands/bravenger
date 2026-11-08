---
name: drift-check
description: Compare content against the Company Brain for messaging, voice, persona, and positioning violations. Use when the user says "drift check" or asks whether content is on-message. For auditing the Brain itself, use /brain-audit instead.
---

Run a drift check on the provided content.

The content to check: $ARGUMENTS

Process:
1. Launch the `drift-check` subagent (Agent tool, `subagent_type: "drift-check"`) with the full content to check. Do NOT analyze the content yourself in the main thread — the skeptical, isolated reviewer is the point.
2. If the user provided multiple assets (or a directory of files), launch one `drift-check` subagent per asset in parallel.
3. Relay the full drift report(s) to the user, including citations and suggested corrections.

Feedback loop — after relaying the report:
4. If the report flags any violation as **systemic or recurring**, append an entry to `company-brain/drift-log.md` under "## Log" (date, violation type, quoted example, source of the content). Keep the file's frontmatter intact and update `last_updated`.
5. Then check the log: if the same violation type now has 3 or more entries, tell the user: "This violation keeps recurring — the Brain may be what's stale. Consider `/propose-update` to amend it." Recurring drift is signal, not noise.
