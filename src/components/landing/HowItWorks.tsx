import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Send, Users, MapPin, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Send,
    title: "Send Your Intent",
    body: "Tell us what you're looking for. Your values, goals, and what matters most.",
    color: "from-purple-500/20 to-fuchsia-500/20",
    iconColor: "text-purple-500",
  },
  {
    icon: Zap,
    title: "Get Matched",
    body: "Our algorithm finds people who share your exact vision and intentions.",
    color: "from-fuchsia-500/20 to-pink-500/20",
    iconColor: "text-fuchsia-500",
  },
  {
    icon: Users,
    title: "Connect Meaningfully",
    body: "Start conversations with people who are actually looking for what you are.",
    color: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-500",
  },
  {
    icon: MapPin,
    title: "Meet in Person",
    body: "From message to coffee date. Let intent become reality.",
    color: "from-rose-500/20 to-orange-500/20",
    iconColor: "text-rose-500",
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      gsap.from(".hiw-title", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hiw-title",
          start: "top 85%",
        },
      });

      gsap.from(".hiw-subtitle", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hiw-subtitle",
          start: "top 85%",
        },
      });

      // Animate cards with stagger
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        gsap.from(card, {
          opacity: 0,
          y: 40,
          rotation: -2,
          duration: 0.6,
          delay: index * 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });

        // Add hover animation
        const hoverTimeline = gsap.timeline({ paused: true });
        hoverTimeline
          .to(card, {
            y: -8,
            boxShadow: "0 24px 48px rgba(168, 85, 247, 0.15)",
            duration: 0.3,
            ease: "power2.out",
          }, 0)
          .to(card.querySelector(".hiw-icon"), {
            scale: 1.1,
            duration: 0.3,
            ease: "back.out",
          }, 0);

        card.addEventListener("mouseenter", () => hoverTimeline.play());
        card.addEventListener("mouseleave", () => hoverTimeline.reverse());
      });

      // Animate connection lines
      const lines = Array.from(document.querySelectorAll<HTMLElement>(".hiw-line"));
      if (lines.length > 0) {
        lines.forEach((line, index) => {
          gsap.from(line, {
            scaleX: 0,
            opacity: 0,
            duration: 0.6,
            delay: (index + 1) * 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: lines[0],
              start: "top 85%",
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-32 lg:py-40 border-t border-hairline overflow-hidden"
    >
      {/* Ambient background gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-brand/3 via-transparent to-transparent pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="hiw-subtitle text-[11px] font-bold uppercase tracking-[0.4em] text-brand mb-4">
              The Intent Journey
            </p>
            <h2 className="hiw-title font-display text-5xl lg:text-6xl font-bold tracking-tighter text-text-main leading-[1] max-w-2xl">
              From Intent to
              <br />
              Real Connection
            </h2>
          </div>
          <p className="text-text-muted font-light text-base max-w-xs leading-relaxed md:text-right">
            Four steps where every action is guided by what you really want.
          </p>
        </div>

        {/* Steps Grid with Connection Lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col items-stretch">
                {/* Card */}
                <div
                  ref={(el) => {
                    if (el) cardsRef.current[index] = el;
                  }}
                  className={`group relative flex-1 rounded-2xl border border-hairline p-8 bg-gradient-to-br ${step.color} backdrop-blur-sm transition-all duration-300 hover:border-brand/40 cursor-pointer`}
                >
                  {/* Decorative element */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl bg-gradient-to-br from-brand/5 to-transparent pointer-events-none"
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full gap-5">
                    {/* Icon Container */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand/10 to-brand/5 flex items-center justify-center group-hover:from-brand/20 group-hover:to-brand/10 transition-all duration-300">
                      <Icon className={`hiw-icon w-7 h-7 ${step.iconColor} transition-transform duration-300`} />
                    </div>

                    {/* Step Number */}
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-brand/70 group-hover:text-brand transition-colors duration-300">
                        Step {index + 1}
                      </span>
                    </div>

                    {/* Title & Body */}
                    <div className="space-y-3 flex-1">
                      <h3 className="font-display text-lg font-bold text-text-main group-hover:text-brand transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-sm text-text-muted font-light leading-relaxed group-hover:text-text-muted/90 transition-colors duration-300">
                        {step.body}
                      </p>
                    </div>

                    {/* Arrow accent */}
                    <div className="flex items-center gap-2 text-brand/0 group-hover:text-brand transition-all duration-300">
                      <span className="text-xs font-semibold">Next</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Connecting Line (desktop only, between cards) */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden lg:flex items-center justify-center py-4"
                    aria-hidden="true"
                  >
                    <div className="hiw-line h-12 w-1 bg-gradient-to-b from-brand/40 to-brand/10 rounded-full origin-top" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA subtle text */}
        <div className="mt-16 text-center">
          <p className="text-text-muted font-light text-sm">
            Every step is designed around your intent.{" "}
            <span className="text-brand font-semibold">That's the MeantGo difference.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
