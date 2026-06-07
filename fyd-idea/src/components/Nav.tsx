import { Link, useLocation } from "react-router-dom";
import { ChevronRight, MessageCircleHeart, Moon, Sun } from "lucide-react";
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
    <header className="sticky top-0 z-50 border-b border-ink/8 bg-warm-cream/82 backdrop-blur-xl transition-colors duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 font-bold">
          <span className="grid size-10 place-items-center rounded-2xl bg-brand text-white shadow-[0_10px_30px_rgba(155,91,255,0.28)]">
            <MessageCircleHeart className="size-5" aria-hidden="true" />
          </span>
          <span className="font-display text-2xl tracking-normal text-ink">
            Fydinn
          </span>
        </Link>

        {/* Links — only show on home */}
        {onHome && (
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-ink/62 transition hover:text-brand"
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
            className="grid size-10 place-items-center rounded-full border border-ink/12 text-ink/60 transition hover:border-brand/40 hover:text-brand active:scale-95"
          >
            {theme === "light" ? (
              <Moon className="size-4" aria-hidden="true" />
            ) : (
              <Sun className="size-4" aria-hidden="true" />
            )}
          </button>

          <a
            href="/#download"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 py-2 text-sm font-bold text-warm-cream transition hover:-translate-y-0.5 hover:bg-brand"
          >
            Get the App
            <ChevronRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
