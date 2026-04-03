---
title: Natter Company Brain
version: "1.1.0"
last_updated: "2026-04-02"
owner: "Brain Owner"
status: production
purpose: "Single source of truth for all Natter content, messaging, and agent behavior"
---

# Natter Company Brain

**Natter is a conversation intelligence engine that runs thousands of simultaneous peer-to-peer video conversations across an organization and uses AI to instantly surface decision-ready insights.**

Not another survey. A conversation intelligence engine.

---

## What This Is

This repository is the Natter Company Brain — the single source of truth that every team and every agent reads before producing any output. It contains our ICP, personas, use cases, positioning, messaging, governance rules, and discipline-specific guidelines.

Every piece of content Natter produces — marketing pages, roundtable invitations, research reports, sales sequences, product briefs, CS playbooks — is generated from this Brain. Agents read these files, cite them, and produce aligned output. If something in this Brain is wrong, our content will be wrong. That is the point. One source of truth means one place to fix, and every downstream output corrects itself.

---

## File Map

### Foundation Layer
| File | Purpose |
|------|---------|
| `brand-vision.md` | Mission, vision, values, voice, tone, category definition |
| `icp.md` | Ideal Customer Profile — firmographics, pains, signals, anti-ICP |
| `goals.md` | Company goals, GTM discipline targets, current quarter priorities |
| `personas/index.md` | Persona registry, selection guide, relationship map |
| `personas/persona-chro.md` | P-001: The CHRO / Chief People Officer (Economic Buyer) |
| `personas/persona-people-analytics.md` | P-002: The People Analytics Leader (Champion) |
| `personas/persona-vp-strategy.md` | P-003: The VP Strategy / Transformation Leader (Use Case Sponsor) |
| `personas/persona-vp-revenue.md` | P-004: The Revenue Leader (Use Case Sponsor) |

### Use Cases
| File | Purpose |
|------|---------|
| `use-cases/index.md` | Use case registry, schema template, lifecycle rules |
| `use-cases/uc-001-employee-listening.md` | Enterprise employee listening replacing/supplementing annual surveys |
| `use-cases/uc-002-thought-leadership-roundtables.md` | Executive roundtables as GTM engine and customer use case |
| `use-cases/uc-003-genai-change-management.md` | GenAI change management and workforce transformation |
| `use-cases/uc-004-dei-inclusive-voice.md` | DEI and inclusive voice capture for underrepresented populations |
| `use-cases/uc-005-product-research.md` | Product research at scale using peer-to-peer user conversations |

### Messaging & Positioning
| File | Purpose |
|------|---------|
| `messaging-positioning/core-positioning.md` | Category, positioning statement, differentiators, narratives |
| `messaging-positioning/messaging-framework.md` | Value props, objection handling, funnel-stage messaging, sales methodology |

### Governance & Guidelines
| File | Purpose |
|------|---------|
| `AGENTS.md` | Agent read order, citation rules, output formats, guardrails |
| `guidelines/marketing-usage.md` | Marketing agent guide — thought leadership, roundtable promotion, research reports |
| `guidelines/sales-usage.md` | Sales agent guide — graduated free trial motion, PREDICT methodology, roundtable invitations |
| `guidelines/product-marketing-usage.md` | Product Marketing agent guide — competitive positioning vs Qualtrics/CultureAmp/Glint, launch briefs |
| `guidelines/product-usage.md` | Product agent guide — conversation orchestration, AI analysis, matching algorithms, Natalie AI |
| `guidelines/customer-success-usage.md` | Customer Success agent guide — session design, insight delivery, expansion playbook |

---

## How to Use This Brain

### For Humans
1. Read `brand-vision.md` to understand voice and values.
2. Read `icp.md` to understand who we sell to.
3. Read the relevant persona file for your audience.
4. Check `use-cases/` for the scenario you are addressing.
5. Produce content. Cite your sources.

### For Agents
1. Follow the mandatory read order in `AGENTS.md`.
2. Read the discipline-specific guideline for your task.
3. Cite every claim using `[Source: filename#section]` format.
4. Never invent facts not in the Brain.
5. When in doubt, say what you don't know.

---

## The Architecture

```
Foundation Layer
├── Brand Vision (who we are, how we sound)
├── ICP (who we sell to)
├── Goals (what we are trying to achieve right now)
├── Personas (who we talk to)
└── Use Cases (what they are trying to do)
    ↓ feeds everything ↓
Positioning & Messaging Layer
├── Core Positioning (category, differentiators, narratives)
└── Messaging Framework (value props, objections, approved language)
    ↓ governed by ↓
Governance Layer
├── AGENTS.md (rules for all agents)
└── Discipline Guidelines (marketing, sales, PMM, product, CS)
```

The Foundation Layer is the source of truth. Everything in the Positioning & Messaging Layer is derived from Foundation files. The Governance Layer controls how agents read, cite, and produce output from the other two layers.

Use cases are foundational. They feed every discipline — not just CS. A use case like "Employee Listening" shapes marketing content, sales discovery, product roadmap, PMM launches, and CS onboarding simultaneously.

---

## Company Overview

Natter is a conversation intelligence engine that runs thousands of simultaneous peer-to-peer video conversations across an organization and uses AI to instantly surface decision-ready insights. The platform matches participants into 1:1 video conversations, AI transcribes and analyzes every conversation, and delivers actionable insights and AI-powered dashboards within an hour.

- **One-liner:** Not another survey. A conversation intelligence engine.
- **Category:** Conversational Insights Platform
- **Founded by:** Charlie Woodward (CEO & Co-Founder)
- **Key team:** Dan Willard (Chief Data Officer, ex-Uber), Matthew Noble (Head of AI and Data, DPhil Oxford)
- **HQ:** London & New York. Remote-first.
- **Compliance:** ISO 27001 certified. GDPR, UK GDPR, EU AI Act compliant. CCPA aligned.
- **Scale:** 1 to 20,000+ participants per session. Three formats: live, on-demand, always-on (Natalie AI).
- **Trusted by:** Legal & General, Accenture, SAP, Mondelez, Deloitte, PwC, Miro, Verizon, ServiceNow, Hilton, PepsiCo, LVMH, Coca-Cola, IKEA, AWS, Salesforce, NASA, Bank of America, Target, BlackRock, Ford, and 150+ others across 34+ countries.

We compete in the employee listening space alongside Qualtrics, CultureAmp, Glint (Microsoft), Peakon (Workday), and Remesh — but we are positioned differently. We are not a survey platform with AI bolted on. We are not a focus group tool limited to 8 people. We are the only platform that can orchestrate 20,000 simultaneous peer-to-peer video conversations and deliver AI-summarized insights in under an hour. A 7-minute conversation yields 1,000+ words vs. ~10 from a typical survey answer. That is 100x more insight per participant.

---

## Operating Principle

Every file in this repo reflects how Natter actually operates. The ICP describes our actual customers. The personas reflect real buyers we engage with. The use cases document real capabilities our platform supports. The messaging sells a real product.

If something in this Brain is wrong, our content will be wrong. One source of truth means one place to fix.

This is not a template. This is a working system.
