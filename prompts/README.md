# Agent Prompts

Five pre-configured prompts, one per discipline. Each loads the right Brain files in the right order.

## Usage

### In Claude Code (recommended)

Open your terminal in the project root. Then:

```
marketing agent — write a blog post targeting the VP Sales persona about UC-001
```

Claude Code reads the `CLAUDE.md` at the repo root, which routes "marketing agent" to the Marketing discipline. The agent follows the 10-step read order automatically.

### Using prompt files directly

If the `CLAUDE.md` routing isn't enough context, reference a prompt file:

```
Read prompts/marketing.md and follow those instructions. Then write a blog post targeting the VP Sales persona about UC-001.
```

### Quick reference

| Say this | Agent activates | Guideline used |
|----------|----------------|----------------|
| "marketing agent" | Marketing | `guidelines/marketing-usage.md` |
| "sales agent" | Sales | `guidelines/sales-usage.md` |
| "pmm agent" | Product Marketing | `guidelines/product-marketing-usage.md` |
| "product agent" | Product | `guidelines/product-usage.md` |
| "cs agent" | Customer Success | `guidelines/customer-success-usage.md` |
| "drift check" | Any (compares against Brain) | `brand-vision.md` + `messaging-framework.md` |

## Example prompts

**Marketing:**
- "marketing agent — write a blog post about why forecast accuracy matters more than pipeline volume"
- "marketing agent — write 3 LinkedIn posts targeting the Sales Ops persona about UC-002"
- "marketing agent — drift check this email: [paste]"

**Sales:**
- "sales agent — write an outbound email for a VP Sales who just missed forecast two quarters in a row"
- "sales agent — prep me for a discovery call with a CTO who thinks AI scoring is a black box"
- "sales agent — how do I respond to 'we're already on Salesforce'?"

**PMM:**
- "pmm agent — write a positioning brief for the pipeline forecasting use case"
- "pmm agent — competitive response: prospect is comparing us to HubSpot's AI features"
- "pmm agent — launch brief for the new coaching signals feature"

**Product:**
- "product agent — run a persona reaction analysis on a deal risk dashboard feature"
- "product agent — extract roadmap candidates from all use case gaps"
- "product agent — write a feature brief for automated CRM migration tooling"

**CS:**
- "cs agent — generate an onboarding guide for UC-001 for a customer migrating from HubSpot"
- "cs agent — write a use case walkthrough for UC-002 targeting the Sales Ops persona"
- "cs agent — run a health check: what should we measure at 30/60/90 days?"
