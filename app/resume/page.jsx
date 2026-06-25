export const metadata = {
  title: 'Ricardo Montes | Resume',
}

export default function Resume() {
  return (
    <main className="ff7-main">

      <div className="ff7-panel ff7-resume-header">
        <div>
          <span className="ff7-resume-name">Ricardo Montes</span>
          <span className="ff7-resume-role">QA Engineer · Automation · AI &amp; Game Dev</span>
        </div>
        <div className="ff7-resume-contact">
          <a href="mailto:ricardomontescs@gmail.com">ricardomontescs@gmail.com</a><br />
          <a href="https://linkedin.com/in/ricardomontescs" target="_blank" rel="noreferrer">linkedin.com/in/ricardomontescs</a><br />
          Texas, USA · Remote
        </div>
      </div>

      <div className="ff7-resume-cols">

        {/* Left: Experience */}
        <div className="ff7-resume-main">

          <div className="ff7-panel ff7-resume-section">
            <h3 className="ff7-section-title">Work Experience</h3>

            <div className="ff7-job">
              <span className="ff7-job-title">Senior QA Engineer</span>
              <span className="ff7-job-company">Company Name</span>
              <span className="ff7-job-dates">20XX – Present</span>
              <ul className="ff7-job-desc">
                <li>Led QA strategy across multiple concurrent projects in an Agile environment</li>
                <li>Built and maintained automation frameworks using Selenium and Python</li>
                <li>Owned API testing with Postman and REST-assured</li>
                <li>Reduced regression cycle time by 40% through automation coverage</li>
              </ul>
            </div>

            <div className="ff7-job">
              <span className="ff7-job-title">QA Engineer</span>
              <span className="ff7-job-company">Company Name</span>
              <span className="ff7-job-dates">20XX – 20XX</span>
              <ul className="ff7-job-desc">
                <li>Designed and executed test plans and test cases for web and desktop applications</li>
                <li>Collaborated with dev teams to define acceptance criteria and DoD</li>
                <li>Performed exploratory, regression, and smoke testing across releases</li>
              </ul>
            </div>

            <div className="ff7-job">
              <span className="ff7-job-title">QA Analyst</span>
              <span className="ff7-job-company">Company Name</span>
              <span className="ff7-job-dates">20XX – 20XX</span>
              <ul className="ff7-job-desc">
                <li>Manual testing of SaaS platform across multiple browsers and environments</li>
                <li>Documented and tracked defects using Jira</li>
                <li>Supported UAT sessions with client stakeholders</li>
              </ul>
            </div>
          </div>

          <div className="ff7-panel ff7-resume-section">
            <h3 className="ff7-section-title">Game Dev Projects</h3>

            <div className="ff7-job">
              <span className="ff7-job-title">Command Center Earth</span>
              <span className="ff7-job-company">Unity — Solo Developer</span>
              <ul className="ff7-job-desc">
                <li>Designed and programmed gameplay systems in Unity (C#)</li>
                <li>Integrated 2D assets, UI, and basic AI behavior</li>
                <li>Applied QA processes to iterative playtesting and bug tracking</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Right: Skills + Education */}
        <div className="ff7-resume-side">

          <div className="ff7-panel ff7-resume-section">
            <h3 className="ff7-section-title">QA Skills</h3>
            <ul className="ff7-skill-list">
              <li>Manual Testing</li>
              <li>Test Plans &amp; Cases</li>
              <li>API Testing</li>
              <li>Regression Testing</li>
              <li>Exploratory Testing</li>
              <li>Defect Management</li>
              <li>Agile / Scrum</li>
            </ul>
          </div>

          <div className="ff7-panel ff7-resume-section">
            <h3 className="ff7-section-title">Automation</h3>
            <ul className="ff7-skill-list">
              <li>Selenium</li>
              <li>Python</li>
              <li>Postman</li>
              <li>REST-assured</li>
              <li>JavaScript</li>
              <li>CI/CD Basics</li>
            </ul>
          </div>

          <div className="ff7-panel ff7-resume-section">
            <h3 className="ff7-section-title">Tools &amp; Tech</h3>
            <ul className="ff7-skill-list">
              <li>Jira</li>
              <li>Git / GitHub</li>
              <li>Unity (C#)</li>
              <li>VS Code</li>
              <li>Claude AI API</li>
              <li>HTML / CSS</li>
            </ul>
          </div>

          <div className="ff7-panel ff7-resume-section">
            <h3 className="ff7-section-title">Education</h3>
            <ul className="ff7-skill-list">
              <li>Degree / Cert</li>
              <li>Institution</li>
              <li>Year</li>
            </ul>
          </div>

        </div>

      </div>

      <div className="ff7-location-bar ff7-panel">Item — Resume</div>
    </main>
  )
}
