import { Link } from "react-router-dom";
import { MessageCircleHeart } from "lucide-react";

const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Features", href: "/#features" },
      { label: "Download the App", href: "/#download" },
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
      { label: "Contact", href: "/contact", internal: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-warm-cream/60 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_2fr]">
          {/* Brand */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-2xl bg-brand text-white shadow-[0_10px_30px_rgba(155,91,255,0.28)]">
                <MessageCircleHeart className="size-5" aria-hidden="true" />
              </span>
              <span className="font-display text-2xl font-black text-ink">
                Fydinn
              </span>
            </div>
            <p className="max-w-sm text-ink/62">
              Where meaningful connections begin.
            </p>
            <div className="mt-6 flex gap-4 text-sm font-bold text-brand-deep">
              {["Instagram", "TikTok", "Twitter/X"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-brand transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          <div className="grid gap-8 sm:grid-cols-3">
            {footerGroups.map(({ title, links }) => (
              <div key={title}>
                <h3 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-ink">
                  {title}
                </h3>
                <div className="grid gap-3">
                  {links.map((link) =>
                    "internal" in link && link.internal ? (
                      <Link
                        key={link.label}
                        to={link.href}
                        className="text-sm font-semibold text-ink/58 hover:text-brand transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        key={link.label}
                        href={link.href}
                        className="text-sm font-semibold text-ink/58 hover:text-brand transition-colors"
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

        <div className="mt-12 flex flex-col gap-3 border-t border-ink/8 pt-6 text-sm font-semibold text-ink/52 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Fydinn. All rights reserved.</span>
          <span>Made with intention.</span>
        </div>
      </div>
    </footer>
  );
}
