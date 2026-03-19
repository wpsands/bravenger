---
title: "Persona — The VP/Head of Product"
persona_id: "P-004"
role: "VP Product / Head of Product"
dmu_function: "Technical Evaluator"
version: "1.0.0"
last_updated: "2026-03-18"
status: production
---

# The VP/Head of Product

## Summary

The VP/Head of Product leads a small product team (2-6 PMs) at a Series A/B B2B SaaS company. They care about data quality, structured systems, and grounded decision-making. They're skeptical of marketing fluff and want to see the architecture before they trust the output.

They evaluate Bravenger on technical merit. If the data model is sound, the personas are grounded, and the use cases are structured, they'll champion it internally. If it feels like a marketing exercise wrapped in Markdown, they'll kill it.

---

## Demographics

| Attribute | Detail |
|-----------|--------|
| **Title** | VP Product, Head of Product, Director of Product |
| **Company stage** | Series A/B |
| **Company size** | 30–150 employees |
| **Team size** | 2–6 PMs |
| **Age range** | 32–45 |
| **Background** | Engineering → PM, or career PM with technical depth |
| **Tenure at company** | 6–24 months |
| **Reports to** | CEO/CTO |

---

## Goals and KPIs

| Goal | Metric |
|------|--------|
| **Ship the right features** | Feature adoption rate, user activation |
| **Align product with GTM** | Reduction in "marketing promised something we don't have" incidents |
| **Understand users deeply** | Quality of persona data, use case coverage |
| **Make data-driven decisions** | Decisions backed by structured evidence, not opinions |
| **Scale product knowledge** | PM ramp time, SE effectiveness |

---

## Pains

1. **"Marketing's personas are fiction."** They've seen marketing personas that describe "Startup Steve" with a stock photo and invented demographics. These personas are useless for product decisions. They need grounded, evidence-based profiles.

2. **"Nobody documents use cases properly."** The product supports many use cases, but they're scattered across Notion, Slack threads, and the heads of SEs. There's no structured registry. PMs discover use cases by accident.

3. **"Sales promises features we don't have."** Sales told a prospect the product does X. The product doesn't do X. Now the product team has to either build it urgently or explain why not. This happens monthly.

4. **"I can't evaluate marketing content for accuracy."** Marketing publishes a blog post about the product. It's technically inaccurate. But the VP Product doesn't read every blog post, so the inaccuracy persists until a customer calls it out.

5. **"Our product knowledge doesn't scale with the team."** New PMs take months to understand the product's use cases, competitive landscape, and customer personas. There's no structured onboarding. It's all tribal knowledge.

6. **"Positioning exercises produce slides, not data."** They've participated in positioning workshops. The output was a slide deck that lives in Google Drive. It has no structure, no schema, no versioning. It's not data. It's a narrative.

---

## Decision Process

- **Speed:** Deliberate. They want to evaluate the architecture before endorsing it. But once convinced, they move fast.
- **Evaluation criteria:** Data model quality. Schema design. Is it structured or just narrative? Can it be queried, parsed, automated? Are the personas grounded or invented? Do use cases have real status fields and gaps?
- **Budget sensitivity:** Low. They're not the budget holder. They care about quality, not price.
- **Trust signals:** Sound architecture, honest gap documentation (a system that admits what's not supported is more trustworthy than one that claims everything), technical credibility of the builder.
- **Blockers:** Fluff. Unstructured output. "Marketing personas" that are clearly fictional. Any sign that the system is optimized for appearance over substance.

---

## Preferred Content and Channels

| Channel | Usage |
|---------|-------|
| **Twitter/X** | Follows product leaders, AI builders, technical founders. |
| **Internal Slack** | Where they form opinions. If the founder or a trusted engineer endorses something in Slack, they'll look at it. |
| **GitHub / repos** | Will browse the repo directly. Judges by structure, not by landing page. |
| **Product communities** | Lenny's community, Mind the Product, product-focused Slack groups. |
| **Podcasts** | Lenny's Podcast, product strategy content. |
| **Direct demos** | Wants to see the actual system, not a presentation about the system. |

### Content Preferences
- Architecture diagrams and data models
- Schema definitions
- Real examples with real data (not lorem ipsum)
- Evidence of rigor (versioning, status fields, gap documentation)
- NOT: marketing landing pages, feature lists, hype-driven content

---

## Messaging Dos and Don'ts

### Do
- Lead with the data model: "Here's the use case schema. Status field with 5 levels. Multi-persona mapping. Gaps documented."
- Show honest gap documentation: "See this use case? Status is 'partially-supported.' That honesty is what makes the system trustworthy."
- Emphasize grounded personas: "Every attribute in these personas is traceable to customer conversations. No stock photos."
- Use their language: data model, schema, structured data, versioning, adoption metrics, feature brief, API.
- Let them browse the repo. The architecture sells itself to this persona.

### Don't
- Don't lead with marketing benefits. They don't care about "aligned content." They care about data quality.
- Don't use marketing jargon. "Demand gen" and "pipeline" are not their vocabulary.
- Don't show them the messaging framework first. Show them the use case registry and persona files.
- Don't claim perfection. A system that documents its gaps is more credible than one that claims to cover everything.
- Don't skip the technical detail. They want to know the schema, the file format, the governance rules.

---

## Product / UI / UX Hooks

These are the features and design decisions that will resonate with this persona.

| Hook | Why It Matters |
|------|---------------|
| **YAML frontmatter schema** | Structured metadata on every file. Parseable, queryable, automatable. This is data, not narrative. |
| **Use case status field** | Five levels (fully-supported, partially-supported, manual-workaround, on-roadmap, not-supported). Honest product reality, not marketing aspiration. |
| **Multi-persona use case mapping** | `setup_by`, `used_by`, `evaluated_by` — shows who touches each use case and how. Useful for product decisions. |
| **Gap documentation** | Every use case documents its gaps. The product team gets a structured list of what's missing, not a vague feature request. |
| **Connected use cases** | Use cases reference each other. The product team can see the dependency graph and prioritize accordingly. |
| **Git version control** | Diffs, history, blame. The product team can see what changed, when, and why. |
| **No vendor lock-in** | Markdown files in a repo. No proprietary format. The VP Product won't have to fight about data portability. |
| **Agent citation requirements** | Agents must cite sources. When a product decision references a persona pain, the VP Product can verify the citation. This is how grounded decisions work. |
