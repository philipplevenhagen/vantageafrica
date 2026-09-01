// ─── Root component — routing + section order ─────────────────────────────────
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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

import TermsPage    from './pages/TermsPage'
import PrivacyPage  from './pages/PrivacyPage'
import EuropePage   from './pages/EuropePage'

import { EXPERIENCES, PHOTO_BAND } from './data/experiences'

function HomePage() {
  // ─── Global scroll-reveal observer ─────────────────────────────────────────
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

      <Services />
      <PhotoBand items={PHOTO_BAND} />
      <NetworkQuote />
      <Clients />
      <Enquire />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"        element={<HomePage />} />
        <Route path="/europe"  element={<EuropePage />} />
        <Route path="/terms"   element={<><TermsPage /><Footer /></>} />
        <Route path="/privacy" element={<><PrivacyPage /><Footer /></>} />
      </Routes>
    </BrowserRouter>
  )
}
