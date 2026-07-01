import Link from 'next/link'

export const metadata = {
  title: 'Ricardo Montes | Services',
}

export default function Services() {
  return (
    <main className="ff7-main">
      <div className="ff7-layout">

        {/* Left: Under construction dialog */}
        <div className="ff7-construction-panel ff7-panel">
          <div className="ff7-construction-content">
            <div className="ff7-construction-icon">
              <i className="fas fa-triangle-exclamation"></i>
            </div>
            <p className="ff7-construction-text">This page is currently under construction.</p>
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

        <div className="ff7-location-bar ff7-panel">Services — Under Construction</div>
      </div>
    </main>
  )
}
