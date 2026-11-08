export const meta = {
  name: 'brain-audit',
  description: 'Full Brain health audit: citation faithfulness, internal contradictions, and staleness — the semantic checks the mechanical linters cannot do',
  whenToUse: 'Run periodically (weekly/monthly) via /brain-audit, or after a burst of Brain edits. Optional args: { staleDays: 90 } for the staleness threshold.',
  phases: [
    { title: 'Citations', detail: 'semantic citation-faithfulness sweep (citation-audit workflow)' },
    { title: 'Contradictions', detail: 'dimension-based finders for internal inconsistencies' },
    { title: 'Staleness', detail: 'frontmatter age and content-decay signals' },
    { title: 'Synthesize', detail: 'one prioritized report' },
  ],
}

const staleDays = args?.staleDays || 90

// Phase 1: citation faithfulness (nested workflow)
phase('Citations')
const citations = await workflow('citation-audit')

// Phase 2: contradictions — each finder looks at the whole Brain through one lens
phase('Contradictions')
const CONTRADICTION_SCHEMA = {
  type: 'object',
  properties: {
    contradictions: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          dimension: { type: 'string' },
          fileA: { type: 'string' },
          quoteA: { type: 'string' },
          fileB: { type: 'string' },
          quoteB: { type: 'string' },
          why: { type: 'string' },
          severity: { type: 'string', enum: ['minor', 'major'] },
        },
        required: ['dimension', 'fileA', 'quoteA', 'fileB', 'quoteB', 'why', 'severity'],
      },
    },
  },
  required: ['contradictions'],
}

const DIMENSIONS = [
  {
    key: 'firmographics',
    prompt: 'ICP facts: company size, segment, industry, team size, funding stage. Compare icp.md against every file that echoes these numbers (positioning, personas, guardrails, VPs, README, guidelines).',
  },
  {
    key: 'capability-claims',
    prompt: 'Use case status vs claims: for each use case status field (proposed/in-development/partially-supported/fully-supported), find any file claiming MORE capability than the status supports (messaging, objection responses, persona product hooks, guidelines).',
  },
  {
    key: 'category-language',
    prompt: 'Category and positioning language: is the category definition identical across brand-vision.md, core-positioning.md, and everywhere it is echoed? Check "AI-native" vs "AI-powered" consistency and positioning-statement drift.',
  },
  {
    key: 'personas-and-goals',
    prompt: 'Persona facts and goals alignment: do persona demographics/pains match how other files describe them? Do quarterly priorities in goals.md still match what guidelines tell each discipline to emphasize?',
  },
]

const contradictionResults = await parallel(
  DIMENSIONS.map((d) => () =>
    agent(
      `You are auditing the company-brain/ knowledge base for INTERNAL CONTRADICTIONS in one dimension.\n\nDimension: ${d.prompt}\n\nRead every relevant file under company-brain/. Report only genuine contradictions — two files asserting incompatible facts — with exact quotes from both sides. Consistent paraphrase is NOT a contradiction. Severity: major if an agent following one file would produce output that violates the other; minor otherwise.`,
      { label: `contradictions:${d.key}`, phase: 'Contradictions', schema: CONTRADICTION_SCHEMA }
    )
  )
)

// Phase 3: staleness
phase('Staleness')
const staleness = await agent(
  `Audit company-brain/ for staleness. Steps:\n1. Run \`date +%Y-%m-%d\` to get today's date.\n2. For every .md file under company-brain/, read its frontmatter \`last_updated\` and flag files older than ${staleDays} days.\n3. Read goals.md: flag if the quarterly priorities refer to a quarter that has already ended.\n4. Read use-cases/*.md: flag any status field of "in-development" or "proposed" on a file older than ${staleDays} days — those statuses decay fastest.\nReport each flagged file with why it is suspect.`,
  {
    label: 'staleness scan',
    phase: 'Staleness',
    schema: {
      type: 'object',
      properties: {
        staleFiles: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              file: { type: 'string' },
              lastUpdated: { type: 'string' },
              reason: { type: 'string' },
            },
            required: ['file', 'lastUpdated', 'reason'],
          },
        },
      },
      required: ['staleFiles'],
    },
  }
)

// Phase 4: synthesize
phase('Synthesize')
const contradictions = contradictionResults.filter(Boolean).flatMap((r) => r.contradictions)

const report = await agent(
  `Synthesize a Brain health report from these audit findings. Prioritize by what would cause an agent to produce WRONG output tomorrow (unfaithful citations and major contradictions first, staleness last). For each finding, name the fix and which /update-* skill applies. Be specific; quote the findings. End with a one-paragraph overall health verdict.\n\nUnfaithful citations:\n${JSON.stringify(citations.unfaithfulCitations, null, 2)}\n\nContradictions:\n${JSON.stringify(contradictions, null, 2)}\n\nStale files (threshold ${staleDays} days):\n${JSON.stringify(staleness?.staleFiles || [], null, 2)}`,
  { label: 'synthesize report', phase: 'Synthesize' }
)

return {
  summary: {
    unfaithfulCitations: citations.unfaithfulCitations.length,
    contradictions: contradictions.length,
    staleFiles: (staleness?.staleFiles || []).length,
  },
  report,
}
