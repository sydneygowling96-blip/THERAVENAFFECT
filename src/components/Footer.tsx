import { LINKS } from "../config";

export default function Footer() {
  const social = [
    { label: "Instagram", href: LINKS.instagram },
    { label: "TikTok", href: LINKS.tiktok },
    { label: "Spotify", href: LINKS.spotify },
    { label: "YouTube", href: LINKS.youtube },
  ].filter((s) => s.href);

  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-center">
        <img src="/raven-mark.png" alt="The Raven Affect" className="h-8 w-8" />
        <p className="font-display text-sm tracking-widest text-ash">THE RAVEN AFFECT</p>
        {social.length > 0 && (
          <div className="flex gap-6">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold uppercase tracking-widest text-ash hover:text-ink"
              >
                {s.label}
              </a>
            ))}
          </div>
        )}
        <p className="text-xs text-ash">&copy; {new Date().getFullYear()} The Raven Affect. All rights reserved.</p>
      </div>
    </footer>
  );
}
