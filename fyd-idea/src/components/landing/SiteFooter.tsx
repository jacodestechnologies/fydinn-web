import { APP_CONFIG } from "@/lib/config";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline py-20 bg-surface-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-6 max-w-sm">
            <div className="flex items-center gap-3">
              <div className="size-7 bg-brand flex items-center justify-center shrink-0">
                <div className="size-2.5 bg-surface" />
              </div>
              <span className="font-display text-xl font-bold tracking-tighter text-text-main">
                {APP_CONFIG.name}
              </span>
            </div>
            <p className="text-sm text-text-subtle font-light leading-relaxed">
              Intentional connections built on shared values and authentic conversation — not
              endless swiping.
            </p>
            <div className="flex gap-6 pt-2">
              {[
                { label: "Instagram", href: "#" },
                { label: "Twitter", href: "#" },
                { label: "LinkedIn", href: "#" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm text-text-subtle hover:text-brand transition-colors font-light"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-5">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted">
              Legal
            </span>
            <nav className="flex flex-col gap-3">
              <a
                href="/privacy.html"
                className="text-sm text-text-subtle hover:text-brand transition-colors font-light"
              >
                Privacy Policy
              </a>
              <a
                href="/terms.html"
                className="text-sm text-text-subtle hover:text-brand transition-colors font-light"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-text-subtle hover:text-brand transition-colors font-light"
              >
                Cookie Policy
              </a>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-5">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted">
              Stay Updated
            </span>
            <p className="text-sm text-text-subtle font-light leading-relaxed">
              App updates and dating insights, no spam.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="your@email.com"
                className="bg-transparent border-b border-hairline focus:border-brand py-3 pr-16 w-full text-sm text-text-main placeholder:text-text-subtle outline-none transition-colors"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] font-bold uppercase tracking-[0.22em] text-brand hover:text-brand-light transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-hairline pt-8 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <span className="text-[10px] text-text-subtle uppercase tracking-[0.3em] font-semibold">
            © {new Date().getFullYear()} {APP_CONFIG.name}. All rights reserved.
          </span>
          <span className="text-[10px] text-text-subtle uppercase tracking-[0.3em] font-semibold">
            Est. 2024 — Made with intention
          </span>
        </div>
      </div>
    </footer>
  );
}
