import { Link, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import logoColor from "@/assets/logo/meantgo-horizontal.svg";
import logoWhite from "@/assets/logo/meantgo-horizontal-white.svg";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Transparent / white styling while sitting over the purple hero.
  const overHero = onHome && !scrolled;
  // The dark-text wordmark only reads on a light surface, so fall back to the
  // white wordmark whenever the header sits over the hero or the app is in dark mode.
  const useWhiteLogo = overHero || theme === "dark";

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        overHero
          ? "border-b border-transparent bg-[#7C3AED]"
          : "border-b border-ink/8 bg-surface/90 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={useWhiteLogo ? logoWhite : logoColor}
            alt="MeantGo"
            className="h-8 w-auto"
          />
        </Link>

        {/* Nav links — home only */}
        {onHome && (
          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  overHero ? "text-white/80 hover:text-white" : "text-ink/55 hover:text-ink"
                }`}
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
            className={`grid size-9 place-items-center rounded-lg border transition-colors active:scale-95 ${
              overHero
                ? "border-white/30 text-white hover:border-white/60"
                : "border-ink/10 text-ink/50 hover:border-ink/20 hover:text-ink"
            }`}
          >
            {theme === "light" ? (
              <Moon className="size-4" aria-hidden="true" />
            ) : (
              <Sun className="size-4" aria-hidden="true" />
            )}
          </button>

          <a
            href="/#download"
            className={`inline-flex min-h-9 items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold transition-all hover:-translate-y-px ${
              overHero
                ? "bg-white text-brand shadow-[0_2px_12px_rgba(0,0,0,0.18)] hover:shadow-[0_4px_18px_rgba(0,0,0,0.28)]"
                : "bg-brand text-white shadow-[0_2px_8px_rgba(124,58,237,0.35)] hover:shadow-[0_4px_16px_rgba(124,58,237,0.45)]"
            }`}
          >
            Get the App
          </a>
        </div>
      </div>
    </header>
  );
}
