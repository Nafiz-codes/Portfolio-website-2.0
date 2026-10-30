# Nafiz Shahriar Sami: portfolio

Personal portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS v4, exported as a fully static site.

## Run it

link: https://nafiz-shahriar.vercel.app/

Preview the production export locally with any static server, for example `npx serve out`.

## Update the content

Profile and project copy lives in [`content/site.ts`](content/site.ts). Studio gallery and journal content lives in `content/studio.ts`.

- **Placeholders** are strings that start with `[TODO: …]`. They render as a dashed marker on the site and are never turned into links. Search the file for `[TODO` to find what's left.
- **Projects**: edit or add an entry in `projects`. The `slug` becomes the URL (`/projects/<slug>`), homepage selections are configured by slug in `app/page.tsx`. A case study page, sitemap entry, and Open Graph image are generated automatically.
- **Links**: set `links.demo` / `links.code` to a real URL. Card links appear only for real URLs.
- **Screenshots**: put an image in `public/` and add `image: { src, alt, width, height }` to a project. It replaces the vector illustration on the card and case study.
- **Resume**: drop the PDF in `public/` and set `resumePdf` to its path (for example `"/nafiz-shahriar-sami-resume.pdf"`). The "Download resume" buttons appear automatically.

## Deploy (Vercel)

Import the repository in Vercel. The framework is detected as Next.js and the static export is served from `out/`. Canonical URLs and the sitemap use `VERCEL_PROJECT_PRODUCTION_URL`; set `NEXT_PUBLIC_SITE_URL` (for example `https://your-domain.com`) if you add a custom domain.

## Design notes

- Tokens (colours, fonts) are CSS variables in `app/globals.css`. Dark is the default; the toggle stores the choice in `localStorage`.
- The hero features a gently animated orbital sculpture; reduced-motion preferences disable animation.

## Studio redesign

The homepage now combines selected work, recognition, an artwork gallery, a journal, and an about section. Its orbital sculpture and sample artwork are CSS illustrations, with reduced-motion support.

- Edit gallery and journal entries in `content/studio.ts`.
- For artwork, put an image in `public/art/`, set the entry's `src` to `/art/filename.jpg`, update its title/category/description, and set `sample: false`. Category filters are generated automatically. The supplied abstract images are explicitly labeled design samples.
- Journal entries currently preview planned topics. To publish an entry, add `body: [{ heading: "Your section heading", paragraphs: ["Your text"] }]` and set `status` to a publication label such as `October 30, 2026`. The full article then replaces the preview notice, and the entry is included in the sitemap. Rebuild after editing.
- Homepage project selection is by slug in `app/page.tsx`; all existing projects remain available under `/projects`.
- Run `npm run dev` for local development and `npm run build` for the static production export. Google Fonts requires network access during the build.
