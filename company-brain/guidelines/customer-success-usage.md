---
title: Customer Success Agent Usage Guide
version: "1.0.0"
last_updated: "2026-03-18"
scope: "Customer Success team agents and operators"
owner: "Page Sands"
status: production
discipline: customer-success
---

# Customer Success Agent Usage Guide

This guide governs all agents producing Customer Success content for Bravenger. Read AGENTS.md first — this file supplements, not replaces, the core governance rules.

---

## Role of Customer Success in the Brain

CS ensures customers adopt and get value from their Company Brain after delivery. CS uses the Brain to:
- Build onboarding guides from documented use cases
- Create migration playbooks from "current state" sections
- Produce use case walkthroughs for customer teams
- Generate SE handoff documentation
- Assess Brain health and adoption

Use cases are the primary input for CS. Every CS artifact maps to one or more use cases.

---

## Onboarding Guides

After a Company Brain is delivered (UC-001 complete), CS builds onboarding guides for the customer team.

### Onboarding Guide Template

```markdown
## Onboarding: [Customer Name] — [Use Case Title]

### Use case
- **ID:** [UC-XXX]
- **Status:** [from use case file]
- **Primary user:** [persona who uses this day-to-day]

### What this use case does
[Outcome section from the use case file, adapted for the customer's context]

### When to use it
[Trigger section from the use case file, adapted for the customer's context]

### What to watch for
[Gotchas section from the use case file]

### Known limitations
[Gaps section from the use case file — be transparent]

### Related use cases
[Connected use cases that the customer should know about]

### Success indicators
[How the customer knows this use case is working]
```

### Onboarding Sequence
1. **Week 1:** Walk through the Brain architecture. Explain the file map, the read order, and the governance rules.
2. **Week 2:** Walk through the customer's top 3 use cases. Use the onboarding guide for each.
3. **Week 3:** First agent-generated content from the Brain. Review output quality. Adjust governance if needed.
4. **Week 4:** Brain owner (usually the First PMM) takes over maintenance. CS shifts to support.

### Onboarding Rules
- Always ground the onboarding in use cases, not file structure. The customer cares about "what can I do" not "what files exist."
- Be transparent about gaps. If a use case is "partially-supported," say so during onboarding. Don't let the customer discover limitations on their own.
- Tailor the walkthrough to the persona. The Technical Founder wants to see the YAML schema. The Head of Marketing wants to see the examples directory. The PMM wants to see the messaging framework.

[Source: use-cases/uc-001-build-brain.md#outcome]

---

## Migration Playbooks

Migration playbooks help customers transition from their current state to Brain-powered operations.

### Migration Playbook Template

```markdown
## Migration: [Current Tool/Process] → Company Brain

### Current state
[From the relevant use case's "Current State" section]

### What changes
[Specific changes to the customer's workflow]

### What stays the same
[Tools, processes, or habits that don't change — reduce perceived disruption]

### Migration path
1. [Phase 1: Brain delivered, old system still primary]
2. [Phase 2: New content produced from Brain, old content maintained]
3. [Phase 3: Brain is primary source, old system deprecated]

### Risks
[From the use case's gotchas + customer-specific risks]

### Success criteria
[How we know migration is complete]
```

### Common Migration Sources

| From | To | Key Challenge |
|------|----|---------------|
| Founder's head | Brain | Extracting tacit knowledge. Founder must invest time. |
| Notion/Confluence wiki | Brain | Migration of useful content. Abandoning stale content. |
| Slide deck positioning | Brain | Translating narrative to structured data. |
| Agency-produced brand guide | Brain | Extracting the useful parts. Discarding the filler. |
| Multiple scattered docs | Brain | Reconciling contradictions. Picking the authoritative version. |

---

## Use Case Walkthroughs

CS produces walkthroughs for each active use case. These are customer-facing guides that explain the use case in the customer's context.

### Walkthrough Structure

For each use case walkthrough:
1. **Name and context.** What is this use case and why does the customer care?
2. **Trigger.** When should the customer perform this use case? (From use case trigger section.)
3. **What the Brain provides.** Which Brain files are relevant and what information they contain.
4. **Expected outcome.** What does good look like? (From use case outcome section.)
5. **Common gotchas.** What can go wrong? (From use case gotchas section.)
6. **Known gaps.** What the Brain can't do yet for this use case. (From use case gaps section.)

### Rules
- Walkthroughs are NOT step-by-step procedures. The Brain holds strategic knowledge, not operational steps. Walkthroughs explain the "what" and "why," not the "how."
- Reference the customer's actual Brain files, not Bravenger's Brain. Adapt citations to use the customer's file names and structure.
- Include gaps. Transparency during walkthroughs prevents support tickets later.

---

## SE Handoff Content

When a deal closes and transitions from Sales to CS, produce a handoff document.

### SE Handoff Template

```markdown
## Customer Handoff: [Customer Name]

### Company profile
- **Stage:** [Series A/B]
- **Size:** [headcount]
- **ICP fit:** [strong/moderate — any anti-ICP flags?]

### Key stakeholders
| Name | Role | Persona Match | Notes |
|------|------|--------------|-------|
| [Name] | [Title] | [P-00X] | [Key context from sales conversations] |

### Primary pains identified
[From discovery — mapped to icp.md pain IDs]

### Use cases prioritized
[Which use cases matter most to this customer? Rank them.]

### Buying signals that triggered the deal
[From icp.md#buying-signals]

### Expectations set during sales
[What did sales promise? Check against use case status fields. Flag any misalignment.]

### Known risks
[Customer-specific risks for adoption]

### Recommended onboarding focus
[Which use case walkthroughs to prioritize]
```

### Handoff Rules
- **Check promises against reality.** If sales described a capability that's "partially-supported" or "on-roadmap," flag it immediately. Better to set expectations early than disappoint later.
- **Map stakeholders to personas.** This helps CS tailor the onboarding to the right persona's needs and communication style.
- **Prioritize use cases by customer pain.** Not every customer needs every use case on day one. Focus on the top 2-3 that address their immediate pains.

[Source: use-cases/index.md#lifecycle-rules]

---

## Brain Health Assessment

CS should periodically assess whether the customer's Brain is healthy and being used.

### Health Indicators

| Indicator | Healthy | At Risk | Unhealthy |
|-----------|---------|---------|-----------|
| **Last Brain update** | Within 30 days | 30-90 days | 90+ days |
| **Agent usage** | Weekly agent-generated content | Monthly | None |
| **Drift checks** | Monthly | Quarterly | Never |
| **Use case coverage** | All active use cases documented | Some gaps | Major use cases missing |
| **Team adoption** | 3+ people reading/using the Brain | 1-2 people | Only the PMM |

### Remediation Actions

| Risk Level | Action |
|------------|--------|
| Healthy | Check in quarterly. Offer new use case documentation as product evolves. |
| At Risk | Schedule a Brain review session. Identify what's stale and why. Offer to help update. |
| Unhealthy | Escalate. Diagnose root cause: Is it a people problem (Brain owner left)? A product problem (Brain doesn't fit workflow)? A content problem (Brain is stale)? |

[Source: use-cases/uc-003-detect-drift.md]
