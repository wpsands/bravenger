---
name: update-use-case
description: Update or create a NovaCRM use case — status, gotchas, gaps, triggers — then cascade the change through the Brain. Use when the user wants to change a use case file or add a new use case.
---

You are updating or creating a NovaCRM use case based on new information from the user.

What to update: $ARGUMENTS

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
8. Show the user exactly what changed before writing, with impact warnings:
   - If STATUS changed: "Status fields are critical — sales agents use them to avoid overpromising."
   - If a GAP was closed: "Closing a gap is significant — this may affect the product roadmap and positioning."
9. Write the updated file(s) (the PostToolUse hook lints each write automatically — it also validates persona/use-case ID cross-references)

## Cascade Check

Use case status and capabilities echo into the index, goals, objection responses, differentiators, persona product hooks, and the sales/CS guidelines. After writing:

1. Run the `cascade-check` workflow (Workflow tool, `name: "cascade-check"`) with:
   ```
   args: {
     changedFile: "company-brain/use-cases/uc-XXX-[slug].md",
     changes: ["<one explicit sentence per change, quoting old and new values>"]
   }
   ```
2. If connected use cases changed, also verify the referenced use case files list this one reciprocally in `connected_use_cases`.
3. Present the confirmed stale references as a table: | File | Section | Stale Text | Should Be |
4. Ask the user: "I found [N] stale references across [M] files. Update them all, update selectively, or skip the cascade?"
5. For each approved file: read it in full, update stale refs only, preserve structure and frontmatter, update `last_updated`, show the diff, write.

## Important

- Status fields are critical — sales agents use them to avoid overpromising. Be accurate.
- Gotchas are where customers get stuck. Always add, never silently remove.
- Gaps drive the product roadmap. Closing a gap is a significant change.
- Always update index.md if use case metadata changes
