# mushroomkick.com

Archived storefront for Mushroom Kick, rebuilt as a static Astro site from the Shopify theme export, product CSV, and page archive. No cart or checkout; the site is a showcase.

- `content/` holds everything the pages render: `site.json` (homepage copy and sections), `collections.json`, `products/*.json`, `posts/*.json`, `pages/*.json`.
- `public/images/` holds the product photos, blog heroes, and homepage images.
- `src/pages/` mirrors the original Shopify URL structure (`/collections/*`, `/products/*`, `/blogs/mushroom-wellness/*`, `/pages/*`, `/policies/*`).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

Deployed on Vercel from `main`.
