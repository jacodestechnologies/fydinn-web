import walkingImg from "@/assets/walkingg.png";
import seeThemImg from "@/assets/see-them.png";
import intentsImg from "@/assets/Group-15.png";
import { DownloadAppButton } from "@/components/DownloadAppButton";
import { commonGround } from "./data";

export function StarFilled({ className }: { className?: string }) {
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

export function Stars({ count = 5 }: { count?: number }) {
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

export function SectionLabel({ children, light }: { children: string; light?: boolean }) {
  return (
    <p
      className={`mb-5 text-xs font-bold uppercase tracking-[0.18em] ${
        light ? "text-brand-light" : "text-brand"
      }`}
    >
      {children}
    </p>
  );
}

export function AppStoreBadges({ align = "start" }: { align?: "start" | "center" }) {
  return <DownloadAppButton align={align} />;
}

/*
 * Feature visuals. The "tags" card stays code-based so the interest chips are
 * editable; the other three are pre-rendered design assets.
 */
export function FeatureVisual({ type }: { type: string }) {
  if (type === "tags") {
    return (
      <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-[0_8px_30px_rgba(20,12,40,0.08)]">
        <div className="mb-5 flex items-center justify-between">
          <span className="text-sm font-semibold text-[#1B1033]">Common ground</span>
          <span className="rounded-full bg-[#E6F7FB] px-3 py-1 text-xs font-semibold text-[#1B1033]">
            87% overlap
          </span>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {commonGround.map((tag, i) => (
            <span
              key={tag}
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                i % 2 === 0 ? "bg-[#7C3AED] text-white" : "bg-[#EDE9FE] text-[#1B1033]"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  }
  if (type === "intentions") return <img src={walkingImg} alt="" className="w-full" />;
  if (type === "video") return <img src={seeThemImg} alt="" className="mx-auto w-full max-w-sm" />;
  if (type === "intents") return <img src={intentsImg} alt="" className="w-full" />;
  return null;
}
