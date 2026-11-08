export const meta = {
  name: 'eval',
  description: 'Run the Brain eval harness: generate output for each golden brief with the real discipline subagent, then score it with a 3-judge panel against evals/rubric.md',
  whenToUse: 'Via /eval, after replacing the example company or after major messaging changes. Optional args: { discipline: "marketing" } to run one discipline only.',
  phases: [
    { title: 'Load', detail: 'read golden briefs' },
    { title: 'Generate', detail: 'one discipline subagent per brief' },
    { title: 'Judge', detail: '3 independent judges per output, median-scored' },
  ],
}

const only = args?.discipline

phase('Load')
const goldens = await agent(
  `Read every .md file in evals/golden/. For each, extract: the "discipline" frontmatter value, the "title" frontmatter value, the text under "## Brief", and the bullet list under "## Expectations" (as an array of strings). Return them all.`,
  {
    label: 'load golden briefs',
    schema: {
      type: 'object',
      properties: {
        briefs: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              discipline: { type: 'string' },
              title: { type: 'string' },
              brief: { type: 'string' },
              expectations: { type: 'array', items: { type: 'string' } },
            },
            required: ['discipline', 'title', 'brief', 'expectations'],
          },
        },
      },
      required: ['briefs'],
    },
  }
)

const briefs = goldens.briefs.filter((b) => !only || b.discipline === only)
if (briefs.length === 0) {
  return { error: `No golden briefs found${only ? ` for discipline "${only}"` : ''}.` }
}
log(`Evaluating ${briefs.length} golden brief(s)${only ? ` (discipline: ${only})` : ''}`)

const DIMENSIONS = ['citationAccuracy', 'personaFit', 'vpAnchoring', 'voiceCompliance', 'grounding', 'formatExpectations']

const JUDGE_SCHEMA = {
  type: 'object',
  properties: {
    scores: {
      type: 'object',
      properties: Object.fromEntries(
        DIMENSIONS.map((d) => [d, { type: 'number', minimum: 1, maximum: 5 }])
      ),
      required: DIMENSIONS,
    },
    worstFinding: { type: 'string', description: 'the single most important defect, with a quote' },
    rationale: { type: 'string' },
  },
  required: ['scores', 'worstFinding', 'rationale'],
}

const LENSES = [
  'governance: citations, grounding, forbidden language — be a strict fact-checker; verify citations by reading the cited sections',
  'audience: persona fit and VP anchoring — read the persona file and messaging framework and judge whether this output could only have been written for that persona',
  'craft: voice, format, and the brief’s expectations — read brand-vision.md and AGENTS.md formats and judge like a demanding editor',
]

const median = (nums) => {
  const s = [...nums].sort((a, b) => a - b)
  return s[Math.floor(s.length / 2)]
}

phase('Generate')
const results = await pipeline(
  briefs,
  (b) =>
    agent(b.brief, {
      label: `generate:${b.discipline}`,
      phase: 'Generate',
      agentType: b.discipline,
    }),
  (output, b) =>
    parallel(
      LENSES.map((lens) => () =>
        agent(
          `You are judging AI-generated ${b.discipline} output against the Company Brain in company-brain/ and the rubric in evals/rubric.md. Read the rubric first. Your primary lens: ${lens}. Score ALL six rubric dimensions 1-5 regardless of lens (the lens tells you where to dig deepest).\n\nThe brief that was given: ${b.brief}\n\nThe brief's expectations:\n${b.expectations.map((e) => `- ${e}`).join('\n')}\n\n--- OUTPUT UNDER EVALUATION ---\n${output}\n--- END OUTPUT ---\n\nBe strict. A 5 must be earned; when in doubt score lower and say why.`,
          { label: `judge:${b.discipline}`, phase: 'Judge', schema: JUDGE_SCHEMA }
        )
      )
    ).then((judges) => ({ brief: b, output, judges: judges.filter(Boolean) })),
)

phase('Judge')
const scoreboard = results.filter(Boolean).map(({ brief, output, judges }) => {
  const finalScores = Object.fromEntries(
    DIMENSIONS.map((d) => [d, median(judges.map((j) => j.scores[d]))])
  )
  const values = Object.values(finalScores)
  const mean = values.reduce((a, b) => a + b, 0) / values.length
  const passed = values.every((v) => v >= 3) && mean >= 4
  return {
    discipline: brief.discipline,
    title: brief.title,
    scores: finalScores,
    mean: Math.round(mean * 100) / 100,
    passed,
    worstFindings: judges.map((j) => j.worstFinding),
    outputPreview: output.slice(0, 500),
  }
})

const passCount = scoreboard.filter((r) => r.passed).length
log(`${passCount}/${scoreboard.length} briefs passed`)

return { passed: passCount, total: scoreboard.length, scoreboard }
