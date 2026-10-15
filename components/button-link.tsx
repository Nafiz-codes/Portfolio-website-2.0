import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-on-accent hover:bg-fg hover:text-bg active:bg-muted",
  secondary:
    "border border-line-strong text-fg hover:border-fg hover:bg-surface active:bg-line",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  download?: boolean;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  download = false,
  className = "",
}: Props) {
  const classes = `inline-flex min-h-12 items-center justify-center gap-2 px-5 font-display text-[0.9375rem] font-medium transition-colors duration-150 ${variants[variant]} ${className}`;

  if (external || download || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(download ? { download: "" } : {})}
      >
        {children}
        {external && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
