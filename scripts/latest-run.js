// Turns Playwright's JSON results into a small summary the site can display.
// Runs in CI after the tests. Output: playwright-report/latest-run.json

const fs = require('fs')

const results = JSON.parse(fs.readFileSync('playwright-results.json', 'utf8'))
const { expected, unexpected, flaky, skipped } = results.stats

// Collect the browsers that ran, by walking the nested suites
const browsers = new Set()
function walk(suite) {
  for (const spec of suite.specs || []) {
    for (const t of spec.tests) browsers.add(t.projectName)
  }
  for (const child of suite.suites || []) walk(child)
}
results.suites.forEach(walk)

const { GITHUB_SHA, GITHUB_SERVER_URL, GITHUB_REPOSITORY, GITHUB_RUN_ID } = process.env
const repoUrl = `${GITHUB_SERVER_URL}/${GITHUB_REPOSITORY}`

const summary = {
  conclusion: unexpected === 0 ? 'passed' : 'failed',
  passed: expected,
  failed: unexpected,
  flaky,
  skipped,
  browsers: [...browsers].sort(),
  finishedAt: new Date().toISOString(),
  commit: GITHUB_SHA ? GITHUB_SHA.slice(0, 7) : null,
  commitUrl: GITHUB_SHA ? `${repoUrl}/commit/${GITHUB_SHA}` : null,
  runUrl: GITHUB_RUN_ID ? `${repoUrl}/actions/runs/${GITHUB_RUN_ID}` : null,
}

fs.mkdirSync('playwright-report', { recursive: true })
fs.writeFileSync('playwright-report/latest-run.json', JSON.stringify(summary, null, 2))
console.log(summary)
