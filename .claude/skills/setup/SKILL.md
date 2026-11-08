---
name: setup
description: Interview-driven fork setup — replace the NovaCRM example with the user's real company, preserving every schema, then validate. Use when someone has just forked Bravenger and wants to make the Brain theirs, or says "set up my company brain".
---

You are turning the Bravenger template into this user's Company Brain. The NovaCRM files are your structural gold standard: every file you write must match their section structure, frontmatter schema, and citation-friendly headers exactly — only the company changes.

Context provided so far: $ARGUMENTS

## Ground rules

- **Interview in stages, not all at once.** One stage per message, 3–5 questions each. Use the user's earlier answers to sharpen later questions.
- **Draft, show, confirm, write.** Never write a file the user hasn't seen. Label anything you inferred rather than were told as `(inferred — verify)`.
- **Never carry NovaCRM facts into their Brain.** If the user doesn't provide something, leave an explicit gap marker (`> GAP: not yet documented`), don't invent.
- **Schemas are law.** Persona files need `persona_id`/`dmu_function`, use cases need `use_case_id`/`status`/`personas`/`connected_use_cases`. Section headers must stay citation-friendly. Check `scripts/schemas/` if unsure.

## Stage 1 — Company basics

Ask: company name, one-line description, category (in their words), stage/size, who they sell to (rough), top 2–3 competitors or alternatives, and where they want to start (full Brain vs foundation only). If they have existing materials (site URL, pitch deck text, messaging doc), ask them to paste or point to them — mined material beats interview answers.

## Stage 2 — Foundation files

Interview for, then draft in this order (dependencies flow downward):
1. `brand-vision.md` — mission, voice attributes, words we use/avoid. Push on forbidden language: "which words do you cringe at when competitors use them?" The linter will enforce this list, so it must be real.
2. `icp.md` — firmographics, pains (numbered P1...), buying signals (numbered), anti-ICP. Anti-ICP matters as much as ICP; press for who they should NOT sell to.
3. `goals.md` — annual goals, current-quarter priorities. Convert relative dates to absolute quarters.

Write each file after confirmation. The PostToolUse hook lints every write — fix violations immediately.

## Stage 3 — Personas and use cases

- Personas: aim for 2–4 covering the decision-making unit (economic buyer, champion, evaluator). Interview per persona: role, KPIs, pains, objections, product hooks. Create as `personas/persona-[slug].md` with IDs P-001+, update `personas/index.md`.
- Use cases: aim for 2–3. Interview per use case: trigger, current state (what they do today), outcome, honest status, gotchas, gaps. Create as `use-cases/uc-00X-[slug].md`, update `use-cases/index.md`.

## Stage 4 — Messaging and guidelines

1. `messaging-positioning/core-positioning.md` — category, positioning statement, differentiators, competitive landscape, one strategic narrative per persona.
2. `messaging-positioning/messaging-framework.md` — numbered VPs (each mapped to pains/personas), objection handling (interview: "what are the 5 objections you hear most?"), funnel-stage messaging.
3. `guidelines/*.md` — adapt the five NovaCRM guideline files: same rules, their company's targets and language. Keep discipline formats intact.
4. Update `company-brain/README.md` and `AGENTS.md` example language (guardrail examples, citation examples) to reference their company, keeping all rules identical. Reset `drift-log.md` to empty.

## Stage 5 — Rebrand the agent layer and validate

1. Update `.claude/agents/*.md` and `prompts/*.md`: replace "NovaCRM" with their company name and adjust discipline-specific lines that reference NovaCRM facts (e.g., mid-market positioning) to theirs. The structure and read order stay identical.
2. Update root `README.md` and `CLAUDE.md` company references.
3. Update `evals/golden/*.md`: rewrite each brief and its expectations around their personas, use cases, and VPs. Stale golden briefs produce false eval failures.
4. Run `npm install && npm run lint` — fix everything it reports.
5. Finish by running `/eval` and presenting the scoreboard. A passing eval is the definition of done.

If the user wants to stop partway, that's fine — tell them exactly which stages remain and that agents will flag the gaps until then.
