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

## Cascade Check

After writing the updated `brand-vision.md`, perform the cascade check:

1. **Identify what changed.** List each change (e.g., "Added 'disrupt' to Words We Avoid", "Changed voice attribute from 'Practical' to 'Actionable'", "Updated Category Definition").

2. **Immediate impact warnings:**
   - If `#words-we-avoid` changed: "WARNING: Changes to forbidden language immediately affect ALL agents and the CI linting script (`scripts/scan-forbidden-language.js`)."
   - If `#words-we-use` changed: "Changes to approved language affect all disciplines."

3. **Scan for stale references and violations.** For each change, read these files:

   If forbidden language was ADDED:
   - `company-brain/messaging-positioning/core-positioning.md` — search for the newly forbidden word/phrase
   - `company-brain/messaging-positioning/messaging-framework.md` — search in VP statements, objection responses, funnel messaging
   - `company-brain/goals.md` — search in priority descriptions
   - `company-brain/guidelines/*.md` — search all five guideline files for the forbidden word

   If voice attributes, mission, vision, or category definition changed:
   - `company-brain/messaging-positioning/core-positioning.md` — category section and language rules must match
   - `company-brain/AGENTS.md` — behavioral guardrails reference voice attributes and forbidden language
   - `company-brain/README.md` — opening tagline echoes brand vision
   - `company-brain/personas/*.md` — summaries may echo brand voice/mission language

   If `#words-we-use` changed:
   - `company-brain/messaging-positioning/messaging-framework.md` — approved language per VP must stay consistent

4. **Report findings.** Two tables:

   **Violations** (newly forbidden language found in existing files):
   | File | Section | Forbidden Text | Suggested Replacement |

   **Stale references** (old brand language still present):
   | File | Section | Stale Text | Should Be |

5. **Ask the user:** "I found [N] violations and [M] stale references. Would you like me to fix them all, fix selectively, or skip?"

6. **Apply cascade updates.** For each approved file:
   - Read full file, fix violations/stale refs, preserve structure and frontmatter
   - Update `last_updated` to today's date
   - Show diff before writing
   - Write the file

## Important

- brand-vision.md wins on voice and tone conflicts (per AGENTS.md conflict resolution rules)
- The forbidden language linting script (`scripts/scan-forbidden-language.js`) reads from this file — changes take effect immediately in CI

## What to update

$ARGUMENTS
