/**
 * Potential flow around a cambered Joukowski airfoil, drawn inverted (as on an F1 wing).
 * Streamlines are traced in the circle plane, where the velocity field is exact, then
 * mapped to the airfoil plane with z = ζ + 1/ζ. Runs at build time only.
 */

type C = [number, number];

const add = (a: C, b: C): C => [a[0] + b[0], a[1] + b[1]];
const sub = (a: C, b: C): C => [a[0] - b[0], a[1] - b[1]];
const mul = (a: C, b: C): C => [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
const div = (a: C, b: C): C => {
  const d = b[0] * b[0] + b[1] * b[1];
  return [(a[0] * b[0] + a[1] * b[1]) / d, (a[1] * b[0] - a[0] * b[1]) / d];
};
const scale = (a: C, k: number): C => [a[0] * k, a[1] * k];
const abs = (a: C) => Math.hypot(a[0], a[1]);
const expi = (t: number): C => [Math.cos(t), Math.sin(t)];
const sqrtC = (a: C): C => {
  const r = Math.sqrt(abs(a));
  const t = Math.atan2(a[1], a[0]) / 2;
  return [r * Math.cos(t), r * Math.sin(t)];
};

/** Circle centre: real part sets thickness, imaginary part sets camber. */
const MU: C = [-0.075, 0.13];
const R = abs(sub([1, 0], MU));
const ALPHA = (6 * Math.PI) / 180;
const BETA = Math.asin(MU[1] / R);
const GAMMA = 4 * Math.PI * R * Math.sin(ALPHA + BETA);

const E_NEG: C = expi(-ALPHA);
const E_POS: C = expi(ALPHA);
const ROT: C = expi(-ALPHA);

/** Complex velocity W = u - iv in the circle plane (unit free-stream, Kutta condition). */
function velocity(zeta: C): C {
  const d = sub(zeta, MU);
  const dipole = div(scale(E_POS, R * R), mul(d, d));
  const vortex = div([0, GAMMA / (2 * Math.PI)], d);
  return add(sub(E_NEG, dipole), vortex);
}

const joukowski = (zeta: C): C => add(zeta, div([1, 0], zeta));

function inverseJoukowski(z: C): C {
  const root = sqrtC(sub(mul(z, z), [4, 0]));
  const a = scale(add(z, root), 0.5);
  const b = scale(sub(z, root), 0.5);
  return abs(sub(a, MU)) > abs(sub(b, MU)) ? a : b;
}

export type Frame = { cx: number; cy: number; unit: number };

/** Physical plane → screen. Rotates so the free-stream is horizontal and flips the wing upside down. */
function toScreen(z: C, f: Frame): C {
  const r = mul(z, ROT);
  return [f.cx + r[0] * f.unit, f.cy + r[1] * f.unit];
}

function fromScreen(p: C, f: Frame): C {
  const r: C = [(p[0] - f.cx) / f.unit, (p[1] - f.cy) / f.unit];
  return mul(r, expi(ALPHA));
}

const fmt = (n: number) => (Math.round(n * 10) / 10).toString();

/** Smooth SVG path through screen points (Catmull-Rom → cubic Bézier). */
function smoothPath(pts: C[]): string {
  let d = `M${fmt(pts[0][0])} ${fmt(pts[0][1])}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    d += ` C${fmt(p1[0] + (p2[0] - p0[0]) / 6)} ${fmt(p1[1] + (p2[1] - p0[1]) / 6)} ${fmt(
      p2[0] - (p3[0] - p1[0]) / 6,
    )} ${fmt(p2[1] - (p3[1] - p1[1]) / 6)} ${fmt(p2[0])} ${fmt(p2[1])}`;
  }
  return d;
}

export function airfoilPath(f: Frame): string {
  const pts: C[] = [];
  const steps = 180;
  for (let i = 0; i <= steps; i++) {
    const theta = (i / steps) * 2 * Math.PI;
    pts.push(toScreen(joukowski(add(MU, scale(expi(theta), R))), f));
  }
  return `M${pts.map((p) => `${fmt(p[0])} ${fmt(p[1])}`).join(" L")} Z`;
}

export function airfoilPoints(f: Frame, steps = 90): C[] {
  return Array.from({ length: steps }, (_, i) =>
    toScreen(joukowski(add(MU, scale(expi((i / steps) * 2 * Math.PI), R))), f),
  );
}

/** Traces a streamline that enters the left edge of the frame at screen height y. */
export function streamline(y: number, f: Frame, width: number, spacing = 9): { d: string; points: C[] } {
  let zeta = inverseJoukowski(fromScreen([-60, y], f));
  const pts: C[] = [toScreen(joukowski(zeta), f)];
  const h = 0.004;
  const dir = (q: C): C => {
    const w = velocity(q);
    const v: C = [w[0], -w[1]];
    const m = abs(v) || 1;
    return [v[0] / m, v[1] / m];
  };

  for (let i = 0; i < 20000; i++) {
    const k1 = dir(zeta);
    const k2 = dir(add(zeta, scale(k1, h / 2)));
    const k3 = dir(add(zeta, scale(k2, h / 2)));
    const k4 = dir(add(zeta, scale(k3, h)));
    zeta = add(zeta, scale(add(add(k1, scale(k2, 2)), add(scale(k3, 2), k4)), h / 6));

    const fromCentre = sub(zeta, MU);
    if (abs(fromCentre) < R * 1.002) zeta = add(MU, scale(fromCentre, (R * 1.002) / abs(fromCentre)));

    const p = toScreen(joukowski(zeta), f);
    const last = pts[pts.length - 1];
    if (Math.hypot(p[0] - last[0], p[1] - last[1]) >= spacing) pts.push(p);
    if (p[0] > width + 60) break;
  }
  return { d: smoothPath(pts), points: pts };
}
