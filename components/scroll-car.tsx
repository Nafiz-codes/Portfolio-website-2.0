"use client";

import { useEffect, useRef } from "react";

const BODY = "#1c1a18";
const SHELL = "#2f2c28";
const TYRE = "#0c0b0a";
const INK = "var(--fg)";

/**
 * Top-down open-wheeler, nose pointing down so it drives with the page.
 * Layout follows a current-era F1 car (rear wing, halo, sidepods, front wing)
 * without copying any team's livery or sponsors.
 */
function Car() {
  return (
    <svg
      viewBox="0 0 160 420"
      className="block h-auto w-full"
      aria-hidden="true"
      focusable="false"
    >
      {/* rear wing */}
      <rect x="22" y="4" width="6" height="38" fill={SHELL} stroke={INK} strokeWidth="1" />
      <rect x="132" y="4" width="6" height="38" fill={SHELL} stroke={INK} strokeWidth="1" />
      <rect x="24" y="8" width="112" height="18" fill={BODY} stroke={INK} strokeWidth="1" />
      <rect x="28" y="11" width="104" height="4" fill="var(--accent)" />
      <rect x="74" y="26" width="12" height="18" fill={BODY} stroke={INK} strokeWidth="1" />

      {/* rear tyres */}
      <rect x="2" y="52" width="34" height="68" rx="8" fill={TYRE} stroke={INK} strokeWidth="1.2" />
      <rect x="124" y="52" width="34" height="68" rx="8" fill={TYRE} stroke={INK} strokeWidth="1.2" />
      <rect x="6" y="56" width="3" height="60" fill="var(--accent)" />
      <rect x="151" y="56" width="3" height="60" fill="var(--accent)" />
      <path d="M36 72 H54 M36 100 H54 M124 72 H106 M124 100 H106" stroke={INK} strokeWidth="2.5" />

      {/* floor */}
      <path
        d="M48 118 H112 L128 168 V248 L108 268 H52 L32 248 V168 Z"
        fill={SHELL}
        stroke={INK}
        strokeWidth="1"
      />

      {/* engine cover through nose */}
      <path
        d="M68 44 H92 L98 78 C112 102 118 138 120 176 V228 C120 250 110 264 100 270 L96 312 L90 392 H70 L64 312 L60 270 C50 264 40 250 40 228 V176 C42 138 48 102 62 78 Z"
        fill={BODY}
        stroke={INK}
        strokeWidth="1.25"
      />
      <path d="M80 48 V268" stroke="var(--accent)" strokeWidth="6" />
      <path d="M80 278 V390" stroke="var(--accent)" strokeWidth="5" />
      <path d="M52 148 V210 M108 148 V210" stroke={INK} strokeWidth="2" opacity="0.35" />

      {/* airbox, mirrors, halo, cockpit */}
      <rect x="72" y="198" width="16" height="16" fill={TYRE} stroke={INK} strokeWidth="1" />
      <rect x="46" y="228" width="12" height="6" fill={SHELL} />
      <rect x="102" y="228" width="12" height="6" fill={SHELL} />
      <ellipse cx="80" cy="248" rx="11" ry="20" fill={TYRE} />
      <path d="M66 236 C66 268 94 268 94 236" fill="none" stroke={INK} strokeWidth="5" />
      <path d="M80 266 V278" stroke={INK} strokeWidth="4" />

      {/* front tyres */}
      <path d="M36 312 H62 M36 336 H62 M124 312 H98 M124 336 H98" stroke={INK} strokeWidth="2.5" />
      <rect x="4" y="300" width="32" height="56" rx="8" fill={TYRE} stroke={INK} strokeWidth="1.2" />
      <rect x="124" y="300" width="32" height="56" rx="8" fill={TYRE} stroke={INK} strokeWidth="1.2" />
      <rect x="8" y="304" width="3" height="48" fill="var(--accent)" />
      <rect x="149" y="304" width="3" height="48" fill="var(--accent)" />

      {/* front wing */}
      <rect x="10" y="372" width="7" height="42" fill={SHELL} stroke={INK} strokeWidth="1" />
      <rect x="143" y="372" width="7" height="42" fill={SHELL} stroke={INK} strokeWidth="1" />
      <path d="M16 384 H144 L148 412 H12 Z" fill={BODY} stroke={INK} strokeWidth="1.2" />
      <path d="M20 396 Q80 384 140 396" fill="none" stroke="var(--accent)" strokeWidth="3" />
    </svg>
  );
}

/** Stays on the right of the screen and climbs as the page scrolls. Hidden on small screens. */
export function ScrollCar() {
  const railRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rail = railRef.current;
    const car = carRef.current;
    if (!rail || !car) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const sync = () => {
      frame = 0;
      const travel = Math.max(0, rail.clientHeight - car.offsetHeight);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = reduce.matches || max <= 0 ? 0 : Math.min(1, Math.max(0, window.scrollY / max));
      car.style.transform = `translate3d(0, ${(1 - progress) * travel}px, 0) rotate(180deg)`;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(sync);
    };

    sync();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    reduce.addEventListener("change", sync);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      reduce.removeEventListener("change", sync);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={railRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-20 bottom-8 right-4 z-30 hidden w-9 lg:block"
    >
      <div ref={carRef} className="scroll-car absolute top-0 left-0 w-full will-change-transform">
        <Car />
      </div>
    </div>
  );
}
