---
title: Company Goals
version: "1.1.0"
last_updated: "2026-03-24"
owner: "Brain Owner"
status: production
review_cadence: quarterly
---

# Company Goals

This file defines what NovaCRM is trying to achieve and when. Every agent reads this file to prioritize output — not just produce aligned content, but produce content that serves the current business objectives.

Goals are reviewed quarterly. If a goal changes mid-quarter, update this file.

---

## Company-Level Goals

### FY2026 Annual Goals

| Goal | Target | Metric | Connected Brain Files |
|------|--------|--------|----------------------|
| **ARR growth** | $3M to $6M ARR by EOY | Net new ARR + expansion | `icp.md` |
| **Customer count** | 80 to 200 paying customers | New logos | `icp.md`, `personas/` |
| **Net revenue retention** | 120% NRR | Expansion + churn | `use-cases/` |
| **Deal scoring accuracy** | 85%+ forecast accuracy for customers using AI scoring for 90+ days | Predicted vs. actual close rates, measured monthly | `use-cases/uc-001-pipeline-forecasting.md` |
| **Mid-market awareness** | NovaCRM recognized in "HubSpot alternative for sales teams" and "AI CRM" conversations | Inbound leads, G2 reviews, community mentions, demo requests | `messaging-positioning/core-positioning.md` |
| **Product milestones** | Ship coaching signals v2, Salesforce migration tool, and native Gong integration | Features in GA status | `use-cases/uc-002-rep-coaching.md` |

---

## GTM Goals by Discipline

### Marketing

| Goal | Target | Why It Matters | Primary VP |
|------|--------|---------------|------------|
| **Own the "outgrowing HubSpot" narrative** | 4 blog posts/month, 3 LinkedIn posts/week, 2 customer stories/quarter | VP Sales and RevOps leaders search for "HubSpot CRM alternative" and "AI-powered CRM for sales teams." We need content that ranks for these terms and delivers a credible, non-hype answer. | VP1: AI Deal Scoring |
| **Drive inbound through proof, not promises** | 50% of MQLs from content (blog, case studies, product comparisons) | Sales leaders evaluate CRMs by reading reviews, asking peers, and watching demos. Content that shows real deal scoring on real data is the top of our funnel. | VP2: Your Data Trains Your AI |
| **Build trust through transparency** | Publish quarterly "model accuracy" reports showing aggregate deal scoring performance | Sales leaders are skeptical of AI claims. Publishing our numbers — including where we're wrong — builds credibility that no ad campaign can match. | VP3: Forecast Accuracy |

[Source: guidelines/marketing-usage.md]

### Sales

| Goal | Target | Why It Matters | Primary Persona |
|------|--------|---------------|----------------|
| **Signal-based outbound volume** | 25 personalized outbound emails/week | Every email tied to a buying signal from `icp.md#buying-signals`. New VP Sales hires, missed forecasts, Sales Ops hires, CRM renewal timing. No spray-and-pray. | VP Sales, Sales Ops |
| **POC-to-close conversion** | >50% of POCs result in paid contracts | The POC is the decision point. When sales teams see their own deal scores and the AI surfaces patterns they didn't know existed, the product sells itself. Better POC scoping = higher close rate. | VP Sales, Sales Ops |
| **Average deal size growth** | $30K ACV average (up from $22K) | Move more customers from Team tier to Business tier during initial sale. Lead with coaching signals and forecasting — features that justify the higher tier. | VP Sales, Sales Ops |

[Source: guidelines/sales-usage.md]

### Product Marketing

| Goal | Target | Why It Matters |
|------|--------|---------------|
| **Competitive positioning updated quarterly** | Review `core-positioning.md#competitive-landscape` every 90 days | HubSpot is shipping AI features. Salesforce is dropping pricing for SMB. Pipedrive added AI deal scoring (basic). Our positioning must reflect what competitors ship this quarter, not last year. |
| **Launch brief for every major feature** | Every feature that changes deal scoring, coaching, or forecasting gets a launch brief | Feature launches are our best content moments. They generate demos, reviews, and conversations. Every launch needs persona-specific messaging. |
| **Sales enablement refresh** | Updated battle cards and objection handlers every quarter | Sales needs current competitive ammunition. Stale battle cards cost deals when a prospect says "but HubSpot just launched..." and the rep can't respond. |

[Source: guidelines/product-marketing-usage.md]

### Product

| Goal | Target | Why It Matters |
|------|--------|---------------|
| **Coaching signals v2** | Surface rep-specific coaching recommendations based on win pattern analysis | Coaching is the second-biggest pain after forecasting. V1 shows patterns. V2 tells managers specifically what each rep should do differently, grounded in data from their own team's top performers. |
| **Salesforce migration tool** | One-click data migration from Salesforce, including custom fields, pipeline stages, and historical deal data | Our sweet spot is companies outgrowing HubSpot, but some prospects are on Salesforce Essentials or overbuilt Salesforce instances they hate. Migration friction is the biggest objection. |
| **Native Gong integration** | Bi-directional sync — Gong conversation data feeds NovaCRM's scoring engine, deal scores surface in Gong | 40% of our ICP already uses Gong. Integrating conversation intelligence with deal scoring creates a compound insight that neither tool provides alone. |
| **Self-serve onboarding** | Time-to-first-deal-score under 48 hours for Team tier | Sales teams evaluate tools between deals. If they can't connect their CRM and see deal scores within two days, they'll move to the next demo on their list. |

[Source: guidelines/product-usage.md]

### Customer Success

| Goal | Target | Why It Matters |
|------|--------|---------------|
| **Time-to-value** | First deal scores visible within 7 days of contract start | Fast TTV predicts retention. The moment a VP Sales sees an accurate deal score on a deal they were worried about, they're hooked. Delay that moment and churn risk doubles. |
| **Expansion pipeline** | 30% of Team-tier customers evaluating Business tier within 6 months | Expansion is the primary growth lever at $6M ARR. CS owns the relationship that drives it. The trigger is usually: "We want coaching signals for our managers too." |
| **CRM adoption rate** | 80%+ daily active usage among reps within 60 days | CRM adoption is the existential metric. If reps don't use NovaCRM daily, the AI has no data, the scores degrade, and the customer churns. CS must drive adoption or nothing else matters. |
| **NPS** | >50 NPS across all tiers | Mid-market B2B SaaS benchmarks are 30-40. We need to be above because our growth depends on VP Sales telling other VP Sales "we switched to NovaCRM and our forecast accuracy went from 65% to 88%." |

[Source: guidelines/customer-success-usage.md]

---

## Current Quarter Priorities — Q1 2026

These are the 3 things that matter most right now. When an agent produces content and multiple directions are equally valid, weight toward these priorities.

### Priority 1: Win the "Outgrowing HubSpot" Buyer

**Why:** Our product is strong but our awareness is weak. Mid-market VP Sales and RevOps leaders don't know NovaCRM exists. When they search for a better CRM, they find Salesforce (too heavy), HubSpot Pro/Enterprise (same platform, different pricing), and Pipedrive (not enough AI). We need to own the conversation about what comes after HubSpot free/starter for serious sales teams.

**What this means for agents:**
- Marketing: every piece of content should target a specific sales pain from `icp.md#pains`. Write for the VP Sales persona first, then RevOps Leader second. Prioritize comparison content ("NovaCRM vs. HubSpot Pro for teams with 15+ reps"), customer proof points, and practical guides over thought leadership.
- Sales: outbound sequences should lead with the specific pain the signal reveals, not the product. "You missed forecast two quarters in a row" is a better opening than "NovaCRM is an AI-powered CRM."
- PMM: competitive content is urgent. Battle cards against HubSpot Pro (data model limits, generic AI), Salesforce (overkill, implementation cost), and Pipedrive (limited AI, reporting gaps).

**Connected:** `icp.md#pains`, `personas/persona-vp-sales.md`, `personas/persona-sales-ops.md`, `messaging-positioning/core-positioning.md#competitive-landscape`

### Priority 2: Prove AI Deal Scoring Accuracy

**Why:** Skepticism is our biggest headwind. Sales leaders have been burned by "AI-powered" tools that didn't deliver. Our deal scoring engine actually works — customers who've been on the platform for 90+ days see 80-85% forecast accuracy compared to their previous 60-70%. But we haven't told this story effectively. Q1 is about building the proof layer: case studies, accuracy reports, and POC win data that we can reference in every piece of content.

**What this means for agents:**
- Marketing: every AI claim must be grounded in a specific data point. "Customers see 20+ percentage point improvement in forecast accuracy within 90 days" is good. "AI-powered forecasting" with no proof is forbidden.
- Sales: POC proposals must include a "proof checkpoint" at day 14 where the customer reviews deal score accuracy against their own judgment. If the scores are good, the deal closes itself. If they're not, we learn and improve the model.
- CS: collect and document accuracy data from every customer. This is the raw material for marketing proof points. Ask every customer at 90 days: "How does your forecast accuracy compare to before NovaCRM?"

**Connected:** `use-cases/uc-001-pipeline-forecasting.md`, `brand-vision.md#core-values`, `messaging-positioning/core-positioning.md#differentiators`

### Priority 3: Ship Coaching Signals v2

**Why:** Deal scoring gets us in the door. Coaching signals keep us in the account. V1 surfaces rep behavior patterns — "this rep multi-threads at 40% the rate of your top closer." V2 turns those patterns into specific coaching recommendations — "this rep should add a second stakeholder before stage 3 based on your team's win patterns." This moves NovaCRM from a forecasting tool to a coaching platform, which justifies the Business tier and drives expansion revenue.

**What this means for agents:**
- Product: feature briefs for each v2 coaching capability. Every recommendation must trace to a specific win pattern identified in the customer's own data. No generic advice. Acceptance criteria must reference the Sales Manager persona.
- Marketing: when v2 ships, it's the biggest content moment of the quarter. Prepare launch content: blog post, demo video, "before and after" coaching comparison, and a customer story.
- PMM: update competitive positioning. No competing CRM offers coaching signals trained on the customer's own rep behavior data. This is our most defensible differentiator.

**Connected:** `use-cases/uc-002-rep-coaching.md`, `personas/persona-vp-sales.md`, `messaging-positioning/core-positioning.md#differentiators`

---

## How Agents Use This File

1. **Read this file after `icp.md` and before `personas/`.** Goals provide the "why now" context that shapes which personas and use cases to prioritize.
2. **Weight output toward current quarter priorities.** If a blog post could target the VP Sales or the Account Executive and both are valid, check which one serves Priority 1 (win the "outgrowing HubSpot" buyer) better.
3. **Cite this file when relevant.** If a piece of content is specifically designed to serve a goal, cite it: `[Source: goals.md#priority-1]`.
4. **Do not invent goals.** If the user requests content that doesn't connect to any goal in this file, produce the content but note: "This output does not directly serve a current quarter priority. Consider whether it should."
