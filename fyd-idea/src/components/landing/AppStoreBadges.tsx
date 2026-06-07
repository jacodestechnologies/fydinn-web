import { APP_CONFIG } from "@/lib/config";

type Props = {
  className?: string;
};

export function AppStoreBadges({ className = "" }: Props) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a
        href="#"
        aria-label={`Download ${APP_CONFIG.name} on the App Store`}
        className="inline-flex items-center gap-4 bg-white text-zinc-950 px-6 py-4 min-h-14 hover:bg-zinc-100 transition-colors active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand border border-transparent"
      >
        <svg
          className="size-7 shrink-0"
          viewBox="0 0 384 512"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM260.6 84.5c20.4-24.2 36.4-58.5 26.7-94.5-31.7 1-69.6 21-91.7 47.1-19.6 22.4-37.8 56.4-29.4 90.7 32.5 2.5 65.7-15.9 94.4-43.3z" />
        </svg>
        <span className="flex flex-col items-start leading-tight">
          <span className="text-[10px] font-medium uppercase tracking-wider opacity-60">
            Download on the
          </span>
          <span className="text-base font-bold tracking-tight">App Store</span>
        </span>
      </a>

      <a
        href="#"
        aria-label={`Get ${APP_CONFIG.name} on Google Play`}
        className="inline-flex items-center gap-4 bg-white text-zinc-950 px-6 py-4 min-h-14 hover:bg-zinc-100 transition-colors active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand border border-transparent"
      >
        <svg className="size-7 shrink-0" viewBox="0 0 512 512" aria-hidden="true">
          <path fill="#34A853" d="M325.3 234.3 104.6 13l280.8 161.2-60.1 60.1z" />
          <path fill="#FBBC04" d="M104.6 499 325.3 277.7l60.1 60.1L104.6 499z" />
          <path
            fill="#4285F4"
            d="M385.4 174.2 467 222c17.7 10.2 17.7 35.8 0 46L385.4 315.8l-66.1-66.1 66.1-75.5z"
          />
          <path
            fill="#EA4335"
            d="M104.6 13c-4.3 2.8-7.1 7.7-7.1 14.2v457.6c0 6.5 2.8 11.5 7.1 14.2l218.7-243-218.7-243z"
          />
        </svg>
        <span className="flex flex-col items-start leading-tight">
          <span className="text-[10px] font-medium uppercase tracking-wider opacity-60">
            Get it on
          </span>
          <span className="text-base font-bold tracking-tight">Google Play</span>
        </span>
      </a>
    </div>
  );
}
