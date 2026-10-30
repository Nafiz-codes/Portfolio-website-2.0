export type Artwork = { id: string; title: string; category: string; description: string; style: string; src?: string; sample: boolean; instagramUrl?: string };
export const artInstagram = "https://www.instagram.com/kt_nafizart/";
// Selected public posts from @kt_nafizart. Local thumbnails keep the gallery visible without Instagram login.
export const artworks: Artwork[] = [
  { id: "character-study", title: "Character study", category: "Digital art", description: "Character illustration from @kt_nafizart, posted March 23, 2026.", style: "", src: "/kt-nafizart-01-full.jpg", sample: false, instagramUrl: "https://www.instagram.com/kt_nafizart/p/DWPIB-akyDD/" },
  { id: "sword-and-armor", title: "Sword & armor", category: "Digital art", description: "Fantasy character illustration from @kt_nafizart, posted July 14, 2025.", style: "", src: "/kt-nafizart-02-full.jpg", sample: false, instagramUrl: "https://www.instagram.com/kt_nafizart/p/DMGHXHkzV_t/" },
  { id: "crystal-character", title: "Crystal character", category: "Digital art", description: "Color character illustration from @kt_nafizart, posted April 10, 2025.", style: "", src: "/kt-nafizart-03-full.jpg", sample: false, instagramUrl: "https://www.instagram.com/kt_nafizart/p/DIS4mbfR5vJ/" },
  { id: "ink-study", title: "Ink study", category: "Traditional", description: "Detailed ink drawing from @kt_nafizart, posted February 11, 2025.", style: "", src: "/kt-nafizart-04-full.jpg", sample: false, instagramUrl: "https://www.instagram.com/kt_nafizart/p/DF8PnhizVi2/" },
  { id: "graphite-portrait", title: "Graphite portrait", category: "Traditional", description: "Graphite portrait from @kt_nafizart, posted January 26, 2024.", style: "", src: "/kt-nafizart-05-full.jpg", sample: false, instagramUrl: "https://www.instagram.com/kt_nafizart/p/C2kpsnsSVsZ/" },
];
// Drafts are visible as previews but never presented as published articles.
export type Post = { slug: string; title: string; category: string; excerpt: string; project: string; status: string; body?: { heading: string; paragraphs: string[] }[] };
export const posts: Post[] = [
  { slug: "reading-between-the-laps", title: "Reading between the laps", category: "Engineering", excerpt: "A planned look at turning Formula 1 telemetry into a useful visual story.", project: "/projects/racecraft", status: "In the notebook" },
  { slug: "building-to-understand", title: "Building to understand", category: "Learning", excerpt: "Notes to come on learning through prototypes, experiments, and the questions they leave behind.", project: "/projects", status: "In the notebook" },
  { slug: "where-code-meets-composition", title: "Where code meets composition", category: "Creative process", excerpt: "An upcoming exploration of the shared language of software and visual design.", project: "/art", status: "In the notebook" },
];
