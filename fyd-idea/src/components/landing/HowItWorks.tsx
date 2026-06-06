const steps = [
  { n: 1, title: "Curate Your Story", body: "Share your journey, values, and what you seek in a partner." },
  { n: 2, title: "Explore Intentions", body: "Browse vetted profiles who are looking for exactly what you are." },
  { n: 3, title: "Connect & Chat", body: "Engage in focused dialogue through our private messaging suite." },
  { n: 4, title: "Meet & Enjoy", body: "Head out to a curated local event and let the magic happen." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:items-end lg:justify-between mb-24">
          <div className="max-w-2xl">
            <h2 className="font-display text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tighter mb-6 text-balance text-text-main">
              The Journey to Your <span className="italic text-brand">FirstDate</span>
            </h2>
            <p className="text-text-muted text-lg font-light text-pretty">
              Four intentional steps designed to move you from a digital match to a real-world experience.
            </p>
          </div>
          <div className="hidden lg:block w-32 h-px bg-hairline" />
        </div>
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {steps.map((s) => (
            <li key={s.n} className="group">
              <div
                className="font-display text-[120px] font-bold leading-none mb-6 text-surface-muted group-hover:text-rose-950 transition-colors duration-500"
                aria-hidden="true"
              >
                {String(s.n).padStart(2, "0")}
              </div>
              <h3 className="font-display text-xl font-bold mb-3 tracking-tight text-text-main">{s.title}</h3>
              <p className="text-sm text-text-subtle leading-relaxed font-light">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}