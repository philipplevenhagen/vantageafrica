// ─── useReveal ────────────────────────────────────────────────────────────────
// Attaches an IntersectionObserver to the nearest parent <section> and marks
// all .reveal children as .visible when they enter the viewport.
// Usage: const ref = useReveal()  →  <section ref={ref}>
import { useEffect, useRef } from 'react'

export function useReveal(threshold = 0.12) {
  const ref = useRef(null)

  useEffect(() => {
    const root    = ref.current?.closest('section') ?? document.body
    const targets = root.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      })
    }, { threshold })

    targets.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
