import { useLayoutEffect, useRef, useState, useEffect, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Bell, Compass, EyeOff, Flag, Heart, Lock,
  Play, Send, ShieldCheck, Sparkles, Star, Target, UserRoundCheck,
} from "lucide-react";
import heroCouple from "@/assets/hero-couple.jpg";
import amara from "@/assets/avatar-elena.jpg";
import chidinma from "@/assets/avatar-sarah.jpg";
import dayo from "@/assets/avatar-marcus.jpg";

gsap.registerPlugin(ScrollTrigger);

/* ── data ────────────────────────────────────────────────── */

const stats = [
  { value: "500K+", label: "Connections Made" },
  { value: "4.8", label: "App Store Rating" },
  { value: "60+", label: "Shared Interests" },
  { value: "3", label: "Relationship Goals" },
];

const features = [
  { eyebrow: "01", title: "Your interests are your introduction.", body: "Before you say a word, Fydinn already knows you love hiking at sunrise, are obsessed with Studio Ghibli, and cannot live without good coffee. It finds people who feel the same way.", visual: "tags" },
  { eyebrow: "02", title: "Know what you're walking into — every time.", body: "Nobody should waste months figuring out if you are on the same page. Everyone says what they are looking for upfront: a serious relationship, something casual, or a genuine friendship.", visual: "intentions" },
  { eyebrow: "03", title: "See them. Hear them. Know them.", body: "Photos tell you what someone looks like. A video tells you how they laugh, what lights them up, and whether their energy matches yours.", visual: "video" },
  { eyebrow: "04", title: "A feed that feels like possibility, not pressure.", body: "No frantic swiping. No split-second judgements. Take the space to read a bio, watch a video, see what someone is about, and then decide if you want to connect.", visual: "feed" },
  { eyebrow: "05", title: "Show genuine interest. No games, no guessing.", body: "Send an Intent to someone you are genuinely interested in. They will see it, think it over, and respond when they are ready. It is connection, not competition.", visual: "intents" },
];

const steps = [
  { icon: Sparkles, title: "Build a profile that reflects the real you", body: "Add your photos, record a short video intro, and pick the interests that define your world." },
  { icon: Flag, title: "Tell us what you're looking for", body: "Serious relationship, casual dating, or friendship — you set the tone from day one." },
  { icon: Compass, title: "Discover people who match your world", body: "Browse profiles curated to your interests, your intention, and your location." },
  { icon: Send, title: "Send an Intent", body: "No awkward openers needed. Signal your interest and let genuine connection take it from there." },
];

const interests = [
  "Art", "Animation", "Coffee", "Baking", "Yoga", "Hiking", "Gaming", "Anime",
  "Concerts", "Reading", "Programming", "AI", "Travel", "Road Trips",
  "Architecture", "Powerlifting", "Poetry", "Restaurants", "Movies", "Language Learning",
];

const testimonials = [
  { quote: "I had almost given up on apps. Then I matched with someone on Fydinn who loves the same niche travel documentaries I do. We talked for six hours the first night.", name: "Amara, 29", location: "Abuja", img: amara },
  { quote: "What I love is that I knew what he was looking for before we even matched. No mixed signals, no wasted time. Just two people on the same page.", name: "Chidinma, 26", location: "Lagos", img: chidinma },
  { quote: "I downloaded Fydinn looking for friends after relocating. Within two weeks I had people to explore the city with. It works.", name: "Dayo, 31", location: "London", img: dayo },
];

const trustPoints = [
  { icon: ShieldCheck, label: "Profile Verification", copy: "Every account goes through a verification layer before going live." },
  { icon: Lock, label: "Secure Messaging", copy: "Your conversations are private. Your data is yours." },
  { icon: Bell, label: "You Control Your Status", copy: "Set yourself as open to Intents — or take a break — anytime." },
  { icon: EyeOff, label: "Visibility Settings", copy: "Control who can find you and how your profile appears." },
];

/* ── helpers ─────────────────────────────────────────────── */

function AppStoreBadges({ align = "start" }: { align?: "start" | "center" }) {
  return (
    <div className={`flex flex-wrap gap-3 ${align === "center" ? "justify-center" : ""}`}>
      <a href="#download" className="inline-block rounded-[9px] transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand" aria-label="Download on the App Store">
        <svg width="148" height="48" viewBox="0 0 148 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="148" height="48" rx="8" fill="#000"/>
          <path d="M23.4 10.4C22.6 11.4 21.5 12.1 20.4 12.0C20.2 10.9 20.8 9.8 21.5 9.0C22.3 8.1 23.5 7.5 24.5 7.4C24.6 8.6 24.1 9.7 23.4 10.4Z" fill="white"/>
          <path d="M24.5 12.3C22.7 12.2 21.1 13.3 20.2 13.3C19.2 13.3 17.8 12.4 16.4 12.4C14.3 12.5 12.4 13.7 11.4 15.5C9.3 19.3 10.7 24.9 12.8 27.9C13.8 29.4 15.0 31.0 16.6 31.0C18.1 30.9 18.7 30.0 20.4 30.0C22.2 30.0 22.7 31.0 24.3 30.9C25.9 30.9 27.0 29.4 28.1 27.9C29.2 26.3 29.6 24.8 29.6 24.7C29.6 24.6 26.9 23.6 26.9 20.5C26.9 17.8 29.1 16.5 29.1 16.5C27.8 14.5 25.6 12.4 24.5 12.3Z" fill="white"/>
          <text x="40" y="20" fill="white" fontSize="9" fontFamily="-apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif">Download on the</text>
          <text x="40" y="36" fill="white" fontSize="17" fontFamily="-apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif" fontWeight="600">App Store</text>
        </svg>
      </a>
      <a href="#download" className="inline-block rounded-[9px] transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand" aria-label="Get it on Google Play">
        <svg width="162" height="48" viewBox="0 0 162 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="162" height="48" rx="8" fill="#000"/>
          <path d="M11.5 15.5L11.5 32.5L23.0 24.0Z" fill="#01875F"/>
          <path d="M11.5 15.5L23.0 24.0L28.0 19.2L17.5 12.5Z" fill="#FBBC04"/>
          <path d="M11.5 32.5L23.0 24.0L28.0 28.8L17.5 35.5Z" fill="#EA4335"/>
          <path d="M23.0 24.0L28.0 19.2L33.0 24.0L28.0 28.8Z" fill="#4285F4"/>
          <text x="44" y="20" fill="white" fontSize="9" fontFamily="-apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif">Get it on</text>
          <text x="44" y="36" fill="white" fontSize="17" fontFamily="-apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif" fontWeight="600">Google Play</text>
        </svg>
      </a>
    </div>
  );
}

function SectionLabel({ children }: { children: string }) {
  return <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-brand">{children}</p>;
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
    const id = setInterval(() => setActive(i => (i + 1) % 3), 2200);
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
          style={{ transform: i === active ? "translateY(-2px) scale(1.015)" : "translateY(0) scale(1)" }}
          className={`rounded-3xl border p-5 transition-all duration-500 ease-in-out ${
            i === active
              ? "border-brand bg-brand text-white shadow-[0_18px_45px_rgba(155,91,255,0.30)]"
              : "border-ink/12 bg-warm-cream/70 text-ink"
          }`}
        >
          <div className="flex items-center gap-3">
            <Target className={`size-5 shrink-0 transition-transform duration-500 ${i === active ? "scale-110" : "scale-100"}`} aria-hidden="true" />
            <div className="flex-1 min-w-0">
              <p className="font-bold leading-tight">{title}</p>
              <p className={`text-sm mt-0.5 transition-colors duration-500 ${i === active ? "text-white/80" : "text-ink/60"}`}>{copy}</p>
            </div>
            <div className={`size-2.5 shrink-0 rounded-full transition-all duration-500 ${i === active ? "bg-white/60 scale-100" : "scale-0 bg-transparent"}`} />
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
      setTimeout(() => { setTab(t => (t + 1) % 2); setFading(false); }, 300);
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
          <div key={text} className="flex items-center justify-between border-t border-ink/10 py-4 first:border-t-0">
            <div className="flex items-center gap-3">
              <div className="grid size-10 shrink-0 place-items-center rounded-full bg-peach">
                <Heart className="size-4 text-brand" aria-hidden="true" />
              </div>
              <span className="font-semibold text-ink text-sm">{text}</span>
            </div>
            <span className={`text-xs font-bold shrink-0 ${isNew ? "text-brand" : "text-ink/45"}`}>{timing}</span>
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
          <span className="rounded-full bg-mint px-3 py-1 text-xs font-bold text-ink">87% overlap</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {["Studio Ghibli", "Sunrise hikes", "Good coffee", "Indie films", "Sourdough", "Live music"].map((tag, i) => (
            <span key={tag} className={`rounded-full px-4 py-2 text-sm font-semibold ${i % 2 === 0 ? "bg-brand text-white" : "bg-lilac text-brand-deep"}`}>
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
            <span>Discover</span><span>12 km away</span>
          </div>
          <img src={heroCouple} alt="" className="aspect-[4/5] w-full rounded-3xl object-cover" />
          <div className="space-y-3 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-ink">Tomi, 30</h3>
              <span className="rounded-full bg-mint px-3 py-1 text-xs font-bold text-ink">92%</span>
            </div>
            <p className="text-sm text-ink/65">Architect. Coffee loyalist. Looking for a soft place to land.</p>
            <div className="flex flex-wrap gap-2">
              {["Architecture", "Jazz", "Cooking"].map((tag) => (
                <span key={tag} className="rounded-full bg-lilac px-3 py-1 text-xs font-bold text-brand-deep">{tag}</span>
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
        <span className="grid size-16 place-items-center rounded-full bg-brand text-xl font-black text-white">91</span>
      </div>
      {["Family plans: Open to kids", "Lifestyle: Social drinker", "Values: Curious, steady, kind"].map((item) => (
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
      gsap.timeline({ defaults: { ease: "power3.out" } })
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
        opacity: 0, y: 30, duration: 0.7, ease: "power3.out", stagger: 0.1,
        scrollTrigger: { trigger: ".stat-item", start: "top 88%" },
      });

      Array.from(document.querySelectorAll<HTMLElement>(".feature-article")).forEach((el, i) => {
        gsap.from(el, {
          opacity: 0, x: i % 2 === 0 ? -50 : 50, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 82%" },
        });
      });

      gsap.from(".step-card", {
        opacity: 0, y: 40, duration: 0.7, ease: "power3.out", stagger: 0.12,
        scrollTrigger: { trigger: ".step-card", start: "top 85%" },
      });

      gsap.from(".interest-tag", {
        opacity: 0, scale: 0.85, duration: 0.5, ease: "back.out(1.4)", stagger: 0.04,
        scrollTrigger: { trigger: ".interest-tag", start: "top 88%" },
      });

      gsap.from(".testimonial-card", {
        opacity: 0, y: 50, duration: 0.8, ease: "power3.out", stagger: 0.15,
        scrollTrigger: { trigger: ".testimonial-card", start: "top 85%" },
      });

      gsap.from(".trust-point", {
        opacity: 0, y: 30, duration: 0.7, ease: "power3.out", stagger: 0.1,
        scrollTrigger: { trigger: ".trust-point", start: "top 85%" },
      });

      Array.from(document.querySelectorAll<HTMLElement>(".reveal-heading")).forEach((el) => {
        gsap.from(el, {
          opacity: 0, y: 40, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 86%" },
        });
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="min-h-dvh overflow-hidden bg-warm-cream text-ink transition-colors duration-300">

      {/* ── Hero ── */}
      <section ref={heroRef} id="top" className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(155,91,255,0.16),transparent_34%),radial-gradient(circle_at_80%_18%,rgba(155,91,255,0.08),transparent_30%)]" />
        <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
          <div>
            <div className="hero-label"><SectionLabel>Where meaningful connections begin.</SectionLabel></div>
            <h1 className="hero-h1 max-w-4xl font-display text-[clamp(3.4rem,8vw,7.4rem)] font-black leading-[0.9] tracking-normal text-ink">
              Find People Who Actually Get You.
            </h1>
            <p className="hero-sub mt-7 max-w-2xl text-xl leading-8 text-ink/68">
              Not just a face in the crowd — someone who shares your world, your passions, and your vision for what comes next.
            </p>
            <div className="hero-btns mt-9"><AppStoreBadges /></div>
            <p className="hero-note mt-6 max-w-xl text-base leading-7 text-ink/58">
              Fydinn matches you based on who you really are — your interests, your vibe, and what you are genuinely looking for.
            </p>
          </div>
          <div className="hero-img relative">
            <div className="overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-soft">
              <img src={heroCouple} alt="Two people laughing together" className="aspect-[4/5] w-full rounded-[1.85rem] object-cover" />
            </div>
            <div className="hero-card absolute -bottom-8 left-2 right-2 rounded-[2rem] bg-warm-cream/92 p-4 shadow-soft backdrop-blur sm:left-8 sm:right-auto sm:w-80 border border-ink/8">
              <div className="flex items-center gap-3">
                <div className="grid size-12 place-items-center rounded-full bg-lilac text-brand">
                  <Star className="size-5 fill-current" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-ink">Wait, you too?</p>
                  <p className="text-sm text-ink/58">3 shared interests found nearby</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-y border-ink/8 bg-white/45">
        <div className="mx-auto grid max-w-7xl gap-0 px-5 sm:px-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item border-ink/8 py-10 md:border-r md:px-8 md:last:border-r-0">
              <p className="font-display text-5xl font-black text-brand-deep">{stat.value}</p>
              <p className="mt-2 text-sm font-semibold text-ink/58">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Fydinn ── */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:py-32">
        <div>
          <SectionLabel>Why Fydinn Exists</SectionLabel>
          <h2 className="reveal-heading font-display text-5xl font-black leading-[1] text-ink md:text-6xl">
            Dating apps weren't built for depth.
          </h2>
        </div>
        <div className="space-y-6 text-xl leading-9 text-ink/68">
          <p>Most apps hand you a photo and ask you to decide. No context, no common ground, no real reason to reach out.</p>
          <p>The result? Awkward conversations that go nowhere. Matches that ghost. A feed that feels more like a chore than a chance.</p>
          <p className="font-semibold text-ink">Fydinn was built on a different belief: the best connections start with what you have in common — not just how you look.</p>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="bg-deep-purple py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-16 max-w-3xl">
            <SectionLabel>How Fydinn Works</SectionLabel>
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
                  <p className="mb-6 font-display text-5xl font-black text-white/16">{feature.eyebrow}</p>
                  <h3 className="font-display text-4xl font-black leading-tight text-white md:text-5xl">{feature.title}</h3>
                  <p className="mt-6 max-w-xl text-lg leading-8 text-white/68">{feature.body}</p>
                </div>
                <FeatureVisual type={feature.visual} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how-it-works" className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:py-32">
        <div className="mb-14 max-w-3xl">
          <SectionLabel>Get Started in Minutes</SectionLabel>
          <h2 className="reveal-heading font-display text-5xl font-black leading-[1] md:text-6xl">
            From download to first connection.
          </h2>
        </div>
        <ol className="grid gap-px overflow-hidden rounded-[2rem] bg-ink/8 sm:grid-cols-2">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li
                key={step.title}
                className="step-card group bg-warm-cream p-10 transition-colors duration-300 hover:bg-white/90"
              >
                <div className="mb-8 flex items-start justify-between">
                  <div className="grid size-14 place-items-center rounded-2xl bg-brand text-white shadow-[0_8px_24px_rgba(155,91,255,0.25)] transition-shadow duration-300 group-hover:shadow-[0_12px_32px_rgba(155,91,255,0.38)]">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <span className="select-none font-display text-[5.5rem] font-black leading-none text-brand/10 -mt-2">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold leading-snug text-ink">{step.title}</h3>
                <p className="leading-7 text-ink/62">{step.body}</p>
              </li>
            );
          })}
        </ol>
      </section>

      {/* ── Interests ── */}
      <section className="bg-white/48 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <SectionLabel>What Are You Into?</SectionLabel>
            <h2 className="reveal-heading font-display text-5xl font-black leading-[1] md:text-6xl">
              60+ interests. Endless common ground.
            </h2>
            <p className="mt-6 text-xl leading-8 text-ink/65">
              From sourdough to skateboarding. From poetry to powerlifting. Fydinn speaks your language.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {interests.map((interest, index) => (
              <span
                key={interest}
                className={`interest-tag rounded-full px-5 py-3 text-sm font-bold transition hover:-translate-y-1 ${
                  index % 4 === 0 ? "bg-brand text-white" : index % 4 === 1 ? "bg-mint text-ink" : index % 4 === 2 ? "bg-peach text-ink" : "bg-lilac text-brand-deep"
                }`}
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:py-32">
        <div className="mb-12 max-w-3xl">
          <SectionLabel>Real Stories. Real Connections.</SectionLabel>
          <h2 className="reveal-heading font-display text-5xl font-black leading-[1] md:text-6xl">
            They started where you are now.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.name} className="testimonial-card rounded-[2rem] bg-white/72 p-7 shadow-sm border border-ink/6 hover:shadow-soft transition-shadow duration-300">
              <blockquote className="min-h-52 text-lg leading-8 text-ink/72">"{item.quote}"</blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <img src={item.img} alt={`Portrait of ${item.name}`} className="size-14 rounded-full object-cover ring-2 ring-brand/20" />
                <div>
                  <p className="font-bold text-ink">{item.name}</p>
                  <p className="text-sm text-ink/55">{item.location}</p>
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
              Fydinn is designed to put you in control at every step. Safety is not an afterthought here — it is the foundation.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {trustPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.label} className="trust-point rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 transition-colors duration-300 hover:bg-white/10">
                  <Icon className="mb-8 size-7 text-brand-light" aria-hidden="true" />
                  <h3 className="text-xl font-bold">{point.label}</h3>
                  <p className="mt-3 leading-7 text-white/62">{point.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Download CTA ── */}
      <section id="download" className="relative px-5 py-24 text-center sm:px-6 lg:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(155,91,255,0.14),transparent_50%)]" />
        <div className="mx-auto max-w-4xl">
          <SectionLabel>Ready When You Are</SectionLabel>
          <h2 className="reveal-heading font-display text-5xl font-black leading-[1] md:text-7xl">
            The connection you've been looking for is already here.
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-xl leading-8 text-ink/68">
            Download Fydinn. Build a profile that sounds like you. Find someone who gets it.
          </p>
          <div className="mt-9"><AppStoreBadges align="center" /></div>
          <p className="mt-5 text-sm font-semibold text-ink/50">
            Free to download. No subscription required to get started.
          </p>
        </div>
      </section>
    </div>
  );
}
