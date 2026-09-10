import { Link } from "react-router-dom";
import { LINKS, EPISODES_LIVE } from "../config";
import NewsletterSignup from "../components/NewsletterSignup";

const pillars = [
  { title: "Health", copy: "What it actually takes to feel good in your body." },
  { title: "Wellness", copy: "Mind, nervous system, and the habits that hold it together." },
  { title: "Business", copy: "Real numbers, real setbacks, real wins." },
  { title: "Entrepreneurship", copy: "Building something from nothing, on your own terms." },
  { title: "Spirituality", copy: "The inner work nobody sees but everybody feels." },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 pb-20 pt-16 text-center sm:pt-24">
        <img src="/raven-mark.png" alt="" className="h-24 w-24 sm:h-32 sm:w-32" />
        <h1 className="font-display text-5xl leading-none tracking-wide sm:text-7xl md:text-8xl">
          THE RAVEN
          <br />
          AFFECT
        </h1>
        <p className="max-w-xl text-lg text-ash sm:text-xl">
          A podcast for people who refuse to settle. Real conversations about becoming
          your best self &mdash; health, wellness, business, entrepreneurship, and
          spirituality.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {EPISODES_LIVE ? (
            <>
              {LINKS.spotify && (
                <a
                  href={LINKS.spotify}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-ink px-8 py-3 text-sm font-bold uppercase tracking-widest text-paper"
                >
                  Listen on Spotify
                </a>
              )}
              {LINKS.youtube && (
                <a
                  href={LINKS.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-ink px-8 py-3 text-sm font-bold uppercase tracking-widest text-ink"
                >
                  Watch on YouTube
                </a>
              )}
            </>
          ) : (
            <Link
              to="/episodes"
              className="bg-ink px-8 py-3 text-sm font-bold uppercase tracking-widest text-paper"
            >
              New Episodes Dropping Soon
            </Link>
          )}
        </div>
      </section>

      <section className="border-y border-ink/10 bg-smoke">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="font-display text-3xl tracking-wide sm:text-4xl">AFFECT</p>
          <p className="mt-1 text-sm uppercase tracking-widest text-ash">verb</p>
          <p className="mt-6 text-xl italic text-ink sm:text-2xl">
            &ldquo;To influence or impact. To act on or produce a change in.&rdquo;
          </p>
          <p className="mt-6 text-ash">
            That's the mission here. Not just to inform you &mdash; to move you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center font-display text-3xl tracking-wide sm:text-4xl">
          WHAT WE GET INTO
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((p) => (
            <div key={p.title} className="border-t-2 border-ink pt-4">
              <h3 className="font-display text-lg tracking-wide">{p.title.toUpperCase()}</h3>
              <p className="mt-2 text-sm text-ash">{p.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink py-20 text-paper">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-6 text-center">
          <h2 className="font-display text-3xl tracking-wide sm:text-4xl">
            COME FIND YOUR BEST SELF
          </h2>
          <p className="text-paper/70">
            Be the first to know when new episodes drop.
          </p>
          <NewsletterSignup dark />
        </div>
      </section>
    </>
  );
}
