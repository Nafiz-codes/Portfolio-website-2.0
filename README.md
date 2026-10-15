# Nafiz Shahriar Sami: portfolio

Personal portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS v4, exported as a fully static site.

## Run it

link: https://nafiz-shahriar.vercel.app/

Preview the production export locally with any static server, for example `npx serve out`.

## Update the content

All copy lives in [`content/site.ts`](content/site.ts). Components only read from it.

- **Placeholders** are strings that start with `[TODO: …]`. They render as a dashed marker on the site and are never turned into links. Search the file for `[TODO` to find what's left.
- **Projects**: edit or add an entry in `projects`. The `slug` becomes the URL (`/projects/<slug>`), `featured: true` puts it on the home page, and order in the array is display order. A case study page, sitemap entry, and Open Graph image are generated automatically.
- **Links**: set `links.demo` / `links.code` to a real URL. Card links appear only for real URLs.
- **Screenshots**: put an image in `public/` and add `image: { src, alt, width, height }` to a project. It replaces the vector illustration on the card and case study.
- **Resume**: drop the PDF in `public/` and set `resumePdf` to its path (for example `"/nafiz-shahriar-sami-resume.pdf"`). The "Download resume" buttons appear automatically.

## Deploy (Vercel)

Import the repository in Vercel. The framework is detected as Next.js and the static export is served from `out/`. Canonical URLs and the sitemap use `VERCEL_PROJECT_PRODUCTION_URL`; set `NEXT_PUBLIC_SITE_URL` (for example `https://your-domain.com`) if you add a custom domain.

## Design notes

- Tokens (colours, fonts) are CSS variables in `app/globals.css`. Dark is the default; the toggle stores the choice in `localStorage`.
- The only animation is the airflow figure in the hero. It has a pause button and stops under `prefers-reduced-motion`.
