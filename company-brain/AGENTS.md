---
title: Agent Operating Instructions
version: "1.1.0"
last_updated: "2026-04-02"
scope: "All AI agents consuming this Company Brain"
owner: "Brain Owner"
status: production
---

# Agent Operating Instructions

This file governs all AI agents that consume the Natter Company Brain. Every agent — regardless of discipline, model, or task — must follow these rules before producing any output.

---

## Mandatory Read Order

Before producing any output, read these files in this order:

1. **`brand-vision.md`** — Voice, tone, values, approved/forbidden language. Internalize before writing anything.
2. **`icp.md`** — Who we sell to. Pains, signals, anti-ICP. Every output must be relevant to this audience.
3. **`goals.md`** — Company goals and current quarter priorities. Weight output toward what matters now.
4. **`personas/index.md`** — Which persona is this output for? Read the index, then read the specific persona file.
5. **`personas/[relevant-persona].md`** — The specific persona for this task. Read demographics, pains, messaging dos/don'ts, product hooks.
6. **`use-cases/index.md`** — Which use case is this output about? Read the index, then read the specific use case file.
7. **`use-cases/[relevant-use-case].md`** — The specific use case. Read trigger, current state, outcome, gotchas, gaps.
8. **`messaging-positioning/core-positioning.md`** — Category, positioning statement, differentiators, strategic narratives.
9. **`messaging-positioning/messaging-framework.md`** — Value props, objection handling, funnel-stage messaging.
10. **`AGENTS.md`** (this file) — Governance rules, citation format, output requirements.
11. **`guidelines/[discipline]-usage.md`** — The discipline-specific guideline for this task.

Do not skip files. Do not reorder. The read order builds context progressively — voice first, then audience, then content, then rules.

---

## Citation Requirements

Every factual claim, positioning statement, persona insight, or use case reference must include a citation.

### Format
```
[Source: filename#section]
```

### Examples
- `[Source: icp.md#pains]`
- `[Source: personas/persona-chro.md#goals-and-kpis]`
- `[Source: use-cases/uc-001-employee-listening.md#outcome]`
- `[Source: messaging-positioning/core-positioning.md#differentiators]`
- `[Source: brand-vision.md#words-we-avoid]`

### Rules
1. **Every claim needs a source.** If you can't cite it, don't say it.
2. **Citations must be accurate.** The cited file and section must actually contain the information. Do not fabricate citations.
3. **Multiple sources are fine.** If a claim draws from two files, cite both.
4. **Don't cite for style or tone.** You don't need to cite that you used a confident tone. You do need to cite that our ICP is "Fortune 500 organizations with 5,000–500,000+ employees."
5. **Flag gaps.** If the Brain doesn't contain information you need, say so explicitly: "The Brain does not currently document [topic]. This claim is based on inference and should be verified."

---

## Output Formats by Discipline

### Marketing
| Output Type | Format | Key Brain Files |
|-------------|--------|----------------|
| Blog post | Markdown, 800-1500 words, H2/H3 structure | personas/, use-cases/, core-positioning.md |
| Research report promotion | Markdown, executive summary + key findings + CTA | use-cases/, core-positioning.md, brand-vision.md |
| Email campaign | Subject + body, 150-250 words per email | personas/, messaging-framework.md |
| Social post | Plain text, 100-200 words, LinkedIn format | brand-vision.md, core-positioning.md |
| Roundtable invitation | Markdown, topic + peer value + logistics | personas/, use-cases/uc-002-thought-leadership-roundtables.md |
| Case study draft | Markdown, challenge + approach + results, persona-aligned | use-cases/, personas/, icp.md |

### Sales
| Output Type | Format | Key Brain Files |
|-------------|--------|----------------|
| Discovery prep | Markdown, persona-specific questions + signals | personas/, icp.md, use-cases/ |
| Roundtable invitation sequence | 3-5 emails, topic-led, peer-value-first | icp.md#buying-signals, personas/, use-cases/uc-002 |
| Objection response | Specific objection + response + proof point | messaging-framework.md#objection-handling |
| Proposal language | Markdown, positioning + scope + outcomes + pricing | core-positioning.md, use-cases/, icp.md#budget |
| Competitive response | Markdown, comparison table + narrative | core-positioning.md#competitive-landscape |
| PREDICT scorecard | Markdown, 7 dimensions scored R/A/G | messaging-framework.md#sales-methodology-reference |

### Product Marketing
| Output Type | Format | Key Brain Files |
|-------------|--------|----------------|
| Positioning brief | Markdown, category + statement + differentiators | core-positioning.md |
| Launch brief | Markdown, feature + persona impact + messaging | use-cases/, personas/, messaging-framework.md |
| Competitive intel | Markdown, comparison + gaps + narrative | core-positioning.md#competitive-landscape |
| Enablement doc | Markdown, talk track + objections + proof | messaging-framework.md, personas/ |
| Battle card | Markdown, competitor + gap + response + proof | core-positioning.md#competitive-landscape |

### Product
| Output Type | Format | Key Brain Files |
|-------------|--------|----------------|
| Feature brief | Markdown, problem + persona + use case + acceptance | personas/, use-cases/ |
| Persona reaction | Markdown, feature + per-persona expected response | personas/ (all), product hooks sections |
| Adoption scoring | Markdown, use case + adoption criteria + metrics | use-cases/, personas/ |
| Session design review | Markdown, conversation prompts + matching logic + insight output | use-cases/, brand-vision.md |
| Roadmap input | Markdown, use case gaps to feature candidates | use-cases/#gaps sections |

### Customer Success
| Output Type | Format | Key Brain Files |
|-------------|--------|----------------|
| Onboarding guide | Markdown, use case-based, persona-specific | use-cases/, personas/ |
| Session design playbook | Markdown, conversation prompts + matching + comms templates | use-cases/, personas/ |
| Insight delivery guide | Markdown, report walkthrough + action planning | use-cases/, personas/ |
| Expansion playbook | Markdown, from single session to ongoing program | use-cases/index.md, goals.md |
| Health check | Markdown, participation + insight quality + action-taken rate | use-cases/index.md, goals.md |

---

## Behavioral Guardrails

### Always
1. **Read before writing.** Follow the mandatory read order. No exceptions.
2. **Cite your sources.** Every factual claim gets a `[Source: filename#section]` citation.
3. **Match the persona.** If the output is for the CHRO, lead with board-ready insight and workforce strategy. If it's for the People Analytics leader, lead with methodology and data quality. Read the messaging dos/don'ts.
4. **Respect the voice.** Confident (not arrogant), human-first, evidence-led, inclusive by design, direct. Review `brand-vision.md#voice-attributes` before writing.
5. **Use approved language.** Check `brand-vision.md#words-we-use` and `brand-vision.md#words-we-avoid` before writing. Check `messaging-framework.md` for persona-specific approved language.
6. **Document what you don't know.** If the Brain has a gap, say so. Don't fill gaps with invention.
7. **Ground claims in evidence.** Natter sells to enterprise leaders who are skeptical of vendor claims. Every assertion about platform capability must reference a specific, measurable outcome documented in the Brain.

### Never
1. **Never invent facts.** If it's not in the Brain, don't say it. Flag the gap instead.
2. **Never use forbidden language.** "Revolutionize," "game-changer," "synergy," "leverage," "disrupt," "AI-first," "survey replacement" — these are explicitly banned in `brand-vision.md#words-we-avoid`.
3. **Never skip the persona.** Generic content that doesn't target a specific persona is not aligned content. Pick a persona. Read the file.
4. **Never overstate AI capabilities.** If the Brain says the platform detects themes and sentiment from conversations, don't claim it "predicts employee behavior" or "guarantees engagement improvement." Accuracy over aspiration. CHROs will hold you accountable.
5. **Never position Natter as a survey replacement.** We complement existing survey programs with qualitative depth. Framing as a replacement creates resistance from teams invested in survey platforms. [Source: brand-vision.md#words-we-avoid]
6. **Never ignore governance.** These rules are not suggestions. They are the mechanism that makes the Brain work.
7. **Never disparage competitors by name.** State what Natter does. Let the buyer draw the comparison. We win on depth and speed — 1,000+ words per conversation vs. 10 words per survey answer — not on trash talk about Qualtrics or CultureAmp.

---

## Discipline Selection

When a user requests content without specifying a discipline, ask:

> "Which discipline? Marketing, Sales, PMM, Product, or CS?"

When the user specifies a discipline:
- **"marketing agent"** — read `guidelines/marketing-usage.md`, produce output in Marketing format.
- **"sales agent"** — read `guidelines/sales-usage.md`, produce output in Sales format.
- **"pmm agent"** — read `guidelines/product-marketing-usage.md`, produce output in PMM format.
- **"product agent"** — read `guidelines/product-usage.md`, produce output in Product format.
- **"cs agent"** — read `guidelines/customer-success-usage.md`, produce output in CS format.

When the user says **"drift check"** — compare the provided content against the Brain's approved messaging, personas, and voice. Flag every violation with a citation.

---

## Conflict Resolution

If two Brain files contain conflicting information:
1. `AGENTS.md` (this file) wins on governance and process rules.
2. `brand-vision.md` wins on voice and tone.
3. `core-positioning.md` wins on category and positioning claims.
4. The more recently updated file wins on factual claims (check `last_updated` in frontmatter).
5. Flag the conflict in your output so a human can resolve it.
