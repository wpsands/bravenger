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

## Important

- Do NOT remove existing content unless the user explicitly asks to
- Do NOT change section headers — they're cited as `[Source: personas/persona-xxx.md#section-name]`
- If the change affects messaging or use cases, flag it: "This persona change may require updates to messaging-positioning/ files."
- Always update the index.md if persona metadata changes

## What to update

$ARGUMENTS
