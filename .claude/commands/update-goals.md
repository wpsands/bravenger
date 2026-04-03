You are updating Natter's company goals based on new information from the user.

## Process

1. Read `company-brain/goals.md` in full
2. Read `company-brain/brand-vision.md` to maintain voice consistency
3. Understand what the user wants to change — new quarterly priorities, updated targets, shifted focus areas, etc.
4. Apply the changes while:
   - Preserving the existing YAML frontmatter structure (update `last_updated` to today's date)
   - Maintaining the established section structure
   - Using the established voice from brand-vision.md
   - Keeping citation-friendly section headers
5. Show the user exactly what changed before writing
6. Write the updated file

## Cascade Check

After writing the updated `goals.md`, perform the cascade check:

1. **Identify what changed.** List each change (e.g., "Q1 Priority 1 changed theme", "Updated CS discipline target for NPS", "Added new annual goal").

2. **Scan for stale references.** For each change, read these files:
   - `company-brain/guidelines/marketing-usage.md` — echoes quarterly priority themes and discipline targets
   - `company-brain/guidelines/sales-usage.md` — echoes sales discipline targets and priority themes
   - `company-brain/guidelines/product-marketing-usage.md` — echoes PMM targets
   - `company-brain/guidelines/product-usage.md` — echoes product targets
   - `company-brain/guidelines/customer-success-usage.md` — echoes CS targets

   If quarterly priorities changed significantly (new theme, not just a number tweak), also check:
   - `company-brain/messaging-positioning/core-positioning.md` — priorities reference positioning; verify it still supports the new priorities
   - `company-brain/icp.md` — if the goal implies a different ICP (e.g., expanding upmarket), flag the potential conflict

3. **Conflict check:** If a new goal conflicts with current positioning or ICP, do NOT silently update downstream files. Flag it:
   "WARNING: The new goal [X] may conflict with [icp.md / core-positioning.md]. This may require a strategic discussion before cascading."

4. **Report stale instances.** Show a table:
   | File | Section | Stale Text | Should Be |

5. **Ask the user:** "I found [N] stale references across [M] files. Would you like me to update them all, update selectively, or skip the cascade?"

6. **Apply cascade updates.** For each approved file:
   - Read full file, update stale refs, preserve structure and frontmatter
   - Update `last_updated` to today's date
   - Show diff before writing
   - Write the file

## Important

- Goals influence how all agents weight their output (per AGENTS.md read order step 3)
- Changes to quarterly priorities affect what every agent emphasizes

## What to update

$ARGUMENTS
