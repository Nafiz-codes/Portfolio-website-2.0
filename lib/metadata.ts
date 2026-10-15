import type { Metadata } from "next";
import { site } from "@/content/site";

type Options = {
  title?: string;
  description: string;
  path: string;
  type?: "website" | "article" | "profile";
};

export function pageMetadata({ title, description, path, type = "website" }: Options): Metadata {
  const fullTitle = title ? `${title} · ${site.person.name}` : site.seo.homeTitle;
  return {
    ...(title ? { title } : { title: { absolute: site.seo.homeTitle } }),
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      title: fullTitle,
      description,
      siteName: site.person.name,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
