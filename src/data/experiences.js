// ─── Three full-bleed split sections ──────────────────────────────────────────
// Replace `img` values with your own photo paths once you drop files into public/images/
//
// side:      'left'  = image left, text right
//            'right' = image right, text left
// theme:     'light' | 'parchment' | 'dark'  — sets the text panel background
// headlineEm: the exact word/phrase to render in italic ochre
export const EXPERIENCES = [
  {
    id:         'winelands',
    side:       'left',
    theme:      'parchment',
    eyebrow:    'The winelands',
    headline:   ['The finest of the', 'Cape Winelands.'],
    headlineEm: 'Cape Winelands.',
    body:       'Franschhoek, Stellenbosch, the Swartland. We work with the winemakers and estate owners directly — and open doors that no platform lists.',
    bullets:    [],
    img:    '/images/winelands-vines.jpg',
    imgAlt: 'Vine rows beneath the Boland mountains in the Cape Winelands',
  },
  {
    id:         'safari',
    side:       'right',
    theme:      'light',
    eyebrow:    'The bush',
    headline:   ['Safari, chosen', 'with precision.'],
    headlineEm: 'precision.',
    body:       'Not every reserve is the same, and not every lodge suits every group. We put clients in the right place, with the right guide, at the right time of year.',
    bullets: [
      'Greater Kruger & Sabi Sand',
      'Botswana, Zimbabwe & Namibia',
      'Private concessions & fly camps',
    ],
    img:    '/images/rhinos.jpg',
    imgAlt: 'White rhino and calf on green bushveld',
  },
  {
    id:         'capetown',
    side:       'left',
    theme:      'dark',
    eyebrow:    'Cape Town & beyond',
    headline:   ['The city,', 'as a local', 'knows it.'],
    headlineEm: 'local',
    body:       "The hotels, the chefs, the coastal roads at the right hour. And when Cape Town is done: Namibia, the Garden Route, the Drakensberg. We connect it all quietly.",
    bullets: [
      'Iconic hotels & private villas',
      'Private guides & vetted drivers',
      'Transfers — commercial or charter',
    ],
    img:    '/images/capetown.jpg',
    imgAlt: 'Waves breaking on the Cape coast at sunset',
  },
  {
    id:         'driving',
    side:       'right',
    theme:      'parchment',
    eyebrow:    'Behind the wheel',
    headline:   ['The Cape,', 'driven properly.'],
    headlineEm: 'driven properly.',
    body:       'Mountain passes, coastal roads, and some of the finest driving country anywhere. We design multi-day driving journeys around Cape Town and beyond — the cars, the routes, and everything in between.',
    bullets: [
      'The Cape’s great mountain passes',
      'Supercars & classics, arranged',
      'Fully supported, end to end',
    ],
    img:    '/images/drive-convoy.jpg',
    imgAlt: 'Convoy of sports cars on a misty Cape coastal road',
    imgPosition: 'center 72%',
  },
  {
    id:         'aviation',
    side:       'left',
    theme:      'light',
    eyebrow:    'In the air',
    headline:   ['Private aviation,', 'door to door.'],
    headlineEm: 'door to door.',
    body:       'Distances in Southern Africa are real. We remove them — charter between camps, bush strips most operators never use, aircraft matched to the group and the route.',
    bullets: [
      'Charter between lodges & camps',
      'Bush strips & remote access',
      'Helicopter transfers & scenic flights',
    ],
    img:    '/images/aviation.jpg',
    imgAlt: 'Private charter aircraft on a bush airstrip',
    imgPosition: 'center 62%',
  },
]

// ─── Three images in the full-bleed photo band ────────────────────────────────
// Replace src values with your own photos in public/images/
// The first item spans 2fr (wider), the other two are 1fr each.
export const PHOTO_BAND = [
  { src: '/images/manor-lawn.jpg', alt: 'Cape Dutch manor house beneath the Franschhoek mountains' },
  { src: '/images/lion-portrait.jpg', alt: 'Young lion in the grass' },
  { src: '/images/sundowner.jpg', alt: 'Sundowner stop in the reserve at dusk' },
  { src: '/images/cliff-dinner.jpg', alt: 'Private dinner set above the Atlantic' },
  { src: '/images/shamwari-pool.jpg', alt: 'Pool terrace at a private game reserve manor' },
  { src: '/images/waterfront-night.jpg', alt: 'Cape Town hotel at night beneath Table Mountain' },
]
