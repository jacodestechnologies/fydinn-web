import elena from "@/assets/avatar-elena.jpg";
import marcus from "@/assets/avatar-marcus.jpg";
import sarah from "@/assets/avatar-sarah.jpg";

const items = [
  {
    img: elena,
    name: "Elena, 29",
    quote:
      "I appreciated the verification process. It made me feel much more comfortable meeting someone new for the first time.",
    featured: false,
  },
  {
    img: marcus,
    name: "Marcus, 34",
    quote:
      "The event suggestions are brilliant. We went to a small pottery workshop they recommended and it was the perfect icebreaker.",
    featured: true,
  },
  {
    img: sarah,
    name: "Sarah, 31",
    quote:
      "FirstDate actually feels different. The conversations are more focused on what matters rather than just small talk.",
    featured: false,
  },
];

export function Testimonials() {
  return (
    <section className="py-32 lg:py-40 border-t border-hairline overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 flex flex-col sm:flex-row gap-8 sm:items-end sm:justify-between">
          <h2 className="font-display text-5xl lg:text-6xl font-bold italic tracking-tighter text-text-main">
            Voices of the Community
          </h2>
          <p className="text-text-subtle text-sm max-w-xs font-light">
            Members on what made FirstDate different from everything else they tried.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((t) => (
            <figure
              key={t.name}
              className={`p-10 rounded-[2.5rem] flex flex-col gap-10 ${
                t.featured
                  ? "bg-brand shadow-2xl shadow-brand/20 md:-translate-y-4"
                  : "border border-hairline bg-surface-muted/30"
              }`}
            >
              <blockquote
                className={`text-lg lg:text-xl font-light italic leading-relaxed text-pretty ${
                  t.featured ? "text-white" : "text-text-main"
                }`}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-4">
                <img
                  src={t.img}
                  alt={`Portrait of ${t.name}`}
                  width={48}
                  height={48}
                  loading="lazy"
                  className={`size-12 rounded-full object-cover ring-1 ${
                    t.featured ? "ring-white/30" : "ring-hairline grayscale opacity-80"
                  }`}
                />
                <span
                  className={`text-[11px] font-bold tracking-[0.22em] uppercase ${
                    t.featured ? "text-white" : "text-text-main"
                  }`}
                >
                  {t.name}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}