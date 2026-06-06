import { AppStoreBadges } from "@/components/landing/AppStoreBadges";

export function FinalCTA() {
  return (
    <section id="cta" className="py-40 lg:py-48 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 size-[800px] bg-brand/10 blur-[160px] rounded-full -z-10"
      />
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter mb-10 text-balance text-text-main">
          Start your <br />
          <span className="italic text-brand">true</span> story.
        </h2>
        <p className="text-text-muted text-lg lg:text-xl font-light mb-16 max-w-2xl mx-auto text-pretty">
          Download the FirstDate app and join thousands who have reclaimed their dating life with intentionality.
        </p>
        <div className="flex justify-center">
          <AppStoreBadges variant="dark" />
        </div>
        <p className="mt-8 text-xs text-text-subtle uppercase tracking-[0.3em] font-bold">
          Free · iOS &amp; Android · No ads
        </p>
      </div>
    </section>
  );
}