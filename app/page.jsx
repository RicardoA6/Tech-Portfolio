export const metadata = {
  title: 'Ricardo Montes | Portfolio',
}

export default function Home() {
  return (
    <>
      <section id="hero">
        <h2>QA Engineer &amp; Game Developer</h2>
        <p>Passionate about quality, gameplay, and player experience.</p>
      </section>

      <section id="about">
        <h2>About Me</h2>
        <p>
          QA Engineer with 8+ years experience in software testing and game development.
          Skilled in debugging distributed systems, API testing, and Unity game design.
          Deep passion for League of Legends and video games.
        </p>
      </section>

      <section id="portfolio">
        <h2>Portfolio</h2>
        <div className="project">
          <h3>StudentTrac (QA)</h3>
          <p>Owned QA for SIS live service with 30+ projects, automation, and service-level testing.</p>
        </div>
        <div className="project">
          <h3>Command Center Earth (Game Dev)</h3>
          <p>Unity R&amp;D project: gameplay programming, asset integration, and UI design.</p>
        </div>
      </section>

      <section id="services">
        <h2>What I Offer</h2>
        <ul>
          <li>Software QA (manual + automated)</li>
          <li>Game testing &amp; gameplay validation</li>
          <li>Web &amp; Unity development projects</li>
        </ul>
      </section>
    </>
  )
}
