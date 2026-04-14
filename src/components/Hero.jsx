import { META } from '../data/meta'

// Hero image: drop your photo at public/images/hero.jpg
// The dark gradient overlay is applied via CSS on .hero__bg::after
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="hero__content">
        <p className="hero__eyebrow">{META.tagline}</p>
        <h1 className="hero__headline">
          We know<br />
          <em>exactly</em><br />
          where to go.
        </h1>
        <p className="hero__sub">
          {META.name} designs bespoke luxury programmes across Southern Africa
          — built on deep regional knowledge, exceptional access, and
          relationships that take years to earn.
        </p>
      </div>
      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span className="hero__scroll-label">Scroll</span>
      </div>
    </section>
  )
}
