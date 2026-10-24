// ─── Moments ──────────────────────────────────────────────────────────────────
// Horizontally scrollable strip of photography from recent journeys.
// Scroll-snap on touch and trackpad; edit the MOMENTS array to change images.
const MOMENTS = [
  { src: '/images/moments/toast.jpg',           caption: 'A toast above the Atlantic' },
  { src: '/images/moments/cheetah.jpg',         caption: 'Cheetah in the long grass' },
  { src: '/images/moments/laikipia-arches.jpg', caption: 'Last light, Laikipia' },
  { src: '/images/moments/coast-road.jpg',      caption: 'The coast road, driven properly' },
  { src: '/images/moments/elephants-river.jpg', caption: 'The river, mid-morning' },
  { src: '/images/moments/tasting.jpg',         caption: 'Tasted in the house, not the tasting room' },
  { src: '/images/moments/laikipia-pool.jpg',   caption: 'The plunge pool, Laikipia' },
  { src: '/images/moments/long-table.jpg',      caption: 'One long table, Franschhoek' },
  { src: '/images/moments/penguins.jpg',        caption: 'Boulders Beach' },
  { src: '/images/moments/laikipia-tusker.jpg', caption: 'A Laikipia tusker' },
  { src: '/images/moments/band.jpg',            caption: 'Lunch, with the band' },
  { src: '/images/moments/bush-kitchen.jpg',    caption: 'The kitchen comes along' },
  { src: '/images/moments/giraffe.jpg',         caption: 'Morning drive, Eastern Cape' },
  { src: '/images/moments/cape-dusk.jpg',       caption: 'The Cape coast at dusk' },
]

export default function Moments() {
  return (
    <section className="moments">
      <div className="moments__header">
        <p className="section-label reveal">From recent journeys</p>
      </div>
      <div className="moments__track">
        {MOMENTS.map(({ src, caption }) => (
          <figure key={src} className="moments__item">
            <img src={src} alt={caption} loading="lazy" />
            <figcaption>{caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
