import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className="logo"></div>
      <nav>
        <ul>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
