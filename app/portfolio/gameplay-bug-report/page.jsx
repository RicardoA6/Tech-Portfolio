import Link from 'next/link'

export const metadata = {
  title: 'Ricardo Montes | Bug Report',
}

export default function GameplayBugReport() {
  return (
    <main className="ff7-main">
      <div className="ff7-portfolio-layout">

        <div className="ff7-loadfile-header">
          <div className="ff7-panel ff7-loadfile-label">Bug Report</div>
          <div className="ff7-loadfile-tabs">
            <div className="ff7-panel ff7-loadfile-project">Quality Assurance</div>
          </div>
        </div>

        <div className="ff7-bug-cols">

          <div className="ff7-panel ff7-bug-ticket">
            <h3 className="ff7-section-title">BUG-014 &nbsp;[Bug title]</h3>
            <div className="ff7-bug-row"><span className="ff7-bug-key">Severity</span><span className="ff7-bug-crit">[Critical]</span></div>
            <div className="ff7-bug-row"><span className="ff7-bug-key">Priority</span><span>[P1]</span></div>
            <div className="ff7-bug-row"><span className="ff7-bug-key">Build</span><span>[Version / platform]</span></div>
            <div className="ff7-bug-row"><span className="ff7-bug-key">Repro rate</span><span>[8 / 10 attempts]</span></div>

            <h3 className="ff7-section-title ff7-bug-gap">Steps to reproduce</h3>
            <ol className="ff7-bug-steps">
              <li>[Step one]</li>
              <li>[Step two]</li>
              <li>[Step three]</li>
            </ol>

            <h3 className="ff7-section-title ff7-bug-gap">Expected vs actual</h3>
            <div className="ff7-bug-row"><span className="ff7-bug-key">Expected</span><span>[What should happen]</span></div>
            <div className="ff7-bug-row"><span className="ff7-bug-key">Actual</span><span>[What happens instead]</span></div>
          </div>

          <div className="ff7-bug-side">
            <div className="ff7-panel ff7-bug-attach">
              <h3 className="ff7-section-title">Attachments</h3>
              <div className="ff7-bug-thumb ff7-bug-thumb-main"><i className="fas fa-circle-play"></i><span>Repro clip</span></div>
              <div className="ff7-bug-thumbs">
                <div className="ff7-bug-thumb"><i className="fas fa-image"></i></div>
                <div className="ff7-bug-thumb"><i className="fas fa-file-lines"></i></div>
              </div>
            </div>

            <div className="ff7-panel ff7-bug-menu">
              <ul className="ff7-nav-menu">
                <li><Link href="/portfolio">Back to portfolio</Link></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
