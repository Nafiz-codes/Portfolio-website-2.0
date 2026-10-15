import type { ReactNode } from "react";

type Props = {
  index: string;
  title: string;
  id?: string;
  action?: ReactNode;
};

export function SectionHeading({ index, title, id, action }: Props) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-5">
      <div>
        <p className="label" aria-hidden="true">
          {index}
        </p>
        <h2 id={id} className="mt-2 text-3xl font-medium sm:text-4xl">
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}
