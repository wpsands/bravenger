You are updating or creating a NovaCRM persona based on new information from the user.

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
9. Write the updated file(s)

## Cascade Check

After writing the updated persona file(s), perform the cascade check:

1. **Identify what changed.** List each change (e.g., "Added new objection about Clari", "Changed company size in demographics", "Updated messaging dos/don'ts").

2. **Scan for stale references.** For each change, read these files:
   - `company-brain/personas/index.md` — overview text, selection guide, relationship map
   - `company-brain/messaging-positioning/messaging-framework.md` — persona-specific messaging packages, message testing matrix, persona relevance notes on each VP
   - `company-brain/messaging-positioning/core-positioning.md` — strategic narratives (one per persona), competitive "when to compete" table
   - `company-brain/use-cases/uc-001-pipeline-forecasting.md` — body references to persona roles/pains
   - `company-brain/use-cases/uc-002-rep-coaching.md` — same
   - `company-brain/use-cases/uc-003-crm-migration.md` — same
   - `company-brain/goals.md` — persona references in quarterly priorities and GTM goals
   - `company-brain/icp.md` — decision-making unit table references persona files

   If pains changed, also check `company-brain/messaging-positioning/messaging-framework.md#objection-handling` — objection responses reference persona pain points.

3. **Report stale instances.** Show a table:
   | File | Section | Stale Text | Should Be |

4. **Ask the user:** "I found [N] stale references across [M] files. Would you like me to update them all, update selectively, or skip the cascade?"

5. **Apply cascade updates.** For each approved file:
   - Read the full file
   - Update only the stale references, preserving all surrounding content and structure
   - Update `last_updated` in frontmatter to today's date
   - Show the diff before writing
   - Write the file

## Important

- Do NOT remove existing content unless the user explicitly asks to
- Do NOT change section headers — they're cited as `[Source: personas/persona-xxx.md#section-name]`
- Always update index.md if persona metadata changes

## What to update

$ARGUMENTS
