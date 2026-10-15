import Link from "next/link";
import { site } from "@/content/site";

export function ProofStrip() {
  return (
    <section aria-labelledby="recognition-heading" className="container-page">
      <h2 id="recognition-heading" className="label">
        Recognition
      </h2>
      <ul className="mt-4 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {site.proof.map((item) => {
          const body = (
            <>
              <span className="block font-display text-3xl font-medium text-fg">{item.value}</span>
              <span className="mt-3 block text-fg">{item.label}</span>
              <span className="mt-1 block text-sm text-muted">{item.context}</span>
            </>
          );
          return (
            <li key={item.label} className="bg-bg">
              {item.href ? (
                <Link
                  href={item.href}
                  className="block h-full p-6 transition-colors hover:bg-surface active:bg-line"
                >
                  {body}
                  <span className="sr-only">: view the {item.label} case study</span>
                </Link>
              ) : (
                <div className="h-full p-6">{body}</div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
