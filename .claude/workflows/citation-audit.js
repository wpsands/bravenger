export const meta = {
  name: 'citation-audit',
  description: 'Semantic citation-faithfulness sweep: verify every [Source: file#section] citation still says what the citing text claims',
  whenToUse: 'Run standalone or as a phase of brain-audit. scripts/check-citations.js verifies cited sections EXIST; this verifies they still SUPPORT the claim. No args required.',
  phases: [
    { title: 'Sweep', detail: 'one agent per Brain file, judging every citation it contains' },
    { title: 'Verify', detail: 'adversarial second opinion on every unfaithful citation' },
  ],
}

const FINDINGS_SCHEMA = {
  type: 'object',
  properties: {
    citations: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          file: { type: 'string', description: 'file containing the citation' },
          line: { type: 'number' },
          citation: { type: 'string', description: 'the raw [Source: ...] text' },
          claim: { type: 'string', description: 'the citing sentence/claim' },
          faithful: { type: 'boolean', description: 'does the cited section actually support the claim' },
          explanation: { type: 'string' },
        },
        required: ['file', 'line', 'citation', 'claim', 'faithful', 'explanation'],
      },
    },
  },
  required: ['citations'],
}

const VERDICT_SCHEMA = {
  type: 'object',
  properties: {
    unfaithful: { type: 'boolean' },
    explanation: { type: 'string' },
  },
  required: ['unfaithful', 'explanation'],
}

phase('Sweep')
const fileList = await agent(
  'List every .md file under company-brain/ in this repo that contains at least one "[Source:" citation (use Grep). Exclude company-brain/drift-log.md and any README. Return a JSON array of relative paths.',
  {
    label: 'find cited files',
    schema: {
      type: 'object',
      properties: { files: { type: 'array', items: { type: 'string' } } },
      required: ['files'],
    },
  }
)

const results = await pipeline(
  fileList.files,
  (file) =>
    agent(
      `Read "${file}" in full. For EVERY [Source: filename#section] citation in it (skip template placeholders like [Source: filename#section] itself):\n1. Identify the claim the citation is attached to (the sentence or table cell citing it).\n2. Read the cited file's cited section.\n3. Judge: does that section, as written TODAY, actually support the claim? A citation is unfaithful if the section no longer contains the fact, contradicts it, or states materially different numbers/wording.\nBe strict about facts and numbers, lenient about paraphrase. Report every citation with your verdict.`,
      { label: `sweep:${file}`, phase: 'Sweep', schema: FINDINGS_SCHEMA }
    ),
  (sweep, file) =>
    parallel(
      (sweep?.citations || [])
        .filter((c) => !c.faithful)
        .map((c) => () =>
          agent(
            `A reviewer claims this citation is UNFAITHFUL — that the cited section no longer supports the claim.\n\nFile: ${c.file}, line ${c.line}\nClaim: "${c.claim}"\nCitation: ${c.citation}\nReviewer's reasoning: ${c.explanation}\n\nRead the citing file and the cited section yourself and try to REFUTE the reviewer. If the cited section does support the claim (paraphrase is fine; only facts, numbers, and materially different meaning count as unfaithful), the citation is faithful and the reviewer is wrong.`,
            { label: `verify:${file}:${c.line}`, phase: 'Verify', schema: VERDICT_SCHEMA }
          ).then((v) => ({ ...c, verdict: v }))
        )
    )
)

const flagged = results.filter(Boolean).flat().filter(Boolean)
const confirmed = flagged.filter((c) => c.verdict?.unfaithful)

log(`${confirmed.length} unfaithful citation(s) confirmed (${flagged.length - confirmed.length} refuted on second look)`)

return {
  filesSwept: fileList.files.length,
  unfaithfulCitations: confirmed.map(({ verdict, faithful, ...c }) => ({
    ...c,
    verifierNote: verdict.explanation,
  })),
}
