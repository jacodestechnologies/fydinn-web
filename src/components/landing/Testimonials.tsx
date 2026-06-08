import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import elena from "@/assets/avatar-elena.jpg";
import marcus from "@/assets/avatar-marcus.jpg";
import sarah from "@/assets/avatar-sarah.jpg";
import { APP_CONFIG } from "@/lib/config";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    img: elena,
    name: "Elena, 29",
    location: "Lagos",
    quote:
      "The verification process made me feel genuinely safe meeting someone new for the first time. That trust matters.",
  },
  {
    img: marcus,
    name: "Marcus, 34",
    location: "London",
    quote:
      "The event suggestions are inspired. We went to a small pottery workshop they recommended — perfect first meeting.",
  },
  {
    img: sarah,
    name: "Sarah, 31",
    location: "New York",
    quote: `${APP_CONFIG.name} feels different. Conversations here move past small talk into what actually matters.`,
  },
];

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = Array.from(
        sectionRef.current!.querySelectorAll<HTMLElement>(".testimonial-item"),
      );
      gsap.from(cards, {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: cards[0],
          start: "top 85%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 lg:py-40 border-t border-hairline">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <h2 className="font-display text-5xl lg:text-6xl font-bold tracking-tighter text-text-main leading-[1]">
            Voices of the
            <br />
            <em className="not-italic text-brand">Community</em>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-hairline border-t border-b border-hairline">
          {items.map((t) => (
            <figure
              key={t.name}
              className="testimonial-item flex flex-col gap-10 px-0 md:px-10 py-12 first:pl-0 last:pr-0"
            >
              <blockquote className="font-display text-xl font-normal italic leading-relaxed text-text-main flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="flex items-center gap-4">
                <img
                  src={t.img}
                  alt={`Portrait of ${t.name}`}
                  width={48}
                  height={48}
                  loading="lazy"
                  className="size-12 object-cover grayscale"
                />
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-main">
                    {t.name}
                  </p>
                  <p className="text-[11px] font-normal uppercase tracking-[0.15em] text-text-subtle mt-0.5">
                    {t.location}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
