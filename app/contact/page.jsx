import ContactForm from '../../components/ContactForm'

export const metadata = {
  title: 'Ricardo Montes | Contact',
}

export default function Contact() {
  return (
    <main className="ff7-main">
      <div className="ff7-contact-layout">
        <div className="ff7-contact-stack">

        {/* Top row: character info + equip list */}
        <div className="ff7-contact-top ff7-panel">
          <div className="ff7-contact-charblock">
            <div className="ff7-char-row">
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
          </div>

          <div className="ff7-contact-divider"></div>

          <div className="ff7-contact-equip">
            <div className="ff7-equip-row">
              <span className="ff7-equip-label">Wpn.</span><span className="ff7-equip-val">Keyboard</span>
            </div>
            <div className="ff7-equip-row">
              <span className="ff7-equip-label">Arm.</span><span className="ff7-equip-val">Mouse</span>
            </div>
            <div className="ff7-equip-row">
              <span className="ff7-equip-label">Acc.</span><span className="ff7-equip-val">Ribbon</span>
            </div>
          </div>
        </div>

        {/* Skinny empty row */}
        <div className="ff7-contact-slim ff7-panel"></div>

        {/* Main content: connect + message form */}
        <div className="ff7-contact-main ff7-panel">
          <div className="ff7-connect-col">
            <h3 className="ff7-section-title">Connect</h3>
            <ul className="ff7-connect-list">
              <li>
                <a href="mailto:ricardomontescs@gmail.com">
                  <i className="fas fa-envelope"></i> ricardomontescs@gmail.com
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/ricardomontescs" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin"></i> linkedin.com/in/ricardomontescs
                </a>
              </li>
            </ul>
          </div>

          <div className="ff7-message-col">
            <h3 className="ff7-section-title">Send a Message</h3>
            <ContactForm />
          </div>
        </div>
        </div>
      </div>
    </main>
  )
}
