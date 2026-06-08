export default function DeleteAccount() {
  return (
    <div className="max-w-2xl mx-auto px-5 sm:px-6 py-16 pb-24">
      {/* Page header */}
      <div className="mb-14">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand mb-5">Account</p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-ink mb-5">
          Delete Your Account
        </h1>
        <p className="text-ink/60 text-base leading-relaxed">
          We understand that sometimes people need to move on. If you've decided MeantGo isn't
          for you, we've made it simple to delete your account and all associated data.
        </p>
      </div>

      <div className="space-y-12 text-sm leading-relaxed text-ink/80">

        {/* Warning */}
        <div className="rounded-xl border border-red-200 bg-red-50 dark:border-red-900/40 dark:bg-red-950/30 px-5 py-4 flex gap-3">
          <span className="mt-0.5 shrink-0 text-red-500">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
              <line x1="12" y1="9" x2="12" y2="13"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          </span>
          <p className="text-sm text-red-700 dark:text-red-300">
            Account deletion is permanent and cannot be undone. You will not be able to recover
            your profile, matches, or messages after deletion.
          </p>
        </div>

        {/* What happens */}
        <section>
          <h2 className="text-xl font-semibold tracking-tight text-ink mb-4">
            What Happens When You Delete Your Account
          </h2>
          <ul className="space-y-3 pl-5 list-disc marker:text-brand">
            <li>Your profile is immediately removed from public view</li>
            <li>
              All your personal data (photos, videos, messages, and preferences) is permanently
              deleted from our servers
            </li>
            <li>All your matches and conversations are erased</li>
            <li>
              We retain a minimal deletion timestamp for legal and fraud prevention purposes
            </li>
          </ul>
        </section>

        {/* How to delete — in-app */}
        <section>
          <h2 className="text-xl font-semibold tracking-tight text-ink mb-2">
            How to Delete Your Account
          </h2>
          <p className="text-ink/55 mb-6">
            The fastest way is directly inside the app.
          </p>
          <div className="space-y-3">
            {[
              "Open MeantGo and log in",
              "Tap your profile icon to go to Settings",
              "Scroll to the bottom and tap Delete Account",
              "Confirm your decision when prompted",
              "Your account is deleted immediately",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="shrink-0 grid size-7 place-items-center rounded-full bg-brand/10 text-xs font-bold text-brand">
                  {i + 1}
                </span>
                <p className="pt-1 text-ink/75">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Email deletion */}
        <section>
          <h2 className="text-xl font-semibold tracking-tight text-ink mb-3">
            Request Deletion by Email
          </h2>
          <p>
            If you cannot access the app, you can request account deletion by emailing us at{" "}
            <a
              href="mailto:privacy@meantgo.com"
              className="text-brand font-medium hover:underline"
            >
              privacy@meantgo.com
            </a>{" "}
            with the following:
          </p>
          <ul className="mt-4 space-y-2 pl-5 list-disc marker:text-brand">
            <li>The email address associated with your account</li>
            <li>A clear statement requesting account deletion</li>
            <li>Confirmation that you understand the deletion is permanent</li>
          </ul>
          <p className="mt-4">
            We will process all email deletion requests within{" "}
            <strong className="font-semibold text-ink">72 hours</strong>.
          </p>
        </section>

        {/* Data retention */}
        <section>
          <h2 className="text-xl font-semibold tracking-tight text-ink mb-3">
            Data Retention After Deletion
          </h2>
          <p className="mb-5">
            After your account is deleted, most data is immediately removed. The following may be
            retained for legal reasons:
          </p>
          <div className="rounded-xl border border-ink/10 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-muted border-b border-ink/10">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-ink/50">
                    Data
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-ink/50">
                    Retention
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-ink/50">
                    Reason
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["All personal data", "Deleted within 30 days", "Standard deletion"],
                  ["Backup copies", "Purged within 90 days", "Backup rotation"],
                  ["Abuse/safety reports", "As long as required", "Platform safety"],
                  ["Deletion timestamp", "Audit purposes only", "Legal obligation"],
                ].map(([data, retention, reason], i) => (
                  <tr key={i} className={`border-b border-ink/8 last:border-0 ${i % 2 === 1 ? "bg-surface-muted/40" : ""}`}>
                    <td className="px-4 py-3 font-medium text-ink whitespace-nowrap">{data}</td>
                    <td className="px-4 py-3 text-ink/65">{retention}</td>
                    <td className="px-4 py-3 text-ink/50">{reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Rights */}
        <section>
          <h2 className="text-xl font-semibold tracking-tight text-ink mb-3">
            Your Rights
          </h2>
          <p>Under applicable data protection laws, you have the right to:</p>
          <ul className="mt-4 space-y-2 pl-5 list-disc marker:text-brand">
            <li>Request deletion of your personal data</li>
            <li>Receive confirmation that deletion has been completed</li>
            <li>Request a copy of your data before deletion</li>
          </ul>
          <p className="mt-4">
            For data access or portability requests, email{" "}
            <a
              href="mailto:privacy@meantgo.com"
              className="text-brand font-medium hover:underline"
            >
              privacy@meantgo.com
            </a>{" "}
            with "Data Subject Access Request" in the subject line.
          </p>
        </section>

        {/* Questions */}
        <div className="rounded-xl border border-ink/10 bg-surface-muted px-6 py-6">
          <h2 className="text-base font-semibold text-ink mb-2">Have questions?</h2>
          <p className="text-ink/60">
            Reach out to our privacy team at{" "}
            <a
              href="mailto:privacy@meantgo.com"
              className="text-brand font-medium hover:underline"
            >
              privacy@meantgo.com
            </a>
            . We aim to respond within 72 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
