# Agent Prompts

Six tool-agnostic prompts, one per discipline plus drift-check. Each loads the right Brain files in the right order.

**These files are generated.** The source of truth is `.claude/agents/`. Edit the agent file, then run `npm run sync:prompts`. A test (`test/sync-prompts.test.js`) fails CI if the two drift apart, so there is exactly one copy of each agent's instructions to maintain.

**Using Claude Code?** You don't need these files directly — the subagents in `.claude/agents/` are invoked via `/marketing`, `/sales`, `/pmm`, `/product`, `/cs`, and `/drift-check`. Each runs in isolated context and returns cited output.

## Usage outside Claude Code

Paste a prompt file into any tool that can read the repo (ChatGPT with the repo uploaded, the Claude API, a custom agent framework):

```
Read prompts/marketing.md and follow those instructions. Then write a blog post targeting the VP Sales persona about UC-001.
```

### Quick reference

| Command / prompt | Agent | Guideline used |
|------------------|-------|----------------|
| `/marketing` — `prompts/marketing.md` | Marketing | `guidelines/marketing-usage.md` |
| `/sales` — `prompts/sales.md` | Sales | `guidelines/sales-usage.md` |
| `/pmm` — `prompts/pmm.md` | Product Marketing | `guidelines/product-marketing-usage.md` |
| `/product` — `prompts/product.md` | Product | `guidelines/product-usage.md` |
| `/cs` — `prompts/cs.md` | Customer Success | `guidelines/customer-success-usage.md` |
| `/drift-check` — `prompts/drift-check.md` | Drift checker (compares against Brain) | `brand-vision.md` + `messaging-framework.md` |

## Example prompts

**Marketing:**
- `/marketing write a blog post about why forecast accuracy matters more than pipeline volume`
- `/marketing write 3 LinkedIn posts targeting the Sales Ops persona about UC-002`
- `/drift-check [paste an email]`

**Sales:**
- `/sales write an outbound email for a VP Sales who just missed forecast two quarters in a row`
- `/sales prep me for a discovery call with a CTO who thinks AI scoring is a black box`
- `/sales how do I respond to "we're already on Salesforce"?`

**PMM:**
- `/pmm write a positioning brief for the pipeline forecasting use case`
- `/pmm competitive response: prospect is comparing us to HubSpot's AI features`
- `/pmm launch brief for the new coaching signals feature`

**Product:**
- `/product run a persona reaction analysis on a deal risk dashboard feature`
- `/product extract roadmap candidates from all use case gaps`
- `/product write a feature brief for automated CRM migration tooling`

**CS:**
- `/cs generate an onboarding guide for UC-001 for a customer migrating from HubSpot`
- `/cs write a use case walkthrough for UC-002 targeting the Sales Ops persona`
- `/cs run a health check: what should we measure at 30/60/90 days?`
