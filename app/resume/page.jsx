export const metadata = {
  title: 'Ricardo Montes | Resume',
}

const orbs = {
  selenium: ['#d94a3d', '#6a7dff', '#6a7dff', '#4cc46a', '#e6d84a', '#e6d84a'],
  api: ['#e6d84a', '#4cc46a', '#d94a3d', '#b05cd6', '#6a7dff'],
}

function Orbs({ colors }) {
  return (
    <div className="ff7-orbs">
      {colors.map((c, i) => (
        <span key={i} className="ff7-orb" style={{ '--c': c }}></span>
      ))}
    </div>
  )
}

export default function Resume() {
  return (
    <main className="ff7-main">
      <div className="ff7-resume-layout">

        {/* Status screen */}
        <div className="ff7-panel ff7-status-screen">

          <div className="ff7-status-top">
            <div className="ff7-status-char">
              <div className="ff7-portrait qa-portrait">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="ff7-char-data">
                <span className="ff7-char-name">Ricardo Montes</span>
                <div className="ff7-stat-line">
                  <span className="ff7-abbr">LV</span><span className="ff7-val"> 36</span>
                </div>
                <div className="ff7-stat-line">
                  <span className="ff7-abbr">HP</span>
                  <span className="ff7-hp-val">3333</span><span className="ff7-slash">/</span><span className="ff7-val"> 3333</span>
                </div>
                <div className="ff7-stat-line">
                  <span className="ff7-abbr">MP</span>
                  <span className="ff7-hp-val">633</span><span className="ff7-slash">/</span><span className="ff7-val"> 633</span>
                </div>
              </div>
            </div>

            <div className="ff7-status-exp">
              <div className="ff7-exp-row">
                <span className="ff7-abbr">EXP:</span>
                <span className="ff7-exp-val">8+ yrs QA</span>
              </div>
              <div className="ff7-track ff7-exp-track"><div className="ff7-fill" style={{ width: '72%' }}></div></div>
              <div className="ff7-exp-row">
                <span className="ff7-abbr">Limit level:</span>
                <span className="ff7-exp-val">5+ yrs Unity / C#</span>
              </div>
              <div className="ff7-track ff7-exp-track"><div className="ff7-fill ff7-fill-limit" style={{ width: '45%' }}></div></div>
            </div>

            <div className="ff7-inset ff7-status-tab">Resume</div>
          </div>

          <div className="ff7-status-body">

            <div className="ff7-status-stats">
              <div className="ff7-stat-group">
                <div className="ff7-stat-row"><span className="ff7-abbr">Releases signed off</span><span>100+</span></div>
                <div className="ff7-stat-row"><span className="ff7-abbr">Feature projects led</span><span>30+</span></div>
                <div className="ff7-stat-row"><span className="ff7-abbr">Test cases designed</span><span>100+</span></div>
                <div className="ff7-stat-row"><span className="ff7-abbr">Jira tickets written</span><span>1,000+</span></div>
                <div className="ff7-stat-row"><span className="ff7-abbr">Issues resolved</span><span>1,000+</span></div>
              </div>
              <div className="ff7-stat-group">
                <div className="ff7-stat-row"><span className="ff7-abbr">Concurrent projects</span><span>20–40</span></div>
                <div className="ff7-stat-row"><span className="ff7-abbr">App releases shipped</span><span>46</span></div>
                <div className="ff7-stat-row"><span className="ff7-abbr">Testers mentored</span><span>2–3</span></div>
              </div>
            </div>

            <div className="ff7-status-right">
              <div className="ff7-inset ff7-status-commands">
                <span>Test Plan</span><span>Selenium</span>
                <span>API</span><span>Regression</span>
                <span>JMeter</span><span>UAT</span>
              </div>

              <div className="ff7-status-equip">
                <div className="ff7-equip-row">
                  <span className="ff7-equip-label">Wpn:</span><span className="ff7-equip-val">Selenium · Java</span>
                </div>
                <Orbs colors={orbs.selenium} />
                <div className="ff7-equip-row">
                  <span className="ff7-equip-label">Arm:</span><span className="ff7-equip-val">Postman · Swagger</span>
                </div>
                <Orbs colors={orbs.api} />
                <div className="ff7-equip-row">
                  <span className="ff7-equip-label">Acc:</span><span className="ff7-equip-val">Claude Code</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Summary */}
        <div className="ff7-panel ff7-resume-section">
          <h3 className="ff7-section-title">Professional Summary</h3>
          <span className="ff7-resume-role">QA Engineer | Test Automation (Selenium / Java) | API &amp; Regression Testing</span>
          <p className="ff7-summary-text">
            QA engineer with 8+ years of experience testing enterprise EdTech software, including the StudentTrac
            student information system. Provided final QA sign-off on 100+ releases and led testing for 30+ feature
            projects across the full software development lifecycle. Builds Selenium/Java automation, tests APIs with
            Postman and Swagger, and turns production issues into clear, reproducible defects. Currently manages 20–40
            concurrent projects as a project manager, and brings 5+ years of Unity/C# development: a tester who plans
            like a PM and thinks like a developer.
          </p>
          <div className="ff7-summary-contact">
            <a href="mailto:ricardomontescs@gmail.com">ricardomontescs@gmail.com</a>
            <a href="https://linkedin.com/in/ricardomontescs" target="_blank" rel="noreferrer">linkedin.com/in/ricardomontescs</a>
            <span>San Gabriel, CA</span>
            <span>U.S. Citizen · Willing to obtain security clearance</span>
          </div>

          <h3 className="ff7-section-title ff7-resume-gap">Professional Experience</h3>

          <div className="ff7-job">
            <span className="ff7-job-title">Project Manager</span>
            <span className="ff7-job-company">Ultimate Construction · Ontario, CA</span>
            <span className="ff7-job-dates">Jan 2026 – Present</span>
            <ul className="ff7-job-desc">
              <li>Manage 20–40 concurrent construction projects with 8 office staff and 12–17 field workers, delivering on schedule</li>
              <li>Built an internal job-tracking web app (Next.js, TypeScript, Supabase) that replaced scattered OneNote notes with one shared view of every job&apos;s status, contacts, site access, and crews; shipped 46 releases through a GitHub-to-Vercel continuous deployment pipeline</li>
              <li>Automated client and daily-log emails with templates that fill in from job data and open directly in Outlook, cutting repetitive admin work</li>
              <li>Coordinate schedules, material orders, scope changes, and issues in Contractor Foreman, Outlook, and OneNote, keeping clients, subcontractors, and crews aligned</li>
            </ul>
          </div>

          <div className="ff7-job">
            <span className="ff7-job-title">Game Developer &amp; QA Engineer</span>
            <span className="ff7-job-company">Breakstep Studios · Remote</span>
            <span className="ff7-job-dates">Mar 2020 – Present</span>
            <ul className="ff7-job-desc">
              <li>Test releases of Command Center Earth on iOS, Android, and Steam, and helped build automated tests that check each build before it ships</li>
              <li>Develop gameplay systems, UI, and scene management in Unity and C# for an upcoming title currently in development</li>
              <li>Set up version control, build automation, and testing practices that keep cross-platform updates and releases stable</li>
            </ul>
          </div>

          <div className="ff7-job">
            <span className="ff7-job-title">Software QA II</span>
            <span className="ff7-job-company">Education Dynamics Inc. · Remote (Pasadena, CA)</span>
            <span className="ff7-job-dates">Jul 2016 – Jan 2025</span>
            <ul className="ff7-job-desc">
              <li>Provided final QA sign-off for 100+ production releases of EdTech software, including the StudentTrac SIS</li>
              <li>Led QA for 30+ feature projects across the SDLC, designing test plans with 100+ test cases to catch defects before release</li>
              <li>Built and maintained Selenium/Java automation frameworks, including suites that improved StudentTrac login reliability</li>
              <li>Validated REST APIs and UI responses with Postman and Swagger, and ran JMeter performance tests</li>
              <li>Wrote SQL to verify saved data, built INSERT/UPDATE test data, and tested stored procedures in SQL Server</li>
              <li>Resolved 1,000+ support-escalated issues and wrote 1,000+ reproducible Jira tickets that sped up developer fixes</li>
              <li>Partnered with developers, PMs, and support on QA requirements and acceptance criteria; mentored 2–3 QA testers</li>
            </ul>
          </div>

          <h3 className="ff7-section-title ff7-resume-gap">Technical Skills</h3>
          <div className="ff7-skill-row"><span className="ff7-abbr">Test Automation</span><span>Selenium WebDriver (Java), TestNG, JUnit</span></div>
          <div className="ff7-skill-row"><span className="ff7-abbr">Testing</span><span>Functional, regression, black-box, API, performance (JMeter), UAT, test planning</span></div>
          <div className="ff7-skill-row"><span className="ff7-abbr">API Tools</span><span>Postman, Swagger</span></div>
          <div className="ff7-skill-row"><span className="ff7-abbr">Languages</span><span>Java, C#, C++, JavaScript, TypeScript, SQL, HTML, XML, JSON</span></div>
          <div className="ff7-skill-row"><span className="ff7-abbr">Data &amp; Databases</span><span>Microsoft SQL Server (SQL queries, stored procedures, test data), Supabase (PostgreSQL), Amazon DynamoDB, Amazon S3</span></div>
          <div className="ff7-skill-row"><span className="ff7-abbr">CI/CD &amp; Version Control</span><span>Jenkins, Git, GitHub, GitLab, Bitbucket, Vercel</span></div>
          <div className="ff7-skill-row"><span className="ff7-abbr">Tools &amp; Process</span><span>Jira, IntelliJ IDEA, ClickUp, Unity; Agile/Scrum</span></div>
          <div className="ff7-skill-row"><span className="ff7-abbr">AI Tools</span><span>Claude, Claude Code, ChatGPT (AI-assisted development and testing)</span></div>

          <h3 className="ff7-section-title ff7-resume-gap">Education</h3>
          <span className="ff7-job-title">B.S. Computer Science: Game Design</span>
          <span className="ff7-job-company">University of California, Santa Cruz</span>
          <span className="ff7-job-dates">2014</span>
        </div>

      </div>
    </main>
  )
}
