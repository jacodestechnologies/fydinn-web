import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline py-24 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2 flex flex-col gap-6 max-w-sm">
            <div className="flex items-center gap-2.5">
              <div className="size-8 bg-brand rounded-full" />
              <span className="font-display text-2xl font-bold tracking-tighter text-text-main">FirstDate</span>
            </div>
            <p className="text-sm text-text-subtle leading-relaxed font-light">
              Building a safer, more intentional way to connect with people who share your vision for the future.
            </p>
            <div className="flex gap-6 mt-4">
              <a href="#" className="text-text-subtle hover:text-brand transition-colors text-sm font-light">Instagram</a>
              <a href="#" className="text-text-subtle hover:text-brand transition-colors text-sm font-light">Twitter</a>
              <a href="#" className="text-text-subtle hover:text-brand transition-colors text-sm font-light">LinkedIn</a>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted">Legal</span>
            <Link to="/privacy" className="text-sm text-text-subtle hover:text-brand transition-colors font-light">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-text-subtle hover:text-brand transition-colors font-light">Terms of Service</Link>
            <Link to="/cookies" className="text-sm text-text-subtle hover:text-brand transition-colors font-light">Cookie Policy</Link>
          </div>
          <div className="flex flex-col gap-5">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted">Membership</span>
            <p className="text-sm text-text-subtle font-light">Get dating tips and app updates.</p>
            <form
              className="relative"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Email address"
                className="bg-transparent border-b border-hairline py-3 pr-16 w-full text-sm text-text-main placeholder:text-text-subtle focus:outline-none focus:border-brand transition-colors"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-brand font-bold text-[11px] uppercase tracking-[0.22em] hover:text-brand-light transition"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-hairline">
          <span className="text-[10px] text-text-subtle uppercase tracking-[0.3em] font-bold">
            © {new Date().getFullYear()} FirstDate App. All rights reserved.
          </span>
          <span className="text-[10px] text-text-subtle uppercase tracking-[0.3em] font-bold">
            Est. 2024 — Made with intention
          </span>
          <div className="flex gap-4 text-text-subtle">
            <a href="#" aria-label="FirstDate on Twitter" className="hover:text-brand transition-colors">
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" aria-label="FirstDate on Instagram" className="hover:text-brand transition-colors">
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}