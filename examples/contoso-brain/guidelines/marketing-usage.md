---
title: Marketing Agent Usage Guide
version: "1.0.0"
last_updated: "2026-03-22"
scope: "Marketing team agents and operators"
owner: "Contoso GTM Team"
status: production
discipline: marketing
---

# Marketing Agent Usage Guide

This guide governs all agents producing marketing content for Contoso. Read AGENTS.md first — this file supplements, not replaces, the core governance rules.

---

## Role of Marketing in the Brain

Marketing produces content that attracts, educates, and converts mid-market engineering teams evaluating data pipeline tooling. Every piece of marketing content must:
- Target a specific persona from `personas/`
- Reference at least one use case from `use-cases/`
- Use approved value propositions from `messaging-positioning/messaging-framework.md`
- Follow the voice attributes in `brand-vision.md`
- Include citations using `[Source: filename#section]` format

Marketing does not own the Brain (PMM does), but Marketing is the highest-volume consumer. If Marketing is producing content that doesn't cite the Brain, drift is accumulating.

---

## Content Bill of Materials (BOMs)

### Blog Post BOM
Before writing a blog post, assemble:
- [ ] Target persona (which persona file?)
- [ ] Primary use case (which use case file?)
- [ ] Funnel stage (awareness, consideration, decision?)
- [ ] Primary value proposition (which VP from messaging-framework.md?)
- [ ] Technical proof point (benchmark, architecture detail, or customer metric)
- [ ] CTA (what should the reader do next?)

### Landing Page BOM
- [ ] Target persona (primary + secondary)
- [ ] Hero variant (from examples/ or new, following brand-vision.md)
- [ ] 3-5 value propositions with approved language
- [ ] Proof points (benchmarks, customer logos, architecture diagrams)
- [ ] Objection pre-handling (anticipate and address in copy)
- [ ] CTA (free trial, demo, docs)

### Email Campaign BOM
- [ ] Target persona
- [ ] Buying signal (what triggered this outreach?)
- [ ] Sequence length (3-5 emails)
- [ ] Value prop per email (don't repeat, build)
- [ ] Personalization hooks (stack signals, team size, recent hiring)
- [ ] CTA per email (escalate from soft to direct)

### Social Post BOM
- [ ] Platform (LinkedIn primary, Twitter/X secondary)
- [ ] Content type (technical opinion, proof point, pain-agitation, how-we-built-it)
- [ ] Primary message (one point per post)
- [ ] Source citation (even social posts should be traceable to Brain files)
- [ ] Engagement hook (question, contrarian take, specific number)

---

## Tone Adjustments by Channel

Marketing content adapts tone based on channel while staying within brand voice:

| Channel | Tone Shift | Example |
|---------|-----------|---------|
| Blog | Educational, specific, engineer-friendly | "Here's how YAML-based pipeline config eliminates the 3 AM Slack alert." |
| Website | Confident, concise, outcome-driven | "200+ connectors. Config-driven. Observable from day one." |
| Email | Direct, signal-aware, respectful of time | "You're scaling the data team. Here's how to avoid connector sprawl." |
| LinkedIn | Opinionated, conversational, data-backed | "We moved 14 pipelines off custom scripts in a week. The on-call rotation got 40% shorter." |
| Twitter/X | Sharp, technical, no fluff | "Pipelines as code > pipelines as a prayer." |
| Conference | Authoritative, demo-ready, peer-to-peer | "Let me show you the config file. That's it. That's the pipeline." |

[Source: brand-vision.md#voice-attributes]

---

## Campaign Rules

### Content Calendar Alignment

All campaigns must align to quarterly priorities from `goals.md`. The marketing calendar follows this cadence:

| Week of Quarter | Focus | Content Types |
|----------------|-------|---------------|
| Weeks 1-2 | Awareness push — new ICP signals | Blog posts, social, top-of-funnel ads |
| Weeks 3-6 | Consideration nurture — use case depth | Webinars, technical guides, comparison pages |
| Weeks 7-10 | Conversion push — proof and urgency | Case studies, ROI calculators, demo sequences |
| Weeks 11-13 | Pipeline acceleration — deals in motion | Custom content for open deals, competitive responses |

### Campaign Brief Template

```markdown
## Campaign: [Name]

### Objective
[What business outcome does this campaign drive?]

### Target
- **Persona:** [P-XXX from personas/]
- **Funnel stage:** [Awareness / Consideration / Decision]
- **Buying signal:** [From icp.md#buying-signals]

### Messaging
- **Primary VP:** [From messaging-framework.md]
- **Supporting VPs:** [1-2 additional]
- **Objection to pre-handle:** [From messaging-framework.md#objection-handling]

### Content Pieces
| Piece | Format | Owner | Due |
|-------|--------|-------|-----|
| [e.g., Blog post] | [e.g., 1200 words, H2/H3] | [Name] | [Date] |

### Success Metrics
- [e.g., 500 unique views, 15 demo requests, 3 SQLs]

### Brain Files Referenced
[List every Brain file this campaign draws from]
```

---

## Hero Messaging Analysis

When producing or evaluating hero copy for the website or landing pages, test against these criteria:

| Criteria | Source | Question |
|----------|--------|----------|
| ICP relevance | icp.md | Would a data engineering lead at a 500-person company immediately understand this? |
| Persona resonance | personas/ | Does this speak to the primary persona's #1 pain? |
| Differentiation | core-positioning.md#differentiators | Does this distinguish Contoso from Fivetran, Airbyte, or Stitch? |
| Voice match | brand-vision.md | Is this confident and specific, or vague and hype-filled? |
| Forbidden language | brand-vision.md#words-we-avoid | Does this use any banned words? |
| CTA clarity | messaging-framework.md | Is the next step obvious? |

### Hero Copy Rules
1. Lead with the engineering outcome, not the product category.
2. Use specific numbers when available (connectors, rows/month, setup time).
3. Never use "seamless," "effortless," or "magic" — these are banned.
4. The sub-headline should address the primary pain, not restate the headline.
5. CTA should be low-friction: "Try free" or "Read the docs" — not "Schedule a demo" at top of funnel.

---

## Drift Detection for Marketing

Marketing is the most visible discipline. Drift here is public.

### Monthly Marketing Drift Check
1. Pull the last 10 pieces of published content (blog, social, email, web).
2. For each piece, verify:
   - Does it target a documented persona?
   - Does it reference a documented use case or pain?
   - Does the language match approved VPs from messaging-framework.md?
   - Does it avoid forbidden language from brand-vision.md?
3. Score: pieces passing / total pieces. Target: >80%.
4. Log drift events and corrections in `updates/changelog.md`.

### Common Marketing Drift Patterns

| Drift Type | Example | Fix |
|-----------|---------|-----|
| Persona drift | Blog targets "business analysts" (not a documented persona) | Re-target to P-001 Data Eng Lead or P-004 Head of Data |
| Pain drift | Landing page claims "saves money" without grounding in a documented pain | Connect to a specific pain from icp.md#pains |
| Voice drift | Email uses "revolutionary platform" | Replace with specific claim: "200+ connectors, config-driven" |
| Category drift | Content calls Contoso an "ETL tool" | Correct to "data pipeline platform" per core-positioning.md |
| Use case drift | Marketing a use case not documented in the Brain | Either add the use case to the Brain or stop marketing it |

[Source: brand-vision.md#words-we-avoid] [Source: messaging-positioning/core-positioning.md#category]

---

## Output Types Quick Reference

| Output Type | Format | Key Brain Files |
|-------------|--------|----------------|
| Blog post | Markdown, 800-1500 words, H2/H3 structure | personas/, use-cases/, core-positioning.md |
| Landing page copy | Markdown, hero + 3-5 sections, CTA | core-positioning.md, messaging-framework.md |
| Email campaign | Subject + body, 150-250 words per email | personas/, messaging-framework.md, examples/ |
| Social post | Plain text, 100-280 characters or 100-200 words (LinkedIn) | brand-vision.md, core-positioning.md |
| Ad copy | Short form, 25-50 words, A/B variants | messaging-framework.md, examples/ |
| Comparison page | Markdown, feature table + narrative + CTA | core-positioning.md#competitive-landscape |
| Webinar outline | Markdown, title + 4-6 segments + speaker notes | use-cases/, personas/, messaging-framework.md |
| Technical guide | Markdown, 1500-3000 words, code examples | use-cases/, personas/persona-data-eng-lead.md |
