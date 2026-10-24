// ─── Enquire ──────────────────────────────────────────────────────────────────
// Two-card CTA — one for direct travel enquiries, one for trade partners.
// Edit card copy here; email addresses come from src/data/meta.js
import { META } from '../data/meta'

const CARDS = [
  {
    tag:   'Private travel & groups',
    title: 'Plan a Journey',
    body:  'Who, how many, roughly when — a rough idea is enough. We will take it from there.',
    cta:   'Start planning',
    emailKey: 'email',
  },
  {
    tag:   'Agencies & trade partners',
    title: 'Work Together',
    body:  'For advisors and agencies that need a reliable ground operator in Southern Africa.',
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
            Every programme starts with a conversation — a group, a client,
            or an idea that isn't fully formed yet.
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
