import { getProject, site, statusLabel } from "@/content/site";
import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Project case study";
export const size = ogSize;
export const contentType = ogContentType;
export const dynamic = "force-static";

export function generateStaticParams() {
  return site.projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  return renderOg({
    label: project ? `Case study · ${statusLabel[project.status]}` : "Case study",
    title: project?.title ?? "Project",
    subtitle: project?.summary,
  });
}
