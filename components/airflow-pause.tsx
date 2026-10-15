"use client";

import { useState } from "react";

export function AirflowPause({ targetId }: { targetId: string }) {
  const [paused, setPaused] = useState(false);

  function toggle() {
    const next = !paused;
    document.getElementById(targetId)?.setAttribute("data-airflow", next ? "paused" : "running");
    setPaused(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={paused}
      className="label inline-flex min-h-11 items-center gap-2 px-2 transition-colors hover:text-fg motion-reduce:hidden"
    >
      <span aria-hidden="true" className="inline-flex size-3 items-center justify-center">
        {paused ? (
          <svg viewBox="0 0 12 12" className="size-3" fill="currentColor">
            <path d="M2 1l9 5-9 5z" />
          </svg>
        ) : (
          <svg viewBox="0 0 12 12" className="size-3" fill="currentColor">
            <path d="M2 1h3v10H2zM7 1h3v10H7z" />
          </svg>
        )}
      </span>
      {paused ? "Play animation" : "Pause animation"}
    </button>
  );
}
