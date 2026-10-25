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
          Designed <em>by us.</em>
        </h2>
        <p className="signature__body reveal reveal-d2">
          A few times a year we run journeys of our own design, for a small
          number of guests. Ask us what's coming.
        </p>
        <a
          href={`mailto:${META.email}?subject=${encodeURIComponent('Signature experiences')}`}
          className="signature__cta reveal reveal-d3"
        >
          Get in touch&nbsp;&nbsp;→
        </a>
      </div>
    </section>
  )
}
