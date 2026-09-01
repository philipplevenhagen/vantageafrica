import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { META } from '../data/meta'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <Link to="/" className="nav__logo">{META.name}</Link>
      <div className="nav__links">
        <a href="/#services"     className="nav__link">What we do</a>
        <Link to="/europe"       className="nav__link">Explore Europe</Link>
        <a href="/#work-with-us" className="nav__link">Work with us</a>
        <a href="/#contact"      className="nav__cta">Get in touch</a>
      </div>
    </nav>
  )
}
