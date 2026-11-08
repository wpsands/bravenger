---
name: update-persona
description: Update or create a NovaCRM persona, then cascade the change through the Brain. Use when the user wants to change a persona file or add a new persona.
---

You are updating or creating a NovaCRM persona based on new information from the user.

What to update: $ARGUMENTS

## Process

1. Read `company-brain/personas/index.md` to understand the current persona registry
2. Read the relevant persona file(s) from `company-brain/personas/`
3. Read `company-brain/brand-vision.md` to maintain voice consistency
4. Read `company-brain/AGENTS.md` for the persona file schema expectations
5. Understand what the user wants to change — new pain points, updated demographics, revised product hooks, new objections, etc.
6. Apply the changes while:
   - Preserving the existing YAML frontmatter structure (update `last_updated` to today's date)
   - Maintaining the established section structure: Summary, Demographics, Goals & KPIs, Pains, Decision Process, Content & Channels, Messaging Dos/Don'ts, Objections, Day in the Life, Product Hooks
   - Using the established voice from brand-vision.md
   - Keeping citation-friendly section headers
7. If creating a new persona:
   - Assign the next available persona ID (P-004, etc.)
   - Create the file as `company-brain/personas/persona-[role-slug].md`
   - Add the persona to `company-brain/personas/index.md` registry
   - Follow the exact structure of existing persona files
8. Show the user exactly what changed before writing
9. Write the updated file(s) (the PostToolUse hook lints each write automatically — fix any violations before moving on)

## Cascade Check

Personas echo into messaging packages, strategic narratives, use case bodies, goals, and the ICP's decision-making unit table. After writing the persona file(s):

1. Run the `cascade-check` workflow (Workflow tool, `name: "cascade-check"`) with:
   ```
   args: {
     changedFile: "company-brain/personas/persona-[slug].md",
     changes: ["<one explicit sentence per change, quoting old and new values>"]
   }
   ```
   (If you edited multiple persona files, run the workflow once per changed file.)
2. Present the confirmed stale references as a table: | File | Section | Stale Text | Should Be |
3. Ask the user: "I found [N] stale references across [M] files. Update them all, update selectively, or skip the cascade?"
4. For each approved file: read it in full, replace only the stale references, preserve all surrounding content and structure, update `last_updated`, show the diff, write.

## Important

- Do NOT remove existing content unless the user explicitly asks to
- Do NOT change section headers — they're cited as `[Source: personas/persona-xxx.md#section-name]`
- Always update index.md if persona metadata changes
