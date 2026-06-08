import { Heart } from "lucide-react";
import containerImg from "@/assets/Container-section.png";

export function DatingApps() {
  return (
    <section className="relative overflow-hidden bg-lilac py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <h2 className="reveal-heading flex flex-wrap items-end gap-x-4 gap-y-3 text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.02] tracking-tight text-ink">
          <span>
            Dating apps were
            <br className="hidden sm:block" /> not built for depth.
          </span>
          <span className="inline-grid size-12 -rotate-6 place-items-center rounded-2xl bg-white shadow-[0_10px_28px_rgba(20,12,40,0.16)] sm:size-14">
            <Heart className="size-6 text-brand sm:size-7" fill="currentColor" aria-hidden="true" />
          </span>
        </h2>

        <img src={containerImg} alt="" className="depth-card-wrap mx-auto mt-12 w-full max-w-5xl" />
      </div>
    </section>
  );
}
