---
title: "DEI & Inclusive Voice Capture"
use_case_id: "UC-004"
version: "1.1.0"
last_updated: "2026-04-02"
status: "fully-supported"
owner: "Brain Owner"

personas:
  setup_by: "P-002"
  used_by:
    - "P-001"
    - "P-002"
  evaluated_by: "P-001"

icp_pain: "P2, P5, P8"
current_alternative: "DEI surveys with demographic breakdowns. ERG-hosted focus groups with 10-15 people. Town halls where underrepresented voices are least likely to speak. Anonymous comment boxes that collect fragments, not conversations."
tools_involved:
  - "Natter conversation orchestration engine"
  - "Intelligent participant matching (demographic-aware)"
  - "AI transcription and theme detection"
  - "Anonymization and PII redaction"
  - "Demographic analysis with privacy safeguards"
proof: "The voice of the silent majority is just as important as that of the vocal minority. Legacy power structures often empower a vocal minority to speak up. [Source: Employee Voice report]. Natter's design — 1:1 peer matching, PII redaction, anonymity — creates conditions for psychological safety that traditional listening tools cannot."

connected_use_cases:
  - "UC-001"
  - "UC-003"
---

# UC-004: DEI & Inclusive Voice Capture

## Trigger

An organization committed to diversity, equity, and inclusion needs to hear from underrepresented populations who don't speak up through existing channels. Common trigger events:

- DEI audit or assessment reveals that certain demographics are underrepresented in engagement survey responses. The People Analytics team identifies a "voice gap" — populations that are present in headcount data but absent in listening data.
- ERG leaders report that members don't feel comfortable sharing honest feedback through official channels. The survey feels performative. Town halls feel unsafe. Focus groups feel tokenizing.
- Executive or board DEI commitment requires measurable evidence that all employee voices are being heard — not just the majority. The CHRO needs data that demonstrates inclusive listening, not just inclusive policies.
- Specific incident or event surfaces the gap between official inclusion narrative and lived employee experience. Leadership needs to understand the gap quickly and credibly.
- Regulatory or stakeholder pressure for DEI reporting requires qualitative evidence beyond demographic headcount. Natter provides the qualitative data layer.

## Current State

Before Natter, DEI-focused voice capture looks like this:

- **Surveys with demographic cuts.** The engagement survey breaks results by gender, ethnicity, age, geography. The data shows a 12-point engagement gap between majority and minority groups. But the survey can't explain why. The People Analytics team knows the gap exists but can't act because they don't understand the lived experience behind the numbers.
- **ERG-hosted focus groups reach a fraction.** Employee Resource Groups host listening sessions with 10-15 members. The conversation is moderated by an ERG leader who may have their own agenda. Dominant voices shape the discussion. Introverted members stay silent. The output is a qualitative anecdote from a non-representative sample.
- **Town halls amplify the majority.** When the CEO hosts a town hall on inclusion, the people who speak up are disproportionately senior, confident, and from majority demographics. The people with the most important perspectives — those experiencing exclusion — are the least likely to raise their hand in a 500-person auditorium.
- **Anonymous comment boxes collect fragments.** Platforms like anonymous pulse tools or suggestion boxes collect short text inputs. "More diverse leadership." "Inclusion training isn't enough." These fragments lack context, depth, and the conversational nuance that reveals what employees actually experience.
- **Legacy power structures suppress honest voice.** "The voice of the silent majority is just as important as that of the vocal minority. Legacy power structures often empower a vocal minority to speak up." [Source: Employee Voice report] Traditional listening tools reinforce these power structures rather than equalizing them.

## Outcome

After deploying Natter for DEI and inclusive voice capture:

- **Every employee has a genuine opportunity to be heard.** 1:1 peer-to-peer matching creates a conversation format where introversion, seniority, and power dynamics don't determine who speaks. Two colleagues matched across functions and geographies have a 7-minute conversation where both voices carry equal weight.
- **Psychological safety engineered into the platform.** PII redacted at transcription. No traceability from theme to individual. Anonymity — not just confidentiality. Employees from underrepresented populations speak honestly because the system is designed so that honesty has no consequences.
- **Demographic-aware matching surfaces targeted insight.** Matching algorithms can be configured to pair employees across specific demographic dimensions — ensuring cross-cultural, cross-level, and cross-geography conversations that surface perspectives traditional tools miss.
- **Rich qualitative data from underrepresented voices.** 1,000+ words per conversation, captured from populations that typically produce 0 words in surveys and town halls. This is not a data point. This is understanding.
- **Themes disaggregated by demographic (with privacy safeguards).** The insight report shows how themes differ across demographics — while maintaining anonymity through minimum group sizes and aggregation rules. The CHRO sees: "Employees in [demographic group] are 3x more likely to mention lack of career progression as a concern."
- **Evidence for board-level DEI reporting.** Qualitative evidence that the organization is actively listening to all voices — not just counting heads. The DEI report moves from "we have X% representation" to "here's what employees from underrepresented populations actually told us, and here's what we did about it."

## Gotchas

- **Minimum group sizes for demographic analysis.** To protect anonymity, demographic breakdowns require minimum group sizes (typically 25+). If only 15 employees from a specific demographic participate, their data is included in aggregate analysis but not broken out separately. This must be communicated to stakeholders upfront.
- **Trust must precede the session.** Underrepresented populations have the most reason to distrust organizational listening initiatives. Internal communication about Natter's anonymity guarantees must come from trusted sources — ERG leaders, DEI champions, or external advocates — not just from HR.
- **Conversation prompts must be culturally sensitive.** Questions about inclusion, belonging, and equity require careful design. Natter's session design team advises, but the customer's DEI leaders must approve prompts to ensure cultural appropriateness across all populations.
- **Natter surfaces uncomfortable truths.** A DEI-focused session may reveal systemic issues, discriminatory practices, or leadership blind spots. The organization must be committed to acting on what they hear. Running a DEI session and then ignoring the results is worse than not running it.
- **Representation in participation.** If certain demographics don't participate at the same rate, the data has the same gap as the survey. Participation drives and tailored communication for underrepresented groups are essential.

## Gaps

- **Audio-only mode for accessibility.** Some employees may prefer or require audio-only participation (visual impairments, low-bandwidth environments). Currently video-only. On the roadmap.
- **Multi-language conversation support.** Natter supports multiple languages for analysis, but matching two participants who speak different languages requires either pre-matching by language or real-time translation (not yet available).
- **Intersectional analysis.** Demographic analysis currently supports single-dimension cuts (gender, ethnicity, geography, etc.). Intersectional analysis (e.g., women of color in senior roles in APAC) requires sufficient sample size and is limited by minimum group sizes. Enhanced intersectional analysis is on the roadmap.
- **ERG integration.** Native integration with ERG management platforms to streamline invitation, participation tracking, and reporting to ERG leaders is not yet available.

## Connected Use Cases

- **UC-001: Employee Listening & Engagement.** DEI voice capture is a specialized application of the broader listening platform. Sessions can be run as standalone DEI initiatives or as demographic overlays on general listening sessions.
- **UC-003: GenAI Change Management.** AI transformation impacts different demographics differently. Combining DEI listening with transformation listening ensures equitable voice capture during change.
