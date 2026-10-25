// ─── Signature ────────────────────────────────────────────────────────────────
// Statement band for Vantage-designed experiences — journeys the company
// conceives and runs itself, as opposed to bespoke client commissions.
import { META } from '../data/meta'

export default function Signature() {
  return (
    <section className="signature">
      <div className="signature__inner">
        <p className="section-label reveal">Signature experiences</p>
        <h2 className="signature__headline reveal reveal-d1">
          Some journeys,<br />we design <em>ourselves.</em>
        </h2>
        <p className="signature__body reveal reveal-d2">
          A route, a season, a small number of guests. Built around an idea —
          a marque, a cellar, a coastline — and run once.
          Join the next one, or commission your own.
        </p>
        <a
          href={`mailto:${META.email}?subject=${encodeURIComponent('Signature experiences')}`}
          className="signature__cta reveal reveal-d3"
        >
          Ask about the next one&nbsp;&nbsp;→
        </a>
      </div>
    </section>
  )
}
