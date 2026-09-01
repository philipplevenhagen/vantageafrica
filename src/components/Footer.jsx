// ─── Footer ───────────────────────────────────────────────────────────────────
// Name, tagline, and email all come from src/data/meta.js
import { Link } from 'react-router-dom'
import { META } from '../data/meta'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__brand">
          <span className="footer__logo">{META.name}</span>
          <span className="footer__tagline">{META.tagline}</span>
        </div>
        <div className="footer__details">
          <a href={`mailto:${META.email}`} className="footer__contact">
            {META.email}
          </a>
          <span className="footer__contact">{META.address}</span>
          <a href={`https://${META.website}`} className="footer__contact" target="_blank" rel="noopener noreferrer">
            {META.website}
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <nav className="footer__legal">
          <Link to="/terms">Terms &amp; Conditions</Link>
          <span className="footer__legal-sep">·</span>
          <Link to="/privacy">Privacy Policy</Link>
        </nav>
        <span className="footer__copyright">
          © {new Date().getFullYear()} {META.legalName}, trading as {META.name}. All rights reserved.
        </span>
      </div>
    </footer>
  )
}
