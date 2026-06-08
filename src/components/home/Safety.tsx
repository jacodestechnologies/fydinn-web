import { trustPoints } from "./data";
import { SectionLabel } from "./ui";

export function Safety() {
  return (
    <section id="safety" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionLabel>Your Safety. Our Priority.</SectionLabel>
          <h2 className="reveal-heading text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.05] tracking-tight text-ink">
            Connect freely. Stay protected.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink/55">
            MeantGo is designed to put you in control at every step. Safety is not an afterthought
            here. It is the foundation.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.label}
                className="trust-point group rounded-3xl bg-lilac/60 p-7 transition-all duration-200 hover:-translate-y-1 hover:bg-lilac hover:shadow-[0_16px_40px_rgba(124,58,237,0.12)]"
              >
                <div className="mb-6 grid size-11 place-items-center rounded-2xl bg-brand/15 transition-colors group-hover:bg-brand">
                  <Icon
                    className="size-5 text-brand transition-colors group-hover:text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-semibold text-ink">{point.label}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink/55">{point.copy}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
