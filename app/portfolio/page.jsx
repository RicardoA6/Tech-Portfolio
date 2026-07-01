export const metadata = {
  title: 'Ricardo Montes | Portfolio',
}

export default function Portfolio() {
  return (
    <main className="ff7-main">
      <div className="ff7-portfolio-layout">

        <div className="ff7-loadfile-header">
          <div className="ff7-panel ff7-loadfile-label">Select a save project.</div>
          <div className="ff7-loadfile-tabs">
            <div className="ff7-panel ff7-loadfile-title">Portfolio</div>
            <div className="ff7-panel ff7-loadfile-action">View</div>
          </div>
        </div>

        <section id="test-plans" className="ff7-portfolio-section">
          <div className="ff7-file-rows">

            <a href="#" className="ff7-file-row">
              <div className="ff7-panel ff7-file-top">
                <div className="ff7-file-portraits">
                  <div className="ff7-file-portrait"><i className="fas fa-clipboard-list"></i></div>
                  <div className="ff7-file-portrait"><i className="fas fa-shield-alt"></i></div>
                </div>
                <div className="ff7-file-info">
                  <span className="ff7-file-name">Master Test Plan</span>
                  <span className="ff7-file-scope">Scope <span className="ff7-file-scope-val">Full regression</span></span>
                </div>
              </div>
              <div className="ff7-panel ff7-file-location">StudentTrac (QA)</div>
            </a>

          </div>
        </section>

        <section id="test-cases" className="ff7-portfolio-section">
          <div className="ff7-file-rows">

            <a href="#" className="ff7-file-row">
              <div className="ff7-panel ff7-file-top">
                <div className="ff7-file-portraits">
                  <div className="ff7-file-portrait"><i className="fas fa-list-check"></i></div>
                  <div className="ff7-file-portrait"><i className="fas fa-shield-alt"></i></div>
                </div>
                <div className="ff7-file-info">
                  <span className="ff7-file-name">Regression Suite</span>
                  <span className="ff7-file-scope">Scope <span className="ff7-file-scope-val">Enrollment + grading</span></span>
                </div>
              </div>
              <div className="ff7-panel ff7-file-location">StudentTrac (QA)</div>
            </a>

            <a href="#" className="ff7-file-row">
              <div className="ff7-panel ff7-file-top">
                <div className="ff7-file-portraits">
                  <div className="ff7-file-portrait"><i className="fas fa-plug"></i></div>
                  <div className="ff7-file-portrait"><i className="fas fa-shield-alt"></i></div>
                </div>
                <div className="ff7-file-info">
                  <span className="ff7-file-name">API Test Cases</span>
                  <span className="ff7-file-scope">Scope <span className="ff7-file-scope-val">REST endpoint coverage</span></span>
                </div>
              </div>
              <div className="ff7-panel ff7-file-location">StudentTrac (QA)</div>
            </a>

          </div>
        </section>

        <section id="automation" className="ff7-portfolio-section">
          <div className="ff7-file-rows">

            <a href="#" className="ff7-file-row">
              <div className="ff7-panel ff7-file-top">
                <div className="ff7-file-portraits">
                  <div className="ff7-file-portrait"><i className="fas fa-robot"></i></div>
                  <div className="ff7-file-portrait"><i className="fas fa-code"></i></div>
                </div>
                <div className="ff7-file-info">
                  <span className="ff7-file-name">Selenium Automation Framework</span>
                  <span className="ff7-file-scope">Scope <span className="ff7-file-scope-val">Python + Selenium regression runner</span></span>
                </div>
              </div>
              <div className="ff7-panel ff7-file-location">StudentTrac (QA)</div>
            </a>

            <a href="#" className="ff7-file-row">
              <div className="ff7-panel ff7-file-top">
                <div className="ff7-file-portraits">
                  <div className="ff7-file-portrait"><i className="fas fa-diagram-project"></i></div>
                  <div className="ff7-file-portrait"><i className="fas fa-code"></i></div>
                </div>
                <div className="ff7-file-info">
                  <span className="ff7-file-name">Postman API Suite</span>
                  <span className="ff7-file-scope">Scope <span className="ff7-file-scope-val">REST-assured + Postman collection</span></span>
                </div>
              </div>
              <div className="ff7-panel ff7-file-location">StudentTrac (QA)</div>
            </a>

          </div>
        </section>

        <section id="game-dev" className="ff7-portfolio-section">
          <div className="ff7-file-rows">

            <a href="#" className="ff7-file-row">
              <div className="ff7-panel ff7-file-top">
                <div className="ff7-file-portraits">
                  <div className="ff7-file-portrait"><i className="fas fa-gamepad"></i></div>
                  <div className="ff7-file-portrait"><i className="fas fa-code"></i></div>
                </div>
                <div className="ff7-file-info">
                  <span className="ff7-file-name">Command Center Earth</span>
                  <span className="ff7-file-scope">Scope <span className="ff7-file-scope-val">Gameplay systems + UI (Unity)</span></span>
                </div>
              </div>
              <div className="ff7-panel ff7-file-location">Command Center Earth</div>
            </a>

            <a href="#" className="ff7-file-row">
              <div className="ff7-panel ff7-file-top">
                <div className="ff7-file-portraits">
                  <div className="ff7-file-portrait"><i className="fas fa-bug"></i></div>
                  <div className="ff7-file-portrait"><i className="fas fa-gamepad"></i></div>
                </div>
                <div className="ff7-file-info">
                  <span className="ff7-file-name">Gameplay Bug Report</span>
                  <span className="ff7-file-scope">Scope <span className="ff7-file-scope-val">Sample defect writeup</span></span>
                </div>
              </div>
              <div className="ff7-panel ff7-file-location">Command Center Earth</div>
            </a>

          </div>
        </section>

      </div>
    </main>
  )
}
