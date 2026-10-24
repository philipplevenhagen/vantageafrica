// ─── Clients ──────────────────────────────────────────────────────────────────
// Edit the client types array below to add/remove/rename segments.
const CLIENTS = [
  {
    name: 'Private Groups',
    desc: 'Families, friends, and milestone trips — planned closely, run quietly.',
  },
  {
    name: 'Corporate & Incentive',
    desc: 'Retreats and incentive travel, with one team holding the whole programme.',
  },
  {
    name: 'Travel Agencies',
    desc: 'A ground partner for advisors and concierge teams placing clients in Southern Africa.',
  },
  {
    name: 'Lifestyle & Brand Partners',
    desc: 'Programmes for marques and luxury houses — designed, staffed, and delivered end to end.',
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
            Built around the group,<br />never <em>the template.</em>
          </h2>
        </div>
        <p className="clients__sub reveal reveal-d2">
          Private travellers, corporate groups, agencies, and brand partners.
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
