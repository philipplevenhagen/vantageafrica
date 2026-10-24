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
          The Africa<br />
          that is <em>never</em><br />
          advertised.
        </h1>
        <p className="hero__sub">
          Bespoke journeys across Southern Africa — built on years on the
          ground, and relationships that take time to earn.
        </p>
      </div>
      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span className="hero__scroll-label">Scroll</span>
      </div>
    </section>
  )
}
