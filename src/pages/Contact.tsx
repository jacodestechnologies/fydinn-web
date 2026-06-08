import { useState } from "react";
import { Mail, MapPin, MessageSquare } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-32">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand mb-6">Get in Touch</p>
      <h1 className="font-display text-5xl md:text-6xl font-black leading-[1] text-ink mb-6 tracking-tight">
        We'd love to hear from you.
      </h1>
      <p className="text-xl leading-8 text-ink/65 mb-16 max-w-xl">
        Questions, feedback, partnership ideas, or just a hello — our inbox is always open.
      </p>

      <div className="grid md:grid-cols-[1fr_1.5fr] gap-16">
        {/* Contact details */}
        <div className="space-y-10">
          <div className="flex gap-4">
            <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand/10 text-brand">
              <Mail className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="font-bold text-ink mb-1">General Enquiries</p>
              <a href="mailto:hello@meantgo.app" className="text-ink/65 hover:text-brand transition-colors">
                hello@meantgo.app
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand/10 text-brand">
              <MessageSquare className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="font-bold text-ink mb-1">Privacy &amp; Support</p>
              <a href="mailto:privacy@meantgo.app" className="text-ink/65 hover:text-brand transition-colors">
                privacy@meantgo.app
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand/10 text-brand">
              <MapPin className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="font-bold text-ink mb-1">Headquarters</p>
              <p className="text-ink/65">Lagos, Nigeria</p>
            </div>
          </div>

          <div className="border-t border-ink/10 pt-8">
            <p className="text-sm font-semibold text-ink/55 mb-3">Follow Us</p>
            <div className="flex gap-4">
              {["Instagram", "TikTok", "Twitter/X"].map((platform) => (
                <a key={platform} href="#" className="text-sm font-bold text-brand-deep hover:text-brand transition-colors">
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div>
          {sent ? (
            <div className="rounded-[2rem] bg-brand/8 border border-brand/20 p-10 text-center">
              <div className="grid size-16 place-items-center rounded-full bg-brand/15 text-brand mx-auto mb-4">
                <Mail className="size-7" aria-hidden="true" />
              </div>
              <h2 className="font-display text-2xl font-black text-ink mb-2">Message sent!</h2>
              <p className="text-ink/65">We'll get back to you within 24–48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-ink mb-2">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-ink/15 bg-white/70 px-5 py-4 text-ink placeholder:text-ink/35 focus:border-brand focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-ink mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-ink/15 bg-white/70 px-5 py-4 text-ink placeholder:text-ink/35 focus:border-brand focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-ink mb-2">Subject</label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="What's this about?"
                  className="w-full rounded-2xl border border-ink/15 bg-white/70 px-5 py-4 text-ink placeholder:text-ink/35 focus:border-brand focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-ink mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  placeholder="Tell us what's on your mind..."
                  className="w-full rounded-2xl border border-ink/15 bg-white/70 px-5 py-4 text-ink placeholder:text-ink/35 focus:border-brand focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-brand px-8 py-3 text-sm font-bold text-white shadow-[0_18px_45px_rgba(155,91,255,0.28)] transition hover:-translate-y-0.5 hover:bg-brand-deep w-full sm:w-auto"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
