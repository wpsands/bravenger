# Agent Prompts

Five pre-configured prompts, one per discipline. Each loads the right Brain files in the right order.

**Using Claude Code?** You don't need these files directly — the repo ships native subagents (`.claude/agents/`) built from these prompts, invoked via `/marketing`, `/sales`, `/pmm`, `/product`, `/cs`, and `/drift-check`. Each runs in isolated context and returns cited output. These prompt files remain the canonical, tool-agnostic versions; if you change one, make the same change in the matching `.claude/agents/` file (and vice versa).

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
| `/drift-check` | Any (compares against Brain) | `brand-vision.md` + `messaging-framework.md` |

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
