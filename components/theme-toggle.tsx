"use client";

import { useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "./icons";

type Theme = "dark" | "light";
const EVENT = "themechange";

function subscribe(callback: () => void) {
  window.addEventListener(EVENT, callback);
  return () => window.removeEventListener(EVENT, callback);
}

const getSnapshot = (): Theme =>
  document.documentElement.dataset.theme === "light" ? "light" : "dark";

const getServerSnapshot = (): Theme => "dark";

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const next: Theme = theme === "dark" ? "light" : "dark";

  function toggle() {
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    window.dispatchEvent(new Event(EVENT));
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className="inline-flex size-11 items-center justify-center border border-line text-muted transition-colors hover:border-line-strong hover:text-fg active:bg-surface"
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
