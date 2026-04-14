// ─── Footer ───────────────────────────────────────────────────────────────────
// Name, tagline, and email all come from src/data/meta.js
import { META } from '../data/meta'

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer__logo">{META.name}</span>
      <span className="footer__tagline">{META.tagline}</span>
      <a href={`mailto:${META.email}`} className="footer__contact">
        {META.email}
      </a>
      <span className="footer__contact">{META.address}</span>
      <a href={`https://${META.website}`} className="footer__contact" target="_blank" rel="noopener noreferrer">
        {META.website}
      </a>
    </footer>
  )
}
