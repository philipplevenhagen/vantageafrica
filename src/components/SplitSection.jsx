// ─── SplitSection ─────────────────────────────────────────────────────────────
// Reusable 50/50 split: image on one side, text on the other.
// All props come from src/data/experiences.js — edit content there, not here.

export default function SplitSection({
  side, theme, eyebrow, headline, headlineEm,
  body, bullets, img, imgAlt, imgPosition,
}) {
  const isReversed   = side === 'right'
  const contentClass = `split__content split__content--${theme}`

  // Wrap the matching word/phrase in <em> inside each headline line
  const renderHeadline = () =>
    headline.map((line, i) => {
      if (line.includes(headlineEm)) {
        const parts = line.split(headlineEm)
        return (
          <span key={i}>
            {parts[0]}<em>{headlineEm}</em>{parts[1]}
            <br />
          </span>
        )
      }
      return <span key={i}>{line}<br /></span>
    })

  const imagePanel = (
    <div className="split__img" key="img">
      <img src={img} alt={imgAlt} loading="lazy" style={imgPosition ? { objectPosition: imgPosition } : undefined} />
    </div>
  )

  const contentPanel = (
    <div className={contentClass} key="content">
      <p className="split__eyebrow reveal">{eyebrow}</p>
      <h2 className="split__headline reveal reveal-d1">
        {renderHeadline()}
      </h2>
      <p className="split__body reveal reveal-d2">{body}</p>
      {bullets.length > 0 && (
        <ul className="split__bullets reveal reveal-d3">
          {bullets.map(b => <li key={b}>{b}</li>)}
        </ul>
      )}
    </div>
  )

  return (
    <div className={`split${isReversed ? ' split--reversed' : ''}`}>
      {isReversed
        ? [contentPanel, imagePanel]
        : [imagePanel, contentPanel]}
    </div>
  )
}
