---
name: update-goals
description: Update NovaCRM's company goals and quarterly priorities, then cascade the change through the Brain. Use when the user wants to change goals.md.
---

You are updating NovaCRM's company goals based on new information from the user.

What to update: $ARGUMENTS

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
6. Write the updated file (the PostToolUse hook lints it automatically)

## Cascade Check

Goals echo into all five discipline guideline files (priority themes, discipline targets). After writing `goals.md`:

1. Run the `cascade-check` workflow (Workflow tool, `name: "cascade-check"`) with:
   ```
   args: {
     changedFile: "company-brain/goals.md",
     changes: ["<one explicit sentence per change, quoting old and new values>"]
   }
   ```
2. **Conflict check:** If a new goal conflicts with current positioning or ICP (e.g., a goal that implies moving upmarket while icp.md says mid-market), do NOT silently update downstream files. Flag it: "WARNING: The new goal [X] may conflict with [icp.md / core-positioning.md]. This may require a strategic discussion before cascading."
3. Present the confirmed stale references as a table: | File | Section | Stale Text | Should Be |
4. Ask the user: "I found [N] stale references across [M] files. Update them all, update selectively, or skip the cascade?"
5. For each approved file: read it in full, update stale refs only, preserve structure and frontmatter, update `last_updated`, show the diff, write.

## Important

- Goals influence how all agents weight their output (per AGENTS.md read order step 3)
- Changes to quarterly priorities affect what every agent emphasizes
