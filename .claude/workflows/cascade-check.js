export const meta = {
  name: 'cascade-check',
  description: 'After a Brain file changes, fan out one agent per Brain file to find stale references to the old content, then adversarially verify each finding',
  whenToUse: 'Run after any /update-* skill writes a Brain file. args: { changedFile: "company-brain/...", changes: ["human-readable change 1", ...] }',
  phases: [
    { title: 'Scan', detail: 'one agent per Brain file, hunting stale references' },
    { title: 'Verify', detail: 'adversarial check on every reported stale reference' },
  ],
}

const changedFile = args?.changedFile
const changes = args?.changes || []

if (!changedFile || changes.length === 0) {
  return { error: 'cascade-check requires args: { changedFile, changes: [...] }' }
}

const FINDINGS_SCHEMA = {
  type: 'object',
  properties: {
    staleReferences: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          file: { type: 'string' },
          section: { type: 'string', description: 'nearest heading above the stale text' },
          staleText: { type: 'string', description: 'exact text as it appears in the file' },
          shouldBe: { type: 'string', description: 'what the text should say now, given the change' },
          reason: { type: 'string', description: 'which change makes this stale' },
        },
        required: ['file', 'section', 'staleText', 'shouldBe', 'reason'],
      },
    },
  },
  required: ['staleReferences'],
}

const VERDICT_SCHEMA = {
  type: 'object',
  properties: {
    isStale: { type: 'boolean' },
    explanation: { type: 'string' },
  },
  required: ['isStale', 'explanation'],
}

// Enumerate Brain files to scan (everything except the file that changed).
phase('Scan')
const fileList = await agent(
  `List every .md file under company-brain/ in this repo, excluding "${changedFile}" and excluding company-brain/drift-log.md. Return ONLY a JSON array of relative paths, nothing else.`,
  {
    label: 'list brain files',
    schema: {
      type: 'object',
      properties: { files: { type: 'array', items: { type: 'string' } } },
      required: ['files'],
    },
  }
)

const changesText = changes.map((c, i) => `${i + 1}. ${c}`).join('\n')

const results = await pipeline(
  fileList.files,
  (file) =>
    agent(
      `The Brain file "${changedFile}" was just updated. These changes were made:\n\n${changesText}\n\nRead "${changedFile}" (the new, current version) and then read "${file}" in full. Find every place in "${file}" that references, quotes, summarizes, or depends on content from "${changedFile}" that is now stale given the changes above. Quote the exact stale text. Only report text that is genuinely contradicted or outdated by the changes — do not report text that merely mentions the changed file. If nothing is stale, return an empty array.`,
      { label: `scan:${file}`, phase: 'Scan', schema: FINDINGS_SCHEMA }
    ),
  (scan, file) =>
    parallel(
      (scan?.staleReferences || []).map((f) => () =>
        agent(
          `A reviewer claims this text in "${f.file}" (section "${f.section}") is stale because of a recent change to "${changedFile}":\n\nStale text: "${f.staleText}"\nClaimed reason: ${f.reason}\nProposed replacement: "${f.shouldBe}"\n\nThe changes made to ${changedFile} were:\n${changesText}\n\nRead both files and try to REFUTE this claim. Is the quoted text actually present in ${f.file}, and is it actually contradicted or outdated by the change? If the text is consistent with the new version, or the quote doesn't exist, it is NOT stale.`,
          { label: `verify:${file}`, phase: 'Verify', schema: VERDICT_SCHEMA }
        ).then((v) => ({ ...f, verdict: v }))
      )
    )
)

const confirmed = results
  .filter(Boolean)
  .flat()
  .filter(Boolean)
  .filter((f) => f.verdict?.isStale)

log(`${confirmed.length} confirmed stale reference(s)`)

return {
  changedFile,
  changes,
  filesScanned: fileList.files.length,
  confirmedStaleReferences: confirmed.map(({ verdict, ...f }) => ({
    ...f,
    verifierNote: verdict.explanation,
  })),
}
