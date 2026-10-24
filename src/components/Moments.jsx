// ─── Moments ──────────────────────────────────────────────────────────────────
// Horizontally scrollable strip of photography from recent journeys.
// Scroll-snap on touch and trackpad; edit the MOMENTS array to change images.
// `alt` is for accessibility/SEO only — nothing renders beneath the images.
const MOMENTS = [
  { src: '/images/moments/toast.jpg',           alt: 'A toast above the Atlantic' },
  { src: '/images/moments/cheetah.jpg',         alt: 'Cheetah in the long grass' },
  { src: '/images/moments/laikipia-arches.jpg', alt: 'Stone arches at last light in Laikipia' },
  { src: '/images/moments/elephants-river.jpg', alt: 'Elephants bathing in the river' },
  { src: '/images/moments/tasting.jpg',         alt: 'Wine tasting in a manor house' },
  { src: '/images/moments/laikipia-pool.jpg',   alt: 'Plunge pool overlooking the Laikipia plains' },
  { src: '/images/moments/long-table.jpg',      alt: 'Long lunch table on a Franschhoek farm' },
  { src: '/images/moments/penguins.jpg',        alt: 'Penguins at Boulders Beach' },
  { src: '/images/moments/band.jpg',            alt: 'Live band at a farm lunch' },
  { src: '/images/moments/bush-kitchen.jpg',    alt: 'Chef cooking in the bush' },
  { src: '/images/moments/giraffe.jpg',         alt: 'Giraffe seen from a game-drive vehicle' },
]

export default function Moments() {
  return (
    <section className="moments">
      <div className="moments__header">
        <p className="section-label reveal">From recent journeys</p>
      </div>
      <div className="moments__track">
        {MOMENTS.map(({ src, alt }) => (
          <figure key={src} className="moments__item">
            <img src={src} alt={alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  )
}
