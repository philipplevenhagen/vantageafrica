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
    body:       'Not every reserve is the same. Not every lodge is right for every group. We know the difference between a good safari and an extraordinary one — and we put clients in exactly the right place, with the right guide, at the right time of year.',
    bullets: [
      'Greater Kruger & Sabi Sand',
      'Botswana, Zimbabwe & Namibia',
      'Private concessions & fly camps',
    ],
    img:    '/images/safari.jpg',
    imgAlt: 'Elephants at golden hour in the African bush',
  },
  {
    id:         'winelands',
    side:       'right',
    theme:      'parchment',
    eyebrow:    'The winelands',
    headline:   ['The finest of the', 'Cape Winelands.'],
    headlineEm: 'Cape Winelands.',
    body:       'Franschhoek, Stellenbosch, the Swartland. We have the relationships — with the winemakers, the estate owners, the sommeliers — to take clients somewhere no booking platform will ever list.',
    bullets:    [],
    img:    '/images/winelands.jpg',
    imgAlt: 'Vineyard rows at golden hour in the Cape Winelands',
  },
  {
    id:         'capetown',
    side:       'left',
    theme:      'dark',
    eyebrow:    'Cape Town & beyond',
    headline:   ['The city,', 'as a local', 'knows it.'],
    headlineEm: 'local',
    body:       "The finest hotels. The chefs who don't take reservations. The drives, the views, the galleries, the coastline. And when Cape Town is done — Namibia, the Garden Route, the Drakensberg. We connect it all seamlessly.",
    bullets: [
      'Iconic hotels & private villas',
      'Private guides & vetted drivers',
      'Transfers — commercial or charter',
    ],
    img:    '/images/capetown.jpg',
    imgAlt: 'Aerial view of Cape Town with Table Mountain',
  },
]

// ─── Three images in the full-bleed photo band ────────────────────────────────
// Replace src values with your own photos in public/images/
// The first item spans 2fr (wider), the other two are 1fr each.
export const PHOTO_BAND = [
  { src: '/images/band-2.jpg', alt: 'Outdoor dining in the bush' },
  { src: '/images/band-1.jpg', alt: 'Lion at dusk' },
  { src: '/images/band-3.jpg', alt: 'Luxury safari lodge at sunset' },
]
