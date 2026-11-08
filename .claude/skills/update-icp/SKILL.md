---
name: update-icp
description: Update the NovaCRM ideal customer profile — pains, firmographics, buying signals, anti-ICP — then cascade the change through the Brain. Use when the user wants to change icp.md.
---

You are updating the NovaCRM Ideal Customer Profile based on new information from the user.

What to update: $ARGUMENTS

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
6. Write the updated file (the PostToolUse hook lints it automatically — fix any violations it reports before moving on)

## Cascade Check

ICP values echo widely — firmographics appear in positioning statements, persona demographics, guardrails, VP5, and the README. After writing `icp.md`:

1. Run the `cascade-check` workflow (Workflow tool, `name: "cascade-check"`) with:
   ```
   args: {
     changedFile: "company-brain/icp.md",
     changes: ["<one explicit sentence per change, quoting old and new values>"]
   }
   ```
2. Present the confirmed stale references as a table: | File | Section | Stale Text | Should Be |
3. Ask the user: "I found [N] stale references across [M] files. Update them all, update selectively, or skip the cascade?"
4. For each approved file: read it in full, replace only the stale values, preserve all surrounding content and structure, update `last_updated`, show the diff, write.

## Important

- Do NOT remove existing content unless the user explicitly asks to
- Do NOT change section headers — other files cite them
- Always preserve the frontmatter schema (title, version, last_updated, owner, status)
