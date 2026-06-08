import { steps } from "./data";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#0B0A12] py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="reveal-heading text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[1.04] tracking-tight text-white">
            From download to first connection.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/55">
            A calmer path from curiosity to contact. Each step gives people more context before
            anyone has to make a move.
          </p>
        </div>

        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="step-card">
                <Icon className="size-7 text-brand" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-bold leading-snug text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">{step.body}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
