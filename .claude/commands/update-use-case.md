You are updating or creating a NovaCRM use case based on new information from the user.

## Process

1. Read `company-brain/use-cases/index.md` to understand the current use case registry and schema
2. Read the relevant use case file(s) from `company-brain/use-cases/`
3. Read `company-brain/brand-vision.md` to maintain voice consistency
4. Read `company-brain/AGENTS.md` for use case file schema expectations
5. Understand what the user wants to change — updated status, new gotchas discovered, gaps closed by a feature, new trigger scenarios, etc.
6. Apply the changes while:
   - Preserving the existing YAML frontmatter structure (update `last_updated` to today's date)
   - Maintaining the established section structure: Trigger, Current State, NovaCRM Outcome, Gotchas, Gaps, Connected Use Cases
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

## Important

- Status fields are critical — sales agents use them to avoid overpromising. Be accurate.
- Gotchas are where customers get stuck. Always add, never silently remove.
- Gaps drive the product roadmap. Closing a gap is a significant change — flag it.
- If a use case status changes, flag downstream impacts: "CS onboarding guides and Sales proposal language may need updates."
- Always update index.md if use case metadata changes

## What to update

$ARGUMENTS
