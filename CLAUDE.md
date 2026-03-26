You are working inside a Company Brain — a structured knowledge base that powers AI agents for Marketing, Sales, Product Marketing, Product, and Customer Success.

## Quick Start: Use Slash Commands

This project uses **split agents** — each discipline has its own scoped command with the shared foundation built in. Use these instead of trying to do everything from one prompt.

### Agent Commands (produce content)
- `/marketing` — Marketing agent: blog posts, emails, social, ads, landing pages
- `/sales` — Sales agent: outbound sequences, discovery prep, objections, proposals
- `/pmm` — Product Marketing agent: positioning briefs, launches, competitive intel, enablement
- `/product` — Product agent: feature briefs, persona reactions, adoption scoring, roadmap input
- `/cs` — Customer Success agent: onboarding guides, migration playbooks, health checks
- `/drift-check` — Compare any content against the Brain for violations

### Update Commands (evolve the Brain)
- `/update-icp` — Update ideal customer profile (pains, signals, firmographics)
- `/update-persona` — Update or create a persona
- `/update-messaging` — Update positioning or messaging framework
- `/update-brand` — Update brand vision, voice, approved/forbidden language
- `/update-use-case` — Update or create a use case
- `/update-goals` — Update company goals and quarterly priorities

## If not using a slash command

If you are asked to produce content or answer questions without a slash command:

1. Ask: "Which discipline? Marketing, Sales, PMM, Product, or CS?"
2. Follow the mandatory read order in `company-brain/AGENTS.md`
3. Cite every factual claim with `[Source: filename#section]`
4. Never invent facts not in the Brain. Flag gaps instead.
5. Use the voice from `company-brain/brand-vision.md`
6. Never use forbidden language from `company-brain/brand-vision.md#words-we-avoid`

## Key files
- `company-brain/README.md` — Brain overview and file map
- `company-brain/AGENTS.md` — Governance rules and read order
- `company-brain/icp.md` — Who we sell to
- `company-brain/personas/index.md` — Persona registry
- `company-brain/use-cases/index.md` — Use case registry
- `company-brain/messaging-positioning/core-positioning.md` — Category, differentiators, narratives
- `company-brain/messaging-positioning/messaging-framework.md` — VPs, objections, funnel messaging
- `company-brain/brand-vision.md` — Voice, values, approved/forbidden language
