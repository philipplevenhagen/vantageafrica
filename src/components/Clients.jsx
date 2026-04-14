// ─── Clients ──────────────────────────────────────────────────────────────────
// Edit the client types array below to add/remove/rename segments.
const CLIENTS = [
  {
    name: 'Private Groups',
    desc: 'Families, friends, and milestone celebrations requiring meticulous coordination and moments that become stories.',
  },
  {
    name: 'Corporate & Incentive',
    desc: "Executive retreats and incentive travel where Africa's drama becomes the backdrop for extraordinary experiences.",
  },
  {
    name: 'Travel Agencies',
    desc: 'A trusted ground partner for luxury advisors and concierge teams placing discerning clients in Southern Africa.',
  },
  {
    name: 'Lifestyle & Brand Partners',
    desc: "Bespoke programme design for luxury brands, members' clubs, and lifestyle partnerships requiring something genuinely exceptional.",
  },
]

export default function Clients() {
  return (
    <section className="clients" id="work-with-us">
      <div className="clients__header">
        <div>
          <p className="section-label reveal" style={{ marginBottom: '1.5rem' }}>
            Who we work with
          </p>
          <h2 className="clients__headline reveal reveal-d1">
            Built for those<br />who demand <em>the finest.</em>
          </h2>
        </div>
        <p className="clients__sub reveal reveal-d2">
          We work with private travellers, corporate groups, luxury travel
          agencies, and lifestyle partners. Every programme is designed around
          the client — never the other way around.
        </p>
      </div>
      <div className="clients__grid">
        {CLIENTS.map(({ name, desc }) => (
          <div key={name} className="client-item reveal">
            <h3 className="client-item__name">{name}</h3>
            <p className="client-item__desc">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
