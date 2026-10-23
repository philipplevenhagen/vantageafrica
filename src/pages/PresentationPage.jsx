// ─── PresentationPage ─────────────────────────────────────────────────────────
// Private, link-only presentation viewer at /p/:slug.
// Slides live in public/presentations/<dir>/slide-NN.jpg where <dir> is the
// slug itself, or — for password-protected entries — a folder name derived
// from the password (see src/data/presentations.js). Pages are noindexed.
import { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'

import { PRESENTATIONS } from '../data/presentations'
import { META } from '../data/meta'

// sha256 hex via Web Crypto (available on https and localhost)
async function sha256Hex(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text))
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('')
}

// Resolves with true when the image exists, false otherwise
function probeImage(src) {
  return new Promise(resolve => {
    const img = new Image()
    img.onload  = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = src
  })
}

function Gate({ slug, onUnlock }) {
  const [value, setValue]     = useState('')
  const [error, setError]     = useState(false)
  const [checking, setChecking] = useState(false)

  const submit = async e => {
    e.preventDefault()
    const password = value.trim().toLowerCase()
    if (!password || checking) return
    setChecking(true)
    const dir = (await sha256Hex(`${password}:${slug}`)).slice(0, 16)
    const ok  = await probeImage(`/presentations/${dir}/slide-01.jpg`)
    setChecking(false)
    if (ok) {
      try { sessionStorage.setItem(`pres-${slug}`, dir) } catch {}
      onUnlock(dir)
    } else {
      setError(true)
    }
  }

  return (
    <div className="presentation__gate">
      <p className="presentation__gate-label">Private presentation</p>
      <h1 className="presentation__gate-title">This page is password protected.</h1>
      <p className="presentation__gate-sub">
        Please enter the password you were given. If you don't have one,
        contact <a href={`mailto:${META.email}`}>{META.email}</a>.
      </p>
      <form onSubmit={submit} className="presentation__gate-form">
        <input
          type="password"
          value={value}
          onChange={e => { setValue(e.target.value); setError(false) }}
          placeholder="Password"
          autoFocus
          className="presentation__gate-input"
        />
        <button type="submit" className="presentation__gate-btn" disabled={checking}>
          {checking ? 'Checking…' : 'View'}
        </button>
      </form>
      {error && (
        <p className="presentation__gate-error">
          That password isn't right — please try again.
        </p>
      )}
    </div>
  )
}

export default function PresentationPage() {
  const { slug } = useParams()
  const pres = PRESENTATIONS[slug]

  const [dir, setDir] = useState(() => {
    if (!pres) return null
    if (!pres.protected) return slug
    try { return sessionStorage.getItem(`pres-${slug}`) } catch { return null }
  })

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

  const slides = dir
    ? Array.from({ length: pres.slides }, (_, i) =>
        `/presentations/${dir}/slide-${String(i + 1).padStart(2, '0')}.jpg`)
    : []

  return (
    <div className="presentation">
      <header className="presentation__bar">
        <span className="presentation__logo">{META.name}</span>
        <span className="presentation__label">Private presentation</span>
      </header>

      {!dir ? (
        <Gate slug={slug} onUnlock={setDir} />
      ) : (
        <>
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
              please don't share the link or password without asking us first.
            </p>
          </footer>
        </>
      )}
    </div>
  )
}
