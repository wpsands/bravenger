---
title: Brain Metrics
version: "1.0.0"
last_updated: "2026-03-18"
owner: "Page Sands"
status: production
---

# Brain Metrics

This file defines how to measure whether the Brain is being used, whether it's healthy, and whether it's making a difference. The Brain owner (usually the PMM or Head of Marketing) reviews these metrics monthly.

Today, all measurement is manual. Automated tracking is on the roadmap (see UC-004).

---

## Three Categories of Measurement

| Category | Question It Answers | Who Cares |
|----------|-------------------|-----------|
| **Adoption** | Is the team actually using the Brain? | Brain owner, founder |
| **Health** | Is the Brain current, complete, and consistent? | Brain owner |
| **Impact** | Is the Brain making a measurable difference? | Founder, Head of Marketing |

---

## Adoption Metrics

These measure whether people and agents are actually consuming the Brain.

| Metric | How to Measure (Manual) | Target | Signal If Low |
|--------|------------------------|--------|---------------|
| **Agent queries per week** | Count how many times team members prompt agents with Brain context | >10/week for a 20-person company | Team is producing content without the Brain — drift is accumulating |
| **Files referenced in outputs** | Spot-check 5 agent outputs per week. Count how many cite Brain files. | >80% should have citations | Agents aren't following governance — check if AGENTS.md is in the prompt |
| **Disciplines active** | Which of the 5 discipline guidelines have been used in the last 30 days? | All 5 within 90 days of delivery | Some teams aren't aware of or aren't using their guideline |
| **New hire onboarding** | Did the last new GTM hire read the Brain in their first week? | 100% of new GTM hires | Brain isn't part of the onboarding process — fix the process, not the Brain |
| **Brain owner engagement** | Has the Brain owner opened or updated a Brain file in the last 14 days? | At least 1 update per month | Brain is becoming stale — trigger a refresh conversation |

---

## Health Metrics

These measure whether the Brain itself is current, complete, and internally consistent.

| Metric | How to Measure (Manual) | Target | Signal If Low |
|--------|------------------------|--------|---------------|
| **Staleness score** | For each file, check: when was it last updated? Flag any file not updated in 90+ days. | Zero files >90 days stale | Schedule a Brain refresh. Prioritize by impact: ICP and personas first, examples last. |
| **Persona coverage** | Do all active buyer types have a persona file? Are any real buyers missing? | Every buyer you've sold to in the last 6 months has a persona | Add the missing persona. If you're selling to people not in the Brain, the Brain is incomplete. |
| **Use case coverage** | Do all actively-sold use cases have a file? Are any real use cases undocumented? | Every use case mentioned in sales conversations has a file | Add the missing use case. If Sales is pitching use cases not in the Brain, drift is guaranteed. |
| **Use case status accuracy** | For each use case, is the status field still correct? Has "partially-supported" become "fully-supported" or vice versa? | 100% accurate | Update status. Inaccurate status erodes trust with Product and CS. |
| **Gap freshness** | Are the gaps documented in use case files still real? Have any been resolved without updating the file? | Review gaps quarterly | Update gaps. Stale gaps make the Brain look unmaintained. |
| **Messaging currency** | Are the VPs in messaging-framework.md still what you actually say in sales calls and marketing? | Spot-check against last 3 sales calls | Update messaging. If Sales has evolved the pitch, the Brain needs to match. |
| **Forbidden language violations** | Scan recent content (5 pieces) for words from brand-vision.md#words-we-avoid. Count violations. | Zero violations | Either the content creator isn't reading the Brain, or the agent isn't governed |

---

## Impact Metrics

These measure whether the Brain is producing business results.

| Metric | How to Measure (Manual) | Target | Signal If Low |
|--------|------------------------|--------|---------------|
| **Content consistency** | Have 3 people independently describe the product in one sentence. Compare answers. | All 3 should match the positioning statement in core-positioning.md | The Brain exists but isn't being consumed. Investigate adoption metrics. |
| **New hire ramp time** | How many days from start date until a new GTM hire produces content that passes a drift check? | <14 days (vs. 60-90 days without a Brain) | Onboarding isn't routing through the Brain. Fix the process. |
| **Founder involvement in GTM** | How many hours per week does the founder spend reviewing, correcting, or producing marketing/sales content? | Decreasing trend. Target: <2 hours/week within 90 days of Brain delivery. | The Brain isn't capturing enough of the founder's knowledge, or the team isn't trusting it yet. |
| **Content production velocity** | How many pieces of content (blog posts, emails, social posts, one-pagers) does the team produce per week with Brain-grounded agents vs. before? | 2-3x increase within 60 days | Agents aren't being used, or the Brain doesn't have enough content for agents to produce useful output. |
| **Sales message consistency** | Record or review 3 sales calls. Does the pitch match core-positioning.md? Do objection responses match messaging-framework.md? | >80% alignment | Sales isn't reading the Brain or using the Sales agent. Investigate adoption. |
| **Drift events detected** | When you manually review content against the Brain, how many drift events do you find? Track over time. | Decreasing trend. First scan: expect 10-30. After 90 days: <5. | If drift isn't decreasing, the Brain is being read but not enforced. Tighten governance. |

---

## Measurement Cadence

| Cadence | What to Review | Who |
|---------|---------------|-----|
| **Weekly** | Agent queries, citation spot-check (5 outputs) | Brain owner |
| **Monthly** | Full adoption review, staleness scan, content consistency check | Brain owner + founder |
| **Quarterly** | Full health audit, impact metrics review, use case status validation, gap freshness | Brain owner + founder + stakeholders |

---

## The Honest Truth About Measurement Today

All of these metrics are manual. There is no dashboard. There is no automated tracking. The Brain owner does this by hand — spot-checking outputs, reviewing files, counting citations, asking teammates.

This is a known limitation. It is documented in UC-004 (Measure Brain Impact) with status: partially-supported.

When Bravenger builds the software layer, measurement is the first thing to automate. The metrics defined here will become the spec for that product.

[Source: use-cases/uc-004-measure-brain-impact.md#gaps]
