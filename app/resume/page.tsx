import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { ResumeButton } from "@/components/resume-button";
import { RichText } from "@/components/rich-text";
import { site, type Credential } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

const description =
  "Resume of Nafiz Shahriar Sami: Computer Science and Engineering at BRAC University, recognition, skills, and credentials.";

export const metadata = pageMetadata({ title: "Resume", description, path: "/resume" });

function Block({ id, index, title, children }: { id: string; index: string; title: string; children: ReactNode }) {
  return (
    <section aria-labelledby={id} className="grid gap-6 border-t border-line pt-6 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-3">
        <p aria-hidden="true" className="label">
          {index}
        </p>
        <h2 id={id} className="mt-2 text-2xl font-medium">
          {title}
        </h2>
      </div>
      <div className="lg:col-span-9">{children}</div>
    </section>
  );
}

function CredentialList({ title, items }: { title: string; items: Credential[] }) {
  return (
    <div>
      <h3 className="label">{title}</h3>
      <ul className="mt-3 border-t border-line">
        {items.map((c) => (
          <li key={c.name} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line py-3">
            <span className="text-fg">
              <RichText text={c.name} />
              {c.issuer && <span className="text-muted"> · {c.issuer}</span>}
              {c.note && (
                <span className="mt-1 block text-sm text-muted">
                  <RichText text={c.note} />
                </span>
              )}
            </span>
            {c.year && <span className="font-mono text-xs text-muted">{c.year}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ResumePage() {
  const { education, experience, recognition, skills, credentials } = site;

  return (
    <>
      <PageHeader label="Resume" title="Resume">
        <p>Education, team work, recognition, skills, and credentials in one place.</p>
        <div className="mt-8">
          <ResumeButton variant="primary" />
        </div>
      </PageHeader>

      <div className="container-page space-y-16">
        <Block id="education" index="01" title="Education">
          <p className="font-display text-xl font-medium">{education.school}</p>
          <p className="mt-1 text-fg">{education.field}</p>
          <p className="mt-1 text-muted">{education.expected}</p>
          <h3 className="label mt-6">Relevant coursework</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {education.coursework.map((c) => (
              <li key={c} className="border border-line px-2 py-1 font-mono text-xs text-muted">
                {c}
              </li>
            ))}
          </ul>
        </Block>

        <Block id="experience" index="02" title="Teams">
          <ul className="space-y-6">
            {experience.map((e) => (
              <li key={e.name}>
                <p className="font-display text-xl font-medium">{e.name}</p>
                <p className="mt-1 text-fg">{e.role}</p>
                <p className="mt-2 text-muted">
                  <RichText text={e.detail} />
                </p>
              </li>
            ))}
          </ul>
        </Block>

        <Block id="recognition" index="03" title="Recognition">
          <ul className="border-t border-line">
            {recognition.map((r) => {
              const external = r.href?.startsWith("http");
              const content = (
                <>
                  <span className="block text-fg">{r.title}</span>
                  <span className="mt-1 block text-sm text-muted">
                    <RichText text={r.detail} />
                  </span>
                </>
              );
              return (
                <li key={r.title} className="border-b border-line">
                  {r.href ? (
                    external ? (
                      <a
                        href={r.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between gap-4 py-4 transition-colors hover:bg-surface sm:px-2"
                      >
                        <span>{content}</span>
                        <ArrowUpRightIcon className="shrink-0 text-muted group-hover:text-accent-text" />
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ) : (
                      <Link
                        href={r.href}
                        className="group flex items-center justify-between gap-4 py-4 transition-colors hover:bg-surface sm:px-2"
                      >
                        <span>{content}</span>
                        <ArrowRightIcon className="shrink-0 text-muted group-hover:text-accent-text" />
                      </Link>
                    )
                  ) : (
                    <div className="py-4 sm:px-2">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Block>

        <Block id="skills" index="04" title="Skills">
          <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group}>
                <dt className="label">{s.group}</dt>
                <dd className="mt-3">
                  <ul className="flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <li key={item} className="border border-line px-2 py-1 font-mono text-xs text-fg">
                        {item}
                      </li>
                    ))}
                  </ul>
                  {s.usedIn && <p className="mt-3 text-sm text-muted">Used in: {s.usedIn}</p>}
                </dd>
              </div>
            ))}
          </dl>
        </Block>

        <Block id="credentials" index="05" title="Credentials">
          <div className="grid gap-10">
            <CredentialList title="Certifications" items={credentials.certifications} />
            <CredentialList title="Course certificates" items={credentials.courses} />
            <CredentialList title="Platform badges" items={credentials.badges} />
            <CredentialList title="In progress" items={credentials.inProgress} />
          </div>
        </Block>
      </div>
    </>
  );
}
