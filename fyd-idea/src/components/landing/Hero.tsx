import heroCouple from "@/assets/hero-couple.jpg";
import { AppStoreBadges } from "@/components/landing/AppStoreBadges";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-32 lg:min-h-[calc(100vh-5rem)] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center w-full">
        <div className="relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full border border-brand/30 text-brand-light text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
            The Dating App for Intentional Connections
          </div>
          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.88] tracking-tighter text-balance mb-8 text-text-main">
            Find Your <br />
            <span className="italic text-brand">FirstDate</span>
          </h1>
          <p className="text-lg lg:text-xl text-text-muted max-w-lg mb-12 leading-relaxed font-light text-pretty">
            Download the FirstDate app and skip the endless swiping. We focus on shared intentions to help you find a partner who values what you do — right from your pocket.
          </p>
          <AppStoreBadges variant="dark" />
          <p className="mt-6 text-xs text-text-subtle uppercase tracking-[0.22em] font-semibold">
            Free to download · iOS &amp; Android
          </p>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-hairline rotate-2 hover:rotate-0 transition-transform duration-700">
            <img
              src={heroCouple}
              alt="A sophisticated couple sharing an intimate moment at a dimly lit cocktail lounge"
              width={800}
              height={1000}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/0 to-transparent pointer-events-none" />
          </div>
          <div aria-hidden="true" className="absolute -bottom-10 -left-10 size-48 bg-brand/20 blur-[100px] rounded-full -z-10" />
        </div>
      </div>
    </section>
  );
}