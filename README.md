# Vantage Africa — Website

A Vite + React single-page site. All content lives in data files so you never need to touch component code for copy changes.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Adding your photos

Drop images into `public/images/` with these exact filenames:

| File | Used in |
|------|---------|
| `hero.jpg` | Full-screen hero background |
| `safari.jpg` | Safari split section |
| `winelands.jpg` | Winelands split section |
| `capetown.jpg` | Cape Town split section |
| `band-1.jpg` | Photo band (wide, left) |
| `band-2.jpg` | Photo band (centre) |
| `band-3.jpg` | Photo band (right) |

Recommended: landscape crops, minimum 1800px wide, JPG quality 85.

## Changing content

| What | File |
|------|------|
| Company name, emails | `src/data/meta.js` |
| Six service tiles | `src/data/services.js` |
| Split sections & photo band | `src/data/experiences.js` |
| Colours | `src/styles.css` — edit the `:root` block at the top |

## Deploy

```bash
npm run build
```

Upload the `dist/` folder to Netlify, Vercel, or any static host.
Netlify: drag and drop `dist/` into the Netlify dashboard — live in seconds.
