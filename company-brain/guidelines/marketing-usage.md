---
title: Marketing Agent Usage Guide
version: "1.0.0"
last_updated: "2026-03-18"
scope: "Marketing team agents and operators"
owner: "Page Sands"
status: production
discipline: marketing
---

# Marketing Agent Usage Guide

This guide governs all agents producing marketing content for Bravenger. Read AGENTS.md first — this file supplements, not replaces, the core governance rules.

---

## Role of Marketing in the Brain

Marketing produces content that attracts, educates, and converts the ICP. Every piece of marketing content must:
- Target a specific persona from `personas/`
- Reference at least one use case from `use-cases/`
- Use approved value propositions from `messaging-positioning/messaging-framework.md`
- Follow the voice attributes in `brand-vision.md`
- Include citations using `[Source: filename#section]` format

---

## Content Bill of Materials (BOMs)

### Blog Post BOM
Before writing a blog post, assemble:
- [ ] Target persona (which persona file?)
- [ ] Primary use case (which use case file?)
- [ ] Funnel stage (awareness, consideration, decision?)
- [ ] Primary value proposition (which VP from messaging-framework.md?)
- [ ] Dogfooding hook (how does this relate to Bravenger's own Brain?)
- [ ] CTA (what should the reader do next?)

### Landing Page BOM
- [ ] Target persona (primary + secondary)
- [ ] Hero variant (from examples/README.md or new, following brand-vision.md)
- [ ] 3-5 value propositions with approved language
- [ ] Proof points (dogfooding, use case outcomes, citations)
- [ ] Objection pre-handling (anticipate and address in copy)
- [ ] CTA (discovery call, browse the Brain, etc.)

### Email Campaign BOM
- [ ] Target persona
- [ ] Buying signal (what triggered this outreach?)
- [ ] Sequence length (3-5 emails)
- [ ] Value prop per email (don't repeat, build)
- [ ] Personalization hooks (company stage, hiring signals, funding)
- [ ] CTA per email (escalate from soft to direct)

### Social Post BOM
- [ ] Platform (LinkedIn primary)
- [ ] Content type (opinion, proof, pain-agitation, how-we-do-it)
- [ ] Primary message (one point per post)
- [ ] Source citation (even social posts should be traceable to Brain files)
- [ ] Engagement hook (question, contrarian take, specific number)

---

## Hero Analysis Framework

When evaluating or creating hero messaging, assess against:

| Criteria | Weight | Question |
|----------|--------|----------|
| **Clarity** | High | Can someone understand what we do in 5 seconds? |
| **Persona relevance** | High | Does the target persona see themselves in this? |
| **Problem specificity** | High | Does it name a real, felt pain — not a vague category problem? |
| **Differentiation** | Medium | Does it position us differently from alternatives? |
| **Proof** | Medium | Is there a dogfooding hook or evidence claim? |
| **CTA clarity** | Medium | Is the next step obvious? |
| **Voice alignment** | High | Confident, practical, no hype? |

---

## Drift Detection for Marketing

Marketing content drifts when:

1. **Value props mutate.** The blog post uses a VP that isn't in `messaging-framework.md`, or modifies an approved VP without updating the source.
2. **Persona blurring.** Content targets "everyone" instead of a specific persona. If you can't name the persona file, the content is too generic.
3. **Feature over outcome.** The content describes what the product does (features) instead of what the customer achieves (outcomes mapped to use cases).
4. **Tone drift.** Content becomes hyped, corporate, or tentative instead of confident and practical.
5. **Stale claims.** Content references a use case status or feature that has changed since the Brain was last updated.

### How to check
1. Read the content piece.
2. For each claim, find the citation. If there's no citation, flag it.
3. Check the citation against the source file. If it doesn't match, flag it.
4. Check the persona targeting. If it's unclear, flag it.
5. Check the tone against `brand-vision.md#voice-attributes`. If it drifts, flag it.

---

## Campaign Brief Template

When briefing a campaign, include:

```markdown
## Campaign: [Name]

### Objective
[What should this campaign achieve? Pipeline, awareness, conversion?]

### Target
- **Persona:** [persona file]
- **Funnel stage:** [awareness / consideration / decision]
- **Buying signal:** [from icp.md#buying-signals]

### Core message
[Which VP from messaging-framework.md? Exact approved language.]

### Content pieces
- [List each piece with format and channel]

### Dogfooding hook
[How does this campaign reference Bravenger's own Brain?]

### Success metrics
[How will we measure this campaign?]

### Citations
[Which Brain files inform this campaign?]
```

---

## Channel-Specific Rules

### Website
- Every page must have a clear persona target.
- Hero messaging from approved variants in `examples/README.md` or new variants following the brand voice.
- All product claims must cite a use case with an accurate status.

### Blog
- Every post targets one persona and one use case.
- Include at least one dogfooding reference per post.
- End with a CTA that matches the funnel stage.

### LinkedIn
- One point per post. Be opinionated.
- Include a proof point (our own Brain, a specific metric, a specific example).
- Write in first person. The founder's voice carries more weight than a company page.

### Email
- Signal-based outreach only. No spray-and-pray.
- Personalize to the buying signal, not just the name.
- Include a soft offer: "Want to see our Brain?" is more effective than "Book a demo."

[Source: brand-vision.md#tone-by-context] [Source: messaging-positioning/examples/README.md]
