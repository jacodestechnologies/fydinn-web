import { useLayoutEffect, useRef, useState, useEffect, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Bell,
  Compass,
  EyeOff,
  Flag,
  Heart,
  Image as ImageIcon,
  Lock,
  Play,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import heroCouple from "@/assets/hero-couple.jpg";
import amara from "@/assets/avatar-elena.jpg";
import chidinma from "@/assets/avatar-sarah.jpg";
import dayo from "@/assets/avatar-marcus.jpg";

gsap.registerPlugin(ScrollTrigger);

/* ── data ────────────────────────────────────────────────── */

const stats = [
  { value: "500K+", label: "Connections Made", detail: "real starts, not endless swipes" },
  { value: "4.3", label: "App Store Rating", detail: "loved for calmer discovery", stars: true },
  { value: "60+", label: "Shared Interests", detail: "ways to find common ground" },
  { value: "3", label: "Relationship Goals", detail: "clear intent from day one" },
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
    title: "Know what you are walking into, every time.",
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

// Per-card fills for the feature grid (checkerboard of light tints / dark panels).
const featureStyles = [
  { card: "bg-lilac", title: "text-ink", body: "text-ink/60" },
  {
    card: "bg-[linear-gradient(140deg,#4B2FA8,#3A2585)]",
    title: "text-white",
    body: "text-white/65",
  },
  { card: "bg-[#F2ECDD]", title: "text-ink", body: "text-ink/60" },
  { card: "bg-[#15111F]", title: "text-white", body: "text-white/65" },
  { card: "bg-lilac", title: "text-ink", body: "text-ink/60" },
];

const steps = [
  {
    icon: Sparkles,
    eyebrow: "Reflect",
    title: "Build a profile that feels like you",
    body: "Add photos, a short video intro, and the interests that make your world specific.",
    cue: "Your vibe, in context",
  },
  {
    icon: Flag,
    eyebrow: "Declare",
    title: "Say what you are actually looking for",
    body: "Choose serious relationship, casual dating, or friendship before discovery begins.",
    cue: "No mixed signals",
  },
  {
    icon: Compass,
    eyebrow: "Explore",
    title: "Browse people with common ground",
    body: "Move through profiles curated by intention, interests, distance, and momentum.",
    cue: "Explore with intent",
  },
  {
    icon: Send,
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
    copy: "Set yourself as open to Intents or take a break anytime.",
  },
  {
    icon: EyeOff,
    label: "Visibility Settings",
    copy: "Control who can find you and how your profile appears.",
  },
];

/* ── shared components ───────────────────────────────────── */

function StarFilled({ className }: { className?: string }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div
      className="flex items-center gap-0.5 text-amber-400"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <StarFilled key={i} />
      ))}
    </div>
  );
}

/* Chat-bubble shaped avatar used in the stats band. */
function StatAvatar({
  className = "",
  src,
  size = "size-16",
}: {
  className?: string;
  src: string;
  size?: string;
}) {
  return (
    <div className={`stat-avatar absolute hidden md:block ${className}`}>
      <div
        className={`${size} overflow-hidden rounded-[42%_42%_42%_8px] border-[3px] border-white/90 bg-white/10 shadow-[0_14px_34px_rgba(0,0,0,0.35)]`}
      >
        <img src={src} alt="" className="size-full object-cover" />
      </div>
    </div>
  );
}

const statFaces = [amara, chidinma, dayo, heroCouple, amara, chidinma, dayo, heroCouple];
const statPositions = [
  "left-[10%] top-[15%]",
  "left-[5%] top-[46%]",
  "left-[18%] bottom-[14%]",
  "left-[40%] bottom-[7%]",
  "right-[9%] top-[11%]",
  "right-[18%] top-[24%]",
  "right-[7%] bottom-[22%]",
  "right-[28%] bottom-[9%]",
];
const statSizes = [
  "size-16",
  "size-20",
  "size-16",
  "size-14",
  "size-20",
  "size-14",
  "size-16",
  "size-14",
];

/* Stats band — one big cycling stat over a dotted map with scattered avatars. */
function StatsBand() {
  const [i, setI] = useState(0);
  const [fade, setFade] = useState(false);
  useEffect(() => {
    const id = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setI((p) => (p + 1) % stats.length);
        setFade(false);
      }, 350);
    }, 3200);
    return () => clearInterval(id);
  }, []);
  const stat = stats[i];

  return (
    <section className="relative flex min-h-[30rem] items-center overflow-hidden bg-[#2C2466] py-24 text-white lg:min-h-[34rem]">
      {/* Dotted map texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.7) 1.3px, transparent 1.3px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(ellipse 62% 62% at 50% 50%, #000 10%, transparent 78%)",
          WebkitMaskImage: "radial-gradient(ellipse 62% 62% at 50% 50%, #000 10%, transparent 78%)",
        }}
      />

      {/* Scattered avatar bubbles */}
      {statPositions.map((pos, idx) => (
        <StatAvatar key={idx} className={pos} src={statFaces[idx]} size={statSizes[idx]} />
      ))}

      <div
        className={`relative z-10 mx-auto max-w-3xl px-5 text-center transition-opacity duration-300 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      >
        {stat.stars && (
          <div className="mb-4 flex justify-center">
            <Stars count={5} />
          </div>
        )}
        <p className="text-[clamp(3.5rem,10vw,7rem)] font-bold leading-[0.95] tracking-tight text-brand-light">
          {stat.value}
        </p>
        <p className="mt-1 text-[clamp(2rem,6vw,4.25rem)] font-bold leading-[1.05] tracking-tight text-brand-light">
          {stat.label}
        </p>
        <p className="mt-5 text-lg text-white/55">{stat.detail}</p>
      </div>
    </section>
  );
}

function AppStoreBadges({ align = "start" }: { align?: "start" | "center" }) {
  return (
    <div className={`flex flex-wrap gap-3 ${align === "center" ? "justify-center" : ""}`}>
      <a
        href="#download"
        className="inline-block rounded-lg transition hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
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
        className="inline-block rounded-lg transition hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
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

/* Animated grid backdrop — drifts slowly, fades out via a mask. */
function GridBackdrop({
  line = "var(--hairline)",
  mask = "radial-gradient(ellipse 80% 60% at 50% 0%, #000 25%, transparent 100%)",
  size = 64,
}: {
  line?: string;
  mask?: string;
  size?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className="animate-grid pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `linear-gradient(${line} 1px, transparent 1px), linear-gradient(to right, ${line} 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px`,
        maskImage: mask,
        WebkitMaskImage: mask,
      }}
    />
  );
}

/*
 * Tilted polaroid photo placeholder. Drop a real image in via `src` later —
 * until then it shows a labeled placeholder sized to the final frame.
 */
function HeroPhoto({
  className = "",
  rotate = 0,
  label,
  src,
  width = "w-44",
}: {
  className?: string;
  rotate?: number;
  label: string;
  src?: string;
  width?: string;
}) {
  return (
    <div className={`hero-photo absolute hidden lg:block ${className}`}>
      <div
        style={{ transform: `rotate(${rotate}deg)` }}
        className={`${width} overflow-hidden rounded-2xl border-[5px] border-white bg-white shadow-[0_24px_60px_rgba(20,12,40,0.30)]`}
      >
        <div className="relative aspect-[3/4] bg-gradient-to-br from-lilac to-mint">
          {src ? (
            <img src={src} alt="" className="absolute inset-0 size-full object-cover" />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-ink/30">
              <ImageIcon className="size-7" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* Floating labeled photo card used in the "Dating apps" section. */
function DepthCard({
  rotate = 0,
  label,
  src,
  overlay,
  className = "",
}: {
  rotate?: number;
  label: string;
  src?: string;
  overlay?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`depth-card-wrap md:absolute ${className}`}>
      <div style={{ transform: `rotate(${rotate}deg)` }}>
        <div className="w-[18rem] rounded-3xl bg-white p-2.5 shadow-[0_28px_64px_rgba(20,12,40,0.20)] sm:w-[20rem]">
          <div className="relative overflow-hidden rounded-[1.25rem]">
            <div className="aspect-[16/11] w-full bg-gradient-to-br from-lilac to-mint">
              {src ? (
                <img src={src} alt="" className="size-full object-cover" />
              ) : (
                <div className="flex size-full flex-col items-center justify-center gap-1.5 text-ink/30">
                  <ImageIcon className="size-7" aria-hidden="true" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Photo</span>
                </div>
              )}
            </div>
            {overlay && (
              <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-1.5">{overlay}</div>
            )}
          </div>
        </div>
        <p className="mt-3 px-1 text-sm font-semibold text-ink">{label}</p>
      </div>
    </div>
  );
}

function SectionLabel({ children, light }: { children: string; light?: boolean }) {
  return (
    <span
      className={`mb-5 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] ${
        light ? "bg-white/10 text-brand-light ring-1 ring-white/15" : "bg-brand/10 text-brand"
      }`}
    >
      <span
        className={`size-1.5 rounded-full ${light ? "bg-brand-light" : "bg-brand"}`}
        aria-hidden="true"
      />
      {children}
    </span>
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
          className={`rounded-2xl border p-5 transition-all duration-500 ${
            i === active
              ? "border-brand bg-brand text-white shadow-[0_16px_40px_rgba(124,58,237,0.28)]"
              : "border-ink/10 bg-warm-cream/70 text-ink"
          }`}
        >
          <div className="flex items-center gap-3">
            <Target
              className={`size-5 shrink-0 transition-transform duration-500 ${i === active ? "scale-110" : "scale-100"}`}
              aria-hidden="true"
            />
            <div className="flex-1 min-w-0">
              <p className="font-semibold leading-tight">{title}</p>
              <p className={`text-sm mt-0.5 ${i === active ? "text-white/80" : "text-ink/55"}`}>
                {copy}
              </p>
            </div>
            <div
              className={`size-2 shrink-0 rounded-full transition-all duration-500 ${i === active ? "bg-white/60 scale-100" : "scale-0"}`}
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
    <div className="rounded-2xl bg-warm-cream/80 p-5 shadow-soft border border-ink/6">
      <div className="relative mb-5 grid grid-cols-2 rounded-full bg-surface-muted p-1 text-sm font-semibold">
        <div
          className="absolute inset-y-1 rounded-full bg-brand transition-all duration-500"
          style={{ left: tab === 0 ? "4px" : "calc(50%)", width: "calc(50% - 4px)" }}
        />
        {["Received", "Sent"].map((label, i) => (
          <button
            key={label}
            onClick={() => setTab(i)}
            className={`relative z-10 px-4 py-2 text-center transition-colors duration-300 ${tab === i ? "text-white" : "text-ink/60"}`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className={`transition-opacity duration-300 ${fading ? "opacity-0" : "opacity-100"}`}>
        {items.map(({ text, timing, isNew }) => (
          <div
            key={text}
            className="flex items-center justify-between border-t border-ink/8 py-4 first:border-t-0"
          >
            <div className="flex items-center gap-3">
              <div className="grid size-9 shrink-0 place-items-center rounded-full bg-mint">
                <Heart className="size-4 text-brand" aria-hidden="true" />
              </div>
              <span className="text-sm font-medium text-ink">{text}</span>
            </div>
            <span
              className={`text-xs font-semibold shrink-0 ${isNew ? "text-brand" : "text-ink/40"}`}
            >
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
      <div className="rounded-2xl bg-warm-cream/80 p-6 shadow-soft border border-ink/6">
        <div className="mb-5 flex items-center justify-between">
          <span className="text-sm font-semibold text-ink">Common ground</span>
          <span className="rounded-full bg-mint px-3 py-1 text-xs font-semibold text-ink">
            87% overlap
          </span>
        </div>
        <div className="flex flex-wrap gap-2.5">
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
              className={`rounded-full px-4 py-2 text-sm font-medium ${i % 2 === 0 ? "bg-brand text-white" : "bg-lilac text-ink"}`}
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
          <button className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-brand shadow-xl">
            <Play className="ml-1 size-6 fill-current" aria-hidden="true" />
            <span className="sr-only">Play introduction video</span>
          </button>
          <div className="absolute inset-x-5 bottom-5 text-white">
            <p className="text-lg font-bold">Maya, 28</p>
            <p className="text-sm text-white/75">Talking about film, food, and Lagos sunsets</p>
          </div>
        </div>
      </PhoneShell>
    );
  }
  if (type === "feed") {
    return (
      <PhoneShell>
        <div className="p-4">
          <div className="mb-3 flex items-center justify-between text-xs font-semibold text-ink/50">
            <span>Discover</span>
            <span>12 km away</span>
          </div>
          <img src={heroCouple} alt="" className="aspect-[4/5] w-full rounded-2xl object-cover" />
          <div className="space-y-3 p-3 pt-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-ink">Tomi, 30</h3>
              <span className="rounded-full bg-mint px-3 py-1 text-xs font-semibold text-ink">
                92%
              </span>
            </div>
            <p className="text-sm text-ink/60">
              Architect. Coffee loyalist. Looking for a soft place to land.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["Architecture", "Jazz", "Cooking"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-lilac px-3 py-1 text-xs font-semibold text-ink"
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
  return null;
}

/* ── page ────────────────────────────────────────────────── */

// Testimonials section is hidden to match the reference design. Flip to true to restore.
const SHOW_TESTIMONIALS = false;

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".hero-eyebrow", { opacity: 0, y: 12, duration: 0.5 })
        .from(".hero-card-1", { opacity: 0, y: 28, scale: 0.92, duration: 0.6 }, "-=0.2")
        .from(".hero-card-2", { opacity: 0, y: 28, scale: 0.92, duration: 0.6 }, "-=0.4")
        .from(".hero-sub", { opacity: 0, y: 24, duration: 0.6 }, "-=0.3")
        .from(".hero-btns", { opacity: 0, y: 16, duration: 0.5 }, "-=0.3")
        .from(".hero-note", { opacity: 0, duration: 0.4 }, "-=0.2")
        .from(
          ".hero-photo",
          { opacity: 0, scale: 0.8, duration: 0.7, stagger: 0.12, ease: "back.out(1.4)" },
          "-=0.7",
        );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-item", {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: ".stat-item", start: "top 88%" },
      });

      Array.from(document.querySelectorAll<HTMLElement>(".feature-article")).forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          x: i % 2 === 0 ? -40 : 40,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 82%" },
        });
      });

      gsap.from(".depth-card-wrap", {
        opacity: 0,
        y: 40,
        scale: 0.9,
        duration: 0.7,
        ease: "back.out(1.3)",
        stagger: 0.12,
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

      gsap.from(".interest-tag", {
        opacity: 0,
        scale: 0.92,
        duration: 0.5,
        ease: "back.out(1.4)",
        stagger: 0.05,
        scrollTrigger: { trigger: ".interest-tag", start: "top 88%" },
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

  return (
    <div ref={mainRef} className="min-h-dvh overflow-hidden bg-surface text-ink">
      {/* ── Hero ── */}
      <section
        ref={heroRef}
        id="top"
        className="relative overflow-hidden bg-[linear-gradient(180deg,#7C3AED_0%,#6D28D9_55%,#5B21B6_100%)] text-white"
      >
        {/* Concentric circle backdrop */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="absolute size-[34rem] rounded-full border border-white/10" />
          <div className="absolute size-[48rem] rounded-full border border-white/[0.07]" />
          <div className="absolute size-[64rem] rounded-full border border-white/5" />
          <div className="absolute size-[80rem] rounded-full border border-white/[0.03]" />
        </div>

        {/* Scattered photo placeholders — swap `src` with real images */}
        <HeroPhoto className="left-[3%] top-[14%]" rotate={-9} label="People" width="w-44" />
        <HeroPhoto className="left-[8%] top-[48%]" rotate={7} label="Moments" width="w-36" />
        <HeroPhoto className="right-[4%] top-[17%]" rotate={9} label="Connect" width="w-44" />
        <HeroPhoto className="right-[7%] top-[52%]" rotate={-7} label="Interests" width="w-36" />

        <div className="relative z-10 mx-auto flex min-h-[calc(88svh-4rem)] max-w-3xl flex-col items-center justify-center px-5 py-20 text-center sm:px-6 lg:py-28">
          {/* Eyebrow */}
          <div className="hero-eyebrow mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-white/40" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
              Where meaningful connections begin
            </span>
            <span className="h-px w-8 bg-white/40" aria-hidden="true" />
          </div>

          {/* Stacked title cards */}
          <h1 className="flex flex-col items-center gap-3 text-[clamp(2.75rem,8vw,5.5rem)] font-bold leading-none tracking-tight">
            <span className="hero-card-1 inline-block rounded-[1.5rem] bg-white px-7 py-3 text-brand shadow-[0_16px_48px_rgba(20,12,40,0.25)]">
              Explore
            </span>
            <span className="hero-card-2 inline-block rounded-[1.5rem] bg-deep-purple px-7 py-3 text-white shadow-[0_16px_48px_rgba(20,12,40,0.35)]">
              with Intent
            </span>
          </h1>

          <p className="hero-sub mx-auto mt-9 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            You have potential new connections waiting. Unlock premium to see who has already
            reached out to you.
          </p>

          <div className="hero-btns mt-9">
            <AppStoreBadges align="center" />
          </div>

          <p className="hero-note mt-5 text-sm text-white/55">
            Free to download. Match by intent, not just looks.
          </p>
        </div>
      </section>

      {/* ── Why MeantGo ── */}
      <section className="relative overflow-hidden bg-lilac py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          {/* Heading */}
          <h2 className="reveal-heading flex flex-wrap items-end gap-x-4 gap-y-3 text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.02] tracking-tight text-ink">
            <span>
              Dating apps were
              <br className="hidden sm:block" /> not built for depth.
            </span>
            <span className="inline-grid size-12 -rotate-6 place-items-center rounded-2xl bg-white shadow-[0_10px_28px_rgba(20,12,40,0.16)] sm:size-14">
              <Heart
                className="size-6 text-brand sm:size-7"
                fill="currentColor"
                aria-hidden="true"
              />
            </span>
          </h2>

          {/* Tilted photo cards */}
          <div className="relative mt-14 flex flex-col items-center gap-10 md:mt-16 md:block md:h-[27rem]">
            <DepthCard
              className="md:left-0 md:top-0"
              rotate={-5}
              label="People near you"
              overlay={
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-ink shadow-md">
                  <span className="grid size-4 place-items-center rounded-full bg-brand text-white">
                    <Users className="size-2.5" aria-hidden="true" />
                  </span>
                  Matthew Davis and 2 Others
                </span>
              }
            />
            <DepthCard
              className="md:left-1/2 md:top-24 md:-translate-x-1/2"
              rotate={3}
              label="Shared interest"
              overlay={["Travel", "Adventure", "Fitness", "Movies"].map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-ink shadow-md"
                >
                  {c}
                </span>
              ))}
            />
            <DepthCard
              className="md:right-0 md:top-10"
              rotate={5}
              label="Shared goals"
              src={heroCouple}
              overlay={
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-ink shadow-md">
                  <Heart className="size-3 text-brand" fill="currentColor" aria-hidden="true" />
                  Serious Relationship
                </span>
              }
            />
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="bg-surface py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <SectionLabel>How MeantGo Works</SectionLabel>
            <h2 className="reveal-heading text-4xl font-bold leading-tight tracking-tight text-[#1F8A4C] md:text-5xl">
              Built around the things that actually matter.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/55">
              MeantGo was built on a different belief: the best connections start with intent.
              People who know what they want and are not afraid to say it.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {features.map((feature, index) => {
              const s = featureStyles[index % featureStyles.length];
              const wide = index === features.length - 1 && features.length % 2 === 1;
              return (
                <article
                  key={feature.title}
                  className={`feature-article flex flex-col rounded-[2rem] p-7 lg:p-9 ${s.card} ${
                    wide ? "md:col-span-2 md:flex-row md:items-center md:gap-10" : ""
                  }`}
                >
                  <div className={wide ? "md:flex-1" : ""}>
                    <h3 className={`text-2xl font-bold leading-snug ${s.title}`}>
                      {feature.title}
                    </h3>
                    <p className={`mt-3 text-sm leading-relaxed ${s.body}`}>{feature.body}</p>
                  </div>
                  <div className={`mt-6 ${wide ? "md:mt-0 md:flex-1" : ""}`}>
                    <FeatureVisual type={feature.visual} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how-it-works" className="bg-[#0B0A12] py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="max-w-3xl">
            <h2 className="reveal-heading text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[1.04] tracking-tight text-white">
              From download to first connection.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/55">
              A calmer path from curiosity to contact. Each step gives people more context before
              anyone has to make a move.
            </p>
          </div>

          <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <li key={step.title} className="step-card">
                  <Icon className="size-7 text-brand" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-bold leading-snug text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">{step.body}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ── Stats ── */}
      <StatsBand />

      {/* ── Interests ── */}
      <section className="relative overflow-hidden bg-surface py-24 lg:py-32">
        <GridBackdrop mask="radial-gradient(ellipse 70% 75% at 50% 50%, #000 12%, transparent 82%)" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <SectionLabel>What Are You Into?</SectionLabel>
            <h2 className="reveal-heading text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
              60+ interests, organized around real overlap.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/55">
              MeantGo turns interests into useful discovery signals, so someone can find the parts
              of you that usually take three dates to explain.
            </p>
            <div className="mt-8 grid max-w-sm grid-cols-3 gap-3">
              {[
                ["60+", "interests"],
                ["4", "categories"],
                ["1", "clear intent"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-ink/8 bg-surface-muted/50 p-4 text-center"
                >
                  <p className="text-2xl font-bold tracking-tight text-brand">{value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink/40">
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
                className="interest-tag group rounded-3xl border border-ink/8 bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand/25 hover:shadow-[0_12px_36px_rgba(124,58,237,0.10)]"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-2xl bg-brand/10 text-lg text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                      <i className={category.icon} aria-hidden="true" />
                    </span>
                    <h3 className="font-semibold text-ink">{category.label}</h3>
                  </div>
                  <span className="text-2xl font-bold text-ink/10">0{categoryIndex + 1}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.tags.map((tag, index) => (
                    <span
                      key={tag}
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        index % 3 === 0
                          ? "bg-lilac text-ink"
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

      {/* ── Testimonials (hidden — not in reference design) ── */}
      {SHOW_TESTIMONIALS && (
        <section className="bg-surface-muted py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mb-12 grid gap-8 lg:grid-cols-[0.74fr_1fr] lg:items-end">
              <div>
                <SectionLabel>Real Stories. Real Connections.</SectionLabel>
                <h2 className="reveal-heading text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
                  They started with one honest Intent.
                </h2>
              </div>
              <p className="max-w-lg text-base leading-relaxed text-ink/55 lg:justify-self-end">
                Real connection feels less random when people can name what they want and find
                someone already moving in the same direction.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {testimonials.map((item) => (
                <figure
                  key={item.name}
                  className="testimonial-card group relative overflow-hidden rounded-3xl border border-ink/8 bg-surface p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(124,58,237,0.12)]"
                >
                  {/* Gradient top border on hover */}
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-brand to-brand-light opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="mb-6 flex items-center justify-between">
                    <Stars count={5} />
                    <span className="text-3xl font-bold leading-none text-brand/12 select-none">
                      "
                    </span>
                  </div>

                  <blockquote className="min-h-40 text-base leading-relaxed text-ink/68">
                    "{item.quote}"
                  </blockquote>

                  <figcaption className="mt-7 flex items-center gap-3 border-t border-ink/8 pt-5">
                    <img
                      src={item.img}
                      alt={`Portrait of ${item.name}`}
                      className="size-11 rounded-full object-cover ring-2 ring-brand/15 transition-all duration-200 group-hover:ring-brand/40"
                    />
                    <div>
                      <p className="text-sm font-semibold text-ink">{item.name}</p>
                      <p className="text-xs text-ink/45">{item.location}</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Safety ── */}
      <section
        id="safety"
        className="relative overflow-hidden bg-deep-purple py-24 text-white lg:py-32"
      >
        <GridBackdrop
          line="rgba(255,255,255,0.05)"
          mask="radial-gradient(ellipse 75% 70% at 50% 40%, #000 15%, transparent 90%)"
        />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel light>Your Safety. Our Priority.</SectionLabel>
            <h2 className="reveal-heading text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              Connect freely. Stay protected.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/55">
              MeantGo is designed to put you in control at every step. Safety is not an afterthought
              here. It is the foundation.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {trustPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.label}
                  className="trust-point group rounded-3xl border border-white/8 bg-white/[0.05] p-7 transition-all duration-200 hover:-translate-y-1 hover:border-brand/30 hover:bg-white/[0.08]"
                >
                  <div className="mb-6 grid size-11 place-items-center rounded-2xl bg-brand/20 transition-colors group-hover:bg-brand">
                    <Icon
                      className="size-5 text-brand-light transition-colors group-hover:text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-semibold text-white">{point.label}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/50">{point.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Download CTA ── */}
      <section
        id="download"
        className="relative overflow-hidden px-5 py-28 text-center sm:px-6 lg:py-36 bg-[linear-gradient(135deg,#7C3AED_0%,#5B21B6_100%)]"
      >
        {/* Subtle ring decorations */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
        >
          <div className="size-[500px] animate-spin-slow rounded-full border border-white/8" />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
        >
          <div className="size-[750px] animate-spin-slow-reverse rounded-full border border-white/5" />
        </div>

        <div className="relative mx-auto max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
            Ready When You Are
          </p>
          <h2 className="reveal-heading text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            The connection you have been looking for is already here.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Download MeantGo. Send your intent. Find someone who shares it.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <AppStoreBadges align="center" />
          </div>
          <p className="mt-5 text-sm text-white/45">
            Free to download. No subscription required to get started.
          </p>
        </div>
      </section>
    </div>
  );
}
