import Link from "next/link";
import { site } from "@/content/site";
import { DesktopNav, MobileNav } from "./site-nav";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur-sm">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="group inline-flex min-h-11 items-center gap-3 whitespace-nowrap font-display text-[0.875rem] font-medium text-fg sm:text-[0.9375rem]"
        >
          <span aria-hidden="true" className="size-2.5 bg-accent transition-transform group-hover:rotate-45" />
          {site.person.name}
        </Link>
        <div className="flex items-center gap-2 md:gap-4">
          <DesktopNav />
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
