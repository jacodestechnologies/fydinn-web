import { useState } from "react";
import { AlertTriangle, Send, Check } from "lucide-react";

const noticePoints = [
  "Your profile, photos, video, and bio will be permanently deleted",
  "All your matches and conversations will be erased",
  "You won't be able to restore your account or data after deletion",
  "A minimal deletion record is retained for legal and safety purposes",
  "Processing may take up to 30 days; backups are purged within 90 days",
];

export default function DeleteAccount() {
  const [sent, setSent] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="bg-surface-muted/40">
      {/* Hero band */}
      <div className="bg-gradient-to-br from-brand to-brand-deep px-5 py-16 text-center sm:px-6 lg:py-20">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Delete Account
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80">
          We're sorry to see you go. Please note that account deletion is permanent and cannot be
          undone.
        </p>
      </div>

      {/* Card */}
      <div className="mx-auto max-w-2xl px-5 pb-24 sm:px-6">
        <div className="-mt-10 rounded-2xl border border-ink/8 bg-surface p-6 shadow-[0_12px_40px_rgba(10,22,40,0.10)] sm:p-9">
          {sent ? (
            <div className="py-10 text-center">
              <div className="mx-auto mb-5 grid size-14 place-items-center rounded-full bg-brand/15 text-brand">
                <Check className="size-7" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-ink">
                Request received
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink/60">
                We've received your account deletion request. You'll receive a confirmation email
                shortly, and your account and data will be removed within 30 days. If you change
                your mind, contact us before processing completes.
              </p>
            </div>
          ) : (
            <>
              {/* Important Information notice */}
              <div className="rounded-xl border border-red-200 bg-red-50 p-5 dark:border-red-900/40 dark:bg-red-950/30">
                <div className="mb-3 flex items-center gap-2.5">
                  <AlertTriangle className="size-5 shrink-0 text-red-500" aria-hidden="true" />
                  <h2 className="font-semibold text-red-700 dark:text-red-300">
                    Important Information
                  </h2>
                </div>
                <ul className="space-y-2 pl-1">
                  {noticePoints.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm leading-relaxed text-red-700/90 dark:text-red-300/90"
                    >
                      <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-red-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Form */}
              <h2 className="mb-6 mt-9 text-xl font-semibold tracking-tight text-ink">
                Account Deletion Request
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <Field label="Email Address" htmlFor="email" required>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </Field>

                <Field label="Phone Number" htmlFor="phone" required>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+234 803 123 4567"
                    className={inputClass}
                  />
                </Field>

                <Field label="Reason for Deletion" htmlFor="reason" required>
                  <textarea
                    id="reason"
                    required
                    rows={5}
                    placeholder="Please tell us why you want to delete your account..."
                    className={`${inputClass} resize-none`}
                  />
                </Field>

                {/* Confirmation checkbox */}
                <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-ink/10 bg-surface-muted/40 px-4 py-3">
                  <input
                    type="checkbox"
                    required
                    checked={confirmed}
                    onChange={(e) => setConfirmed(e.target.checked)}
                    className="mt-0.5 size-4 shrink-0 accent-red-500"
                  />
                  <span className="text-sm leading-relaxed text-ink/70">
                    I understand that this action is permanent and that my profile, matches, and
                    messages cannot be recovered.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!confirmed}
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_2px_8px_rgba(220,38,38,0.30)] transition-all hover:bg-red-700 hover:shadow-[0_4px_16px_rgba(220,38,38,0.40)] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
                >
                  <Send className="size-4" aria-hidden="true" />
                  Submit Deletion Request
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-ink/50">
                Need help? Contact our support team at{" "}
                <a
                  href="mailto:support@meantgo.com"
                  className="font-medium text-brand hover:underline"
                >
                  support@meantgo.com
                </a>
              </p>
            </>
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
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-ink">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}
