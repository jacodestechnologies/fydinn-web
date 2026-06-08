import { useEffect, useState } from "react";
import mapImg from "@/assets/map-meantgo.png";
import { stats } from "./data";
import { Stars } from "./ui";

/* Stats band — one big cycling stat over the dotted world map. */
export function StatsBand() {
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
    <section className="relative flex min-h-[32rem] items-center justify-center overflow-hidden bg-[#0C0A1E] py-20 text-white lg:min-h-[36rem]">
      <img
        src={mapImg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 w-[min(72rem,150%)] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain opacity-90"
      />

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
