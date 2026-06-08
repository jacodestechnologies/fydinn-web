import heroImage from "@/assets/hero image 1.png";
import { AppStoreBadges } from "./ui";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden text-white"
      style={{
        background: "linear-gradient(180deg, #7C3AED 0%, #6A24D6 52%, #5B1FB8 100%)",
      }}
    >
      {/* Concentric ripple arcs, centred on the bottom-centre */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {[44, 62, 82, 104].map((size, i) => (
          <div
            key={size}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full border"
            style={{
              width: `${size}rem`,
              height: `${size}rem`,
              borderColor: `rgba(255,255,255,${(0.13 - i * 0.027).toFixed(3)})`,
            }}
          />
        ))}
      </div>

      {/* Scattered photos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 lg:block"
      >
        <img src={heroImage} alt="" className="w-full" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(88svh-4rem)] max-w-3xl flex-col items-center justify-center px-5 py-20 text-center sm:px-6 lg:py-28">
        {/* Eyebrow */}
        <div className="hero-eyebrow mb-8 flex items-center gap-3">
          <span className="h-px w-8 bg-white/40" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
            Where meaningful connections begin
          </span>
          <span className="h-px w-8 bg-white/40" aria-hidden="true" />
        </div>

        {/* Stacked title cards */}
        <h1 className="flex flex-col items-center gap-3 text-[clamp(2.75rem,8vw,5.5rem)] font-bold leading-none tracking-tight">
          <span className="hero-card-1 inline-block rounded-[1.5rem] bg-white px-7 py-3 text-brand shadow-[0_16px_48px_rgba(20,12,40,0.25)]">
            Explore
          </span>
          <span className="hero-card-2 inline-block rounded-[1.5rem] bg-deep-purple px-7 py-3 text-white shadow-[0_16px_48px_rgba(20,12,40,0.35)]">
            with Intent
          </span>
        </h1>

        <p className="hero-sub mx-auto mt-9 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          You have potential new connections waiting. Unlock premium to see who has already reached
          out to you.
        </p>

        <div className="hero-btns mt-9">
          <AppStoreBadges align="center" />
        </div>

        <p className="hero-note mt-5 text-sm text-white/55">
          Free to download. Match by intent, not just looks.
        </p>
      </div>
    </section>
  );
}
