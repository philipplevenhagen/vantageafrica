// ─── Root component — sections listed in page order ───────────────────────────
// To reorder, add, or remove sections: edit this file and the relevant data file.
import { useEffect } from 'react'

import Nav          from './components/Nav'
import Hero         from './components/Hero'
import Intro        from './components/Intro'
import SplitSection from './components/SplitSection'
import PhotoBand    from './components/PhotoBand'
import Services     from './components/Services'
import NetworkQuote from './components/NetworkQuote'
import Clients      from './components/Clients'
import Enquire      from './components/Enquire'
import Footer       from './components/Footer'

import { EXPERIENCES, PHOTO_BAND } from './data/experiences'

export default function App() {
  // ─── Global scroll-reveal observer ─────────────────────────────────────────
  // Runs once on mount, observes every .reveal element on the page.
  useEffect(() => {
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
      <Hero />
      <Intro />

      {/* Thin ochre divider line */}
      <div style={{ padding: '0 4rem' }}>
        <div className="divider" />
      </div>

      {/* Split sections are driven entirely by src/data/experiences.js */}
      {EXPERIENCES.map(exp => (
        <SplitSection key={exp.id} {...exp} />
      ))}

      <PhotoBand items={PHOTO_BAND} />
      <Services />
      <NetworkQuote />
      <Clients />
      <Enquire />
      <Footer />
    </>
  )
}
