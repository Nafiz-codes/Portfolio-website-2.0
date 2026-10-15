import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/icons";
import { MetaBox } from "@/components/meta-box";
import { ProjectVisual } from "@/components/project-visual";
import { RichText } from "@/components/rich-text";
import { getProject, isTodo, projectIndex, site, statusLabel } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return site.projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata({
    title: `${project.title}: case study`,
    description: project.summary,
    path: `/projects/${project.slug}`,
    type: "article",
  });
}

function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="space-y-4">
      {items.map((text) => (
        <p key={text}>
          <RichText text={text} />
        </p>
      ))}
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((text) => (
        <li key={text} className="grid grid-cols-[1.25rem_1fr]">
          <span aria-hidden="true" className="mt-[0.7em] h-px w-2.5 bg-accent" />
          <span>
            <RichText text={text} />
          </span>
        </li>
      ))}
    </ul>
  );
}

export default async function CaseStudyPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const links = [
    { label: "Live demo", url: project.links.demo },
    { label: project.links.codeLabel ?? "Code", url: project.links.code },
  ];
  const liveLinks = links.filter((l) => !isTodo(l.url));
  const pendingLinks = links.filter((l) => l.url.startsWith("[TODO"));

  const sections = [
    { id: "overview", title: "Overview", body: <Paragraphs items={project.overview} /> },
    { id: "problem", title: "Problem", body: <Paragraphs items={project.problem} /> },
    { id: "what-i-built", title: "What I personally built", body: <Bullets items={project.contribution} /> },
    { id: "decisions", title: "Key decisions and trade-offs", body: <Bullets items={project.decisions} /> },
    {
      id: "result",
      title: "Result",
      body: (
        <div className="space-y-8">
          <Paragraphs items={project.result} />
          {project.limitations && (
            <div>
              <h3 className="label">Limitations</h3>
              <div className="mt-3">
                <Bullets items={project.limitations} />
              </div>
            </div>
          )}
          {project.roadmap && (
            <div>
              <h3 className="label">Roadmap (planned, not shipped)</h3>
              <div className="mt-3">
                <Bullets items={project.roadmap} />
              </div>
            </div>
          )}
        </div>
      ),
    },
    {
      id: "links",
      title: "Links",
      body:
        liveLinks.length === 0 && pendingLinks.length === 0 ? (
          <p className="text-muted">No public links yet.</p>
        ) : (
        <ul className="border-t border-line">
          {liveLinks.map((l) => (
            <li key={l.label} className="border-b border-line">
              <a
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-14 items-center justify-between gap-4 py-3 transition-colors hover:text-accent-text"
              >
                <span>
                  <span className="label block">{l.label}</span>
                  <span className="block break-all text-fg group-hover:text-accent-text">
                    {l.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                  </span>
                </span>
                <ArrowUpRightIcon className="shrink-0" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
          {pendingLinks.map((l) => (
            <li key={l.label} className="border-b border-line py-3">
              <span className="label block">{l.label}</span>
              <RichText text={l.url} />
            </li>
          ))}
        </ul>
      ),
    },
  ];

  const position = site.projects.findIndex((p) => p.slug === project.slug);
  const nextProject = site.projects[(position + 1) % site.projects.length];

  return (
    <article>
      <header className="container-page pb-12 pt-10 sm:pt-14 lg:pb-16">
        <nav aria-label="Breadcrumb">
          <ol className="label flex flex-wrap items-center gap-2">
            <li>
              <Link href="/projects" className="link-underline inline-flex min-h-11 items-center">
                Projects
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-fg">
              {project.title}
            </li>
          </ol>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="label">
              {projectIndex(project.slug)} · {statusLabel[project.status]}
              {project.highlight && <span className="text-accent-text"> · {project.highlight}</span>}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="prose-measure mt-6 text-lg text-muted">{project.summary}</p>
            {liveLinks.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-3">
                {liveLinks.map((l, i) => (
                  <ButtonLink key={l.label} href={l.url} external variant={i === 0 ? "primary" : "secondary"}>
                    {l.label}
                    <ArrowUpRightIcon />
                  </ButtonLink>
                ))}
              </div>
            )}
          </div>
          <div className="lg:col-span-5">
            <MetaBox meta={project.meta} />
          </div>
        </div>
      </header>

      <div className="container-page">
        <div className="flex justify-center border border-line bg-surface">
          <div className="w-full max-w-2xl">
            <ProjectVisual project={project} sizes="(min-width: 768px) 672px, 100vw" priority />
          </div>
        </div>
      </div>

      <div className="container-page mt-16 grid gap-12 lg:mt-24 lg:grid-cols-12 lg:gap-16">
        <nav aria-label="On this page" className="hidden lg:col-span-3 lg:block">
          <ol className="sticky top-24 space-y-1 border-l border-line">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="flex min-h-9 items-center gap-3 border-l border-transparent pl-4 -ml-px text-sm text-muted transition-colors hover:border-accent hover:text-fg"
                >
                  <span className="font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="space-y-16 lg:col-span-9">
          {sections.map((s, i) => (
            <section key={s.id} aria-labelledby={s.id} className="grid gap-4 border-t border-line pt-6 md:grid-cols-[4rem_1fr]">
              <p aria-hidden="true" className="label pt-1.5">
                {String(i + 1).padStart(2, "0")}
              </p>
              <div className="prose-measure">
                <h2 id={s.id} className="text-2xl font-medium sm:text-3xl">
                  {s.title}
                </h2>
                <div className="mt-5 text-[1.0625rem]">{s.body}</div>
              </div>
            </section>
          ))}
        </div>
      </div>

      <div className="container-page mt-24">
        <Link
          href={`/projects/${nextProject.slug}`}
          className="group flex flex-wrap items-end justify-between gap-4 border-y border-line py-8 transition-colors hover:bg-surface sm:px-4"
        >
          <span>
            <span className="label block">Next project</span>
            <span className="mt-2 block font-display text-3xl font-medium group-hover:text-accent-text sm:text-4xl">
              {nextProject.title}
            </span>
          </span>
          <ArrowRightIcon width={20} height={20} className="mb-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
