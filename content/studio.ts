export type Artwork = { id: string; title: string; category: string; description: string; style: string; src?: string; sample: boolean };
// Replace sample entries with your own artwork. Put images in public/art and set src to /art/filename.jpg.
export const artworks: Artwork[] = [
  { id: "orbital", title: "Orbital study", category: "Digital", description: "An exploration of repetition, rhythm, and the space between circles. Illustrative gallery sample, created for this website design.", style: "orbital-art", sample: true },
  { id: "afterhours", title: "After hours", category: "Abstract", description: "A study in warm light and architectural shadows. Illustrative gallery sample, created for this website design.", style: "sunset-art", sample: true },
  { id: "signal", title: "Signal / noise", category: "Generative", description: "A structured field interrupted by a single wave. Illustrative gallery sample, created for this website design.", style: "signal-art", sample: true },
];
// Drafts are visible as previews but never presented as published articles.
export type Post = { slug: string; title: string; category: string; excerpt: string; project: string; status: string; body?: { heading: string; paragraphs: string[] }[] };
export const posts: Post[] = [
  { slug: "reading-between-the-laps", title: "Reading between the laps", category: "Engineering", excerpt: "A planned look at turning Formula 1 telemetry into a useful visual story.", project: "/projects/racecraft", status: "In the notebook" },
  { slug: "building-to-understand", title: "Building to understand", category: "Learning", excerpt: "Notes to come on learning through prototypes, experiments, and the questions they leave behind.", project: "/projects", status: "In the notebook" },
  { slug: "where-code-meets-composition", title: "Where code meets composition", category: "Creative process", excerpt: "An upcoming exploration of the shared language of software and visual design.", project: "/art", status: "In the notebook" },
];
