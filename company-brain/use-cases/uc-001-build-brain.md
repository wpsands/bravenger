---
title: "Build a Company Brain from a Positioning Doc"
use_case_id: "UC-001"
version: "1.0.0"
last_updated: "2026-03-18"
status: "fully-supported"

personas:
  setup_by: "P-001"
  used_by:
    - "P-001"
    - "P-002"
    - "P-003"
  evaluated_by: "P-004"

icp_pain: "P1, P2"
current_alternative: "Positioning consultant ($15-30K, 4-8 weeks) producing a slide deck. Or the founder writes a Notion doc that nobody reads."
tools_involved:
  - "Stakeholder interviews"
  - "Existing content audit"
  - "Markdown + YAML"
  - "Git repository"
  - "AI agents for content generation and validation"
proof: "This Brain. Bravenger's own Company Brain was built using this exact use case. Every file you're reading is the output."

connected_use_cases:
  - "UC-002"
  - "UC-003"
---

# UC-001: Build a Company Brain from a Positioning Doc

## Trigger

A Series A/B B2B SaaS company reaches the point where positioning can no longer live in the founder's head. Common trigger events:

- They just hired their first Head of Marketing or first PMM, and that person has no foundation to work from.
- They completed a positioning exercise that produced a slide deck nobody uses.
- They're rewriting the website and realized nobody agrees on what the company actually says.
- AI tools are producing content that contradicts the pitch deck, the website, and sales talk tracks.
- The founder wants to stop being on every sales call but can't transfer the knowledge.

[Source: icp.md#buying-signals]

## Current State

Before Bravenger, the company's positioning and messaging lives in some combination of:

- **The founder's head.** They can pitch it perfectly but have never written it down in a usable format.
- **A stale slide deck.** From the last positioning workshop. Technically correct, practically useless. Nobody reads it. AI tools can't consume it.
- **Scattered Notion pages.** "Messaging v3 FINAL final" last edited 8 months ago. Multiple versions, none authoritative.
- **Sales talk tracks.** The best reps have their own version. It's pretty good but doesn't match the website.
- **The website itself.** Which was written by the founder 18 months ago, or by an agency that interviewed the founder once and filled in the gaps with SaaS boilerplate.

The result: every person and every tool that produces content starts from scratch or guesses. Content contradicts itself across teams. New hires take months to understand the product and market. AI tools produce plausible-sounding output that's wrong in subtle ways.

[Source: icp.md#pains]

## Outcome

After one week, the customer has a working Company Brain:

- **A git repository** containing structured Markdown files with YAML frontmatter.
- **ICP definition** with firmographics, technographics, pains, buying signals, and anti-ICP.
- **Persona files** for 3-5 key personas, each with demographics, goals, pains, messaging guidance, and product/UI/UX hooks.
- **Use case registry** with 5-12 use cases, each with status, persona mapping, alternatives, gaps, and connected use cases.
- **Core positioning** with category definition, differentiators, and strategic narratives per persona.
- **Messaging framework** with value propositions, approved/forbidden language, objection handling, and funnel-stage messaging.
- **Agent governance** with read order, citation requirements, and output formats for 5 disciplines.
- **Discipline-specific guidelines** for Marketing, Sales, PMM, Product, and CS.

The Head of Marketing or PMM can immediately point AI tools at this Brain and produce aligned content. Sales can read the personas and objection handling. Product can review use case gaps for roadmap input. Every team speaks the same language because they read the same source.

## Gotchas

- **Founder availability is the bottleneck.** The Brain is only as good as the input. If the founder can't dedicate 3-4 hours during the build week for interviews, the output will have gaps.
- **Existing content is worse than nothing if it's wrong.** Sometimes the hardest part is getting the company to admit that their current messaging is inaccurate. The Brain must reflect reality, not aspiration.
- **Not all use cases have clean status.** Some use cases are partially supported or manual workarounds. Documenting this honestly is critical but can feel uncomfortable for the sales team.
- **The Brain requires adoption, not just delivery.** If the PMM or marketing lead doesn't actively use the Brain and enforce agent governance, it becomes another stale document in 3 months.
- **Persona depth varies.** Early-stage companies may not have enough customer data to fully ground every persona. The Brain should document what's known and flag what's assumed.

## Gaps

- **No automated onboarding.** The Brain is delivered as a repo. There's no guided setup wizard or interactive walkthrough. The PMM or marketing lead reads the README and AGENTS.md.
- **No real-time sync with product changes.** When the product ships a new feature, someone has to manually update the relevant use case files. There's no integration with Linear, Jira, or the product changelog.
- **Limited to English.** The Brain architecture works in any language, but the Bravenger productized service currently only delivers in English.
- **No multi-Brain management.** Companies with multiple products or business units may need multiple Brains. The current architecture is single-Brain.

## Connected Use Cases

- **UC-002: Generate aligned content from the Brain.** This is the primary downstream use case. Once the Brain is built, teams use it daily to produce content.
- **UC-003: Detect and fix messaging drift.** The Brain establishes the baseline. Drift detection measures deviation from that baseline.
