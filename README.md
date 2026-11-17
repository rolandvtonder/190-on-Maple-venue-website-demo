# 190 on Maple — website

Event styling & hosting website for 190 on Maple (Kyalami, Midrand). Built with
[Astro](https://astro.build), Tailwind CSS v4 and Lenis smooth scrolling. Every page is
pre-rendered to static HTML for SEO.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build in dist/
```

## Where things live

- `src/data/site.ts`: all copy (contact details, events, packages, FAQs, testimonials)
- `src/data/photos.json`: photo captions and categories (images in `src/assets/photos/`)
- `src/pages/`: one file per page; event pages come from `src/pages/events/[slug].astro`
- `src/components/`: hero, menu, footer, photo grid and other building blocks

## Client preview

Each push to `main` publishes a preview to GitHub Pages
(`.github/workflows/pages.yml`). The preview is marked `noindex`, and its canonical tags
point to https://190onmaple.co.za, so it never competes with the live site in search.
