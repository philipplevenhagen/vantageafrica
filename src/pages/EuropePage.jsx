// ─── Europe page ──────────────────────────────────────────────────────────────
// Outbound offering for South African clients travelling to Europe.
import { useEffect } from 'react'

import Nav    from '../components/Nav'
import Footer from '../components/Footer'
import { META } from '../data/meta'

const DESTINATIONS = [
  {
    title: 'Italy & the Amalfi Coast',
    body:  'Rome, Florence, Venice — then the coast. Villas above Positano, boats to Capri, tables in kitchens that never advertise.',
  },
  {
    title: 'France & the Côte d\'Azur',
    body:  'Paris done properly, then south. Provence in the slow season, the Riviera without the crowds, châteaux that take guests quietly.',
  },
  {
    title: 'Greece & the Islands',
    body:  'Beyond Santorini. Private charters through the Cyclades, family-run estates on Crete, islands most itineraries never reach.',
  },
  {
    title: 'Spain & Portugal',
    body:  'Madrid, Seville, the Basque coast. Lisbon and the Douro. Long lunches, private cellars, and hotels with real character.',
  },
  {
    title: 'The Alps in winter',
    body:  'Courchevel, Zermatt, Lech. Ski-in chalets with staff, guides who know the mountain, and the right table at the right altitude.',
  },
  {
    title: 'London, Paris & beyond',
    body:  'The classic capitals, arranged with care. Theatre, galleries, tailors, restaurants — booked before you ever board the flight.',
  },
]

export default function EuropePage() {
  useEffect(() => {
    window.scrollTo(0, 0)

    const targets  = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      })
    }, { threshold: 0.12 })

    targets.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Nav />

      {/* ─── Dark hero band ──────────────────────────────────────────────── */}
      <section className="europe-hero">
        <p className="section-label section-label--sand reveal">Vantage Europe</p>
        <h1 className="europe-hero__headline reveal reveal-d1">
          Europe, arranged<br />
          with the same <em>precision.</em>
        </h1>
        <p className="europe-hero__sub reveal reveal-d2">
          More and more of our South African clients ask us to look north. So we
          do what we have always done — apply the same standards, the same
          relationships, the same attention to detail — to Europe.
        </p>
      </section>

      {/* ─── Destinations ────────────────────────────────────────────────── */}
      <section className="europe-dest">
        <div className="europe-dest__header">
          <p className="section-label reveal">Where we go</p>
          <h2 className="europe-dest__headline reveal reveal-d1">
            The places worth<br />
            the <em>flight.</em>
          </h2>
        </div>
        <div className="europe-dest__grid">
          {DESTINATIONS.map(d => (
            <div key={d.title} className="europe-dest__item reveal">
              <h3>{d.title}</h3>
              <p>{d.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Standards band ──────────────────────────────────────────────── */}
      <section className="europe-quote">
        <div className="europe-quote__inner">
          <p className="europe-quote__text reveal">
            "Villas, hotels, private guides, tables that cannot be booked
            online. If we would not send our own family,{' '}
            <em>we will not send you.</em>"
          </p>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────────── */}
      <section className="europe-enquire">
        <p className="section-label reveal">Start the conversation</p>
        <h2 className="europe-enquire__headline reveal reveal-d1">
          Tell us where you<br />
          want to <em>wake up.</em>
        </h2>
        <a href={`mailto:${META.email}?subject=Europe%20enquiry`} className="europe__cta reveal reveal-d2">
          Enquire about Europe
        </a>
      </section>

      <Footer />
    </>
  )
}
