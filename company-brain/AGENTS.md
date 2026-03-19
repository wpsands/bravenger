---
title: Agent Operating Instructions
version: "1.0.0"
last_updated: "2026-03-18"
scope: "All AI agents consuming this Company Brain"
owner: "Page Sands"
status: production
---

# Agent Operating Instructions

This file governs all AI agents that consume the Bravenger Company Brain. Every agent — regardless of discipline, model, or task — must follow these rules before producing any output.

---

## Mandatory Read Order

Before producing any output, read these files in this order:

1. **`brand-vision.md`** — Voice, tone, values, approved/forbidden language. Internalize before writing anything.
2. **`icp.md`** — Who we sell to. Pains, signals, anti-ICP. Every output must be relevant to this audience.
3. **`personas/index.md`** — Which persona is this output for? Read the index, then read the specific persona file.
4. **`personas/[relevant-persona].md`** — The specific persona for this task. Read demographics, pains, messaging dos/don'ts, product hooks.
5. **`use-cases/index.md`** — Which use case is this output about? Read the index, then read the specific use case file.
6. **`use-cases/[relevant-use-case].md`** — The specific use case. Read trigger, current state, outcome, gotchas, gaps.
7. **`messaging-positioning/core-positioning.md`** — Category, positioning statement, differentiators, strategic narratives.
8. **`messaging-positioning/messaging-framework.md`** — Value props, objection handling, funnel-stage messaging.
9. **`AGENTS.md`** (this file) — Governance rules, citation format, output requirements.
10. **`guidelines/[discipline]-usage.md`** — The discipline-specific guideline for this task.

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
- `[Source: personas/persona-founder.md#goals-and-kpis]`
- `[Source: use-cases/uc-001-build-brain.md#outcome]`
- `[Source: messaging-positioning/core-positioning.md#differentiators]`
- `[Source: brand-vision.md#words-we-avoid]`

### Rules
1. **Every claim needs a source.** If you can't cite it, don't say it.
2. **Citations must be accurate.** The cited file and section must actually contain the information. Do not fabricate citations.
3. **Multiple sources are fine.** If a claim draws from two files, cite both.
4. **Don't cite for style or tone.** You don't need to cite that you used a confident tone. You do need to cite that the ICP is "Series A/B B2B SaaS."
5. **Flag gaps.** If the Brain doesn't contain information you need, say so explicitly: "The Brain does not currently document [topic]. This claim is based on inference and should be verified."

---

## Output Formats by Discipline

### Marketing
| Output Type | Format | Key Brain Files |
|-------------|--------|----------------|
| Blog post | Markdown, 800-1500 words, H2/H3 structure | personas/, use-cases/, core-positioning.md |
| Landing page copy | Markdown, hero + 3-5 sections, CTA | core-positioning.md, messaging-framework.md |
| Email campaign | Subject + body, 150-250 words per email | personas/, messaging-framework.md, examples/ |
| Social post | Plain text, 100-200 words, LinkedIn format | brand-vision.md, core-positioning.md |
| Ad copy | Short form, 25-50 words, A/B variants | messaging-framework.md, examples/ |

### Sales
| Output Type | Format | Key Brain Files |
|-------------|--------|----------------|
| Discovery prep | Markdown, persona-specific questions + signals | personas/, icp.md, use-cases/ |
| Outbound sequence | 3-5 emails, signal-based, 100-200 words each | icp.md#buying-signals, personas/, examples/ |
| Objection response | Specific objection + response + proof point | messaging-framework.md#objection-handling |
| Proposal language | Markdown, positioning + scope + outcomes | core-positioning.md, use-cases/ |
| Competitive response | Markdown, comparison table + narrative | core-positioning.md#competitive-landscape |

### Product Marketing
| Output Type | Format | Key Brain Files |
|-------------|--------|----------------|
| Positioning brief | Markdown, category + statement + differentiators | core-positioning.md |
| Launch brief | Markdown, feature + persona impact + messaging | use-cases/, personas/, messaging-framework.md |
| Competitive intel | Markdown, comparison + gaps + narrative | core-positioning.md#competitive-landscape |
| Enablement doc | Markdown, talk track + objections + proof | messaging-framework.md, personas/ |
| Messaging update | Markdown, what changed + why + new approved language | messaging-framework.md, changelog |

### Product
| Output Type | Format | Key Brain Files |
|-------------|--------|----------------|
| Feature brief | Markdown, problem + persona + use case + acceptance | personas/, use-cases/ |
| Persona reaction | Markdown, feature + per-persona expected response | personas/ (all), product hooks sections |
| Adoption scoring | Markdown, use case + adoption criteria + metrics | use-cases/, personas/ |
| Design concept eval | Markdown, concept + persona alignment + gaps | personas/, brand-vision.md |
| Roadmap input | Markdown, use case gaps → feature candidates | use-cases/#gaps sections |

### Customer Success
| Output Type | Format | Key Brain Files |
|-------------|--------|----------------|
| Onboarding guide | Markdown, use case-based, persona-specific | use-cases/, personas/ |
| Migration playbook | Markdown, from current-state → Brain-powered | use-cases/#current-state sections |
| Use case walkthrough | Markdown, trigger → outcome, per use case | use-cases/ (specific file) |
| SE handoff doc | Markdown, use case status + gaps + gotchas | use-cases/, icp.md |
| Health check | Markdown, Brain coverage + drift assessment | use-cases/index.md, AGENTS.md |

---

## Behavioral Guardrails

### Always
1. **Read before writing.** Follow the mandatory read order. No exceptions.
2. **Cite your sources.** Every factual claim gets a `[Source: filename#section]` citation.
3. **Match the persona.** If the output is for the Technical Founder, use technical language. If it's for the Head of Marketing, translate to outcomes. Read the messaging dos/don'ts.
4. **Respect the voice.** Confident, practical, no hype. Review `brand-vision.md#voice-attributes` before writing.
5. **Use approved language.** Check `messaging-framework.md` for each VP's approved and forbidden language.
6. **Document what you don't know.** If the Brain has a gap, say so. Don't fill gaps with invention.

### Never
1. **Never invent facts.** If it's not in the Brain, don't say it. Flag the gap instead.
2. **Never use forbidden language.** "Revolutionary," "game-changing," "unlock," "leverage," "synergy" — these are explicitly banned in `brand-vision.md#words-we-avoid`.
3. **Never skip the persona.** Generic content that doesn't target a specific persona is not aligned content. Pick a persona. Read the file.
4. **Never claim unsupported status.** If a use case is "partially-supported," don't describe it as "fully-supported." Accuracy over aspiration.
5. **Never produce steps for use cases.** Use case files hold strategic knowledge: trigger, current state, outcome, gotchas, gaps. Steps belong in docs, not in the Brain.
6. **Never ignore governance.** These rules are not suggestions. They are the mechanism that makes the Brain work.

---

## The Recursive Layer

This Brain governs agents that produce content for Bravenger — a company that builds Company Brains for other companies.

This means:
- The Brain describes itself as a product.
- The personas are buyers of the Brain.
- The use cases include building the Brain.
- The examples sell the Brain.
- The governance rules govern agents that produce content about governance rules.

This is intentional. It is the dogfooding principle in action. When you produce content from this Brain, you are simultaneously:
1. Doing the work (producing aligned content).
2. Proving the product works (the content is aligned because the Brain made it so).
3. Demonstrating the value (a prospect can see the output and evaluate the system).

Embrace the recursion. Reference it when appropriate. "This blog post was generated by an agent reading our Company Brain" is both a factual statement and a proof point.

[Source: brand-vision.md#core-values] [Source: README.md#dogfooding-statement]
