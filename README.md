# Samid — Developer Portfolio

A static developer portfolio built with **Astro**, **Svelte 5**, and **Tailwind CSS**. Its visual direction is inspired by compact personal websites and the playful details of yuna0x0.com, while keeping Samid's own projects and identity.

## Included

- Astro static site with SEO, Open Graph metadata, favicon, manifest, robots.txt, an offline-aware service worker and a project RSS feed.
- Svelte theme switcher with localStorage persistence.
- `@yuna0x0/svelte-neko` cursor-following cat; clicking the cat pauses/resumes tracking, with reduced-motion support from the package.
- A fixed dog companion using `public/pet-dog.png`. It cannot be dragged; click/tap to pet it and trigger a playful wiggle, floating hearts, and random reactions.
- Minimal, responsive home page with larger navigation/buttons, project cards, skills, and direct contact links.
- Optional Umami and Cloudflare Web Analytics integrations controlled by environment variables.
- Cloudflare Pages-friendly `_headers` file. HTTP/3 and UptimeRobot status monitoring are configured at the hosting/service level, not from front-end code.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Open the local URL printed by Astro.

## Production build

```bash
npm run check
npm run build
npm run preview
```

## Environment settings

Set `PUBLIC_SITE_URL` to the deployed site origin (for example, your real Vercel or Cloudflare Pages URL) so canonical and Open Graph URLs can be absolute. Leave it blank during local development.

## Optional analytics

Copy `.env.example` to `.env` and fill in the identifiers from your own analytics dashboard. The scripts are omitted when those variables are blank. Do not commit real credentials.

- `PUBLIC_UMAMI_WEBSITE_ID` + `PUBLIC_UMAMI_SRC`: Umami website ID and script URL.
- `PUBLIC_CF_BEACON_TOKEN`: Cloudflare Web Analytics token.

## Deploy

The site is configured for static output and can be deployed to Cloudflare Pages or another static host. On Cloudflare Pages, set the build command to `npm run build` and the output directory to `dist`. Configure the site's custom domain and HTTP/3 in Cloudflare. If you publish an UptimeRobot status page, set `PUBLIC_STATUS_URL` to its public URL to show a System status link in the footer.

## Visual assets

The fixed dog companion uses the transparent image supplied for this revision, cropped and optimized into `public/pet-dog.png`. The cursor-following cat uses `public/oneko-custom.png`, a local Oneko-compatible sprite sheet, so both characters are available without remote image dependencies.
