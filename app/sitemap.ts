import type { MetadataRoute } from "next";
import { posts } from "@/content/studio";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/projects", "/resume", "/contact", "/art", "/blog", ...posts.filter(p => p.body?.length).map(p => `/blog/${p.slug}`), ...site.projects.map((p) => `/projects/${p.slug}`)];
  return paths.map((path) => ({
    url: new URL(path, site.url).toString(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
