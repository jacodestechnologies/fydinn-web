import { SiteFooter } from "@/components/landing/SiteFooter";
import { APP_CONFIG } from "@/lib/config";

export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <div className="flex flex-col min-h-dvh bg-surface text-text-main">
      <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md ring-1 ring-black/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="size-5 bg-brand flex items-center justify-center">
              <div className="size-1.5 bg-surface" />
            </div>
            <span className="font-semibold text-lg tracking-tight">{APP_CONFIG.name}</span>
          </a>
          <a href="/" className="text-sm text-text-muted hover:text-brand transition-colors">
            ← Back home
          </a>
        </div>
      </header>
      <main className="flex-1">
        <article className="max-w-3xl mx-auto px-6 pt-16 pb-24">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">{title}</h1>
          <p className="text-text-muted text-lg leading-relaxed mb-12">{intro}</p>
          <div className="space-y-10">
            {sections.map((s) => (
              <section key={s.heading}>
                <h2 className="text-xl font-medium tracking-tight mb-3">{s.heading}</h2>
                <p className="text-sm text-text-muted leading-relaxed">{s.body}</p>
              </section>
            ))}
          </div>
          <p className="mt-16 text-xs text-text-muted">
            This is placeholder copy. Replace with your finalized legal language before launch.
          </p>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
