import { isTodo, type Project } from "@/content/site";
import { RichText } from "./rich-text";

export function MetaBox({ meta }: { meta: Project["meta"] }) {
  return (
    <dl className="grid border border-line bg-surface sm:grid-cols-2">
      <div className="border-b border-line p-5 sm:border-r">
        <dt className="label">Role</dt>
        <dd className="mt-2 text-fg">
          <RichText text={meta.role} />
        </dd>
      </div>
      <div className="border-b border-line p-5">
        <dt className="label">Team</dt>
        <dd className="mt-2 text-fg">
          <RichText text={meta.team} />
        </dd>
      </div>
      <div className="border-b border-line p-5 sm:col-span-2">
        <dt className="label">Timeline</dt>
        <dd className="mt-2 text-fg">
          <RichText text={meta.timeline} />
        </dd>
      </div>
      <div className="p-5 sm:col-span-2">
        <dt className="label">Stack</dt>
        <dd className="mt-3">
          <ul className="flex flex-wrap gap-2">
            {meta.stack.map((tag) =>
              isTodo(tag) ? (
                <li key={tag}>
                  <RichText text={tag} />
                </li>
              ) : (
                <li key={tag} className="border border-line-strong px-2 py-1 font-mono text-xs text-fg">
                  {tag}
                </li>
              ),
            )}
          </ul>
        </dd>
      </div>
    </dl>
  );
}
