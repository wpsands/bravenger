You are updating or creating a Natter use case based on new information from the user.

## Process

1. Read `company-brain/use-cases/index.md` to understand the current use case registry and schema
2. Read the relevant use case file(s) from `company-brain/use-cases/`
3. Read `company-brain/brand-vision.md` to maintain voice consistency
4. Read `company-brain/AGENTS.md` for use case file schema expectations
5. Understand what the user wants to change — updated status, new gotchas discovered, gaps closed by a feature, new trigger scenarios, etc.
6. Apply the changes while:
   - Preserving the existing YAML frontmatter structure (update `last_updated` to today's date)
   - Maintaining the established section structure: Trigger, Current State, Natter Outcome, Gotchas, Gaps, Connected Use Cases
   - Using the established voice from brand-vision.md
   - Keeping citation-friendly section headers
   - Updating the `status` field accurately (proposed → in-development → partially-supported → fully-supported → deprecated)
7. If creating a new use case:
   - Assign the next available ID (UC-004, etc.)
   - Create the file as `company-brain/use-cases/uc-[number]-[slug].md`
   - Add the use case to `company-brain/use-cases/index.md` registry
   - Follow the exact schema from index.md
   - Map it to relevant personas and connected use cases
8. Show the user exactly what changed before writing
9. Write the updated file(s)

## Cascade Check

After writing the updated use case file(s), perform the cascade check:

1. **Identify what changed.** List each change (e.g., "UC-001 status changed to fully-supported", "Added Gotcha #4", "Closed Gap: Salesforce migration now supported").

2. **Immediate impact warnings:**
   - If STATUS changed: "Status fields are critical — sales agents use them to avoid overpromising."
   - If a GAP was closed: "Closing a gap is significant — this may affect the product roadmap and positioning."

3. **Scan for stale references.** For each change, read these files:
   - `company-brain/use-cases/index.md` — status column, persona column must match
   - `company-brain/goals.md` — quarterly priorities reference specific use cases and their capabilities
   - `company-brain/messaging-positioning/messaging-framework.md` — objection responses reference use case capabilities (especially Objection 6 re: time-to-value)
   - `company-brain/messaging-positioning/core-positioning.md` — differentiators reference use case capabilities
   - Persona files referenced in the use case — check their "Product Hooks" sections for stale capability claims
   - `company-brain/guidelines/customer-success-usage.md` — references use case status for onboarding guidance
   - `company-brain/guidelines/sales-usage.md` — references use case status for what sales can promise

   If connected use cases changed, also read those files to verify their `connected_use_cases` references are reciprocal.

4. **Report stale instances.** Show a table:
   | File | Section | Stale Text | Should Be |

5. **Ask the user:** "I found [N] stale references across [M] files. Would you like me to update them all, update selectively, or skip the cascade?"

6. **Apply cascade updates.** For each approved file:
   - Read full file, update stale refs, preserve structure and frontmatter
   - Update `last_updated` to today's date
   - Show diff before writing
   - Write the file

## Important

- Status fields are critical — sales agents use them to avoid overpromising. Be accurate.
- Gotchas are where customers get stuck. Always add, never silently remove.
- Gaps drive the product roadmap. Closing a gap is a significant change.
- Always update index.md if use case metadata changes

## What to update

$ARGUMENTS
