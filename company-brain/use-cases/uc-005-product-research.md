---
title: "Product Research at Scale"
use_case_id: "UC-005"
version: "1.1.0"
last_updated: "2026-04-02"
status: "partially-supported"
owner: "Brain Owner"

personas:
  setup_by: "P-002"
  used_by:
    - "P-004"
    - "P-002"
  evaluated_by: "P-004"

icp_pain: "P6"
current_alternative: "8-person focus groups scheduled over 4-6 weeks. User interviews with 15-20 people. Surveys with open-ended questions that yield 10 words each. Product teams make decisions based on anecdotes from the loudest customers or the most recent support tickets."
tools_involved:
  - "Natter conversation orchestration engine"
  - "Intelligent participant matching"
  - "AI transcription and theme detection"
  - "Feature-specific conversation prompts"
  - "Priority scoring from conversation themes"
proof: "Natter's methodology — 1:1 peer conversations at scale with AI analysis — has been proven for employee listening. Application to product research follows the same mechanics: match users into conversations, capture their words, analyze with AI. Partially supported because product-specific features (integration with product analytics, feature voting, roadmap tools) are not yet built."

connected_use_cases:
  - "UC-001"
  - "UC-002"
---

# UC-005: Product Research at Scale

## Trigger

A product team needs user research from hundreds of users simultaneously, not from 8-person focus groups that take weeks to schedule and produce biased results. Common trigger events:

- Product team planning a major feature launch or redesign needs broad user input, not just the opinions of the 12 users who show up to a customer advisory board.
- Beta program for a new product needs feedback from 500+ users, captured and analyzed within days — not the 3-month cycle of traditional beta feedback collection.
- Product-market fit assessment requires understanding what users actually want versus what they say in NPS surveys. The Head of Product needs qualitative depth at quantitative scale.
- Customer success team reports divergent feedback: enterprise customers want X, mid-market customers want Y. The product team needs to understand the nuance behind these conflicting requests — not just the count.
- Win/loss analysis needs customer voice at scale. The VP Revenue wants to understand why deals are won or lost — from the customer's own words, not from the rep's CRM notes.

## Current State

Before Natter, product research looks like this:

- **Focus groups are limited to 8-12 people.** A UX research team recruits 8 users for a 60-minute moderated discussion. Scheduling takes 4-6 weeks. One dominant voice shapes the conversation. The researcher gets rich but biased data from a tiny, unrepresentative sample.
- **User interviews reach 15-20 people.** A product manager runs 30-minute interviews with 15-20 users over 3-4 weeks. The data is rich but takes weeks to collect and analyze. The PM unconsciously steers conversations toward their hypothesis. Confirmation bias is endemic.
- **Surveys ask the wrong questions.** Product feedback surveys ask "How satisfied are you with Feature X?" on a 1-5 scale. The response tells you satisfaction level but not what would make it better, what's confusing, or what the user actually does with the feature. Open-ended responses average 10 words.
- **Customer advisory boards are political.** 12 customers selected because they're the biggest, the most vocal, or the most loyal. Their feedback represents the view from the top of the customer base, not the middle or the bottom. Strategic feature requests from CAB members often reflect their unique needs, not market-wide patterns.
- **Product decisions rely on anecdotes.** Without scalable qualitative data, the product team makes decisions based on: the most recent support ticket, the loudest customer, the CEO's opinion, or a competitor's feature list. None of these are representative.

## Outcome

After deploying Natter for product research at scale:

- **500+ users participate in peer-to-peer conversations simultaneously.** Users are matched into 1:1 conversations about their experience with the product. "What's the one thing that would make this product twice as useful?" Two users comparing their experiences surface insights that neither would articulate alone.
- **AI-generated insight report with feature priority themes.** Themes extracted from hundreds of conversations: "Workflow automation is confusing," "Mobile experience is critical for field teams," "Integration with [specific tool] is table stakes." Sentiment and frequency data show priority, not just preference.
- **Representative sample at scale.** Unlike focus groups (8 people) or interviews (15 people), Natter captures perspectives from hundreds of users across segments, use cases, and geographies. The data is representative because the sample is large and diverse.
- **Peer-to-peer format reduces bias.** No moderator steering the conversation. No researcher's hypothesis shaping the questions. Two users talking to each other about their experience produce more honest, nuanced insight than a moderated interview.
- **Customer roundtable as relationship builder.** The product research session doubles as a customer engagement event. Users enjoy the peer conversation, learn from each other, and feel heard by the product team. It strengthens the relationship while generating intelligence.
- **Research cycle compressed from weeks to hours.** Traditional: recruit users (2 weeks) → schedule (2 weeks) → conduct (1 week) → analyze (2 weeks) = 7 weeks. Natter: invite users → run session → receive insight report = same day.

## Gotchas

- **User recruitment is the bottleneck.** Natter provides the conversation and analysis platform, but the product team must recruit participants. For internal employees this is straightforward. For external customers, the product team needs a recruitment mechanism (email invitations, in-product prompts, CSM outreach).
- **Conversation prompts must be product-specific.** Generic prompts ("Tell us about your experience") produce generic data. Effective prompts are specific: "What's the most frustrating part of your workflow in [specific feature]?" Session design requires product team input.
- **Not a replacement for deep usability research.** Natter captures qualitative insight about preferences, priorities, and pain points. It does not capture task-completion data, click paths, or interface interaction patterns. Usability testing tools (UserTesting, Maze) serve a different purpose.
- **External customer sessions require careful branding.** Running a Natter session with customers positions the company as innovative and customer-centric — but only if the follow-up demonstrates that the feedback was heard. Running a session and then ignoring the data damages the customer relationship.

## Gaps

- **Integration with product analytics tools.** Natter conversation data could be enriched with product usage data (Amplitude, Mixpanel, Pendo) to correlate what users say with what they do. This integration is not yet built.
- **In-product session invitations.** Currently, users are invited via email or link. In-product prompts ("Participate in a 7-minute product feedback conversation") would dramatically increase participation. On the roadmap.
- **Feature voting from conversation themes.** AI-generated themes could be turned into a structured voting mechanism where users prioritize the features and improvements surfaced by peer conversations. Not yet available.
- **Integration with roadmap tools.** Natter themes could feed directly into Productboard, Jira, or Linear as feature requests with supporting qualitative evidence. Native integrations are not yet built.
- **B2B customer matching.** For customer-facing sessions, matching should account for company size, industry, use case, and contract tier. Current matching algorithms are optimized for employee demographics. Customer matching is being enhanced.

## Connected Use Cases

- **UC-001: Employee Listening & Engagement.** The same platform and methodology serve both employee listening and product research. Organizations already using Natter for employee listening can extend to product research with minimal incremental setup.
- **UC-002: Thought Leadership & Executive Roundtables.** Customer roundtables for product research share the format with executive roundtables for thought leadership. The platform capability is identical; the audience and conversation prompts differ.
