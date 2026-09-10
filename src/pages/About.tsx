export default function About() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-center font-display text-4xl tracking-wide sm:text-5xl">
        ABOUT THE SHOW
      </h1>

      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
        <img
          src="/host-photo.jpg"
          alt="Host of The Raven Affect recording in the studio"
          className="mx-auto aspect-[3/4] w-full max-w-xs rounded-lg object-cover shadow-sm md:mx-0"
        />

        <div className="space-y-6">
          <div>
            <h2 className="font-display text-2xl tracking-wide">YOUR HOST</h2>
            <p className="mt-2 text-ash">Host bio coming soon.</p>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-ink">
            <p>
              The Raven Affect is a podcast built for people who refuse to settle.
              This is a space for real conversations about becoming your best self:
              health, wellness, business, entrepreneurship, and spirituality, all
              through the lens of living life to the fullest.
            </p>
            <p>
              Each week you'll hear from guests who are actually in the arena
              &mdash; building businesses, chasing purpose, and living on their own
              terms. Mixed in are solo episodes where it's just raw, honest
              reflection on what it takes to grow.
            </p>
            <p className="italic text-ash">
              Affect (verb): to influence or impact, to act on or produce a change
              in. That's the mission here. Not just to inform you, but to move you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
