// ─── Enquire ──────────────────────────────────────────────────────────────────
// Two-card CTA — one for direct travel enquiries, one for trade partners.
// Edit card copy here; email addresses come from src/data/meta.js
import { META } from '../data/meta'

const CARDS = [
  {
    tag:   'Private travel & groups',
    title: 'Plan a Journey',
    body:  'Tell us who you are, how many, and what kind of experience you are looking for. We will take it from there.',
    cta:   'Start planning',
    emailKey: 'email',
  },
  {
    tag:   'Agencies & trade partners',
    title: 'Work Together',
    body:  'For travel advisors and luxury agencies looking for a knowledgeable, reliable Southern Africa ground operator.',
    cta:   'Get in touch',
    emailKey: 'tradeEmail',
  },
]

export default function Enquire() {
  return (
    <section className="enquire" id="contact">
      <div className="enquire__inner">
        <div className="enquire__header">
          <h2 className="enquire__headline reveal">
            Tell us what<br />you have in <em>mind.</em>
          </h2>
          <p className="enquire__sub reveal reveal-d1">
            Every programme starts with a conversation. Whether you are
            planning a group, placing a client, or simply exploring what is
            possible — we are the right people to ask.
          </p>
        </div>
        <div className="enquire__cards">
          {CARDS.map(({ tag, title, body, cta, emailKey }) => (
            <a
              key={title}
              href={`mailto:${META[emailKey]}`}
              className="enquire-card reveal"
            >
              <p className="enquire-card__tag">{tag}</p>
              <h3 className="enquire-card__title">{title}</h3>
              <p className="enquire-card__body">{body}</p>
              <span className="enquire-card__cta">{cta}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
