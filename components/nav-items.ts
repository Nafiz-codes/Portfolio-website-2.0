export const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const;

export const isActive = (pathname: string, href: string): boolean =>
  !href.includes("#") && (pathname === href || pathname.startsWith(`${href}/`));
