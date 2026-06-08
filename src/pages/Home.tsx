import { useLayoutEffect, useRef, useState, useEffect, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Bell,
  Compass,
  EyeOff,
  Flag,
  Heart,
  Lock,
  MapPinned,
  Play,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  UserRoundCheck,
} from "lucide-react";
import heroCouple from "@/assets/hero-couple.jpg";
import amara from "@/assets/avatar-elena.jpg";
import chidinma from "@/assets/avatar-sarah.jpg";
import dayo from "@/assets/avatar-marcus.jpg";

gsap.registerPlugin(ScrollTrigger);

/* ── data ────────────────────────────────────────────────── */

const stats = [
  {
    value: "500K+",
    label: "Connections Made",
    detail: "real starts, not endless swipes",
    icon: "ri-chat-heart-line",
    emoji: "✨",
  },
  {
    value: "4.8",
    label: "App Store Rating",
    detail: "loved for calmer discovery",
    icon: "ri-star-smile-line",
    emoji: "⭐",
  },
  {
    value: "60+",
    label: "Shared Interests",
    detail: "ways to find common ground",
    icon: "ri-compass-discover-line",
    emoji: "🎯",
  },
  {
    value: "3",
    label: "Relationship Goals",
    detail: "clear intent from day one",
    icon: "ri-hearts-line",
    emoji: "💜",
  },
];

const features = [
  {
    eyebrow: "01",
    title: "Your interests are your introduction.",
    body: "Before you say a word, MeantGo already knows you love hiking at sunrise, are obsessed with Studio Ghibli, and cannot live without good coffee. It finds people who feel the same way.",
    visual: "tags",
  },
  {
    eyebrow: "02",
    title: "Know what you're walking into — every time.",
    body: "Nobody should waste months figuring out if you are on the same page. Everyone says what they are looking for upfront: a serious relationship, something casual, or a genuine friendship.",
    visual: "intentions",
  },
  {
    eyebrow: "03",
    title: "See them. Hear them. Know them.",
    body: "Photos tell you what someone looks like. A video tells you how they laugh, what lights them up, and whether their energy matches yours.",
    visual: "video",
  },
  {
    eyebrow: "04",
    title: "A feed that feels like possibility, not pressure.",
    body: "No frantic swiping. No split-second judgements. Take the space to read a bio, watch a video, see what someone is about, and then decide if you want to connect.",
    visual: "feed",
  },
  {
    eyebrow: "05",
    title: "Show genuine interest. No games, no guessing.",
    body: "Send an Intent to someone you are genuinely interested in. They will see it, think it over, and respond when they are ready. It is connection, not competition.",
    visual: "intents",
  },
];

const steps = [
  {
    icon: Sparkles,
    remixIcon: "ri-magic-line",
    eyebrow: "Reflect",
    title: "Build a profile that feels like you",
    body: "Add photos, a short video intro, and the interests that make your world specific.",
    cue: "Your vibe, in context",
  },
  {
    icon: Flag,
    remixIcon: "ri-flag-2-line",
    eyebrow: "Declare",
    title: "Say what you're actually looking for",
    body: "Choose serious relationship, casual dating, or friendship before discovery begins.",
    cue: "No mixed signals",
  },
  {
    icon: Compass,
    remixIcon: "ri-compass-3-line",
    eyebrow: "Explore",
    title: "Browse people with common ground",
    body: "Move through profiles curated by intention, interests, distance, and momentum.",
    cue: "Explore with intent",
  },
  {
    icon: Send,
    remixIcon: "ri-send-plane-line",
    eyebrow: "Reach",
    title: "Send an Intent when it feels right",
    body: "Start from genuine interest, not pressure, guessing, or throwaway openers.",
    cue: "Clear next step",
  },
];

const interestCategories = [
  {
    label: "Creative",
    icon: "ri-palette-line",
    tags: ["Art", "Animation", "Poetry", "Architecture"],
  },
  { label: "Culture", icon: "ri-movie-2-line", tags: ["Anime", "Movies", "Concerts", "Reading"] },
  { label: "Lifestyle", icon: "ri-cup-line", tags: ["Coffee", "Baking", "Yoga", "Restaurants"] },
  {
    label: "Adventure",
    icon: "ri-route-line",
    tags: ["Hiking", "Travel", "Road Trips", "Powerlifting"],
  },
];

const testimonials = [
  {
    quote:
      "I sent my intent looking for someone who loves art documentaries. Matched with someone the next day who feels exactly the same. We talked for hours.",
    name: "Amara, 29",
    location: "Abuja",
    img: amara,
  },
  {
    quote:
      "What I love is that I knew what he was looking for before we even matched. No mixed signals, no wasted time. Just two people on the same page.",
    name: "Chidinma, 26",
    location: "Lagos",
    img: chidinma,
  },
  {
    quote:
      "I was clear about looking for hiking buddies. MeantGo connected me with three people who share that exact intent. Found my crew in two weeks.",
    name: "Dayo, 31",
    location: "London",
    img: dayo,
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    label: "Profile Verification",
    copy: "Every account goes through a verification layer before going live.",
  },
  {
    icon: Lock,
    label: "Secure Messaging",
    copy: "Your conversations are private. Your data is yours.",
  },
  {
    icon: Bell,
    label: "You Control Your Status",
    copy: "Set yourself as open to Intents — or take a break — anytime.",
  },
  {
    icon: EyeOff,
    label: "Visibility Settings",
    copy: "Control who can find you and how your profile appears.",
  },
];

/* ── helpers ─────────────────────────────────────────────── */

function AppStoreBadges({ align = "start" }: { align?: "start" | "center" }) {
  return (
    <div className={`flex flex-wrap gap-3 ${align === "center" ? "justify-center" : ""}`}>
      <a
        href="#download"
        className="inline-block rounded-[9px] transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        aria-label="Download on the App Store"
      >
        <svg
          width="148"
          height="48"
          viewBox="0 0 148 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="148" height="48" rx="8" fill="#000" />
          <path
            d="M23.4 10.4C22.6 11.4 21.5 12.1 20.4 12.0C20.2 10.9 20.8 9.8 21.5 9.0C22.3 8.1 23.5 7.5 24.5 7.4C24.6 8.6 24.1 9.7 23.4 10.4Z"
            fill="white"
          />
          <path
            d="M24.5 12.3C22.7 12.2 21.1 13.3 20.2 13.3C19.2 13.3 17.8 12.4 16.4 12.4C14.3 12.5 12.4 13.7 11.4 15.5C9.3 19.3 10.7 24.9 12.8 27.9C13.8 29.4 15.0 31.0 16.6 31.0C18.1 30.9 18.7 30.0 20.4 30.0C22.2 30.0 22.7 31.0 24.3 30.9C25.9 30.9 27.0 29.4 28.1 27.9C29.2 26.3 29.6 24.8 29.6 24.7C29.6 24.6 26.9 23.6 26.9 20.5C26.9 17.8 29.1 16.5 29.1 16.5C27.8 14.5 25.6 12.4 24.5 12.3Z"
            fill="white"
          />
          <text
            x="40"
            y="20"
            fill="white"
            fontSize="9"
            fontFamily="-apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif"
          >
            Download on the
          </text>
          <text
            x="40"
            y="36"
            fill="white"
            fontSize="17"
            fontFamily="-apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif"
            fontWeight="600"
          >
            App Store
          </text>
        </svg>
      </a>
      <a
        href="#download"
        className="inline-block rounded-[9px] transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        aria-label="Get it on Google Play"
      >
        <svg
          width="162"
          height="48"
          viewBox="0 0 162 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="162" height="48" rx="8" fill="#000" />
          <path d="M11.5 15.5L11.5 32.5L23.0 24.0Z" fill="#01875F" />
          <path d="M11.5 15.5L23.0 24.0L28.0 19.2L17.5 12.5Z" fill="#FBBC04" />
          <path d="M11.5 32.5L23.0 24.0L28.0 28.8L17.5 35.5Z" fill="#EA4335" />
          <path d="M23.0 24.0L28.0 19.2L33.0 24.0L28.0 28.8Z" fill="#4285F4" />
          <text
            x="44"
            y="20"
            fill="white"
            fontSize="9"
            fontFamily="-apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif"
          >
            Get it on
          </text>
          <text
            x="44"
            y="36"
            fill="white"
            fontSize="17"
            fontFamily="-apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif"
            fontWeight="600"
          >
            Google Play
          </text>
        </svg>
      </a>
    </div>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-brand">
      <span className="h-px w-5 shrink-0 bg-brand/60" aria-hidden="true" />
      {children}
    </p>
  );
}

function PhoneShell({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[21rem] rounded-[2.25rem] border border-white/60 bg-zinc-950 p-3 shadow-2xl">
      <div className="overflow-hidden rounded-[1.75rem] bg-warm-cream text-ink">{children}</div>
    </div>
  );
}

/* ── animated feature visuals ───────────────────────────── */

function IntentionsVisual() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % 3), 2200);
    return () => clearInterval(id);
  }, []);

  const options = [
    { title: "Serious Relationship", copy: "Looking for something lasting" },
    { title: "Casual Dating", copy: "Open, honest, easygoing" },
    { title: "Friendship", copy: "Build community first" },
  ];

  return (
    <div className="grid gap-3">
      {options.map(({ title, copy }, i) => (
        <div
          key={title}
          style={{
            transform: i === active ? "translateY(-2px) scale(1.015)" : "translateY(0) scale(1)",
          }}
          className={`rounded-3xl border p-5 transition-all duration-500 ease-in-out ${
            i === active
              ? "border-brand bg-brand text-white shadow-[0_18px_45px_rgba(155,91,255,0.30)]"
              : "border-ink/12 bg-warm-cream/70 text-ink"
          }`}
        >
          <div className="flex items-center gap-3">
            <Target
              className={`size-5 shrink-0 transition-transform duration-500 ${i === active ? "scale-110" : "scale-100"}`}
              aria-hidden="true"
            />
            <div className="flex-1 min-w-0">
              <p className="font-bold leading-tight">{title}</p>
              <p
                className={`text-sm mt-0.5 transition-colors duration-500 ${i === active ? "text-white/80" : "text-ink/60"}`}
              >
                {copy}
              </p>
            </div>
            <div
              className={`size-2.5 shrink-0 rounded-full transition-all duration-500 ${i === active ? "bg-white/60 scale-100" : "scale-0 bg-transparent"}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function IntentsVisual() {
  const [tab, setTab] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setTab((t) => (t + 1) % 2);
        setFading(false);
      }, 300);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const receivedItems = [
    { text: "Ada sent an Intent", timing: "New", isNew: true },
    { text: "Nora is thinking it over", timing: "Today", isNew: false },
    { text: "Kele accepted", timing: "Today", isNew: false },
  ];
  const sentItems = [
    { text: "You sent to Temi", timing: "New", isNew: true },
    { text: "Waiting on Zara", timing: "Yesterday", isNew: false },
    { text: "Lola accepted", timing: "Today", isNew: false },
  ];
  const items = tab === 0 ? receivedItems : sentItems;

  return (
    <div className="rounded-[2rem] bg-warm-cream/80 p-5 shadow-soft border border-ink/6">
      <div className="relative mb-5 grid grid-cols-2 rounded-full bg-lilac p-1 text-sm font-bold">
        <div
          className="absolute inset-y-1 rounded-full bg-brand transition-all duration-500 ease-in-out"
          style={{ left: tab === 0 ? "4px" : "calc(50%)", width: "calc(50% - 4px)" }}
        />
        {["Received", "Sent"].map((label, i) => (
          <button
            key={label}
            onClick={() => setTab(i)}
            className={`relative z-10 px-4 py-2 text-center transition-colors duration-300 ${tab === i ? "text-white" : "text-brand-deep"}`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className={`transition-opacity duration-300 ${fading ? "opacity-0" : "opacity-100"}`}>
        {items.map(({ text, timing, isNew }) => (
          <div
            key={text}
            className="flex items-center justify-between border-t border-ink/10 py-4 first:border-t-0"
          >
            <div className="flex items-center gap-3">
              <div className="grid size-10 shrink-0 place-items-center rounded-full bg-peach">
                <Heart className="size-4 text-brand" aria-hidden="true" />
              </div>
              <span className="font-semibold text-ink text-sm">{text}</span>
            </div>
            <span className={`text-xs font-bold shrink-0 ${isNew ? "text-brand" : "text-ink/45"}`}>
              {timing}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureVisual({ type }: { type: string }) {
  if (type === "tags") {
    return (
      <div className="rounded-[2rem] bg-warm-cream/80 p-6 shadow-soft border border-ink/6">
        <div className="mb-6 flex items-center justify-between">
          <span className="text-sm font-bold text-ink">Common ground</span>
          <span className="rounded-full bg-mint px-3 py-1 text-xs font-bold text-ink">
            87% overlap
          </span>
        </div>
        <div className="flex flex-wrap gap-3">
          {[
            "Studio Ghibli",
            "Sunrise hikes",
            "Good coffee",
            "Indie films",
            "Sourdough",
            "Live music",
          ].map((tag, i) => (
            <span
              key={tag}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${i % 2 === 0 ? "bg-brand text-white" : "bg-lilac text-brand-deep"}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  }
  if (type === "intentions") return <IntentionsVisual />;
  if (type === "video") {
    return (
      <PhoneShell>
        <div className="relative aspect-[9/13]">
          <img src={heroCouple} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
          <button className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-brand shadow-xl">
            <Play className="ml-1 size-7 fill-current" aria-hidden="true" />
            <span className="sr-only">Play introduction video</span>
          </button>
          <div className="absolute inset-x-5 bottom-5 text-white">
            <p className="text-xl font-bold">Maya, 28</p>
            <p className="text-sm text-white/80">Talking about film, food, and Lagos sunsets</p>
          </div>
        </div>
      </PhoneShell>
    );
  }
  if (type === "feed") {
    return (
      <PhoneShell>
        <div className="p-4">
          <div className="mb-3 flex items-center justify-between text-xs font-bold text-ink/55">
            <span>Discover</span>
            <span>12 km away</span>
          </div>
          <img src={heroCouple} alt="" className="aspect-[4/5] w-full rounded-3xl object-cover" />
          <div className="space-y-3 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-ink">Tomi, 30</h3>
              <span className="rounded-full bg-mint px-3 py-1 text-xs font-bold text-ink">92%</span>
            </div>
            <p className="text-sm text-ink/65">
              Architect. Coffee loyalist. Looking for a soft place to land.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Architecture", "Jazz", "Cooking"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-lilac px-3 py-1 text-xs font-bold text-brand-deep"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </PhoneShell>
    );
  }
  if (type === "intents") return <IntentsVisual />;
  return (
    <div className="rounded-[2rem] bg-warm-cream/80 p-6 shadow-soft border border-ink/6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold text-ink">Chemistry Score</p>
          <p className="text-sm text-ink/55">Based on shared details</p>
        </div>
        <span className="grid size-16 place-items-center rounded-full bg-brand text-xl font-black text-white">
          91
        </span>
      </div>
      {[
        "Family plans: Open to kids",
        "Lifestyle: Social drinker",
        "Values: Curious, steady, kind",
      ].map((item) => (
        <div key={item} className="flex items-center gap-3 border-t border-ink/10 py-4">
          <UserRoundCheck className="size-5 text-brand" aria-hidden="true" />
          <span className="font-semibold text-ink">{item}</span>
        </div>
      ))}
    </div>
  );
}

/* ── page ────────────────────────────────────────────────── */

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".hero-label", { opacity: 0, y: 16, duration: 0.6 })
        .from(".hero-h1", { opacity: 0, y: 56, duration: 0.9 }, "-=0.3")
        .from(".hero-sub", { opacity: 0, y: 30, duration: 0.7 }, "-=0.4")
        .from(".hero-btns", { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
        .from(".hero-note", { opacity: 0, duration: 0.5 }, "-=0.2")
        .from(".hero-img", { opacity: 0, x: 50, duration: 1.1, ease: "power2.out" }, "-=0.9")
        .from(".hero-card", { opacity: 0, y: 30, duration: 0.6 }, "-=0.4");
    }, heroRef);
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-item", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ".stat-item", start: "top 88%" },
      });

      Array.from(document.querySelectorAll<HTMLElement>(".feature-article")).forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          x: i % 2 === 0 ? -50 : 50,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 82%" },
        });
      });

      gsap.from(".step-card", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ".step-card", start: "top 85%" },
      });

      gsap.from(".interest-tag", {
        opacity: 0,
        scale: 0.85,
        duration: 0.5,
        ease: "back.out(1.4)",
        stagger: 0.04,
        scrollTrigger: { trigger: ".interest-tag", start: "top 88%" },
      });

      gsap.from(".testimonial-card", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: { trigger: ".testimonial-card", start: "top 85%" },
      });

      gsap.from(".trust-point", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ".trust-point", start: "top 85%" },
      });

      Array.from(document.querySelectorAll<HTMLElement>(".reveal-heading")).forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 86%" },
        });
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={mainRef}
      className="min-h-dvh overflow-hidden bg-warm-cream text-ink transition-colors duration-300"
    >
      {/* ── Hero ── */}
      <section ref={heroRef} id="top" className="relative overflow-hidden">
        {/* Animated gradient blobs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-48 -left-48 size-[700px] rounded-full bg-brand/10 blur-[130px] animate-blob"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/4 -right-32 size-[520px] rounded-full bg-lilac/70 blur-[100px] animate-blob-alt"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 left-1/4 size-[460px] rounded-full bg-peach/60 blur-[90px] animate-blob"
        />

        {/* Dot grid overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.32] [background-image:radial-gradient(circle,rgba(34,28,64,0.18)_1px,transparent_1px)] [background-size:30px_30px]"
        />

        <div className="relative mx-auto grid min-h-[calc(86svh-5rem)] max-w-7xl items-center gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[0.96fr_0.88fr] lg:py-14">
          <div>
            {/* Pill badge label */}
            <div className="hero-label mb-5">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-brand/20 bg-brand/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-brand">
                <span className="size-1.5 animate-pulse rounded-full bg-brand" aria-hidden="true" />
                Where meaningful connections begin.
              </span>
            </div>

            {/* Headline with gradient accent */}
            <h1 className="hero-h1 max-w-4xl font-display text-[clamp(3rem,6.5vw,6.15rem)] font-black leading-[0.93] tracking-normal text-ink">
              Explore with{" "}
              <span className="bg-gradient-to-r from-brand via-[#b97dff] to-brand-light bg-clip-text text-transparent">
                Intent.
              </span>
            </h1>

            <p className="hero-sub mt-6 max-w-2xl text-lg leading-8 text-ink/68 md:text-xl">
              Not just a face in the crowd — someone who shares your world, your passions, and your
              vision for what comes next.
            </p>

            {/* Feature pills */}
            <div className="hero-sub mt-7 flex flex-wrap gap-2.5 text-sm font-bold text-ink/70">
              {[
                { label: "Intent first", icon: "ri-focus-3-line" },
                { label: "Shared interests", icon: "ri-sparkling-2-line" },
                { label: "No pressure", icon: "ri-slow-down-line" },
              ].map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/65 px-4 py-2 shadow-sm backdrop-blur-sm"
                >
                  <i className={`${item.icon} text-brand`} aria-hidden="true" />
                  {item.label}
                </span>
              ))}
            </div>

            <div className="hero-btns mt-9">
              <AppStoreBadges />
            </div>

            <p className="hero-note mt-6 max-w-xl text-base leading-7 text-ink/55">
              MeantGo matches you based on intent — your interests, your goals, and what you
              actually want from a connection.
            </p>
          </div>

          {/* Hero image */}
          <div className="hero-img relative">
            {/* Glow halo */}
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-brand/18 to-lilac/35 blur-3xl animate-glow"
            />

            <div className="relative overflow-hidden rounded-[2rem] bg-white p-2.5 shadow-[0_32px_80px_rgba(34,28,64,0.18)] ring-1 ring-brand/12">
              <img
                src={heroCouple}
                alt="Two people laughing together"
                className="aspect-[4/4.55] w-full rounded-[1.45rem] object-cover"
              />
            </div>

            {/* Floating card */}
            <div className="hero-card animate-float absolute -bottom-7 left-2 right-2 rounded-[1.5rem] border border-brand/15 bg-warm-cream/96 p-4 shadow-[0_20px_60px_rgba(155,91,255,0.2)] backdrop-blur-md sm:left-7 sm:right-auto sm:w-80">
              <div className="flex items-center gap-3">
                <div className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-deep text-white shadow-[0_8px_24px_rgba(155,91,255,0.4)]">
                  <Star className="size-5 fill-current" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-ink">Wait, you too?</p>
                  <p className="text-sm text-ink/58">3 shared interests found nearby</p>
                </div>
              </div>
            </div>

            {/* Location badge */}
            <div className="animate-float-alt absolute right-5 top-5 hidden items-center gap-2 rounded-full bg-ink/80 px-4 py-2 text-sm font-bold text-white shadow-xl backdrop-blur-md sm:flex">
              <MapPinned className="size-4 text-brand-light" aria-hidden="true" />
              Explore nearby
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div
          aria-hidden="true"
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
        >
          <div className="h-9 w-px bg-gradient-to-b from-ink/35 to-transparent" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/30">
            Scroll
          </span>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-y border-ink/8 bg-white/55 backdrop-blur">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-2 gap-px bg-ink/8 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="stat-item group bg-warm-cream/95 px-6 py-9 text-center transition-colors duration-300 hover:bg-white sm:px-8"
              >
                <span className="mb-3 inline-grid size-11 place-items-center rounded-xl bg-lilac text-xl text-brand-deep transition duration-300 group-hover:bg-brand group-hover:text-white">
                  <i className={stat.icon} aria-hidden="true" />
                </span>
                <p className="font-display text-4xl font-black text-brand-deep md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.1em] text-ink">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs leading-5 text-ink/50">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why MeantGo ── */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:py-32">
        <div>
          <SectionLabel>Why MeantGo Exists</SectionLabel>
          <h2 className="reveal-heading font-display text-5xl font-black leading-[1] text-ink md:text-6xl">
            Dating apps weren't built for depth.
          </h2>
          <div className="mt-8 h-px w-16 bg-gradient-to-r from-brand to-brand-light" />
        </div>
        <div className="space-y-6 text-xl leading-9 text-ink/68">
          <p>
            Most apps hand you a photo and ask you to decide. No context, no common ground, no real
            reason to reach out.
          </p>
          <p>
            The result? Awkward conversations that go nowhere. Matches that ghost. A feed that feels
            more like a chore than a chance.
          </p>
          <p className="font-semibold text-ink">
            MeantGo was built on a different belief: the best connections start with intent — people
            who know what they want and aren't afraid to say it.
          </p>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="bg-deep-purple py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-16 max-w-3xl">
            <SectionLabel>How MeantGo Works</SectionLabel>
            <h2 className="reveal-heading font-display text-5xl font-black leading-[1] md:text-6xl">
              Built around the things that actually matter.
            </h2>
          </div>
          <div className="space-y-16">
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className={`feature-article grid items-center gap-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 sm:p-8 lg:grid-cols-2 lg:p-12 ${index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
              >
                <div>
                  <p className="mb-4 font-display text-8xl font-black leading-none text-white/8 select-none">
                    {feature.eyebrow}
                  </p>
                  <h3 className="font-display text-4xl font-black leading-tight text-white md:text-5xl">
                    {feature.title}
                  </h3>
                  <p className="mt-6 max-w-xl text-lg leading-8 text-white/68">{feature.body}</p>
                </div>
                {/* Glow halo behind visual */}
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute -inset-4 rounded-[2.5rem] bg-brand/20 blur-2xl"
                  />
                  <div className="relative">
                    <FeatureVisual type={feature.visual} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section
        id="how-it-works"
        className="relative overflow-hidden bg-deep-purple py-20 text-white sm:py-24 lg:py-28"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(155,91,255,0.18),transparent_28%),radial-gradient(circle_at_88%_72%,rgba(255,225,207,0.08),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
            <div>
              <SectionLabel>Get Started in Minutes</SectionLabel>
              <h2 className="reveal-heading font-display text-4xl font-black leading-[1.02] md:text-6xl">
                From download to first connection.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-white/64 lg:justify-self-end">
              A calmer path from curiosity to contact. Each step gives people more context before
              anyone has to make a move.
            </p>
          </div>

          <ol className="grid gap-4 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.title}
                  className="step-card group relative overflow-hidden border border-white/10 bg-white/[0.045] p-7 transition duration-300 hover:-translate-y-1.5 hover:border-brand/50 hover:bg-white/[0.08]"
                >
                  {/* Large background step number */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-3 -top-4 select-none font-display text-[8rem] font-black leading-none text-white/5"
                  >
                    0{index + 1}
                  </span>

                  <div className="relative mb-8">
                    {/* Circular gradient icon */}
                    <div className="grid size-16 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-deep shadow-[0_12px_36px_rgba(155,91,255,0.4)] transition duration-300 group-hover:shadow-[0_16px_48px_rgba(155,91,255,0.6)]">
                      <Icon className="size-7 text-white" aria-hidden="true" />
                    </div>
                  </div>

                  <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-brand-light">
                    {step.eyebrow}
                  </p>
                  <h3 className="text-xl font-black leading-tight text-white">{step.title}</h3>
                  <p className="mt-4 leading-7 text-white/62">{step.body}</p>

                  <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-4 text-sm font-bold text-white/70">
                    <span>{step.cue}</span>
                    <i
                      className="ri-arrow-right-up-line text-lg text-brand-light transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ── Interests ── */}
      <section className="bg-white/54 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <SectionLabel>What Are You Into?</SectionLabel>
            <h2 className="reveal-heading font-display text-4xl font-black leading-[1.02] md:text-6xl">
              60+ interests, organized around real overlap.
            </h2>
            <p className="mt-6 text-lg leading-8 text-ink/65">
              MeantGo turns interests into useful discovery signals, so someone can find the parts
              of you that usually take three dates to explain.
            </p>
            <div className="mt-8 grid max-w-md grid-cols-3 gap-px bg-ink/8">
              {[
                ["60+", "interests"],
                ["4", "signal groups"],
                ["1", "clear intent"],
              ].map(([value, label]) => (
                <div key={label} className="bg-warm-cream/90 p-5 text-center">
                  <p className="font-display text-3xl font-black text-brand-deep">{value}</p>
                  <p className="mt-1 text-xs font-black uppercase tracking-[0.12em] text-ink/50">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {interestCategories.map((category, categoryIndex) => (
              <div
                key={category.label}
                className="interest-tag group border border-ink/8 bg-warm-cream/82 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-deep text-xl text-white shadow-[0_6px_18px_rgba(155,91,255,0.3)] transition duration-300 group-hover:shadow-[0_10px_28px_rgba(155,91,255,0.5)]">
                      <i className={category.icon} aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-black text-ink">{category.label}</h3>
                  </div>
                  <span className="font-display text-3xl font-black text-brand/15">
                    0{categoryIndex + 1}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.tags.map((tag, index) => (
                    <span
                      key={tag}
                      className={`rounded-full px-3 py-1.5 text-xs font-black ${
                        index % 3 === 0
                          ? "bg-lilac text-brand-deep"
                          : index % 3 === 1
                            ? "bg-mint text-ink"
                            : "bg-peach text-ink"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-28">
        <div className="mb-12 grid gap-7 lg:grid-cols-[0.74fr_1fr] lg:items-end">
          <div>
            <SectionLabel>Real Stories. Real Connections.</SectionLabel>
            <h2 className="reveal-heading font-display text-4xl font-black leading-[1.02] md:text-6xl">
              They started with one honest Intent.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-ink/64 lg:justify-self-end">
            Real connection feels less random when people can name what they want and find someone
            already moving in the same direction.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <figure
              key={item.name}
              className="testimonial-card group relative overflow-hidden border border-ink/8 bg-white/72 p-7 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-soft"
            >
              {/* Gradient top border revealed on hover */}
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-brand via-[#b97dff] to-brand-light opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Decorative quotation mark */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-5 top-3 select-none font-display text-[6rem] font-black leading-none text-brand/8"
              >
                "
              </span>

              <div className="relative mb-7 flex items-center justify-between">
                <div className="flex gap-0.5 text-brand">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <i key={i} className="ri-star-fill text-sm" aria-hidden="true" />
                  ))}
                </div>
                <span className="grid size-9 place-items-center rounded-full bg-lilac text-brand-deep transition duration-300 group-hover:bg-brand group-hover:text-white">
                  <i
                    className={
                      index === 0
                        ? "ri-chat-quote-line"
                        : index === 1
                          ? "ri-heart-pulse-line"
                          : "ri-group-line"
                    }
                    aria-hidden="true"
                  />
                </span>
              </div>

              <blockquote className="relative min-h-44 text-lg leading-8 text-ink/72">
                "{item.quote}"
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-4 border-t border-ink/8 pt-5">
                <img
                  src={item.img}
                  alt={`Portrait of ${item.name}`}
                  className="size-14 rounded-full object-cover ring-2 ring-brand/20 transition duration-300 group-hover:ring-brand/50"
                />
                <div>
                  <p className="font-bold text-ink">{item.name}</p>
                  <p className="flex items-center gap-1.5 text-sm text-ink/55">
                    <i className="ri-map-pin-line text-brand" aria-hidden="true" />
                    {item.location}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ── Safety ── */}
      <section id="safety" className="bg-deep-purple py-24 text-white lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <SectionLabel>Your Safety. Our Priority.</SectionLabel>
            <h2 className="reveal-heading font-display text-5xl font-black leading-[1] md:text-6xl">
              Connect freely. Stay protected.
            </h2>
            <p className="mt-7 text-lg leading-8 text-white/68">
              MeantGo is designed to put you in control at every step. Safety is not an afterthought
              here — it is the foundation.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {trustPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.label}
                  className="trust-point group rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 transition duration-300 hover:border-brand/40 hover:bg-white/[0.1]"
                >
                  <div className="mb-7 grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-deep shadow-[0_8px_24px_rgba(155,91,255,0.35)] transition duration-300 group-hover:shadow-[0_12px_36px_rgba(155,91,255,0.55)]">
                    <Icon className="size-5 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold">{point.label}</h3>
                  <p className="mt-3 leading-7 text-white/62">{point.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Download CTA ── */}
      <section id="download" className="relative overflow-hidden px-5 py-28 text-center sm:px-6 lg:py-36">
        {/* Multi-layer gradient background */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(155,91,255,0.16),transparent),radial-gradient(ellipse_60%_55%_at_15%_85%,rgba(255,225,207,0.40),transparent),radial-gradient(ellipse_55%_45%_at_85%_70%,rgba(238,219,234,0.30),transparent)]" />

        {/* Dot grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.28] [background-image:radial-gradient(circle,rgba(34,28,64,0.14)_1px,transparent_1px)] [background-size:30px_30px]"
        />

        {/* Spinning decorative rings */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
        >
          <div className="size-[480px] animate-spin-slow rounded-full border border-brand/10" />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
        >
          <div className="size-[720px] animate-spin-slow-reverse rounded-full border border-brand/6" />
        </div>

        <div className="relative mx-auto max-w-4xl">
          <SectionLabel>Ready When You Are</SectionLabel>
          <h2 className="reveal-heading font-display text-5xl font-black leading-[1] md:text-7xl">
            The connection you've been looking for is{" "}
            <span className="bg-gradient-to-r from-brand to-brand-light bg-clip-text text-transparent">
              already here.
            </span>
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-xl leading-8 text-ink/68">
            Download MeantGo. Send your intent. Find someone who shares it.
          </p>
          <div className="relative mt-10 inline-block">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-2xl bg-brand/15 blur-2xl animate-glow"
            />
            <div className="relative">
              <AppStoreBadges align="center" />
            </div>
          </div>
          <p className="mt-7 text-sm font-semibold text-ink/45">
            Free to download. No subscription required to get started.
          </p>
        </div>
      </section>
    </div>
  );
}
