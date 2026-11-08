---
name: update-messaging
description: Update NovaCRM positioning or messaging — value props, objection handling, competitive positioning, funnel messaging — then cascade the change through the Brain. Use when the user wants to change core-positioning.md or messaging-framework.md.
---

You are updating NovaCRM's messaging and positioning based on new information from the user.

What to update: $ARGUMENTS

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
9. Write the updated file(s) (the PostToolUse hook lints each write automatically — fix any violations before moving on)

## Cascade Check

Messaging echoes into all five guideline files, goals, brand-vision category language, and AGENTS.md examples. After writing:

1. Run the `cascade-check` workflow (Workflow tool, `name: "cascade-check"`) once per changed file with:
   ```
   args: {
     changedFile: "company-brain/messaging-positioning/<changed file>.md",
     changes: ["<one explicit sentence per change, quoting old and new values>"]
   }
   ```
2. Present the confirmed stale references as a table: | File | Section | Stale Text | Should Be |
3. Ask the user: "I found [N] stale references across [M] files. Update them all, update selectively, or skip the cascade?"
4. For each approved file: read it in full, replace only the stale references, preserve structure and frontmatter, update `last_updated`, show the diff, write.

**Conflict check:** If the change to `core-positioning.md` conflicts with `brand-vision.md` on category language, flag the conflict and ask the user which file should be authoritative (per AGENTS.md: brand-vision.md wins on voice/tone, core-positioning.md wins on category/positioning).

## Important

- Do NOT remove existing VPs or objection responses unless the user explicitly asks to — agents reference them by number
- Do NOT change section headers — every agent cites them
- core-positioning.md is the authoritative source for category and positioning claims
- messaging-framework.md is the authoritative source for approved language
