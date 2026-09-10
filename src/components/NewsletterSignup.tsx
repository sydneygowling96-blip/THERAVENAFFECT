import { useState, type FormEvent } from "react";

export default function NewsletterSignup({ dark = false }: { dark?: boolean }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
    });
    setStatus("done");
    form.reset();
  }

  if (status === "done") {
    return (
      <p className={`font-semibold ${dark ? "text-paper" : "text-ink"}`}>
        You're in. Watch your inbox.
      </p>
    );
  }

  return (
    <form
      name="newsletter"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
    >
      <input type="hidden" name="form-name" value="newsletter" />
      <input type="text" name="bot-field" className="hidden" tabIndex={-1} autoComplete="off" />
      <input
        type="email"
        name="email"
        required
        placeholder="your@email.com"
        className={`w-full flex-1 border px-4 py-3 text-sm outline-none ${
          dark
            ? "border-paper/30 bg-transparent text-paper placeholder:text-paper/50 focus:border-paper"
            : "border-ink/20 bg-paper text-ink placeholder:text-ash focus:border-ink"
        }`}
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className={`shrink-0 px-6 py-3 text-sm font-bold uppercase tracking-widest transition-opacity disabled:opacity-50 ${
          dark ? "bg-paper text-ink" : "bg-ink text-paper"
        }`}
      >
        {status === "submitting" ? "Sending..." : "Notify Me"}
      </button>
    </form>
  );
}
