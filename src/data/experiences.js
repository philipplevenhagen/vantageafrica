// ─── Three full-bleed split sections ──────────────────────────────────────────
// Replace `img` values with your own photo paths once you drop files into public/images/
//
// side:      'left'  = image left, text right
//            'right' = image right, text left
// theme:     'light' | 'parchment' | 'dark'  — sets the text panel background
// headlineEm: the exact word/phrase to render in italic ochre
export const EXPERIENCES = [
  {
    id:         'safari',
    side:       'left',
    theme:      'light',
    eyebrow:    'The bush',
    headline:   ['Safari, chosen', 'with precision.'],
    headlineEm: 'precision.',
    body:       'Not every reserve is the same, and not every lodge suits every group. We put clients in the right place, with the right guide, at the right time of year — down to dinner in the bush and a morning behind the scenes at a rehabilitation centre, for those who want it.',
    bullets: [
      'Greater Kruger & Sabi Sand',
      'Botswana, Zimbabwe & Namibia',
      'Private concessions & fly camps',
    ],
    img:    '/images/safari-elephant.jpg',
    imgAlt: 'Elephant in golden grass on the Eastern Cape bushveld',
  },
  {
    id:         'winelands',
    side:       'right',
    theme:      'parchment',
    eyebrow:    'The winelands',
    headline:   ['The finest of the', 'Cape Winelands.'],
    headlineEm: 'Cape Winelands.',
    body:       'Franschhoek, Stellenbosch, the Swartland. We work with the winemakers and estate owners directly — a tasting in the manor house rather than the tasting room, one long table on the farm, music under the trees.',
    bullets:    [],
    img:    '/images/winelands-vines.jpg',
    imgAlt: 'Vine rows beneath the Boland mountains in the Cape Winelands',
  },
  {
    id:         'capetown',
    side:       'left',
    theme:      'dark',
    eyebrow:    'Cape Town & beyond',
    headline:   ['The city,', 'as a local', 'knows it.'],
    headlineEm: 'local',
    body:       "The hotels, the chefs, the coastal roads at the right hour — and the twenty-seat rooms we take over entirely. When Cape Town is done: Namibia, the Garden Route, the Drakensberg. We connect it all quietly.",
    bullets: [
      'Iconic hotels & private villas',
      'Private guides & vetted drivers',
      'Transfers — commercial or charter',
    ],
    img:    '/images/capetown.jpg',
    imgAlt: 'Aerial view of Cape Town with Table Mountain',
  },
  {
    id:         'aviation',
    side:       'right',
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
