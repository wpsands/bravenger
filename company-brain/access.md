---
title: Brain Access Patterns
version: "1.0.0"
last_updated: "2026-03-18"
owner: "Page Sands"
status: production
---

# Brain Access Patterns

This file documents how different roles access and use the Company Brain. Not everyone opens Markdown files. Not everyone runs agents. The Brain serves all of them — through different access points.

---

## Three Access Tiers

### Tier 1: Direct File Access
These people read and edit the `.md` files directly. They are the Brain's maintainers and power users.

### Tier 2: Agent-Mediated Access
These people interact with the Brain through AI agents. They prompt, the agent reads the Brain, and they receive cited output. They may never open a Brain file directly.

### Tier 3: Output Consumers
These people receive content that was produced from the Brain. They may not know the Brain exists. They just know the content is consistent and accurate.

---

## Access by Role

### Technical Founder (P-001)
**Tier:** 1 — Direct File Access
**Tools:** VS Code, Cursor, terminal, GitHub
**What they do:**
- Browse the repo like code
- Read ICP, personas, and use case files directly
- Review AGENTS.md and governance rules
- May run agents from Claude Code CLI
- Approve structural changes to the Brain
- `git diff` to review updates from the Brain owner

**Access setup:** Clone the repo. Open in their editor. Done.

---

### Head of Marketing (P-002)
**Tier:** 2 — Agent-Mediated Access (with occasional Tier 1)
**Tools:** GitHub web view, Notion import, Claude Projects, Claude chat
**What they do:**
- Read rendered files in GitHub or Notion for messaging reference
- Share links to specific Brain files with team and agencies
- Prompt agents: "Write a blog post targeting the founder persona about UC-001"
- Review agent output for quality and alignment
- May edit files in GitHub web editor for simple updates

**Access setup:** GitHub read access. Claude Projects with Brain files uploaded. Bookmark the README for the file map.

**Important:** This person is not technical. Don't assume CLI comfort. GitHub web view and Claude Projects are the primary interfaces. If they need to update a file, show them the GitHub edit button — not `vim`.

---

### First PMM / Brain Owner (P-003)
**Tier:** 1 — Direct File Access
**Tools:** GitHub + Claude Code or Claude Projects
**What they do:**
- Maintain and update Brain files as part of their regular workflow
- Add new personas, use cases, and messaging updates
- Run agents across all 5 disciplines to produce content
- Monitor Brain health using metrics.md
- Onboard new team members by pointing them to the Brain
- Update the changelog after every edit
- Own the governance — ensure agents follow AGENTS.md

**Access setup:** Clone the repo. Claude Code installed. Familiar with the file map and AGENTS.md read order. This person should be as comfortable with the Brain as they are with their CRM.

**This is the most important role for Brain longevity.** If the Brain owner doesn't engage weekly, the Brain decays. The onboarding session (included in Full package) is designed to make this person self-sufficient.

---

### VP/Head of Product (P-004)
**Tier:** 1 — Direct File Access
**Tools:** VS Code, GitHub, possibly scripts
**What they do:**
- Read persona files for product/UI/UX hooks
- Read use case files for status, gaps, and connected use cases
- Use the Product agent for feature briefs and persona reactions
- May write scripts to query Brain files programmatically (YAML parsing)
- Review use case gaps for roadmap input
- Validate that use case status fields reflect product reality

**Access setup:** Clone the repo. Open in VS Code or Cursor. May integrate with Linear/Jira via scripts that read Brain files.

---

### SDR / AE
**Tier:** 2 — Agent-Mediated Access
**Tools:** Claude chat, Slack bot (if configured), or prompts shared by the Brain owner
**What they do:**
- Prompt: "Write an outbound email for a Series A founder who just hired their first marketer"
- Prompt: "Prep me for a discovery call with a VP Product evaluating our architecture"
- Prompt: "How do I respond to 'we can build this ourselves'?"
- Receive cited, persona-appropriate output without opening Brain files

**Access setup:** Claude chat with Brain files attached (or Claude Projects). Save commonly used prompts. The Sales guideline file (`sales-usage.md`) governs their agent's behavior.

**Important:** SDRs and AEs should not need to edit Brain files. They consume output. If they notice the agent is wrong or the messaging feels off, they flag it to the Brain owner — not edit the source.

---

### Content Marketer / Writer
**Tier:** 2 — Agent-Mediated Access
**Tools:** Claude Projects, Claude chat, or any LLM with Brain context
**What they do:**
- Prompt: "Write a LinkedIn post about why AI tools need context, targeting founders"
- Prompt: "Generate a Content BOM for a campaign about new hire onboarding"
- Prompt: "Draft a case study outline for a Head of Marketing persona"
- Check agent output against brand-vision.md voice attributes
- May read examples/README.md directly for approved messaging templates

**Access setup:** Claude Projects with Brain files uploaded. Bookmarked link to examples/README.md for reference.

---

### Solutions Engineer
**Tier:** 1 or 2 — depends on technical comfort
**Tools:** GitHub, Markdown viewer, possibly Claude chat
**What they do:**
- Read use case files before customer calls — especially gotchas and gaps
- Read persona files for product/UI/UX hooks before demos
- Check use case status fields to know what's fully supported vs. partially supported
- May prompt: "What are the gotchas for UC-001 that I should mention to a technical founder?"

**Access setup:** GitHub read access. Bookmark the use-cases/ directory.

**Important:** SEs carry the deepest product knowledge. When they find that a use case gotcha is missing or a gap has been resolved, they should tell the Brain owner. SEs are the #1 source of Brain updates that nobody else notices.

---

### New Hire (Any GTM Role)
**Tier:** 3 → 2 — starts as output consumer, graduates to agent user
**Tools:** GitHub web view, Notion import, then Claude Projects
**What they do:**
- Week 1: Read the Brain as onboarding. Start with README → ICP → their relevant persona → use cases → messaging framework.
- Week 2: Start prompting agents for their discipline. First Marketing task with agent. First Sales email with agent.
- Week 3+: Routine agent usage. Producing content grounded in the Brain.

**Access setup:** GitHub read access on day 1. Claude Projects access on day 3. First supervised agent output by end of week 1.

**The onboarding path matters.** Without the Brain, new hires absorb positioning from Slack threads, 1:1s with the founder, and guesswork. With the Brain, they read a structured source and produce aligned content by day 5. This is VP4 (Use Cases as Foundation) and VP6 (Survives the Founder) in action.

---

### Agency / Freelance Contractor
**Tier:** 3 — Output Consumer (with read access to Brain)
**Tools:** Read-only GitHub access, exported Markdown files, or PDF exports
**What they do:**
- Read the Brain for context before producing any content
- Follow the same AGENTS.md governance rules — even as humans
- Produce content that cites Brain sources
- Submit content for Brain owner review before publishing

**Access setup:** Read-only GitHub access. Or: export relevant Brain files as a ZIP and share. Include AGENTS.md and brand-vision.md at minimum.

**Rule:** Agencies and contractors who produce content for the company must read the Brain first. Ungoverned agency content is the fastest path to drift. The Brain owner should include "Read the Company Brain" as step 1 of every agency brief.

---

## Access Setup Checklist

When onboarding a new team or company onto a Brain:

- [ ] **Brain repo created** in GitHub (private)
- [ ] **Founder** has clone access and has opened the repo in their editor
- [ ] **Brain owner (PMM/Head of Marketing)** has clone access, Claude Code or Claude Projects set up, and has completed the onboarding session
- [ ] **VP Product** has clone access (if applicable)
- [ ] **Marketing team** has Claude Projects with Brain files uploaded
- [ ] **Sales team** has Claude chat access with Brain files or saved prompts shared
- [ ] **New hire onboarding** updated to include "Read the Company Brain" in week 1
- [ ] **Agency/contractor briefs** updated to include Brain read access and AGENTS.md governance

---

## Access Anti-Patterns

| Anti-Pattern | Why It's Bad | Fix |
|-------------|-------------|-----|
| Everyone edits the Brain | No ownership. Conflicting changes. Governance collapses. | One Brain owner. Others propose changes; owner merges. |
| Nobody reads the Brain | It becomes another dead doc. Drift returns. | Make agent usage the default. If agents read the Brain, people benefit without opening files. |
| SDRs edit Brain files to "fix" messaging | Untrained edits introduce drift at the source. | SDRs flag issues to the Brain owner. They don't edit. |
| Agency produces content without reading the Brain | Fastest path to drift. Agency invents messaging that contradicts the Brain. | Include Brain access in every agency brief. Make it contractual. |
| Brain owner leaves and nobody takes over | Brain decays within weeks. | Designate a backup Brain owner. Document the maintenance cadence in metrics.md. |
| Only one person uses agents | The Brain serves one discipline. Other teams drift. | Onboard all 5 disciplines within 90 days. Track with adoption metrics. |

[Source: metrics.md#adoption-metrics] [Source: use-cases/uc-004-measure-brain-impact.md#gotchas]
