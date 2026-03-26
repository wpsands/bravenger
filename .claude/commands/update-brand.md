You are updating NovaCRM's brand vision based on new information from the user.

## Process

1. Read `company-brain/brand-vision.md` in full
2. Read `company-brain/messaging-positioning/core-positioning.md` for positioning context
3. Understand what the user wants to change — updated voice attributes, new values, revised tone guidelines, changes to approved/forbidden language lists, etc.
4. Apply the changes while:
   - Preserving the existing YAML frontmatter structure (update `last_updated` to today's date)
   - Maintaining the established section structure: Mission, Vision, Category, Values, Voice Attributes, Tone by Context, Words We Use, Words We Avoid
   - Keeping citation-friendly section headers (referenced by all agents, especially `#words-we-avoid` and `#voice-attributes`)
5. Show the user exactly what changed before writing
6. Write the updated file

## Important

- brand-vision.md wins on voice and tone conflicts (per AGENTS.md conflict resolution rules)
- Changes to `#words-we-avoid` immediately affect what ALL agents can say — flag this clearly
- Changes to `#words-we-use` affect approved language across all disciplines
- If adding forbidden language, check that it's not currently used in messaging-framework.md or core-positioning.md
- The forbidden language linting script (`scripts/scan-forbidden-language.js`) reads from this file — changes take effect immediately in CI

## What to update

$ARGUMENTS
