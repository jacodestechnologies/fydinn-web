import { Bell, Compass, EyeOff, Flag, Lock, Send, ShieldCheck, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import amara from "@/assets/avatar-elena.jpg";
import chidinma from "@/assets/avatar-sarah.jpg";
import dayo from "@/assets/avatar-marcus.jpg";

export type Stat = { value: string; label: string; detail: string; stars?: boolean };
export type Feature = { eyebrow: string; title: string; body: string; visual: string };
export type FeatureStyle = { card: string; title: string; body: string };
export type Step = { icon: LucideIcon; eyebrow: string; title: string; body: string; cue: string };
export type Testimonial = { quote: string; name: string; location: string; img: string };
export type TrustPoint = { icon: LucideIcon; label: string; copy: string };

export const stats: Stat[] = [
  { value: "500K+", label: "Connections Made", detail: "real starts, not endless swipes" },
  { value: "60+", label: "Shared Interests", detail: "ways to find common ground" },
  { value: "3", label: "Relationship Goals", detail: "clear intent from day one" },
];

// Interests shown in the "Your interests are your introduction" card.
export const commonGround = [
  "Nollywood",
  "Afrobeats",
  "Good coffee",
  "Jollof debates",
  "Detty December",
  "Live music",
];

export const features: Feature[] = [
  {
    eyebrow: "01",
    title: "Your interests are your introduction.",
    body: "Before you say a word, MeantGo already knows you love Afrobeats, never miss Detty December, and cannot live without good coffee. It finds people who feel the same way.",
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
    title: "Show genuine interest. No games, no guessing.",
    body: "Send an Intent to someone you are genuinely interested in. They will see it, think it over, and respond when they are ready. It is connection, not competition.",
    visual: "intents",
  },
];

// Per-card fills for the feature grid (checkerboard of light tints / dark panels).
export const featureStyles: FeatureStyle[] = [
  { card: "bg-lilac", title: "text-ink", body: "text-ink/60" },
  { card: "bg-[#2C2466]", title: "text-white", body: "text-white/65" },
  { card: "bg-[#F2ECDD]", title: "text-ink", body: "text-ink/60" },
  { card: "bg-[#141118]", title: "text-white", body: "text-white/65" },
];

export const steps: Step[] = [
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

export const testimonials: Testimonial[] = [
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

export const trustPoints: TrustPoint[] = [
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
