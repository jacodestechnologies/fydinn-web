import { useState } from "react";
import { Mail, MapPin, Shield, Clock, Send, Check, Instagram, Facebook } from "lucide-react";

const contactChannels = [
  {
    icon: Mail,
    sub: "General questions & support",
    value: "support@meantgo.com",
    href: "mailto:support@meantgo.com",
  },
  {
    icon: Shield,
    sub: "Privacy & data requests",
    value: "privacy@meantgo.com",
    href: "mailto:privacy@meantgo.com",
  },
  {
    icon: MapPin,
    sub: "Headquarters",
    value: "3832 Roxberry Hill Lane, Buford, GA 30518-8541",
  },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/meantgo/", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/MeantGoApp.", icon: Facebook },
];

const subjects = [
  "General question",
  "Account or login help",
  "Report a problem",
  "Privacy request",
  "Partnership or press",
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="max-w-5xl mx-auto px-5 sm:px-6 py-16 pb-24">
      {/* Header */}
      <div className="mb-14 max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand mb-5">
          Get in Touch
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-ink mb-5">
          We'd love to hear from you
        </h1>
        <p className="text-base sm:text-lg leading-relaxed text-ink/60">
          Questions, feedback, partnership ideas, or just a hello — our inbox is always open and
          we read every message.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14">
        {/* Contact details */}
        <div>
          <div className="rounded-xl border border-ink/10 bg-surface-muted/40 px-5">
            {contactChannels.map(({ icon: Icon, sub, value, href }, i) => (
              <div
                key={sub}
                className={`flex items-start gap-3.5 py-4 ${
                  i !== contactChannels.length - 1 ? "border-b border-ink/10" : ""
                }`}
              >
                <Icon className="size-5 shrink-0 mt-0.5 text-brand" aria-hidden="true" />
                <div className="min-w-0">
                  {href ? (
                    <a
                      href={href}
                      className="block text-[15px] font-medium text-ink hover:text-brand transition-colors break-all"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-[15px] font-medium text-ink">{value}</p>
                  )}
                  <p className="text-xs text-ink/40 mt-0.5">{sub}</p>
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="flex gap-5 py-4">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink/55 hover:text-brand transition-colors"
                >
                  <Icon className="size-4" aria-hidden="true" />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Response time */}
          <div className="mt-3 rounded-xl border border-brand/20 bg-brand/5 p-5 flex gap-3 items-center">
            <Clock className="size-5 shrink-0 text-brand" aria-hidden="true" />
            <p className="text-sm text-ink/70">
              We typically respond within{" "}
              <strong className="font-semibold text-ink">24–48 hours</strong>.
            </p>
          </div>
        </div>

        {/* Form */}
        <div>
          {sent ? (
            <div className="rounded-2xl border border-brand/20 bg-brand/5 p-10 sm:p-12 text-center h-full flex flex-col justify-center min-h-[24rem]">
              <div className="grid size-14 place-items-center rounded-full bg-brand/15 text-brand mx-auto mb-5">
                <Check className="size-7" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-ink mb-2">
                Message sent
              </h2>
              <p className="text-ink/60 max-w-sm mx-auto">
                Thanks for reaching out. We'll get back to you within 24–48 hours at the email you
                provided.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 mx-auto text-sm font-semibold text-brand hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-ink/10 bg-surface-muted/30 p-6 sm:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name" htmlFor="name">
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className={inputClass}
                  />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </Field>
              </div>

              <Field label="Subject" htmlFor="subject">
                <select id="subject" required defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    Choose a topic
                  </option>
                  {subjects.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Message" htmlFor="message">
                <textarea
                  id="message"
                  required
                  rows={6}
                  placeholder="Tell us what's on your mind..."
                  className={`${inputClass} resize-none`}
                />
              </Field>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
                <button
                  type="submit"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-brand px-6 py-2.5 text-sm font-semibold text-white shadow-[0_2px_8px_rgba(124,58,237,0.35)] transition-all hover:-translate-y-px hover:shadow-[0_4px_16px_rgba(124,58,237,0.45)]"
                >
                  <Send className="size-4" aria-hidden="true" />
                  Send Message
                </button>
                <p className="text-xs text-ink/45">
                  By sending, you agree to our{" "}
                  <a href="/privacy" className="text-brand hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

const inputClass =
  "w-full rounded-lg border border-ink/15 bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-brand focus:ring-2 focus:ring-brand/20 focus:outline-none transition-colors";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-semibold text-ink mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}
