import type { ReactNode } from "react";

export function PageHeader({ label, title, children }: { label: string; title: string; children?: ReactNode }) {
  return (
    <header className="container-page pb-12 pt-16 sm:pt-20 lg:pb-16 lg:pt-24">
      <p className="label flex items-center gap-3">
        <span aria-hidden="true" className="h-px w-8 bg-accent" />
        {label}
      </p>
      <h1 className="mt-6 text-5xl font-semibold tracking-[-0.035em] sm:text-6xl lg:text-7xl">{title}</h1>
      {children && <div className="prose-measure mt-6 text-lg text-muted">{children}</div>}
    </header>
  );
}
