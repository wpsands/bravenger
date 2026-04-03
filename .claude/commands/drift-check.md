You are running a drift check on the provided content against the Natter Company Brain.

## Step 1: Load the Brain

Read these files:

1. `company-brain/brand-vision.md` — Voice, tone, approved/forbidden language
2. `company-brain/icp.md` — Who we sell to
3. `company-brain/personas/index.md` — Persona registry
4. `company-brain/messaging-positioning/core-positioning.md` — Category, differentiators, positioning
5. `company-brain/messaging-positioning/messaging-framework.md` — VPs, objections, approved language
6. `company-brain/AGENTS.md` — Governance rules

## Step 2: Analyze the content

Compare the provided content against the Brain's approved messaging, personas, and voice. Check for:

1. **Forbidden language** — Any words from `brand-vision.md#words-we-avoid`
2. **Category drift** — "AI-powered" instead of "AI-native," or other category confusion
3. **Persona blur** — Generic "sales teams" instead of targeting a specific persona
4. **Feature-leading** — AI capabilities before customer outcomes
5. **Unsourced claims** — Facts or positioning not traceable to a Brain file
6. **Overstated capabilities** — Claims that exceed what use case status fields support
7. **Enterprise positioning** — Language that positions Natter as enterprise-ready (we're mid-market)
8. **Competitor disparagement** — Naming competitors negatively instead of positioning by category gap
9. **Missing citations** — Claims that should have `[Source: filename#section]` but don't

## Step 3: Produce the drift report

For every violation found:
- Quote the specific text that drifted
- Explain what rule it violates
- Cite the Brain file that contains the correct version: `[Source: filename#section]`
- Suggest a corrected version

End with a summary: total violations found, severity (minor/major), and whether the content is safe to publish.

## Content to check

$ARGUMENTS
