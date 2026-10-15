import Link from "next/link";
import { isTodo, projectIndex, statusLabel, type Project } from "@/content/site";
import { ArrowRightIcon, ArrowUpRightIcon } from "./icons";
import { ProjectVisual } from "./project-visual";

const MAX_TAGS = 4;

export function ProjectCard({ project, headingLevel = 3 }: { project: Project; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const tags = project.meta.stack.filter((t) => !isTodo(t)).slice(0, MAX_TAGS);
  const href = `/projects/${project.slug}`;
  const external = [
    { label: "Live demo", url: project.links.demo },
    { label: "Code", url: project.links.code },
  ].filter((l) => !isTodo(l.url));

  return (
    <article className="group relative flex h-full flex-col border border-line bg-bg transition-colors hover:border-line-strong">
      <div className="border-b border-line">
        <ProjectVisual project={project} />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="label flex items-center justify-between gap-4">
          <span>{projectIndex(project.slug)}</span>
          <span>{statusLabel[project.status]}</span>
        </div>

        <Heading className="mt-4 text-2xl font-medium">
          <Link
            href={href}
            className="card-link after:absolute after:inset-0 after:content-[''] hover:text-accent-text focus-visible:outline-none"
          >
            {project.title}
          </Link>
        </Heading>

        {project.highlight && (
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.06em] text-accent-text">
            {project.highlight}
          </p>
        )}

        <p className="mt-3 text-muted">{project.summary}</p>

        {tags.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
            {tags.map((tag) => (
              <li key={tag} className="border border-line px-2 py-1 font-mono text-xs text-muted">
                {tag}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6">
          <span className="inline-flex min-h-11 items-center gap-2 text-[0.9375rem] text-fg">
            Case study
            <ArrowRightIcon className="transition-transform group-hover:translate-x-0.5" />
          </span>
          {external.map((l) => (
            <a
              key={l.label}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline relative z-10 inline-flex min-h-11 items-center gap-1.5 text-[0.9375rem] text-muted"
            >
              {l.label}
              <ArrowUpRightIcon />
              <span className="sr-only"> for {project.title} (opens in a new tab)</span>
            </a>
          ))}
        </div>
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden outline-2 outline-offset-2 outline-accent-text group-has-[.card-link:focus-visible]:block"
      />
    </article>
  );
}
