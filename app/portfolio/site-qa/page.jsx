import Link from 'next/link'
import { stories, cases, defects } from './qa-data'
import LatestRun from './LatestRun'

export const metadata = {
  title: 'Ricardo Montes | Portfolio Site QA',
}

const count = (result) => cases.filter((c) => c.result === result).length
const resultClass = {
  Pass: 'ff7-qa-pass',
  Fail: 'ff7-qa-fail',
  'Not run': 'ff7-qa-skip',
}

export default function SiteQA() {
  const matrix = stories.map((s) => {
    const own = cases.filter((c) => c.story === s.id)
    return {
      ...s,
      total: own.length,
      pass: own.filter((c) => c.result === 'Pass').length,
      fail: own.filter((c) => c.result === 'Fail').length,
      skip: own.filter((c) => c.result === 'Not run').length,
      ids: own.map((c) => c.id).join(', '),
      bugs: own.filter((c) => c.defect).map((c) => c.defect).join(', '),
    }
  })

  return (
    <main className="ff7-main">
      <div className="ff7-portfolio-layout">

        <div className="ff7-loadfile-header">
          <div className="ff7-panel ff7-loadfile-label">Portfolio Site QA</div>
          <div className="ff7-loadfile-tabs">
            <div className="ff7-panel ff7-loadfile-project">Quality Assurance</div>
          </div>
        </div>

        <div className="ff7-panel ff7-qa-panel">
          <p className="ff7-qa-intro">
            Test plan, user stories, test cases, and defects for this portfolio site, written and run against the
            live build. Every result below was observed, not assumed.
          </p>
          <div className="ff7-qa-stats">
            <div className="ff7-inset ff7-qa-stat"><b>{stories.length}</b><span>user stories</span></div>
            <div className="ff7-inset ff7-qa-stat"><b>{cases.length}</b><span>test cases</span></div>
            <div className="ff7-inset ff7-qa-stat"><b className="ff7-qa-pass">{count('Pass')}</b><span>passed</span></div>
            <div className="ff7-inset ff7-qa-stat"><b className="ff7-qa-fail">{count('Fail')}</b><span>failed</span></div>
            <div className="ff7-inset ff7-qa-stat"><b className="ff7-qa-skip">{count('Not run')}</b><span>not run</span></div>
            <div className="ff7-inset ff7-qa-stat"><b>{defects.length}</b><span>defects logged</span></div>
          </div>
        </div>

        <LatestRun />

        <div className="ff7-panel ff7-qa-panel">
          <h3 className="ff7-section-title">Test Plan</h3>
          <div className="ff7-skill-row"><span className="ff7-abbr">Scope</span><span>Home, About, Portfolio, Bug Report, Resume, Contact, and Services pages; header and footer; the contact form</span></div>
          <div className="ff7-skill-row"><span className="ff7-abbr">Environment</span><span>Next.js (App Router) build run locally; Chromium-based browser; viewports 375×812 phone, 768×1024 tablet, 1280×800 desktop; executed 23 Nov 2026</span></div>
          <div className="ff7-skill-row"><span className="ff7-abbr">Approach</span><span>Requirements written as user stories with acceptance criteria; test cases derived from them; navigation, form validation, responsive layout, and basic accessibility checks; each failure logged as a defect with measured evidence</span></div>
          <div className="ff7-skill-row"><span className="ff7-abbr">Pass criteria</span><span>A test case passes only if every expected result is observed</span></div>
          <div className="ff7-skill-row"><span className="ff7-abbr">Severity</span><span>High: unreadable or blocks a primary task. Medium: degrades use. Low: minor or cosmetic</span></div>
          <div className="ff7-skill-row"><span className="ff7-abbr">Not covered</span><span>Safari and Firefox, real devices, keyboard-only and screen reader testing, performance, and the contact form&apos;s email hand-off</span></div>
        </div>

        <div className="ff7-panel ff7-qa-panel">
          <h3 className="ff7-section-title">Requirements Traceability</h3>
          <div className="ff7-qa-scroll">
            <table className="ff7-qa-table">
              <thead>
                <tr><th>Story</th><th>Requirement</th><th>Test cases</th><th>Pass</th><th>Fail</th><th>Not run</th><th>Defects</th></tr>
              </thead>
              <tbody>
                {matrix.map((m) => (
                  <tr key={m.id}>
                    <td>{m.id}</td>
                    <td className="ff7-qa-wide">
                      {m.title}
                      <ul className="ff7-qa-criteria">
                        {m.criteria.map((c) => <li key={c}>{c}</li>)}
                      </ul>
                    </td>
                    <td>{m.ids}</td>
                    <td className="ff7-qa-pass">{m.pass}</td>
                    <td className={m.fail ? 'ff7-qa-fail' : ''}>{m.fail}</td>
                    <td className={m.skip ? 'ff7-qa-skip' : ''}>{m.skip}</td>
                    <td>{m.bugs || '–'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="ff7-panel ff7-qa-panel">
          <h3 className="ff7-section-title">Test Cases</h3>
          <div className="ff7-qa-scroll">
            <table className="ff7-qa-table">
              <thead>
                <tr><th>ID</th><th>Story</th><th>Test case</th><th>Expected</th><th>Actual</th><th>Result</th><th>Defect</th></tr>
              </thead>
              <tbody>
                {cases.map((c) => (
                  <tr key={c.id}>
                    <td>{c.id}</td>
                    <td>{c.story}</td>
                    <td className="ff7-qa-wide">{c.title}<span className="ff7-qa-steps">{c.steps}</span></td>
                    <td className="ff7-qa-wide">{c.expected}</td>
                    <td className="ff7-qa-wide">{c.actual}</td>
                    <td className={resultClass[c.result]}>{c.result}</td>
                    <td>{c.defect || '–'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="ff7-panel ff7-qa-panel">
          <h3 className="ff7-section-title">Defects</h3>
          <div className="ff7-qa-scroll">
            <table className="ff7-qa-table">
              <thead>
                <tr><th>ID</th><th>Severity</th><th>Defect</th><th>Found by</th><th>Status</th></tr>
              </thead>
              <tbody>
                {defects.map((d) => (
                  <tr key={d.id}>
                    <td>{d.id}</td>
                    <td className={d.severity === 'High' ? 'ff7-qa-fail' : d.severity === 'Medium' ? 'ff7-qa-skip' : ''}>{d.severity}</td>
                    <td className="ff7-qa-wide">{d.title}</td>
                    <td>{d.found}</td>
                    <td>Open</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="ff7-panel ff7-qa-panel ff7-qa-menu">
          <ul className="ff7-nav-menu">
            <li><Link href="/portfolio">Back to portfolio</Link></li>
          </ul>
        </div>

      </div>
    </main>
  )
}
