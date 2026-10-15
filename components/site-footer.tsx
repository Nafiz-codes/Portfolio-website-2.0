import Link from "next/link";
import { site } from "@/content/site";
import { EmailText } from "./email-text";
import { ResumeButton } from "./resume-button";
import { SocialIcons } from "./social-links";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="container-page grid gap-10 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-7">
          <h2 className="label">Get in touch</h2>
          <a
            href={`mailto:${site.social.email}`}
            className="link-underline mt-4 inline-block font-display text-2xl text-fg sm:text-3xl lg:text-4xl"
          >
            <EmailText email={site.social.email} />
          </a>
        </div>
        <div className="flex flex-col gap-6 md:col-span-5 md:items-end">
          <SocialIcons />
          <ResumeButton />
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-3 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{site.person.name}</p>
          <Link href="/contact" className="link-underline w-fit">
            Contact page
          </Link>
        </div>
      </div>
    </footer>
  );
}
