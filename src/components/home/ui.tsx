import walkingImg from "@/assets/walkingg.png";
import seeThemImg from "@/assets/see-them.png";
import intentsImg from "@/assets/Group-15.png";
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

/*
 * Feature visuals. The "tags" card stays code-based so the interest chips are
 * editable; the other three are pre-rendered design assets.
 */
export function FeatureVisual({ type }: { type: string }) {
  if (type === "tags") {
    return (
      <div className="rounded-2xl border border-ink/6 bg-warm-cream/80 p-6 shadow-soft">
        <div className="mb-5 flex items-center justify-between">
          <span className="text-sm font-semibold text-ink">Common ground</span>
          <span className="rounded-full bg-mint px-3 py-1 text-xs font-semibold text-ink">
            87% overlap
          </span>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {commonGround.map((tag, i) => (
            <span
              key={tag}
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                i % 2 === 0 ? "bg-brand text-white" : "bg-lilac text-ink"
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
