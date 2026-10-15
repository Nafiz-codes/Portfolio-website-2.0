import Image from "next/image";
import type { Project, ProjectVisual as VisualKind } from "@/content/site";

const MUTED = "var(--line-strong)";
const FG = "var(--fg)";
const ACCENT = "var(--accent)";

function Grid() {
  return (
    <g stroke="var(--line)" strokeWidth={1}>
      {[40, 80, 120, 160, 200, 240, 280].map((x) => (
        <line key={`v${x}`} x1={x} y1={0} x2={x} y2={200} />
      ))}
      {[40, 80, 120, 160].map((y) => (
        <line key={`h${y}`} x1={0} y1={y} x2={320} y2={y} />
      ))}
    </g>
  );
}

function Telemetry() {
  return (
    <g fill="none" strokeWidth={1.5}>
      <path
        d="M16 66 L68 58 C80 57 90 126 104 134 C116 140 122 78 144 70 L192 64 C204 63 210 150 222 154 C236 158 240 104 256 94 L304 78"
        stroke={MUTED}
        strokeDasharray="4 4"
      />
      <path
        d="M16 60 L70 52 C82 50 88 120 100 128 C112 134 118 70 140 62 L190 56 C200 55 206 140 218 146 C230 150 236 96 252 86 L304 70"
        stroke={ACCENT}
        strokeWidth={2}
      />
      <path d="M16 176 H96 V186 H112 V176 H212 V186 H228 V176 H304" stroke={FG} strokeOpacity={0.6} />
    </g>
  );
}

function Outpost() {
  return (
    <g fill="none" strokeWidth={1.5}>
      {Array.from({ length: 10 }, (_, i) => (
        <rect
          key={i}
          x={24 + i * 12}
          y={26}
          width={7}
          height={7}
          stroke={i < 7 ? ACCENT : MUTED}
          fill={i < 7 ? ACCENT : "none"}
        />
      ))}
      <path d="M28 104 Q160 18 300 78" stroke={MUTED} strokeDasharray="3 5" />
      <circle cx={252} cy={52} r={11} stroke={ACCENT} />
      <path d="M-10 176 Q160 118 330 176 V200 H-10 Z" fill="var(--line)" stroke={MUTED} />
      <path d="M118 150 A30 30 0 0 1 178 150 Z" stroke={FG} fill="var(--surface)" />
      <path d="M178 144 H194" stroke={FG} />
      <rect x={194} y={134} width={44} height={16} stroke={FG} fill="var(--surface)" />
      <path d="M248 108 V134" stroke={FG} />
      <rect x={232} y={96} width={34} height={12} stroke={FG} />
      <path d="M243 96 V108 M254 96 V108" stroke={FG} strokeOpacity={0.6} />
    </g>
  );
}

function Ledger() {
  const xs = [20, 96, 172, 248];
  return (
    <g fill="none" strokeWidth={1.5}>
      {xs.slice(0, -1).map((x) => (
        <path key={`c${x}`} d={`M${x + 52} 92 H${x + 76}`} stroke={FG} />
      ))}
      {xs.map((x, i) => (
        <g key={x}>
          <rect x={x} y={62} width={52} height={60} stroke={i === 3 ? ACCENT : FG} fill="var(--surface)" />
          {[78, 90, 102].map((y, j) => (
            <path key={y} d={`M${x + 10} ${y} H${x + (j === 2 ? 28 : 42)}`} stroke={i === 3 ? ACCENT : MUTED} />
          ))}
          <path d={`M${x + 26} 122 V150`} stroke={MUTED} strokeDasharray="3 4" />
          <rect x={x + 20} y={150} width={12} height={12} stroke={i === 3 ? ACCENT : FG} />
        </g>
      ))}
    </g>
  );
}

function Split() {
  const nodes: [number, number][] = [
    [102, 42],
    [218, 42],
    [218, 158],
    [102, 158],
  ];
  return (
    <g fill="none" strokeWidth={1.5}>
      <circle cx={160} cy={100} r={62} stroke={MUTED} strokeDasharray="87.4 10" transform="rotate(-85 160 100)" />
      <circle
        cx={160}
        cy={100}
        r={62}
        stroke={ACCENT}
        strokeWidth={2}
        strokeDasharray="87.4 302.2"
        transform="rotate(-85 160 100)"
      />
      {nodes.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <path d={`M${x} ${y} L160 100`} stroke={MUTED} strokeDasharray="3 4" />
          <circle cx={x} cy={y} r={10} stroke={FG} fill="var(--surface)" />
        </g>
      ))}
      <circle cx={160} cy={100} r={16} stroke={ACCENT} fill="var(--surface)" />
      <path d="M154 100 H166 M160 94 V106" stroke={ACCENT} />
    </g>
  );
}

function Timeline() {
  const frames = [
    { x: 28, y: 40, accent: false },
    { x: 120, y: 30, accent: true },
    { x: 212, y: 40, accent: false },
  ];
  return (
    <g fill="none" strokeWidth={1.5}>
      <path d="M16 156 H304" stroke={MUTED} />
      {Array.from({ length: 11 }, (_, i) => (
        <path key={i} d={`M${24 + i * 27.2} 150 V162`} stroke={MUTED} />
      ))}
      {frames.map((f) => (
        <g key={f.x}>
          <rect x={f.x} y={f.y} width={80} height={f.accent ? 74 : 62} stroke={f.accent ? ACCENT : FG} fill="var(--surface)" />
          <rect
            x={f.x + 8}
            y={f.y + (f.accent ? 50 : 40)}
            width={64}
            height={14}
            stroke={f.accent ? ACCENT : MUTED}
          />
          <path d={`M${f.x + 40} ${f.y + (f.accent ? 74 : 62)} V156`} stroke={MUTED} strokeDasharray="3 4" />
        </g>
      ))}
      <rect x={154} y={150} width={12} height={12} fill={ACCENT} transform="rotate(45 160 156)" />
    </g>
  );
}

function Pipeline() {
  const boxes = [
    { x: 20, y: 44 },
    { x: 125, y: 44 },
    { x: 230, y: 44 },
    { x: 230, y: 124 },
  ];
  return (
    <g fill="none" strokeWidth={1.5}>
      <path d="M90 64 H120 M115 59 L120 64 L115 69" stroke={FG} />
      <path d="M195 64 H225 M220 59 L225 64 L220 69" stroke={FG} />
      <path d="M265 84 V119 M260 114 L265 119 L270 114" stroke={FG} />
      {boxes.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={b.y} width={70} height={40} stroke={i === 3 ? ACCENT : FG} fill="var(--surface)" />
          <path d={`M${b.x + 10} ${b.y + 14} H${b.x + 44} M${b.x + 10} ${b.y + 26} H${b.x + 32}`} stroke={MUTED} />
        </g>
      ))}
      <path d="M276 141 L282 147 L292 135" stroke={ACCENT} strokeWidth={2} />
      <path d="M20 144 H200" stroke={MUTED} strokeDasharray="3 5" />
      <path d="M20 164 H160" stroke={MUTED} strokeDasharray="3 5" />
    </g>
  );
}

function Xray() {
  return (
    <g fill="none" strokeWidth={1.5}>
      <rect x={20} y={36} width={124} height={128} stroke={MUTED} fill="var(--surface)" />
      <path d="M20 50 H144" stroke={MUTED} />
      <rect x={30} y={62} width={70} height={10} stroke={MUTED} transform="rotate(-3 65 67)" />
      <rect x={40} y={82} width={92} height={8} stroke={MUTED} />
      <rect x={28} y={98} width={54} height={8} stroke={MUTED} transform="rotate(2 55 102)" />
      <rect x={76} y={126} width={40} height={18} stroke={MUTED} strokeDasharray="3 3" />

      <rect x={176} y={36} width={124} height={128} stroke={FG} fill="var(--surface)" />
      <path d="M176 50 H300" stroke={FG} />
      <rect x={188} y={62} width={76} height={10} stroke={FG} />
      <path d="M188 84 H288 M188 96 H268 M188 108 H278" stroke={MUTED} />
      <rect x={188} y={124} width={46} height={20} stroke={ACCENT} fill={ACCENT} fillOpacity={0.15} />

      <path d="M160 24 V176" stroke={ACCENT} strokeWidth={2} />
      <path d="M154 100 H166 M161 95 L166 100 L161 105" stroke={ACCENT} />
    </g>
  );
}

const drawings: Record<VisualKind, () => React.JSX.Element> = {
  xray: Xray,
  telemetry: Telemetry,
  outpost: Outpost,
  ledger: Ledger,
  split: Split,
  timeline: Timeline,
  pipeline: Pipeline,
};

const descriptions: Record<VisualKind, string> = {
  xray: "Illustration: a messy interface on the left and its repaired version on the right, separated by a scan line.",
  telemetry: "Illustration: two telemetry traces compared over a lap.",
  outpost: "Illustration: a small outpost on a planetary surface, with a row of mission-day markers.",
  ledger: "Illustration: a chain of linked record blocks, each tied to a role marker.",
  split: "Illustration: four people connected to one shared total, split into equal parts.",
  timeline: "Illustration: story panels pinned to points on a timeline.",
  pipeline: "Illustration: pipeline steps connected by arrows, ending in a validated step.",
};

type Props = {
  project: Pick<Project, "visual" | "image" | "title">;
  sizes?: string;
  priority?: boolean;
};

/** Fixed 16:10 frame holding either a real screenshot or the project's vector illustration. */
export function ProjectVisual({ project, sizes = "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw", priority }: Props) {
  if (project.image) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  const Drawing = drawings[project.visual];
  return (
    <div className="aspect-[16/10] bg-surface">
      <svg
        viewBox="0 0 320 200"
        className="block size-full [&_*]:[vector-effect:non-scaling-stroke]"
        role="img"
        aria-label={descriptions[project.visual]}
      >
        <Grid />
        <Drawing />
      </svg>
    </div>
  );
}
