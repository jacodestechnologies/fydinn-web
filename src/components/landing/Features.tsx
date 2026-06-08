import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    n: "01",
    title: "Smart Matching",
    body: "Our algorithm weighs shared values and lifestyle compatibility over superficial traits. Real chemistry starts deeper than a photo.",
  },
  {
    n: "02",
    title: "Verified Profiles",
    body: "Every member completes mandatory identity verification before connecting. A trusted community is the foundation of every great relationship.",
  },
  {
    n: "03",
    title: "Secure Messaging",
    body: "End-to-end encrypted conversations and built-in safety tools keep your privacy intact — from first message to first date.",
  },
  {
    n: "04",
    title: "Event Curation",
    body: "Receive curated local date ideas based on your mutual interests. First meetings that feel natural, never forced.",
  },
];

export function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      Array.from(sectionRef.current!.querySelectorAll<HTMLElement>(".feature-row")).forEach(
        (row) => {
          gsap.from(row, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 88%",
            },
          });
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-32 lg:py-40 border-t border-hairline">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="font-display text-5xl lg:text-6xl font-bold tracking-tighter text-text-main leading-[1] max-w-lg">
            Built for
            <br />
            <em className="not-italic text-brand">Real</em> Connection
          </h2>
          <p className="text-text-muted font-light text-base max-w-xs leading-relaxed md:text-right">
            Every feature designed with intentionality at its core.
          </p>
        </div>

        {/* Feature rows */}
        <div className="divide-y divide-hairline">
          {features.map((f) => (
            <div
              key={f.n}
              className="feature-row grid grid-cols-[4rem_1fr] lg:grid-cols-[5rem_20rem_1fr] gap-x-8 lg:gap-x-16 gap-y-3 py-10 group cursor-default"
            >
              <span className="font-display text-3xl font-bold text-surface-elevated group-hover:text-brand transition-colors duration-500 leading-none row-span-2 lg:row-span-1 self-start pt-1">
                {f.n}
              </span>
              <h3 className="font-display text-2xl font-bold tracking-tight text-text-main self-start leading-tight">
                {f.title}
              </h3>
              <p className="text-text-muted font-light leading-relaxed self-start col-start-2 lg:col-start-3">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
