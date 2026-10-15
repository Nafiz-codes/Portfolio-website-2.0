import { airfoilPath, airfoilPoints, streamline, type Frame } from "@/lib/airflow";
import { AirflowPause } from "./airflow-pause";

const WIDTH = 800;
const HEIGHT = 450;
const FRAME: Frame = { cx: 400, cy: 222, unit: 100 };

const wing = airfoilPoints(FRAME);
const distanceToWing = (points: [number, number][]) =>
  Math.min(...points.flatMap(([x, y]) => wing.map(([wx, wy]) => Math.hypot(x - wx, y - wy))));

const traced = Array.from({ length: 19 }, (_, i) => 18 + i * 23).map((y) => streamline(y, FRAME, WIDTH));
const closest = traced
  .map((line, i) => ({ i, dist: distanceToWing(line.points) }))
  .sort((a, b) => a.dist - b.dist)
  .slice(0, 2)
  .map((c) => c.i);

const lines = traced.map((line, i) => ({
  d: line.d,
  accent: closest.includes(i),
  duration: 6.5 + ((i * 7) % 5) * 0.5,
  delay: -((i * 13) % 9) * 0.8,
}));

const WING = airfoilPath(FRAME);

export function AirflowFigure() {
  return (
    <figure id="airflow" data-airflow="running" className="border border-line bg-surface">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="block aspect-[16/9] w-full"
        role="img"
        aria-label="Illustration: streamlines of air flowing around an inverted, cambered wing profile, as used on an F1 front wing."
      >
        <defs>
          <clipPath id="airflow-clip">
            <rect width={WIDTH} height={HEIGHT} />
          </clipPath>
          {lines.map((line, i) => (
            <path key={i} id={`streamline-${i}`} d={line.d} pathLength={1000} vectorEffect="non-scaling-stroke" />
          ))}
        </defs>
        <g clipPath="url(#airflow-clip)">
          <g stroke="var(--line)" strokeWidth={1}>
            {Array.from({ length: 15 }, (_, i) => (
              <line key={i} x1={(i + 1) * 50} y1={0} x2={(i + 1) * 50} y2={HEIGHT} vectorEffect="non-scaling-stroke" />
            ))}
          </g>
          <g fill="none" strokeWidth={1}>
            {lines.map((line, i) => (
              <use
                key={`base-${i}`}
                href={`#streamline-${i}`}
                stroke={line.accent ? "var(--accent)" : "var(--line-strong)"}
                strokeOpacity={line.accent ? 0.8 : 0.9}
              />
            ))}
            {lines.map((line, i) => (
              <use
                key={`streak-${i}`}
                href={`#streamline-${i}`}
                className="airflow-streak"
                stroke={line.accent ? "var(--accent)" : "var(--fg)"}
                strokeOpacity={line.accent ? 1 : 0.55}
                strokeWidth={line.accent ? 2 : 1.5}
                strokeLinecap="square"
                style={
                  {
                    "--airflow-duration": `${line.duration}s`,
                    "--airflow-delay": `${line.delay}s`,
                  } as React.CSSProperties
                }
              />
            ))}
          </g>
          <path d={WING} fill="var(--bg)" stroke="var(--fg)" strokeWidth={1.5} strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
        </g>
      </svg>
      <figcaption className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-line px-4 py-3">
        <span className="label">Fig. 01: Airflow around an inverted wing profile</span>
        <AirflowPause targetId="airflow" />
      </figcaption>
    </figure>
  );
}
