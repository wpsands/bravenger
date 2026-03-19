---
title: "Measure Brain Impact"
use_case_id: "UC-004"
version: "1.0.0"
last_updated: "2026-03-18"
status: "partially-supported"

personas:
  setup_by: "P-003"
  used_by:
    - "P-002"
    - "P-003"
  evaluated_by: "P-001"

icp_pain: "P8"
current_alternative: "Nothing. Nobody measures alignment. The founder feels it's off but can't quantify it. The Head of Marketing suspects content is inconsistent but can't prove it."
tools_involved:
  - "Manual review"
  - "Spot-checking agent outputs"
  - "Comparing content against Brain files"
  - "Team surveys"
proof: "Bravenger measures its own Brain health manually using the framework in metrics.md. It works but it's slow."

connected_use_cases:
  - "UC-001"
  - "UC-002"
  - "UC-003"
---

# UC-004: Measure Brain Impact

## Trigger

A company has a working Brain (UC-001 completed). They've been using it for 30+ days. Now someone asks: "Is this working?"

Common trigger moments:

- The founder asks "are we more aligned than before?" and nobody has an answer.
- The Head of Marketing needs to justify the $10-15K spend at the next leadership meeting.
- The First PMM wants to show that the Brain is being used by other teams, not just marketing.
- It's been 90 days since delivery. Time for the first health check. Is the Brain current or decaying?
- A new hire joined and nobody knows if they onboarded from the Brain or from Slack threads.

[Source: icp.md#pains — P8: No way to measure alignment]

## Current State

Before this use case, measurement looks like:

- **Gut feel.** "I think we're more aligned." "Content seems more consistent." "The founder hasn't corrected anyone in a while." None of this is verifiable.
- **No baseline.** Nobody measured alignment before the Brain, so there's no "before" number to compare against.
- **Anecdotes over data.** The PMM knows the Sales agent output was good because one rep said so. The founder thinks the blog is better but hasn't compared it to the positioning. Nobody has checked whether the product team is using use case files.
- **No tool.** There is no dashboard, no scorecard, no automated check. Every measurement requires manual effort.

The result: the Brain might be working perfectly and nobody can prove it. Or it might be decaying and nobody notices. Both outcomes look the same without measurement.

[Source: icp.md#pains — P8: No way to measure alignment]

## Outcome

After implementing this use case, the Brain owner can answer three questions with evidence:

**1. Is the team using the Brain?**
- Agent query frequency tracked (weekly)
- Citation rate in outputs measured (spot-check 5 outputs/week)
- All 5 disciplines active within 90 days
- New hires onboarding through the Brain verified

**2. Is the Brain healthy?**
- Zero files stale beyond 90 days
- All active buyers have persona files
- All sold use cases have use case files
- Use case status fields verified accurate
- Gaps reviewed and updated quarterly

**3. Is the Brain making a difference?**
- Content consistency: 3 people describe the product the same way
- New hire ramp: <14 days to message proficiency (vs. 60-90 without Brain)
- Founder time on GTM: decreasing trend, target <2 hours/week
- Content velocity: 2-3x increase with Brain-grounded agents
- Drift events: decreasing trend over 90 days

The Brain owner reports these metrics monthly to the founder. The quarterly review includes all stakeholders.

[Source: metrics.md]

## Gotchas

- **Measurement fatigue.** All metrics are manual right now. If the Brain owner tries to track everything weekly, they'll burn out and stop measuring entirely. Start with 3 metrics: citation rate, staleness score, and content consistency. Add more once those are habitual.

- **No automated baseline.** The ideal would be: scan all content before the Brain, score alignment, then re-score after 90 days. That doesn't exist. The baseline is qualitative: "Before the Brain, the founder corrected every blog post. Now they don't." Imperfect but real.

- **Adoption ≠ impact.** High agent query volume doesn't mean the content is good. A team can query the Brain constantly and still produce drifted content if the governance is weak or the Brain itself is stale. Adoption metrics and impact metrics must be read together.

- **The founder won't do the measurement.** The founder (P-001) is the economic buyer, not the operator. They want to see the results, not track the metrics. The PMM or Head of Marketing must own measurement. If nobody owns it, it won't happen.

- **First measurement will feel disappointing.** The first content consistency check will probably reveal misalignment. The first staleness scan will flag files. That's normal — it means the measurement is working. The value is in the trend, not the first data point.

- **Impact metrics lag adoption metrics.** Adoption changes in weeks. Impact (content velocity, founder time reduction, new hire ramp) takes 60-90 days to show. Set expectations with the founder that the 30-day check shows adoption, the 90-day check shows impact.

## Gaps

- **No automated measurement.** Every metric in `metrics.md` requires manual effort. There is no dashboard, no scoring algorithm, no automated scanning. This is the biggest gap and the most obvious candidate for the future software product.

- **No citation tracking.** We require citations in agent output but have no way to automatically count or verify them. A citation tracker would show adoption and governance compliance in one metric.

- **No before/after comparison tool.** The ideal experience: paste 5 pieces of pre-Brain content and 5 pieces of post-Brain content, get an alignment score for each set, see the improvement. This doesn't exist.

- **No team-level breakdown.** Metrics are company-wide. We can't automatically tell if Marketing is aligned but Sales is drifting, or vice versa. Manual spot-checking is the only way to get discipline-level data.

- **No integration with content tools.** If the Brain could ingest content from HubSpot, Outreach, Google Docs, or Notion and score it against Brain files, measurement would be continuous and effortless. Today it's periodic and manual.

- **No benchmark data.** We don't yet know what "good" looks like across customers. Is 80% citation rate good? Is 5 drift events after 90 days normal? As we deliver more Brains, benchmark data will accumulate. For now, each customer measures against their own trajectory.

## Connected Use Cases

- **UC-001: Build a Company Brain.** Measurement starts after the Brain is built. No Brain = nothing to measure.
- **UC-002: Generate Aligned Content.** Adoption metrics directly measure UC-002 usage — are agents producing cited content from the Brain?
- **UC-003: Detect and Fix Drift.** Drift detection is the active version of alignment measurement. UC-003 finds problems. UC-004 tracks whether problems are decreasing over time.
