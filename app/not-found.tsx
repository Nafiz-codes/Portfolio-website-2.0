import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="container-page pb-16 pt-20 sm:pt-28">
      <p className="label">404</p>
      <h1 className="mt-6 text-5xl font-semibold tracking-[-0.035em] sm:text-6xl">Page not found</h1>
      <p className="prose-measure mt-5 text-lg text-muted">
        That page doesn’t exist. It may have moved, or the link may be mistyped.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/">Back to home</ButtonLink>
        <ButtonLink href="/projects" variant="secondary">
          View projects
        </ButtonLink>
      </div>
    </section>
  );
}
