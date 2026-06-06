export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-hairline">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="size-8 bg-brand rounded-full flex items-center justify-center">
            <div className="size-3 bg-white rounded-full" />
          </div>
          <span className="font-display text-xl font-bold tracking-tighter text-text-main">FirstDate</span>
        </a>
        <div className="hidden md:flex items-center gap-10 text-[11px] font-semibold text-text-muted uppercase tracking-[0.22em]">
          <a href="#features" className="hover:text-brand transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-brand transition-colors">How it works</a>
          <a href="#faq" className="hover:text-brand transition-colors">FAQ</a>
        </div>
        <a
          href="#cta"
          className="bg-brand text-white text-sm font-semibold py-2.5 px-6 rounded-full hover:bg-rose-700 transition active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand min-h-11 flex items-center"
        >
          Get the App
        </a>
      </div>
    </nav>
  );
}