export const metadata = {
  title: 'Ricardo Montes | Resume',
}

export default function Resume() {
  return (
    <main className="ff7-main">
      <div className="ff7-resume-layout">

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
                <span className="ff7-job-title">Software QA II</span>
                <span className="ff7-job-company">Dynamics Inc, Pasadena</span>
                <span className="ff7-job-dates">July 2016 – January 2025</span>
                <ul className="ff7-job-desc">
                  <li>Led QA efforts for 30+ projects implementing new features across the software development lifecycle</li>
                  <li>Designed test plans covering 100+ test cases, verifying functionality and improving defect detection</li>
                  <li>Worked cross-functionally with developers, project managers, and support teams to define QA requirements and develop comprehensive test plans</li>
                  <li>Built and maintained automated testing frameworks in Java using Selenium, including improving login reliability for the StudentTrac SIS</li>
                  <li>Performed black-box, functional, regression, performance, and API testing to ensure software reliability and alignment with requirements</li>
                  <li>Conducted manual testing with Swagger and Postman to validate API/UI responses and verify requirements</li>
                  <li>Managed issue tracking in JIRA, writing 1000+ reproducible tickets and resolving 1000+ QA issues reported by the support team</li>
                  <li>Facilitated stakeholder reviews and communicated issues, progress, and blockers in and out of meetings</li>
                  <li>Validated and provided final QA sign-off for 100+ software releases</li>
                </ul>
              </div>

              <div className="ff7-job">
                <span className="ff7-job-title">Game Developer</span>
                <span className="ff7-job-company">Breakstep Studios</span>
                <span className="ff7-job-dates">March 2020 – Present</span>
                <ul className="ff7-job-desc">
                  <li>5+ years of full-cycle game development with C# scripting, gameplay programming, asset integration, scene management, and UI design in Unity</li>
                  <li>Implemented development processes (version control, build automation, testing) to ensure high-quality updates and releases</li>
                  <li>Designed and developed gameplay features, characters, and cohesive game themes</li>
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
                <li>Black Box Testing</li>
                <li>Functional Testing</li>
                <li>Regression Testing</li>
                <li>Performance Testing</li>
                <li>API Testing</li>
                <li>Agile / Scrum</li>
              </ul>
            </div>

            <div className="ff7-panel ff7-resume-section">
              <h3 className="ff7-section-title">Automation &amp; CI/CD</h3>
              <ul className="ff7-skill-list">
                <li>Selenium</li>
                <li>TestNG</li>
                <li>JUnit</li>
                <li>Jenkins</li>
                <li>GitHub / GitLab</li>
                <li>BitBucket</li>
              </ul>
            </div>

            <div className="ff7-panel ff7-resume-section">
              <h3 className="ff7-section-title">Tools &amp; Tech</h3>
              <ul className="ff7-skill-list">
                <li>JIRA</li>
                <li>Postman</li>
                <li>Swagger</li>
                <li>JMeter</li>
                <li>Unity</li>
                <li>IntelliJ IDEA</li>
                <li>ClickUp</li>
                <li>Slack</li>
              </ul>
            </div>

            <div className="ff7-panel ff7-resume-section">
              <h3 className="ff7-section-title">Languages &amp; Data</h3>
              <ul className="ff7-skill-list">
                <li>Java</li>
                <li>C# / C++</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>HTML / XML / JSON</li>
                <li>DynamoDB / S3</li>
                <li>Microsoft SQL Server</li>
              </ul>
            </div>

            <div className="ff7-panel ff7-resume-section">
              <h3 className="ff7-section-title">Education</h3>
              <ul className="ff7-skill-list">
                <li>UC Santa Cruz</li>
                <li>B.S. Computer Science: Game Design</li>
                <li>2012 – 2014</li>
              </ul>
            </div>

          </div>

        </div>

        <div className="ff7-location-bar ff7-panel">Item — Resume</div>
      </div>
    </main>
  )
}
