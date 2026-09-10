import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/episodes", label: "Episodes" },
  { to: "/about", label: "About" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center gap-3">
          <img src="/raven-mark.png" alt="The Raven Affect" className="h-9 w-9" />
          <span className="font-display text-lg tracking-wide">THE RAVEN AFFECT</span>
        </NavLink>
        <nav className="flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-semibold uppercase tracking-widest transition-colors ${
                  isActive ? "text-ink" : "text-ash hover:text-ink"
                }`
              }
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
