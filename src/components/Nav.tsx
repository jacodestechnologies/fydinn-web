import { Link, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const navItems = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Features", href: "/#features" },
  { label: "Safety", href: "/#safety" },
  { label: "Download", href: "/#download" },
];

export function Nav() {
  const { theme, toggle } = useTheme();
  const location = useLocation();
  const onHome = location.pathname === "/";

  return (
    <header className="sticky top-0 z-50 border-b border-ink/8 bg-surface/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 font-semibold">
          <span className="grid size-8 place-items-center rounded-lg bg-brand text-white shadow-[0_4px_12px_rgba(0,180,216,0.35)]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              <path d="M8 10h.01M12 10h.01M16 10h.01" />
            </svg>
          </span>
          <span className="text-lg font-bold tracking-tight text-ink">MeantGo</span>
        </Link>

        {/* Nav links — home only */}
        {onHome && (
          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-ink/55 transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            className="grid size-9 place-items-center rounded-lg border border-ink/10 text-ink/50 transition-colors hover:border-ink/20 hover:text-ink active:scale-95"
          >
            {theme === "light" ? (
              <Moon className="size-4" aria-hidden="true" />
            ) : (
              <Sun className="size-4" aria-hidden="true" />
            )}
          </button>

          <a
            href="/#download"
            className="inline-flex min-h-9 items-center gap-1.5 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white shadow-[0_2px_8px_rgba(0,180,216,0.35)] transition-all hover:-translate-y-px hover:shadow-[0_4px_16px_rgba(0,180,216,0.45)]"
          >
            Get the App
          </a>
        </div>
      </div>
    </header>
  );
}
