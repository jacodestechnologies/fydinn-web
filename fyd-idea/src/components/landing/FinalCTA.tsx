import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AppStoreBadges } from "@/components/landing/AppStoreBadges";
import { APP_CONFIG } from "@/lib/config";

gsap.registerPlugin(ScrollTrigger);

export function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const children = Array.from(
        sectionRef.current!.querySelectorAll<HTMLElement>(".cta-animate"),
      );
      gsap.from(children, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="py-40 lg:py-56 border-t border-hairline overflow-hidden relative"
    >
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-4xl max-h-4xl bg-brand/6 blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative">
        <p className="cta-animate text-[11px] font-bold uppercase tracking-[0.4em] text-brand mb-8">
          Join Thousands Finding Real Love
        </p>

        <h2 className="cta-animate font-display text-[clamp(3.5rem,8vw,6.5rem)] font-bold tracking-[-0.03em] leading-[0.88] text-text-main mb-10">
          Start Your
          <br />
          <em className="not-italic text-brand">True</em> Story.
        </h2>

        <p className="cta-animate text-lg text-text-muted font-light max-w-xl mx-auto leading-relaxed mb-14">
          Download {APP_CONFIG.name} and join thousands who have reclaimed their dating life with
          intentionality and purpose.
        </p>

        <div className="cta-animate flex justify-center mb-8">
          <AppStoreBadges />
        </div>

        <p className="cta-animate text-[11px] text-text-subtle uppercase tracking-[0.3em] font-semibold">
          Free · iOS &amp; Android · No hidden fees
        </p>
      </div>
    </section>
  );
}
