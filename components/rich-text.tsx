import { Fragment } from "react";

const TODO_PATTERN = /(\[TODO:[^\]]*\])/g;

/** Renders a string, wrapping any "[TODO: …]" placeholders in a visible marker. */
export function RichText({ text }: { text: string }) {
  const parts = text.split(TODO_PATTERN);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("[TODO:") ? (
          <span key={i} className="todo">
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
