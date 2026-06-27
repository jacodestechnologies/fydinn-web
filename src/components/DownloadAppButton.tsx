import appleBlackBadge from "@/assets/apple-black.svg";
import appleWhiteBadge from "@/assets/apple-white.svg";
import googlePlayBadge from "@/assets/GetItOnGooglePlay_Badge_Web_color_English.svg";
import { APP_CONFIG } from "@/lib/config";

type Props = {
  align?: "start" | "center";
  className?: string;
};

export function DownloadAppButton({ align = "start", className = "" }: Props) {
  return (
    <div
      className={`flex flex-wrap items-center gap-3 ${
        align === "center" ? "justify-center" : "justify-start"
      } ${className}`}
    >
      <a
        href={APP_CONFIG.appStoreUrl}
        aria-label="Download MeantGo on the App Store"
        className="inline-flex h-10 transition hover:-translate-y-px active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
      >
        <img
          src={appleBlackBadge}
          alt="Download on the App Store"
          className="h-10 w-auto dark:hidden"
          loading="lazy"
        />
        <img
          src={appleWhiteBadge}
          alt="Download on the App Store"
          className="hidden h-10 w-auto dark:block"
          loading="lazy"
        />
      </a>
      <a
        href={APP_CONFIG.googlePlayUrl}
        aria-label="Get MeantGo on Google Play"
        className="inline-flex h-10 transition hover:-translate-y-px active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
      >
        <img
          src={googlePlayBadge}
          alt="Get it on Google Play"
          className="h-10 w-auto"
          loading="lazy"
        />
      </a>
    </div>
  );
}
