import { site } from "@/content/site";
import { EmailText } from "./email-text";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export const socialLinks = [
  {
    label: "Email",
    value: site.social.email,
    href: `mailto:${site.social.email}`,
    Icon: MailIcon,
    external: false,
  },
  {
    label: "GitHub",
    value: site.social.githubHandle,
    href: site.social.github,
    Icon: GitHubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    value: site.social.linkedinHandle,
    href: site.social.linkedin,
    Icon: LinkedInIcon,
    external: true,
  },
];

const externalProps = { target: "_blank", rel: "noopener noreferrer" } as const;

/** Square icon buttons, each linking to the matching profile. */
export function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex gap-2 ${className}`}>
      {socialLinks.map(({ label, href, Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={external ? `${label} (opens in a new tab)` : label}
            title={label}
            className="inline-flex size-12 items-center justify-center border border-line-strong text-fg transition-colors hover:border-accent hover:text-accent-text active:bg-surface"
            {...(external ? externalProps : {})}
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Full-width rows with icon, label and handle. */
export function SocialRows() {
  return (
    <ul className="border-t border-line">
      {socialLinks.map(({ label, value, href, Icon, external }) => (
        <li key={label} className="border-b border-line">
          <a
            href={href}
            className="group flex min-h-18 items-center gap-4 py-4 transition-colors hover:bg-surface sm:gap-6 sm:px-2"
            {...(external ? externalProps : {})}
          >
            <span className="inline-flex size-12 shrink-0 items-center justify-center border border-line-strong text-fg transition-colors group-hover:border-accent group-hover:text-accent-text">
              <Icon />
            </span>
            <span className="min-w-0 flex-1">
              <span className="label block">{label}</span>
              <span className="block font-display text-lg text-fg sm:text-xl">
                {label === "Email" ? <EmailText email={value} /> : value}
              </span>
            </span>
            <ArrowUpRightIcon className="shrink-0 text-muted transition-colors group-hover:text-accent-text" />
            {external && <span className="sr-only"> (opens in a new tab)</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}
