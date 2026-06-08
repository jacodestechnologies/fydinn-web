import { testimonials } from "./data";
import { SectionLabel, Stars } from "./ui";

export function Testimonials() {
  return (
    <section className="bg-surface-muted py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.74fr_1fr] lg:items-end">
          <div>
            <SectionLabel>Real Stories. Real Connections.</SectionLabel>
            <h2 className="reveal-heading text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
              They started with one honest Intent.
            </h2>
          </div>
          <p className="max-w-lg text-base leading-relaxed text-ink/55 lg:justify-self-end">
            Real connection feels less random when people can name what they want and find someone
            already moving in the same direction.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="testimonial-card group relative overflow-hidden rounded-3xl border border-ink/8 bg-surface p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(124,58,237,0.12)]"
            >
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-brand to-brand-light opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="mb-6 flex items-center justify-between">
                <Stars count={5} />
                <span className="select-none text-3xl font-bold leading-none text-brand/12">"</span>
              </div>

              <blockquote className="min-h-40 text-base leading-relaxed text-ink/68">
                "{item.quote}"
              </blockquote>

              <figcaption className="mt-7 flex items-center gap-3 border-t border-ink/8 pt-5">
                <img
                  src={item.img}
                  alt={`Portrait of ${item.name}`}
                  className="size-11 rounded-full object-cover ring-2 ring-brand/15 transition-all duration-200 group-hover:ring-brand/40"
                />
                <div>
                  <p className="text-sm font-semibold text-ink">{item.name}</p>
                  <p className="text-xs text-ink/45">{item.location}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
