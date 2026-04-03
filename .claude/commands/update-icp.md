You are updating the Natter Ideal Customer Profile based on new information from the user.

## Process

1. Read the current `company-brain/icp.md` file in full
2. Read `company-brain/brand-vision.md` to maintain voice consistency
3. Understand what the user wants to change — new pains, updated firmographics, new buying signals, revised anti-ICP signals, etc.
4. Apply the changes to `company-brain/icp.md` while:
   - Preserving the existing YAML frontmatter structure (update `last_updated` to today's date)
   - Maintaining the existing section structure and formatting
   - Using the established voice from brand-vision.md
   - Keeping citation-friendly section headers (they're referenced as `[Source: icp.md#section-name]`)
   - Numbering new items consistently with existing patterns (e.g., P-9 for a new pain, Signal 9 for a new buying signal)
5. Show the user exactly what changed before writing
6. Write the updated file

## Cascade Check

After writing the updated `icp.md`, perform the cascade check:

1. **Identify what changed.** List each changed value explicitly (e.g., "Headcount changed from '100-500 employees' to '100-1000 employees'", "Added new pain P9").

2. **Scan for stale references.** For each changed value, read the following files and search for the OLD value:
   - `company-brain/brand-vision.md` — echoes firmographic numbers in category definition, words-we-use
   - `company-brain/AGENTS.md` — echoes firmographics in Behavioral Guardrails (#5 "100-500 employees")
   - `company-brain/messaging-positioning/core-positioning.md` — echoes firmographics in positioning statement, differentiators, competitive tables
   - `company-brain/messaging-positioning/messaging-framework.md` — echoes firmographics in VP5, Objection 5
   - `company-brain/personas/index.md` — echoes company size in overview
   - `company-brain/personas/persona-chro.md` — echoes company size in demographics, summary
   - `company-brain/personas/persona-people-analytics.md` — same
   - `company-brain/personas/persona-vp-strategy.md` — same
   - `company-brain/personas/persona-vp-revenue.md` — same
   - `company-brain/use-cases/*.md` — may reference ICP firmographics or pain IDs
   - `company-brain/goals.md` — references ICP in priority descriptions
   - `company-brain/guidelines/marketing-usage.md` — echoes firmographic numbers
   - `company-brain/README.md` — echoes firmographics in company overview

3. **Report stale instances.** Show a table:
   | File | Section | Stale Text | Should Be |

4. **Ask the user:** "I found [N] stale references across [M] files. Would you like me to update them all, update selectively, or skip the cascade?"

5. **Apply cascade updates.** For each file the user approves:
   - Read the full file
   - Replace only the stale values, preserving all surrounding content and structure
   - Update `last_updated` in frontmatter to today's date
   - Show the diff before writing
   - Write the file

## Important

- Do NOT remove existing content unless the user explicitly asks to
- Do NOT change section headers — other files cite them
- Always preserve the frontmatter schema (title, version, last_updated, scope, owner, status)

## What to update

$ARGUMENTS
