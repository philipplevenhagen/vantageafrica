// ─── Services ─────────────────────────────────────────────────────────────────
// Edit the tile content in src/data/services.js
import { SERVICES } from '../data/services'

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services__header">
        <div>
          <p className="section-label reveal" style={{ marginBottom: '1.5rem' }}>
            What we arrange
          </p>
          <h2 className="services__headline reveal reveal-d1">
            Knowing where to go<br />
            is <em>everything.</em>
          </h2>
        </div>
        <p className="services__sub reveal reveal-d2">
          From the first brief to the final departure, we coordinate every
          component — drawing on a network of relationships that takes years to
          build and cannot be replicated.
        </p>
      </div>

      <div className="services__grid">
        {SERVICES.map(({ icon, title, body }) => (
          <div key={title} className="service-item reveal">
            <p className="service-item__icon">{icon}</p>
            <h3 className="service-item__title">{title}</h3>
            <p className="service-item__body">{body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
