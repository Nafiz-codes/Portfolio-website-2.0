import { site } from "@/content/site";
import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = `Projects by ${site.person.name}`;
export const size = ogSize;
export const contentType = ogContentType;
export const dynamic = "force-static";

export default function Image() {
  return renderOg({
    label: "Projects",
    title: "Projects",
    subtitle: site.projects.map((p) => p.title).join(" · "),
  });
}
