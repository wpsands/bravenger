You are updating Natter's messaging and positioning based on new information from the user.

## Process

1. Read `company-brain/messaging-positioning/core-positioning.md` in full
2. Read `company-brain/messaging-positioning/messaging-framework.md` in full
3. Read `company-brain/brand-vision.md` to maintain voice consistency
4. Read `company-brain/icp.md` and relevant persona files for context
5. Understand what the user wants to change — new value props, updated objection handling, revised competitive positioning, new funnel-stage messaging, etc.
6. Determine which file(s) to update:
   - **core-positioning.md** for: category, positioning statement, differentiators, competitive landscape, strategic narratives
   - **messaging-framework.md** for: value propositions (VPs), objection handling, funnel-stage messaging, persona-specific messaging packages
7. Apply the changes while:
   - Preserving the existing YAML frontmatter structure (update `last_updated` to today's date)
   - Maintaining the established section structure and formatting
   - Using the established voice from brand-vision.md
   - Keeping citation-friendly section headers (heavily referenced by all agents)
   - Numbering new items consistently (e.g., VP7 for a new value prop, Objection 7 for a new objection)
8. Show the user exactly what changed before writing
9. Write the updated file(s)

## Cascade Check

After writing the updated messaging file(s), perform the cascade check:

1. **Identify what changed.** List each change (e.g., "Updated Pipedrive competitive entry", "Added Objection 7", "Changed VP1 approved language").

2. **Scan for stale references.** For each change, read these files:

   If `core-positioning.md` changed:
   - `company-brain/messaging-positioning/messaging-framework.md` — VP statements and category language must stay consistent
   - `company-brain/brand-vision.md` — category definition must match (brand-vision.md wins on voice, core-positioning.md wins on category claims)
   - `company-brain/goals.md` — references to positioning, differentiators, competitive landscape
   - `company-brain/AGENTS.md` — category language in guardrails, competitive response examples
   - `company-brain/README.md` — company overview echoes positioning

   If `messaging-framework.md` changed:
   - `company-brain/guidelines/marketing-usage.md` — references approved language, VP numbers
   - `company-brain/guidelines/sales-usage.md` — references objection handlers, competitive talking points, funnel messaging
   - `company-brain/guidelines/product-marketing-usage.md` — references VPs, competitive positioning
   - `company-brain/guidelines/product-usage.md` — references VPs for product alignment
   - `company-brain/guidelines/customer-success-usage.md` — references what was promised during sales
   - `company-brain/goals.md` — GTM goals reference specific VPs by number

   If persona-specific messaging packages changed, also check the corresponding persona file's messaging dos/don'ts for consistency.

3. **Report stale instances.** Show a table:
   | File | Section | Stale Text | Should Be |

4. **Ask the user:** "I found [N] stale references across [M] files. Would you like me to update them all, update selectively, or skip the cascade?"

5. **Apply cascade updates.** For each approved file:
   - Read full file, replace stale references only, preserve structure and frontmatter
   - Update `last_updated` to today's date
   - Show diff before writing
   - Write the file

**Conflict check:** If the change to `core-positioning.md` conflicts with `brand-vision.md` on category language, flag the conflict and ask the user which file should be authoritative (per AGENTS.md: brand-vision.md wins on voice/tone, core-positioning.md wins on category/positioning).

## Important

- Do NOT remove existing VPs or objection responses unless the user explicitly asks to — agents reference them by number
- Do NOT change section headers — every agent cites them
- core-positioning.md is the authoritative source for category and positioning claims
- messaging-framework.md is the authoritative source for approved language

## What to update

$ARGUMENTS
