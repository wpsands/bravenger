---
title: Brain Changelog
version: "1.0.0"
last_updated: "2026-03-18"
owner: "Page Sands"
status: production
---

# Brain Changelog

---

## v1.0.0 — 2026-03-18 — Complete Rebuild

### Summary
Complete rebuild of the Bravenger Company Brain from scratch. All files overwritten. This is v1.0 — the first production-quality version based on 11 locked decisions.

### Rationale
The previous Brain (v0.2) was an early draft that had grown organically. It lacked foundational use cases, had only three personas (VP Product, Head of PMM, CRO) that didn't reflect our actual buyers, missed two critical disciplines (Product Marketing and Customer Success), and had no structured use case architecture. The naming was also inconsistent with the locked decisions.

This rebuild codifies everything from scratch based on the 11 locked decisions:
1. Name: Bravenger (bravenger.com)
2. Product: A system that turns your positioning doc into a system that produces aligned content for every team
3. Tagline: "One brain. Aligned teams. Zero drift."
4. Target market: Series A/B B2B SaaS, AI-native or technical founder-led, 20-150 employees
5. Four personas: Technical Founder, Head of Marketing, First PMM, VP/Head of Product
6. Five disciplines: Marketing, Sales, Product Marketing, Product, Customer Success
7. Foundation: ICP + Personas + Use Cases (the big three)
8. Use case schema: multi-persona, status-based, no steps section
9. Dogfooding: Bravenger runs on its own Brain
10. Business model: Productized service (Path C), one week, $10-15K
11. One-liner: "Bravenger turns your positioning doc into a system that produces aligned content for every team."

### Files Created/Rebuilt (23 total)

**Foundation (8 files):**
- `README.md` — Dual-purpose (internal OS + product demo), file map, architecture, dogfooding statement
- `icp.md` — Series A/B B2B SaaS, 8 pains, 10 buying signals, buying process, anti-ICP
- `brand-vision.md` — Mission, vision, 6 values, voice attributes, tone by context, words we use/avoid, category definition
- `personas/index.md` — Registry for 4 personas, selection guide, relationship map
- `personas/persona-founder.md` — Technical Founder (P-001), economic buyer
- `personas/persona-head-marketing.md` — Head of Marketing (P-002), champion/buyer
- `personas/persona-first-pmm.md` — First PMM (P-003), champion/Brain owner
- `personas/persona-vp-product.md` — VP/Head of Product (P-004), technical evaluator

**Use Cases (4 files):**
- `use-cases/index.md` — Registry, full YAML schema template, status definitions, lifecycle rules
- `use-cases/uc-001-build-brain.md` — Build a Company Brain from a positioning doc (fully-supported)
- `use-cases/uc-002-generate-aligned-content.md` — Generate aligned content from the Brain (fully-supported)
- `use-cases/uc-003-detect-drift.md` — Detect and fix messaging drift (partially-supported)

**Messaging & Positioning (3 files):**
- `messaging-positioning/core-positioning.md` — Category, positioning statement, 5 differentiators with dogfooding proof, competitive landscape, 4 strategic narratives, VP hierarchy
- `messaging-positioning/messaging-framework.md` — 7 VPs with approved/forbidden language, 6 objections, message testing matrix, funnel-stage messaging
- `messaging-positioning/examples/README.md` — 5 hero variants, 3 outbound email templates, 4 LinkedIn posts, conference messaging

**Governance & Guidelines (6 files):**
- `AGENTS.md` — 10-step read order, citation format, output tables for all 5 disciplines, behavioral guardrails, recursive layer
- `guidelines/marketing-usage.md` — Content BOMs, hero analysis, drift detection, campaign briefs
- `guidelines/sales-usage.md` — Signal-based outbound, discovery prep, objection handling, proposal language, anti-ICP qualification
- `guidelines/product-marketing-usage.md` — NEW. Positioning maintenance, competitive intel, launch planning, enablement, drift ownership
- `guidelines/product-usage.md` — Feature briefs, persona reactions, adoption scoring, design evaluation, roadmap input from gaps
- `guidelines/customer-success-usage.md` — NEW. Onboarding guides, migration playbooks, use case walkthroughs, SE handoff, Brain health assessment

**Supporting (2 files):**
- `data-sources.md` — External data sources organized by category with usage rules
- `updates/changelog.md` — This file

### Files Removed
- `personas/persona-alex.md` — Replaced by persona-vp-product.md (P-004)
- `personas/persona-sarah.md` — Replaced by persona-first-pmm.md (P-003)
- `personas/persona-michael.md` — Removed (CRO persona not in locked decisions)
- `guidelines/product-ux-usage.md` — Replaced by product-usage.md
- `design-concepts/` — Removed (not part of Brain architecture)
- `launches/` — Removed (launch content belongs in guidelines, not a separate directory)

### Key Architectural Changes
- **Use cases are now foundational.** They sit alongside ICP and personas, not as an appendix. They feed every discipline.
- **Use case schema.** Multi-persona (setup_by, used_by, evaluated_by), 5-level status, no steps section. Strategic knowledge only.
- **Five disciplines, not three.** Added Product Marketing and Customer Success guidelines.
- **PMM owns the Brain.** Product Marketing is explicitly the discipline responsible for maintaining the Brain.
- **Dogfooding is structural.** Every differentiator includes a dogfooding proof. The recursive layer in AGENTS.md makes the self-reference explicit.
- **Citation format standardized.** `[Source: filename#section]` is mandatory for all agent output.

---

## Pre-v1.0 History

### v0.2.0 — 2026-03-18
Early draft. Three personas (Alex/VP Product, Sarah/Head of PMM, Michael/CRO). Three guidelines (marketing, sales, product-UX). No use cases directory. No structured use case schema. Superseded by v1.0.0 complete rebuild.

### v0.1.0 — 2026-03-18
Initial skeleton. ICP and basic persona files. Minimal content. Superseded by v0.2.0.
