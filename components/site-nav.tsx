"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { isActive, navItems } from "./nav-items";

export function DesktopNav() {
  const pathname = usePathname();
  return (
    <nav aria-label="Main" className="hidden md:block">
      <ul className="flex items-center gap-1">
        {navItems.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative inline-flex min-h-11 items-center px-3 text-[0.9375rem] transition-colors hover:text-fg ${
                  active
                    ? "text-fg after:absolute after:inset-x-3 after:bottom-2 after:h-px after:bg-accent"
                    : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex min-h-11 items-center gap-2.5 border border-line-strong px-3 font-mono text-xs uppercase tracking-[0.08em] text-fg transition-colors hover:border-fg active:bg-surface"
      >
        {open ? "Close" : "Menu"}
        <span aria-hidden="true" className="relative block h-2.5 w-3.5">
          <span
            className={`absolute left-0 top-0 h-px w-full bg-current transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`}
          />
          <span
            className={`absolute bottom-0 left-0 h-px w-full bg-current transition-transform ${open ? "-translate-y-[4px] -rotate-45" : ""}`}
          />
        </span>
      </button>

      <nav
        id={panelId}
        aria-label="Main"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-bg"
      >
        <ul className="container-page py-4">
          {navItems.map((item, i) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href} className="border-b border-line last:border-b-0">
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className="flex min-h-14 items-baseline gap-4 font-display text-2xl text-fg transition-colors hover:text-accent-text"
                >
                  <span className="label">{String(i + 1).padStart(2, "0")}</span>
                  <span className={active ? "underline decoration-accent decoration-1 underline-offset-8" : ""}>
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
