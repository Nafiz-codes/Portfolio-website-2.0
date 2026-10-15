import { ContactForm } from "@/components/contact-form";
import { SocialRows } from "@/components/social-links";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

const description = `Contact Nafiz Shahriar Sami by email at ${site.social.email}, or find him on GitHub and LinkedIn.`;

export const metadata = pageMetadata({ title: "Contact", description, path: "/contact" });

export default function ContactPage() {
  return (
    <div className="container-page pb-8 pt-12 sm:pt-16 lg:pt-20">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="label flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            Contact
          </p>
          <h1 className="mt-6 text-5xl font-semibold tracking-[-0.035em] sm:text-6xl">Get in touch</h1>
          <p className="prose-measure mt-5 text-lg text-muted">
            Email is the quickest way to reach me. I’m also on GitHub and LinkedIn.
          </p>
          <div className="mt-8">
            <SocialRows />
          </div>
        </div>

        <section aria-labelledby="form-heading" className="border border-line bg-surface p-6 sm:p-8 lg:col-span-7">
          <h2 id="form-heading" className="text-2xl font-medium">
            Send a message
          </h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  );
}
