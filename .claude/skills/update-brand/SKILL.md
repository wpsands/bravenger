---
name: update-brand
description: Update NovaCRM's brand vision — voice attributes, values, tone, approved/forbidden language — then cascade the change through the Brain. Use when the user wants to change brand-vision.md.
---

You are updating NovaCRM's brand vision based on new information from the user.

What to update: $ARGUMENTS

## Process

1. Read `company-brain/brand-vision.md` in full
2. Read `company-brain/messaging-positioning/core-positioning.md` for positioning context
3. Understand what the user wants to change — updated voice attributes, new values, revised tone guidelines, changes to approved/forbidden language lists, etc.
4. Apply the changes while:
   - Preserving the existing YAML frontmatter structure (update `last_updated` to today's date)
   - Maintaining the established section structure: Mission, Vision, Category, Values, Voice Attributes, Tone by Context, Words We Use, Words We Avoid
   - Keeping citation-friendly section headers (referenced by all agents, especially `#words-we-avoid` and `#voice-attributes`)
5. Show the user exactly what changed before writing, with impact warnings:
   - If `#words-we-avoid` changed: "WARNING: Changes to forbidden language immediately affect ALL agents, the edit-time lint hook, and CI (`scripts/scan-forbidden-language.js`)."
   - If `#words-we-use` changed: "Changes to approved language affect all disciplines."
6. Write the updated file (the PostToolUse hook lints it automatically — note that newly forbidden words may cause the hook to flag OTHER Brain files; that's the cascade surfacing itself)

## Cascade Check

After writing `brand-vision.md`:

1. If forbidden language was ADDED, first run `npm run lint:language` — it finds every existing violation of the newly banned words mechanically. Present those as **Violations**: | File | Section | Forbidden Text | Suggested Replacement |
2. Run the `cascade-check` workflow (Workflow tool, `name: "cascade-check"`) with:
   ```
   args: {
     changedFile: "company-brain/brand-vision.md",
     changes: ["<one explicit sentence per change, quoting old and new values>"]
   }
   ```
   This catches semantic staleness the linter can't — old voice attributes echoed in personas, mission language in the README, category definition drift.
3. Present confirmed stale references as: | File | Section | Stale Text | Should Be |
4. Ask the user: "I found [N] violations and [M] stale references. Fix them all, fix selectively, or skip?"
5. For each approved file: read it in full, fix violations/stale refs only, preserve structure and frontmatter, update `last_updated`, show the diff, write.

## Important

- brand-vision.md wins on voice and tone conflicts (per AGENTS.md conflict resolution rules)
- The forbidden language linter reads from this file — changes take effect immediately at edit time and in CI
