You are working inside a Company Brain — a structured knowledge base that powers AI agents for Marketing, Sales, Product Marketing, Product, and Customer Success. The example company is NovaCRM (fictional). Run `/setup` to replace it with a real one.

## How work gets done here

**Content requests route to discipline subagents** (`.claude/agents/`): marketing, sales, pmm, product, cs, drift-check. Each does its own 9-file Brain read in isolated context and returns cited output. Delegate to them — do not do the Brain read in the main thread. Independent deliverables run as parallel subagents.

**Skills** (invoke with `/name`):
- Content: `/marketing` `/sales` `/pmm` `/product` `/cs` — delegate to the matching subagent
- Governance: `/drift-check` (content vs Brain), `/brain-audit` (Brain vs itself), `/eval` (does the Brain work)
- Evolution: `/update-icp` `/update-persona` `/update-messaging` `/update-brand` `/update-use-case` `/update-goals` — each ends with the `cascade-check` workflow
- Feedback loop: `/propose-update` — field evidence in, cited Brain amendments out
- Fork setup: `/setup`

**Workflows** (`.claude/workflows/`): cascade-check, citation-audit, brain-audit, eval.

**Hook**: every Edit/Write to `company-brain/**` is auto-linted (frontmatter, citations, forbidden language). If the hook reports violations, fix them in the same turn.

## Non-negotiables (all contexts)

1. Every factual claim about the company cites `[Source: filename#section]` — see `company-brain/AGENTS.md`
2. Never invent facts not in the Brain; flag gaps instead
3. Voice and forbidden language come from `company-brain/brand-vision.md`
4. Never edit `company-brain/` outside an `/update-*` or `/propose-update` flow — cascades and lint exist for a reason
