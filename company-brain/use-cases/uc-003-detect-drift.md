---
title: "Detect and Fix Messaging Drift"
use_case_id: "UC-003"
version: "1.0.0"
last_updated: "2026-03-18"
status: "partially-supported"

personas:
  setup_by: "P-003"
  used_by:
    - "P-002"
    - "P-003"
  evaluated_by: "P-001"

icp_pain: "P6, P7, P8"
current_alternative: "Anecdotal awareness. Someone notices a contradiction on a sales call or in a customer meeting. No systematic detection."
tools_involved:
  - "Company Brain repository"
  - "AI agents for content comparison"
  - "Website, sales materials, product docs as input"
proof: "Bravenger uses drift detection on its own content. This file, and the examples in messaging-positioning/examples/, are checked against core-positioning.md for alignment."

connected_use_cases:
  - "UC-001"
  - "UC-002"
---

# UC-003: Detect and Fix Messaging Drift

## Trigger

Messaging drift is detected or suspected. Common triggers:

- A customer says "your website says X but your sales rep told me Y."
- A new team member reads existing content and finds contradictions.
- A PMM reviews sales-generated content and finds off-brand language or inaccurate claims.
- Quarterly review — the PMM runs a systematic comparison of live content against the Brain.
- A product launch changed the product reality, and not all downstream content has been updated.
- The founder sees a piece of content and says "that's not what we do."

Drift is inevitable. Products change, markets shift, new people join, competitors move. The question is whether you detect it systematically or discover it by accident.

## Current State

Before the Brain, drift detection looks like this:

- **Invisible until embarrassing.** Nobody knows content is misaligned until a customer, prospect, or analyst points it out. By then, the damage is done — trust is eroded.
- **No baseline to measure against.** Even if someone wants to check alignment, there's no authoritative source to compare against. Which version of the positioning is correct? The website? The pitch deck? The founder's last keynote?
- **Manual and exhausting.** The PMM or marketing lead reads every blog post, checks every sales deck, reviews every support doc. This is unsustainable even at a 50-person company.
- **Fix one, break another.** Someone fixes the website copy. But the email templates, the sales one-pager, and the product docs still say the old thing. There's no system to propagate changes.
- **No accountability.** Nobody owns alignment. Marketing blames sales. Sales blames product. Product blames marketing. The drift persists because fixing it is everyone's job and nobody's job.

[Source: icp.md#pains]

## Outcome

With the Brain, drift detection becomes a structured process:

- **The Brain is the baseline.** Core positioning, messaging framework, and persona files define what the company says. Anything that diverges from the Brain is drift.
- **Agent-powered comparison.** An agent reads a piece of content (blog post, sales email, product page) and compares it against the relevant Brain files. It surfaces specific divergences: wrong value prop, unapproved language, outdated feature claim, persona mismatch.
- **Specific, actionable output.** Instead of "the content feels off-brand," the drift report says: "This blog post claims [specific claim]. The Brain says [different claim] in [Source: core-positioning.md#differentiators]. Recommended fix: [specific correction]."
- **Fix in one place.** If the drift reveals that the Brain itself is outdated, the PMM updates the Brain. All future content reflects the change. If the Brain is correct and the content is wrong, the content is updated with a citation to the authoritative source.
- **Measurable alignment.** Over time, the team can track drift frequency, severity, and source. Which discipline produces the most drift? Which personas get mischaracterized most? This data improves both the Brain and the process.

## Gotchas

- **Drift detection requires a complete Brain.** If the Brain has gaps — missing personas, undocumented use cases, vague positioning — the drift detector has nothing to compare against. UC-001 must be thorough for UC-003 to work.
- **Not all divergence is drift.** Sometimes the content is intentionally different — a creative campaign, a localized message, a simplification for a specific audience. The system should flag divergence, not automatically classify everything as wrong.
- **The Brain can be wrong.** If the market shifted and the Brain wasn't updated, the "drifted" content might actually be more current than the Brain. Drift detection should prompt a review, not an automatic correction.
- **Volume matters.** A 50-person company might have 200+ pieces of live content (website pages, blog posts, sales decks, email templates, support docs, product docs). Checking all of them manually is impractical even with agent assistance.
- **Social and verbal channels are hard to audit.** The Brain can govern written content, but what sales reps say on calls, what CSMs tell customers in meetings, and what the founder says at conferences is harder to measure.

## Gaps

- **No automated content ingestion.** Today, drift detection requires manually pointing an agent at specific content. There's no crawler that automatically ingests the website, sales library, and support docs for comparison.
- **No drift scoring algorithm.** The comparison is qualitative (agent judgment), not quantitative (a 0-100 alignment score). A scoring system would make drift tracking measurable over time.
- **No continuous monitoring.** Drift detection is periodic, not real-time. There's no integration that checks new content against the Brain before it's published.
- **No verbal channel coverage.** Call recordings, meeting transcripts, and conference talks are not systematically compared against the Brain.
- **No dashboard.** Drift detection results live in agent output (Markdown). There's no visual dashboard showing alignment status across all content.

## Connected Use Cases

- **UC-001: Build a Company Brain.** The Brain must exist and be comprehensive for drift detection to have a meaningful baseline.
- **UC-002: Generate aligned content.** Content generated from the Brain should have minimal drift. UC-003 verifies this. When drift is found in agent-generated content, it usually means the governance rules or agent prompts need improvement.
