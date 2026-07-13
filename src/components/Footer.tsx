import { Link } from "react-router-dom";
import logoWhite from "@/assets/logo/meantgo-horizontal-white.svg";

const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Features", href: "/#features" },
      { label: "Download", href: "/#download" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy", internal: true },
      { label: "Terms of Service", href: "/terms", internal: true },
      { label: "Cookie Policy", href: "/cookies", internal: true },
      { label: "Delete Account", href: "/delete-account", internal: true },
      { label: "Contact", href: "/contact", internal: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B0A12] text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_2fr]">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center">
              <img src={logoWhite} alt="MeantGo" className="h-8 w-auto" />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/55">
              Where meaningful connections begin. Match by intent, not just looks.
            </p>
            <address className="mt-4 max-w-xs text-sm not-italic leading-relaxed text-white/55">
              3832 Roxberry Hill Lane
              <br />
              Buford, GA 30518
            </address>
            <div className="mt-5 flex gap-4">
              {["Instagram", "TikTok", "X"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs font-semibold text-white/45 transition-colors hover:text-brand-light"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerGroups.map(({ title, links }) => (
              <div key={title}>
                <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-white/40">
                  {title}
                </h3>
                <div className="grid gap-3">
                  {links.map((link) =>
                    "internal" in link && link.internal ? (
                      <Link
                        key={link.label}
                        to={link.href}
                        className="text-sm text-white/55 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        key={link.label}
                        href={link.href}
                        className="text-sm text-white/55 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>Copyright {new Date().getFullYear()} MeantGo. All rights reserved.</span>
          <span>Made with intention.</span>
        </div>
      </div>
    </footer>
  );
}
