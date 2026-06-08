import { APP_CONFIG } from "@/lib/config";

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-hairline">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="size-7 bg-brand flex items-center justify-center shrink-0">
            <div className="size-2.5 bg-surface" />
          </div>
          <span className="font-display text-xl font-bold tracking-tighter text-text-main">
            {APP_CONFIG.name}
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {["Features", "How it works", "FAQ"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-[11px] font-semibold text-text-muted uppercase tracking-[0.22em] hover:text-brand transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="#cta"
          className="bg-brand text-surface text-[11px] uppercase tracking-widest font-bold py-3 px-8 hover:bg-brand-light transition-colors min-h-11 flex items-center"
        >
          Get the App
        </a>
      </div>
    </nav>
  );
}
