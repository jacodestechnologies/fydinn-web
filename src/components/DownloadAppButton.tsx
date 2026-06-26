import { useState } from "react";
import { ChevronDown, Download, Smartphone } from "lucide-react";
import { APP_CONFIG } from "@/lib/config";

type Props = {
  align?: "start" | "center";
  className?: string;
};

function getPreferredStore() {
  const userAgent = navigator.userAgent || navigator.vendor;

  if (/android/i.test(userAgent)) return APP_CONFIG.googlePlayUrl;
  if (/iPad|iPhone|iPod|Macintosh/i.test(userAgent)) return APP_CONFIG.appStoreUrl;

  return null;
}

export function DownloadAppButton({ align = "start", className = "" }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleDownload() {
    const preferredStore = getPreferredStore();

    if (preferredStore) {
      window.location.href = preferredStore;
      return;
    }

    setIsOpen((open) => !open);
  }

  return (
    <div
      className={`relative inline-flex flex-col ${align === "center" ? "items-center" : "items-start"} ${className}`}
    >
      <button
        type="button"
        onClick={handleDownload}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-brand px-5 py-3 pr-6 text-sm font-bold text-white shadow-[0_10px_26px_rgba(124,58,237,0.34)] transition-all hover:-translate-y-px hover:bg-brand-deep hover:shadow-[0_14px_34px_rgba(124,58,237,0.42)] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
      >
        <span className="relative grid size-8 shrink-0 place-items-center rounded-md bg-white/15 ring-1 ring-white/20 transition-colors group-hover:bg-white/20">
          <Smartphone className="size-4.5" strokeWidth={2.4} aria-hidden="true" />
          <Download
            className="absolute -bottom-1 -right-1 size-3.5 rounded-sm bg-white p-0.5 text-brand shadow-sm"
            strokeWidth={2.6}
            aria-hidden="true"
          />
        </span>
        Download App
        <ChevronDown
          className={`size-4 opacity-70 transition-transform ${isOpen ? "rotate-180" : ""}`}
          strokeWidth={2.4}
          aria-hidden="true"
        />
      </button>

      {isOpen ? (
        <div
          role="menu"
          className={`absolute top-full z-20 mt-3 w-60 rounded-lg border border-ink/10 bg-white p-2 shadow-[0_18px_44px_rgba(20,12,40,0.18)] ${
            align === "center" ? "left-1/2 -translate-x-1/2" : "left-0"
          }`}
        >
          <a
            href={APP_CONFIG.appStoreUrl}
            role="menuitem"
            className="flex items-center justify-between rounded-md px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brand/8"
          >
            <span>App Store</span>
            <span className="text-xs font-medium text-ink/45">iOS</span>
          </a>
          <a
            href={APP_CONFIG.googlePlayUrl}
            role="menuitem"
            className="flex items-center justify-between rounded-md px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brand/8"
          >
            <span>Google Play</span>
            <span className="text-xs font-medium text-ink/45">Android</span>
          </a>
        </div>
      ) : null}
    </div>
  );
}
