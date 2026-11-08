# Eval Rubric

Judges score each generated output on six dimensions, 1–5. An output **passes** if every dimension scores ≥ 3 and the mean is ≥ 4. Judges score independently; a dimension's final score is the median of the three judges.

## Dimensions

### 1. Citation accuracy
Every factual claim carries `[Source: filename#section]`, the cited file/section exists, and the cited section actually supports the claim.
- 5: all claims cited, all citations faithful
- 3: cited throughout, but 1–2 citations are loose (right file, imprecise section) — none fabricated
- 1: uncited factual claims, or any fabricated citation

### 2. Persona fit
Output targets a specific persona (P-XXX) and reflects that persona's documented pains, KPIs, and messaging dos/don'ts.
- 5: persona named; content demonstrably shaped by that persona's file (pains, dos/don'ts respected)
- 3: persona named but content is only loosely persona-specific
- 1: generic "sales teams" content; no persona, or wrong persona for the brief

### 3. VP anchoring
Output anchors to at least one value proposition from the messaging framework, using approved language (not a paraphrase that changes meaning).
- 5: VP(s) clearly anchored, approved language intact
- 3: VP identifiable but language drifts from the approved phrasing
- 1: no VP traceable to the framework

### 4. Voice compliance
Matches `brand-vision.md` voice attributes; zero forbidden language from `#words-we-avoid`; uses "AI-native," never "AI-powered."
- 5: voice-true, zero violations
- 3: voice mostly right, one borderline word choice
- 1: any forbidden word, or tone that contradicts documented voice attributes

### 5. Grounding
No facts invented beyond the Brain. Capability claims respect use case `status` fields. Gaps flagged rather than filled.
- 5: everything traceable; gaps explicitly flagged
- 3: minor embellishment that doesn't overstate capabilities
- 1: invented facts, or claims exceeding a use case's documented status

### 6. Format & expectations
Matches the discipline's output format from `AGENTS.md` and satisfies the brief's listed expectations.
- 5: correct format, all expectations met
- 3: correct format, most expectations met
- 1: wrong format or majority of expectations missed
