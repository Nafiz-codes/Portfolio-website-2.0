"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/content/site";

const field =
  "mt-2 block w-full border border-line-strong bg-bg px-4 py-3 text-base text-fg placeholder:text-muted transition-colors hover:border-fg focus-visible:border-accent-text";

/** No backend: the form composes an email and opens the visitor's mail app. */
export function ContactForm() {
  const [opened, setOpened] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `Portfolio enquiry from ${name}`;
    const body = `${message}\n\n${name}${email ? `\n${email}` : ""}`;
    window.location.href = `mailto:${site.social.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6" aria-describedby="form-note">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label">
            Name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="email" className="label">
            Your email (optional)
          </label>
          <input id="email" name="email" type="email" autoComplete="email" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="label">
          Message
        </label>
        <textarea id="message" name="message" required rows={6} className={`${field} resize-y`} />
      </div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center bg-accent px-6 font-display text-[0.9375rem] font-medium text-on-accent transition-colors hover:bg-fg hover:text-bg active:bg-muted"
        >
          Open in my email app
        </button>
        <p id="form-note" className="text-sm text-muted">
          This opens your email app with the message filled in. Nothing is stored on this site.
        </p>
      </div>
      <p role="status" className="text-sm text-fg">
        {opened && (
          <>
            If your email app didn’t open, write to{" "}
            <a href={`mailto:${site.social.email}`} className="link-underline">
              {site.social.email}
            </a>
            .
          </>
        )}
      </p>
    </form>
  );
}
