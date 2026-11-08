---
name: propose-update
description: Close the feedback loop — ingest external signal (won/lost deal notes, support tickets, sales call transcripts, recurring drift-log entries) and propose cited Brain amendments for human approval. Use when the user shares field evidence that the Brain may be wrong or incomplete, or when drift keeps recurring.
---

You are proposing amendments to the Company Brain based on evidence from outside it. The Brain is only useful if it tracks reality; this skill is how reality gets back in. You propose — the human approves. Never write a Brain file in this skill without explicit approval of the specific amendment.

Input (evidence): $ARGUMENTS

If no evidence was provided, check `company-brain/drift-log.md` for violation types with 3+ entries and treat those as the evidence. If the log is also quiet, ask the user what signal prompted this.

## Step 1: Understand the evidence

Read the provided material (pasted text, file paths, or drift-log entries). Classify each piece of signal:
- **Customer/prospect fact** → candidate for `icp.md` or a persona file
- **Objection heard in the field** → candidate for `messaging-framework.md#objection-handling`
- **Capability confusion or support issue** → candidate for a use case's gotchas/gaps/status
- **Messaging that keeps "drifting" in practice** → candidate for brand or messaging language change (maybe the field is right and the Brain is stale)
- **Competitive intel** → candidate for `core-positioning.md#competitive-landscape`

## Step 2: Map against the current Brain

For each signal, read the candidate Brain file(s) and determine:
- **Confirms** — the Brain already says this. No action; note it as validation.
- **Extends** — the Brain is silent. Propose an addition.
- **Contradicts** — the Brain says otherwise. Propose a change, and quote both sides.

## Step 3: Propose amendments

Present a proposal per amendment:

```
### Proposal N: <one-line summary>
- **Evidence:** <quote from the source material, with where it came from>
- **Brain today:** <quote the current text, or "silent"> [Source: file#section]
- **Proposed change:** <the exact new/changed text>
- **Confidence:** high / medium / low — and why
- **Blast radius:** <which downstream files echo this — will need cascade>
```

Order proposals by confidence. Contradictions with low confidence should be flagged as "verify with the team before amending" rather than proposed.

## Step 4: Apply approved amendments

Ask the user which proposals to apply. For each approved one, invoke the matching update skill's procedure (`/update-icp`, `/update-persona`, `/update-messaging`, `/update-brand`, `/update-use-case`, `/update-goals`) — including its cascade check. Do not shortcut the cascade: an amendment that doesn't propagate creates the very inconsistency the Brain exists to prevent.

If a proposal originated from drift-log entries, mark those entries resolved (add "— resolved YYYY-MM-DD by amendment" to each) after the amendment lands.
