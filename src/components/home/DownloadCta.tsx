import { AppStoreBadges } from "./ui";

export function DownloadCta() {
  return (
    <section
      id="download"
      className="relative overflow-hidden bg-[#0B0A12] px-5 py-28 text-center sm:px-6 lg:py-36"
    >
      {/* Large soft arc */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-48%] aspect-square w-[130%] max-w-[64rem] -translate-x-1/2 rounded-full bg-white/[0.04]"
      />

      <div className="relative z-10 mx-auto max-w-3xl">
        <h2 className="reveal-heading text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05] tracking-tight text-[#E9E2FB]">
          The connection you have been looking for is already here.
        </h2>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <AppStoreBadges align="center" />
        </div>
      </div>
    </section>
  );
}
