import { site } from "@/content/site";
import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = `${site.person.name}: Computer Science student and builder`;
export const size = ogSize;
export const contentType = ogContentType;
export const dynamic = "force-static";

export default function Image() {
  return renderOg({
    label: "BRAC University · Computer Science & Engineering",
    title: site.person.name,
    subtitle: site.person.headline,
  });
}
