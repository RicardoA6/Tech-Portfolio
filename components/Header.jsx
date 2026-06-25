import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className="logo"></div>
      <nav>
        <ul>
          <li><Link href="/about">About</Link></li>
          <li className="has-dropdown">
            <Link href="/#portfolio">Portfolio</Link>
            <ul className="dropdown">
              <li><Link href="/test-plans">Test Plans</Link></li>
              <li><Link href="/test-cases">Test Cases</Link></li>
              <li><Link href="/automation">Automation Demos</Link></li>
              <li><Link href="/game-dev">Game Dev Projects</Link></li>
            </ul>
          </li>
          <li><Link href="/#services">Services</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
