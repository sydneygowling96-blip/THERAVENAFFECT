import { LINKS, EPISODES_LIVE } from "../config";
import NewsletterSignup from "../components/NewsletterSignup";

function spotifyEmbedUrl(showUrl: string) {
  return showUrl.replace("open.spotify.com/show", "open.spotify.com/embed/show");
}

export default function Episodes() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 text-center">
      <h1 className="font-display text-4xl tracking-wide sm:text-5xl">EPISODES</h1>

      {EPISODES_LIVE ? (
        <div className="mt-12 flex flex-col gap-10">
          {LINKS.spotify && (
            <iframe
              title="Spotify"
              src={spotifyEmbedUrl(LINKS.spotify)}
              width="100%"
              height="352"
              style={{ borderRadius: 12 }}
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          )}
          {LINKS.youtube && (
            <a
              href={LINKS.youtube}
              target="_blank"
              rel="noreferrer"
              className="mx-auto border border-ink px-8 py-3 text-sm font-bold uppercase tracking-widest text-ink"
            >
              Watch Full Episodes on YouTube
            </a>
          )}
        </div>
      ) : (
        <div className="mt-12 flex flex-col items-center gap-6">
          <p className="max-w-lg text-lg text-ash">
            New episodes dropping soon &mdash; weekly conversations with guests in the
            arena, plus raw solo episodes on what it takes to grow.
          </p>
          <NewsletterSignup />
        </div>
      )}
    </section>
  );
}
