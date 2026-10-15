import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

const description =
  "Projects by Nafiz Shahriar Sami: F1 telemetry analytics, a NASA Space Apps mission game, an AI UI/UX repair agent, group expense splitting, and more.";

export const metadata = pageMetadata({ title: "Projects", description, path: "/projects" });

export default function ProjectsPage() {
  return (
    <>
      <PageHeader label="Work" title="Projects">
        <p>
          Hackathon builds, prototypes, and work in progress, each labelled with its current status.
        </p>
      </PageHeader>

      <section aria-label="All projects" className="container-page">
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {site.projects.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} headingLevel={2} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="exploring" className="container-page mt-24">
        <SectionHeading index="Next" id="exploring" title="Exploring" />
        <ul className="mt-6">
          {site.exploring.map((item) => (
            <li
              key={item.title}
              className="grid gap-2 border-b border-line py-5 sm:grid-cols-[12rem_1fr_auto] sm:items-baseline sm:gap-6"
            >
              <h3 className="text-xl font-medium">{item.title}</h3>
              <p className="prose-measure text-muted">{item.summary}</p>
              <p className="label">{item.status}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
