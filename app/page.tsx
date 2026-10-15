import Link from "next/link";
import { AirflowFigure } from "@/components/airflow-figure";
import { ButtonLink } from "@/components/button-link";
import { ArrowRightIcon } from "@/components/icons";
import { Portrait } from "@/components/portrait";
import { ScrollCar } from "@/components/scroll-car";
import { ProjectCard } from "@/components/project-card";
import { ProofStrip } from "@/components/proof-strip";
import { SectionHeading } from "@/components/section-heading";
import { featuredProjects, site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  description: site.seo.homeDescription,
  path: "/",
  type: "profile",
});

export default function Home() {
  const { person, about } = site;
  const [firstName, ...restOfName] = person.name.split(" ");

  return (
    <>
      <ScrollCar />
      <section className="container-page home-gutter pb-20 pt-16 sm:pt-24 lg:pb-28 lg:pt-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-9">
            <p className="label flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              {person.descriptor}
            </p>
            <h1 className="mt-8 font-semibold leading-[0.92] tracking-[-0.045em] [font-size:clamp(2.75rem,11vw,7rem)] lg:[font-size:min(8vw,7.5rem)]">
              <span className="block">{firstName}</span>
              <span className="block">{restOfName.join(" ")}</span>
            </h1>
          </div>
          <div className="w-full max-w-[15rem] lg:col-span-3 lg:max-w-none">
            <Portrait />
          </div>
        </div>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 lg:pt-2">
            <p className="max-w-[34ch] font-display text-xl leading-snug text-fg sm:text-2xl">
              {person.headline}
            </p>
            <p className="mt-4 max-w-[48ch] text-muted">{person.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/projects">View projects</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact me
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-7">
            <AirflowFigure />
          </div>
        </div>
      </section>

      <div className="home-gutter">
        <ProofStrip />
      </div>

      <section aria-labelledby="projects-heading" className="container-page home-gutter mt-24 lg:mt-32">
        <SectionHeading
          index="01"
          id="projects-heading"
          title="Selected projects"
          action={
            <Link
              href="/projects"
              className="link-underline inline-flex min-h-11 items-center gap-2 text-[0.9375rem] text-muted"
            >
              All projects
              <ArrowRightIcon />
            </Link>
          }
        />
        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="about" className="container-page home-gutter mt-24 lg:mt-32">
        <SectionHeading index="02" id="about" title="About" />
        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="prose-measure space-y-5 text-[1.0625rem] lg:col-span-7">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p>
              <Link href="/resume" className="link-underline inline-flex min-h-11 items-center gap-2 text-fg">
                Education, skills and credentials
                <ArrowRightIcon />
              </Link>
            </p>
          </div>
          <dl className="border-t border-line lg:col-span-5">
            {about.facts.map((fact) => (
              <div key={fact.label} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[8rem_1fr] sm:gap-4">
                <dt className="label pt-0.5">{fact.label}</dt>
                <dd className="text-fg">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
