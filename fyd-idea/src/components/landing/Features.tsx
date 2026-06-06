import { Heart, ShieldCheck, MessageSquare, CalendarHeart } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Smart Matching",
    body: "Our algorithm prioritizes shared values and lifestyle habits over superficial traits.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Profiles",
    body: "Every member undergoes mandatory identity verification to ensure a safe environment.",
  },
  {
    icon: MessageSquare,
    title: "Secure Messaging",
    body: "Encrypted chat and built-in safety tools protect your privacy throughout the journey.",
  },
  {
    icon: CalendarHeart,
    title: "Event Curation",
    body: "Receive local date suggestions based on mutual interests for your first meeting.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-32 lg:py-40 border-y border-hairline">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, body }, i) => (
            <div
              key={title}
              className={`p-8 bg-surface-muted/50 border border-hairline rounded-3xl flex flex-col gap-6 transition-all duration-500 hover:border-brand/50 hover:-translate-y-1 ${i % 2 === 1 ? "md:mt-8" : ""}`}
            >
              <div className="text-brand">
                <Icon className="size-10" strokeWidth={1} aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-text-main">{title}</h3>
              <p className="text-sm text-text-subtle leading-relaxed font-light">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}