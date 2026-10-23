// ─── PresentationPage ─────────────────────────────────────────────────────────
// Private, link-only presentation viewer at /p/:slug.
// Slides live in public/presentations/<slug>/slide-NN.jpg and are listed
// in src/data/presentations.js. Pages are noindexed.
import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'

import { PRESENTATIONS } from '../data/presentations'
import { META } from '../data/meta'

export default function PresentationPage() {
  const { slug } = useParams()
  const pres = PRESENTATIONS[slug]

  // Keep private pages out of search results
  useEffect(() => {
    const tag = document.createElement('meta')
    tag.name = 'robots'
    tag.content = 'noindex, nofollow'
    document.head.appendChild(tag)
    window.scrollTo(0, 0)
    return () => document.head.removeChild(tag)
  }, [])

  if (!pres) return <Navigate to="/" replace />

  const slides = Array.from({ length: pres.slides }, (_, i) =>
    `/presentations/${slug}/slide-${String(i + 1).padStart(2, '0')}.jpg`)

  return (
    <div className="presentation">
      <header className="presentation__bar">
        <span className="presentation__logo">{META.name}</span>
        <span className="presentation__label">Private presentation</span>
      </header>

      <main className="presentation__slides">
        {slides.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${pres.title} — page ${i + 1}`}
            loading={i < 2 ? 'eager' : 'lazy'}
            className="presentation__slide"
          />
        ))}
      </main>

      <footer className="presentation__footer">
        <p className="presentation__footer-title">{pres.title}</p>
        <p className="presentation__footer-sub">{pres.subtitle}</p>
        <a
          href={`mailto:${META.email}?subject=${encodeURIComponent(pres.enquirySubject)}`}
          className="presentation__cta"
        >
          Speak to us about this journey
        </a>
        <p className="presentation__footer-note">
          Prepared by {META.name} · {META.email} · This page is private —
          please don't share the link without asking us first.
        </p>
      </footer>
    </div>
  )
}
