// ─── PhotoBand ────────────────────────────────────────────────────────────────
// Full-bleed three-panel image strip.
// Items come from PHOTO_BAND in src/data/experiences.js
// First item is 2fr wide, the other two are 1fr each (set in CSS).
export default function PhotoBand({ items }) {
  return (
    <div className="photo-band">
      {items.map(({ src, alt }) => (
        <div key={src} className="photo-band__item">
          <img src={src} alt={alt} loading="lazy" />
        </div>
      ))}
    </div>
  )
}
