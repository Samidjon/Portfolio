# Samid — Playful 3D Portfolio

A responsive personal portfolio built with **Next.js App Router, TypeScript, Tailwind CSS and Motion**. The playful developer mascot is a local SVG, so the design does not depend on an external image host or a 3D runtime. Motion is used for gentle entrances, floating decorations and hover details.

## Included sections

- Hero introduction and animated mascot
- Featured projects with tech tags and outbound links
- About section
- Skills toolbox
- Contact area with email copy and mail links
- Responsive mobile navigation
- SEO metadata and reduced-motion support

## 1. Install prerequisites

Install **Node.js 20.9 or newer**. You can check it in a terminal:

```bash
node -v
npm -v
```

## 2. Run locally

Open a terminal in the `samid-portfolio` folder and run:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Stop the development server with `Ctrl + C`.

## 3. Personalise the content

Most personal details and project links are in `data/site.ts`:

- Update `email`, `github`, `linkedin`, `location` and `intro`.
- Change a project's `href` if its live URL changes.
- Projects with no `href` are intentionally shown as personal prototypes.
- Add or remove entries from `projects` and `skills`.

The mascot illustration is `public/mascot.svg` and can be replaced with your own SVG or transparent PNG. The styling is in `app/globals.css`; the page sections and animations are in `app/page.tsx`.

**Before sharing the site publicly:** double-check every project demo, GitHub repository and contact link. Add your real LinkedIn profile URL in `data/site.ts` when available.

## 4. Check the production build

```bash
npm run build
npm run start
```

The production site runs locally at `http://localhost:3000` after the build finishes.

## 5. Deploy to Vercel

1. Create a repository on GitHub, for example `samid-portfolio`.
2. In the project folder, run:

   ```bash
   git init
   git add .
   git commit -m "Create Samid portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/samid-portfolio.git
   git push -u origin main
   ```

   Replace `YOUR_USERNAME` with your GitHub username. If GitHub says the remote already exists, check `git remote -v` before changing it.

3. Sign in at [Vercel](https://vercel.com/), choose **Add New → Project**, and import the new GitHub repository.
4. Keep the detected framework as **Next.js**. No environment variables are required for this version.
5. Select **Deploy**. Vercel will build the project and provide a public URL.
6. Later, push new commits to `main` and Vercel will create a new deployment automatically.

## Useful commands

```bash
npm run dev      # Local development
npm run build    # Production build check
npm run start    # Run the production build locally
npm run lint     # Run ESLint
```

## Notes

- Tailwind CSS is configured and available for adding utility classes; the visual system also uses custom CSS for the detailed art direction.
- The current design is intentionally light and playful. It respects the operating system's reduced-motion preference.
- A CV PDF has not been included because no source CV file was provided. Add it to `public/` and add a download link when ready.
