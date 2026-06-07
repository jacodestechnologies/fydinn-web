import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { APP_CONFIG } from "@/lib/config";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: `Which devices is ${APP_CONFIG.name} available on?`,
    a: `${APP_CONFIG.name} is available as a free download on both iOS (iPhone, iPad) and Android via the App Store and Google Play.`,
  },
  {
    q: "Is identity verification mandatory?",
    a: "Yes — every member completes a brief in-app verification step before they can interact with others, which is how we keep trust levels high.",
  },
  {
    q: "Does the app work in my city?",
    a: `${APP_CONFIG.name} is live in major urban centers globally and expanding to new regions every month. Download the app to check coverage near you.`,
  },
  {
    q: "Is the app free?",
    a: "Downloading and using the core features is completely free. A premium tier unlocks extras like travel mode and unlimited likes.",
  },
  {
    q: "How does the matching algorithm work?",
    a: "Our system analyzes your stated values, lifestyle preferences, and interaction patterns to surface compatible matches — not just looks and proximity.",
  },
  {
    q: "How do you keep the platform safe?",
    a: "Beyond mandatory ID verification, we use AI-powered content moderation, end-to-end encryption on messages, and a trust and safety team available around the clock.",
  },
];

export function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const header = sectionRef.current!.querySelector<HTMLElement>(".faq-header");
      const list = sectionRef.current!.querySelector<HTMLElement>(".faq-list");
      if (header && list) {
        gsap.from([header, list], {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: header, start: "top 85%" },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="faq" ref={sectionRef} className="py-32 lg:py-40 border-t border-hairline">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
        {/* Left label */}
        <div className="faq-header">
          <h2 className="font-display text-5xl lg:text-6xl font-bold tracking-tighter text-text-main leading-[1] sticky top-28">
            Frequently
            <br />
            Asked
            <br />
            <em className="not-italic text-brand">Questions</em>
          </h2>
        </div>

        {/* Accordion */}
        <div className="faq-list">
          <Accordion type="single" collapsible>
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="border-b border-hairline py-2 data-[state=open]:border-brand/40"
              >
                <AccordionTrigger className="font-display text-base font-semibold text-text-main hover:no-underline hover:text-brand text-left py-5 transition-colors data-[state=open]:text-brand [&>svg]:hidden">
                  <span className="flex items-start justify-between w-full gap-4">
                    {f.q}
                    <span className="text-text-subtle text-lg font-light shrink-0 mt-0.5 transition-transform [[data-state=open]_&]:rotate-45">
                      +
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-text-muted font-light leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
