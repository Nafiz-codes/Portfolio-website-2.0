import { site } from "@/content/site";
import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = `Contact ${site.person.name}`;
export const size = ogSize;
export const contentType = ogContentType;
export const dynamic = "force-static";

export default function Image() {
  return renderOg({
    label: "Contact",
    title: "Get in touch",
    subtitle: site.social.email,
  });
}
