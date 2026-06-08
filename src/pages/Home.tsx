import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hero } from "@/components/home/Hero";
import { DatingApps } from "@/components/home/DatingApps";
import { Features } from "@/components/home/Features";
import { HowItWorks } from "@/components/home/HowItWorks";
import { StatsBand } from "@/components/home/StatsBand";
import { Testimonials } from "@/components/home/Testimonials";
import { Safety } from "@/components/home/Safety";
import { DownloadCta } from "@/components/home/DownloadCta";

gsap.registerPlugin(ScrollTrigger);

// Testimonials section is hidden to match the reference design. Flip to true to restore.
const SHOW_TESTIMONIALS = false;

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  // Hero intro timeline (plays on mount).
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".hero-eyebrow", { opacity: 0, y: 12, duration: 0.5 })
        .from(".hero-card-1", { opacity: 0, y: 28, scale: 0.92, duration: 0.6 }, "-=0.2")
        .from(".hero-card-2", { opacity: 0, y: 28, scale: 0.92, duration: 0.6 }, "-=0.4")
        .from(".hero-sub", { opacity: 0, y: 24, duration: 0.6 }, "-=0.3")
        .from(".hero-btns", { opacity: 0, y: 16, duration: 0.5 }, "-=0.3")
        .from(".hero-note", { opacity: 0, duration: 0.4 }, "-=0.2");
    }, mainRef);
    return () => ctx.revert();
  }, []);

  // Scroll-triggered reveals across the page.
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-article", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ".feature-article", start: "top 82%" },
      });

      gsap.from(".depth-card-wrap", {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".depth-card-wrap", start: "top 85%" },
      });

      gsap.from(".step-card", {
        opacity: 0,
        y: 32,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ".step-card", start: "top 85%" },
      });

      gsap.from(".testimonial-card", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ".testimonial-card", start: "top 85%" },
      });

      gsap.from(".trust-point", {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: ".trust-point", start: "top 85%" },
      });

      Array.from(document.querySelectorAll<HTMLElement>(".reveal-heading")).forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 32,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 86%" },
        });
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  // Refresh ScrollTrigger once images load to fix stale trigger positions.
  useLayoutEffect(() => {
    const handleImageLoad = () => {
      ScrollTrigger.refresh();
    };

    // Listen for image load events and refresh on completion
    window.addEventListener("load", handleImageLoad);
    
    // Fallback: refresh after a short delay if images take a while
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1500);

    return () => {
      window.removeEventListener("load", handleImageLoad);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div ref={mainRef} className="min-h-dvh overflow-hidden bg-surface text-ink">
      <Hero />
      <DatingApps />
      <Features />
      <HowItWorks />
      <StatsBand />
      {SHOW_TESTIMONIALS && <Testimonials />}
      <Safety />
      <DownloadCta />
    </div>
  );
}
