import Link from 'next/link'

export const metadata = {
  title: 'Ricardo Montes | About',
}

export default function About() {
  return (
    <main className="ff7-main">
      <div className="ff7-layout">

        {/* Left: Character rows */}
        <div className="ff7-chars-panel ff7-panel">
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
            <div className="ff7-bars">
              <div className="ff7-bar-wrap">
                <span className="ff7-bar-lbl">next level</span>
                <div className="ff7-track"><div className="ff7-fill" style={{ width: '72%' }}></div></div>
              </div>
              <div className="ff7-bar-wrap">
                <span className="ff7-bar-lbl">Limit level <span className="ff7-bar-num">1</span></span>
                <div className="ff7-track"><div className="ff7-fill ff7-fill-limit" style={{ width: '30%' }}></div></div>
              </div>
            </div>
          </div>
        </div>

        {/* Nav panel */}
        <div className="ff7-nav-panel ff7-panel">
          <ul className="ff7-nav-menu">
            <li><Link href="/resume">Resume</Link></li>
            <li><a className="ff7-menu-dim">Magic</a></li>
            <li><a className="ff7-menu-dim">Materia</a></li>
            <li><a className="ff7-menu-dim">Equip</a></li>
            <li><a className="ff7-menu-dim">Status</a></li>
            <li><a className="ff7-menu-dim">Order</a></li>
            <li><a className="ff7-menu-dim">Limit</a></li>
            <li><a className="ff7-menu-dim">Config</a></li>
            <li className="ff7-sep"></li>
            <li><a className="ff7-menu-dim">Save</a></li>
            <li><a className="ff7-menu-dim">Quit</a></li>
          </ul>
        </div>

        {/* Time/Gil panel */}
        <div className="ff7-timegil-panel ff7-panel">
          <div className="ff7-tg-row">
            <span className="ff7-abbr">Time</span>
            <span className="ff7-tg-val">0:08:00</span>
          </div>
          <div className="ff7-tg-row">
            <span className="ff7-abbr">Gil</span>
            <span className="ff7-tg-val">435</span>
          </div>
        </div>

        <div className="ff7-location-bar ff7-panel">Sector 7 Slums</div>
      </div>
    </main>
  )
}
