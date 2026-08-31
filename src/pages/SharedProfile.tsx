import { useEffect } from "react";
import { useParams } from "react-router-dom";
import logoWhite from "@/assets/logo/meantgo-horizontal-white.svg";
import { DownloadAppButton } from "@/components/DownloadAppButton";
import { APP_CONFIG } from "@/lib/config";

export default function SharedProfile() {
  const { token } = useParams<{ token: string }>();

  useEffect(() => {
    if (!token) return;
    const isAndroid = /Android/i.test(navigator.userAgent);
    if (!isAndroid) return;

    const fallback = encodeURIComponent(APP_CONFIG.googlePlayUrl);
    const intentUrl = `intent://meantgo.com/p/${token}#Intent;scheme=https;package=com.meantgo;S.browser_fallback_url=${fallback};end`;
    window.location.href = intentUrl;
  }, [token]);

  return (
    <div
      className="flex min-h-dvh flex-col items-center justify-center px-6 py-16 text-center text-white"
      style={{
        background: "linear-gradient(180deg, #7C3AED 0%, #6A24D6 52%, #5B1FB8 100%)",
      }}
    >
      <img src={logoWhite} alt="MeantGo" className="h-9 w-auto" />

      <h1 className="mt-10 max-w-sm text-2xl font-semibold tracking-tight text-balance">
        Someone shared a MeantGo profile with you
      </h1>
      <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
        Open it in the MeantGo app to see who — this link only works there.
      </p>

      <DownloadAppButton align="center" className="mt-9" />
    </div>
  );
}
