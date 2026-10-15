import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const STREAMLINES = [
  "M0 430 C300 430 420 380 600 382 S900 330 1200 300",
  "M0 470 C300 470 420 440 600 446 S900 400 1200 372",
  "M0 520 C300 520 430 540 600 532 S900 470 1200 446",
  "M0 560 C300 560 440 590 600 580 S900 520 1200 500",
];

export function renderOg({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#151413",
          color: "#F4F2EE",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          {STREAMLINES.map((d, i) => (
            <path
              key={d}
              d={d}
              fill="none"
              stroke={i === 1 || i === 2 ? "#E0533C" : "#2F2C28"}
              strokeWidth={i === 1 || i === 2 ? 3 : 2}
            />
          ))}
        </svg>
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 26, color: "#9E9891" }}>
          <div style={{ width: 18, height: 18, background: "#E0533C" }} />
          {label.toUpperCase()}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 1000 }}>
          <div style={{ fontSize: title.length > 28 ? 72 : 96, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>
            {title}
          </div>
          {subtitle && <div style={{ fontSize: 30, color: "#9E9891", lineHeight: 1.35 }}>{subtitle}</div>}
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#F4F2EE" }}>{site.person.name}</div>
      </div>
    ),
    ogSize,
  );
}
