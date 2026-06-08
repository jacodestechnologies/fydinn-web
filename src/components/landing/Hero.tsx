import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import heroCouple from "@/assets/hero-couple.jpg";
import { AppStoreBadges } from "@/components/landing/AppStoreBadges";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".hero-eyebrow", { opacity: 0, y: 16, duration: 0.6 })
        .from(".hero-h1", { opacity: 0, y: 48, duration: 0.9 }, "-=0.3")
        .from(".hero-p", { opacity: 0, y: 30, duration: 0.7 }, "-=0.4")
        .from(".hero-badges", { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
        .from(".hero-note", { opacity: 0, duration: 0.5 }, "-=0.2")
        .from(".hero-image", { opacity: 0, x: 60, duration: 1.1, ease: "power2.out" }, "-=0.9");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative overflow-hidden min-h-[calc(100vh-5rem)] flex items-center py-24"
    >
      {/* Subtle ambient glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[60vw] h-[60vw] max-w-3xl max-h-3xl bg-brand/6 blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">
        {/* Left — copy */}
        <div className="space-y-10">
          <p className="hero-eyebrow text-[11px] text-text-muted">
            Explore with Intent
          </p>

          <h1 className="hero-h1 font-display text-[clamp(4rem,8vw,6.5rem)] font-bold leading-[0.88] tracking-[-0.03em] text-text-main">
            Find Your
            <br />
            <em className="text-brand not-italic">Last</em> First
            <br />
            Date.
          </h1>

          <p className="hero-p text-lg text-text-muted font-light max-w-md leading-relaxed">
            Send your intent. MeantGo finds you with people who are looking for exactly what you are. Real connections, same vision.
          </p>

          <div className="hero-badges">
            <AppStoreBadges />
          </div>

          <p className="hero-note text-[11px] text-text-subtle uppercase tracking-[0.3em] font-semibold">
            Free · iOS &amp; Android · No ads
          </p>
        </div>

        {/* Right — image */}
        <div className="hero-image relative">
          <div
            className="aspect-[4/5] overflow-hidden border border-hairline"
            style={{ transform: "rotate(1.5deg)" }}
          >
            <img
              src={heroCouple}
              alt="A couple sharing an intimate moment at a dimly lit lounge"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/40 via-transparent to-transparent pointer-events-none" />
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-12 -left-12 w-56 h-56 bg-brand/15 blur-[80px] -z-10"
          />
        </div>
      </div>
    </section>
  );
}
