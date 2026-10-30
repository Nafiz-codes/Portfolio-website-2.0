export const navItems = [
  { href: "/projects", label: "Work" },
  { href: "/art", label: "Art" },
  { href: "/blog", label: "Journal" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact ↗" },
] as const;
export const isActive = (pathname: string, href: string): boolean => !href.includes("#") && (pathname === href || pathname.startsWith(`${href}/`));
