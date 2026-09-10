import { CONTACT_EMAIL } from "../config";

export default function Contact() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20 text-center">
      <h1 className="font-display text-4xl tracking-wide sm:text-5xl">GET IN TOUCH</h1>
      <p className="mt-6 text-lg text-ash">
        Got a question, a story, or think you'd be a great guest on the show?
        Send it over &mdash; every message gets read.
      </p>
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="mt-10 inline-block bg-ink px-8 py-3 text-sm font-bold uppercase tracking-widest text-paper"
      >
        {CONTACT_EMAIL}
      </a>
    </section>
  );
}
