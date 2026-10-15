import Image from "next/image";
import { site } from "@/content/site";

function CornerTicks() {
  const tick = "absolute size-3 border-accent";
  return (
    <span aria-hidden="true">
      <span className={`${tick} -left-px -top-px border-l border-t`} />
      <span className={`${tick} -right-px -top-px border-r border-t`} />
      <span className={`${tick} -bottom-px -left-px border-b border-l`} />
      <span className={`${tick} -bottom-px -right-px border-b border-r`} />
    </span>
  );
}

export function Portrait() {
  const { portrait, person } = site;
  const initials = person.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <figure className="relative">
      <div className="relative aspect-[4/5] overflow-hidden border border-line bg-surface">
        {portrait.src ? (
          <Image
            src={portrait.src}
            alt={portrait.alt}
            fill
            priority
            sizes="(min-width: 1024px) 22vw, 15rem"
            className="object-cover grayscale-[15%]"
          />
        ) : (
          <div
            role="img"
            aria-label="Placeholder for a portrait photo"
            className="flex size-full flex-col items-center justify-center gap-3 bg-[repeating-linear-gradient(135deg,transparent_0_11px,var(--line)_11px_12px)]"
          >
            <span className="bg-surface px-3 font-display text-5xl font-medium tracking-[-0.04em] text-muted">
              {initials}
            </span>
            <span className="label bg-surface px-2">Photo</span>
          </div>
        )}
      </div>
      <CornerTicks />
    </figure>
  );
}
