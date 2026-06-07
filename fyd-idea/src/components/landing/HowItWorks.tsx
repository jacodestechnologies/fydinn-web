import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { APP_CONFIG } from "@/lib/config";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    n: "01",
    title: "Curate Your Story",
    body: "Share your values, journey, and exactly what you're looking for in a partner.",
  },
  {
    n: "02",
    title: "Explore Intentions",
    body: "Browse vetted profiles of people who are looking for exactly what you are.",
  },
  {
    n: "03",
    title: "Connect & Chat",
    body: "Engage in focused, meaningful dialogue through our private messaging suite.",
  },
  {
    n: "04",
    title: "Meet & Enjoy",
    body: "Head out to a curated local event and let the connection take its course.",
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = Array.from(sectionRef.current!.querySelectorAll<HTMLElement>(".step-item"));
      gsap.from(items, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: items[0],
          start: "top 85%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-32 lg:py-40 border-t border-hairline">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="font-display text-5xl lg:text-6xl font-bold tracking-tighter text-text-main leading-[1] max-w-xl">
            The Journey to
            <br />
            Your <em className="not-italic text-brand">{APP_CONFIG.name}</em>
          </h2>
          <p className="text-text-muted font-light text-base max-w-xs leading-relaxed md:text-right">
            Four intentional steps from digital match to real-world connection.
          </p>
        </div>

        {/* Steps */}
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-hairline border border-hairline">
          {steps.map((s) => (
            <li
              key={s.n}
              className="step-item p-10 lg:p-12 flex flex-col gap-6 group hover:bg-surface-muted/40 transition-colors duration-300"
            >
              <span className="font-display text-[5rem] font-bold leading-none text-surface-elevated group-hover:text-brand/30 transition-colors duration-500">
                {s.n}
              </span>
              <div className="space-y-3">
                <h3 className="font-display text-xl font-bold tracking-tight text-text-main">
                  {s.title}
                </h3>
                <p className="text-sm text-text-muted font-light leading-relaxed">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
