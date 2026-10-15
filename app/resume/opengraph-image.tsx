import { site } from "@/content/site";
import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = `Resume of ${site.person.name}`;
export const size = ogSize;
export const contentType = ogContentType;
export const dynamic = "force-static";

export default function Image() {
  return renderOg({
    label: "Resume",
    title: "Resume",
    subtitle: `${site.education.field} · ${site.education.school}`,
  });
}
