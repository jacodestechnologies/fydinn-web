export default function Cookies() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-6 py-16 pb-24">
      {/* Page header */}
      <div className="mb-14">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand mb-5">Legal</p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-ink mb-5">
          Cookie &amp; Storage Policy
        </h1>
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-ink/55">
          <span>Effective Date: June 8, 2026</span>
          <span>Last Updated: June 8, 2026</span>
          <span>Version 1.0</span>
        </div>
      </div>

      {/* Table of Contents */}
      <nav className="mb-14 rounded-xl border border-ink/10 bg-surface-muted p-6">
        <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-ink/40 mb-4">
          Contents
        </h2>
        <ol className="space-y-2 text-sm text-ink/70">
          {[
            "Overview",
            "Technologies We Use",
            "Why We Use On-Device Storage",
            "What We Do Not Do",
            "Third-Party Technologies",
            "Managing Your Data",
            "Changes to This Policy",
            "Contact Us",
          ].map((item, i) => (
            <li key={i}>
              <a href={`#section-${i + 1}`} className="hover:text-brand transition-colors">
                {i + 1}. {item}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="space-y-14 text-sm leading-relaxed text-ink/80">

        {/* 1 */}
        <section id="section-1">
          <SectionTitle n={1} title="Overview" />
          <p>
            This Cookie &amp; Storage Policy explains the technologies MeantGo uses to store
            information on your device, why we use them, and the choices available to you. It
            supplements our Privacy Policy.
          </p>
          <Callout>
            MeantGo is a mobile application and does not use traditional browser cookies. Instead,
            we use a small set of on-device storage technologies that are essential to keeping you
            logged in, remembering your preferences, and making the app fast and reliable.
          </Callout>
        </section>

        {/* 2 */}
        <section id="section-2">
          <SectionTitle n={2} title="Technologies We Use" />
          <p>
            The following technologies store data locally on your device. None of them are used for
            advertising or cross-app tracking:
          </p>
          <ul className="mt-3 space-y-2.5 pl-5 list-disc marker:text-brand">
            <li>
              <strong className="font-semibold text-ink">Secure storage (essential):</strong>{" "}
              Authentication tokens that keep you signed in, held in your device's hardware-backed
              secure storage (iOS Keychain / Android Keystore).
            </li>
            <li>
              <strong className="font-semibold text-ink">Local cache (performance):</strong> Recently
              fetched profiles, feed data, and app state to improve loading speed. Cleared when you
              log out.
            </li>
            <li>
              <strong className="font-semibold text-ink">App preferences:</strong> Non-sensitive
              settings such as your theme (light/dark mode), notification preferences, and onboarding
              progress.
            </li>
          </ul>
        </section>

        {/* 3 */}
        <section id="section-3">
          <SectionTitle n={3} title="Why We Use On-Device Storage" />
          <p>We rely on local storage for a few specific, limited purposes:</p>
          <ul className="mt-4 space-y-2.5 pl-5 list-disc marker:text-brand">
            <li>
              <strong className="font-semibold text-ink">Authentication.</strong> Securely keeping
              you signed in between sessions without re-entering an OTP every time you open the app.
            </li>
            <li>
              <strong className="font-semibold text-ink">Performance.</strong> Caching recently
              viewed profiles and feed data so the app loads quickly and works smoothly, even on a
              slow connection.
            </li>
            <li>
              <strong className="font-semibold text-ink">Preferences.</strong> Remembering your
              chosen theme, notification settings, and where you left off during onboarding.
            </li>
          </ul>
        </section>

        {/* 4 */}
        <section id="section-4">
          <SectionTitle n={4} title="What We Do Not Do" />
          <p>To be clear about our boundaries:</p>
          <ul className="mt-4 space-y-2 pl-5 list-disc marker:text-ink/30">
            <li>We do not use cookies or storage for behavioural advertising;</li>
            <li>We do not use cross-app or cross-site tracking technologies;</li>
            <li>We do not build advertising profiles about you;</li>
            <li>
              We do not share on-device data with social media platforms for ad targeting.
            </li>
          </ul>
        </section>

        {/* 5 */}
        <section id="section-5">
          <SectionTitle n={5} title="Third-Party Technologies" />
          <p>
            Some core features depend on trusted third-party providers, which may store limited
            technical identifiers on or about your device strictly to deliver their service:
          </p>
          <ul className="mt-3 space-y-2.5 pl-5 list-disc marker:text-brand">
            <li>
              <strong className="font-semibold text-ink">Push notifications:</strong> Deliver
              notifications to your device, using a device push token.
            </li>
            <li>
              <strong className="font-semibold text-ink">SMS verification:</strong> Send one-time
              passcodes for login, using your phone number.
            </li>
            <li>
              <strong className="font-semibold text-ink">Media storage:</strong> Store and serve your
              profile photos and video, using secure file keys.
            </li>
          </ul>
          <p className="mt-4">
            These providers process data on our behalf under data processing agreements. Their own
            data practices are described in their respective privacy policies.
          </p>
        </section>

        {/* 6 */}
        <section id="section-6">
          <SectionTitle n={6} title="Managing Your Data" />
          <p>You remain in control of the data stored on your device:</p>
          <ul className="mt-4 space-y-2.5 pl-5 list-disc marker:text-brand">
            <li>
              <strong className="font-semibold text-ink">Log out</strong> to clear cached profile
              and feed data from the app;
            </li>
            <li>
              <strong className="font-semibold text-ink">Adjust preferences</strong> such as theme
              and notifications from Settings within the app;
            </li>
            <li>
              <strong className="font-semibold text-ink">Disable notifications</strong> through your
              device settings to stop push-token usage;
            </li>
            <li>
              <strong className="font-semibold text-ink">Uninstall the app</strong> to remove all
              locally stored MeantGo data from your device.
            </li>
          </ul>
          <p className="mt-4">
            Because authentication storage is essential to the Service, it cannot be disabled while
            you remain logged in. Disabling performance or preference storage may affect how the app
            functions.
          </p>
        </section>

        {/* 7 */}
        <section id="section-7">
          <SectionTitle n={7} title="Changes to This Policy" />
          <p>
            We may update this Cookie &amp; Storage Policy to reflect changes in the technologies we
            use or applicable law. When we make material changes, we will update the "Last Updated"
            date above and, where appropriate, notify you within the app. Your continued use of
            MeantGo after changes take effect constitutes acceptance of the updated policy.
          </p>
        </section>

        {/* 8 */}
        <section id="section-8">
          <SectionTitle n={8} title="Contact Us" />
          <p>
            If you have questions about how MeantGo uses on-device storage, please contact us:
          </p>
          <div className="mt-5 grid sm:grid-cols-2 gap-4">
            <ContactCard title="Privacy & Data" lines={["privacy@meantgo.com"]} />
            <ContactCard title="Support" lines={["support@meantgo.com"]} />
          </div>
        </section>

        {/* Footer */}
        <div className="pt-6 border-t border-ink/10 text-xs text-ink/40">
          <p>© 2026 MeantGo. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

/* ── Sub-components ── */

function SectionTitle({ n, title }: { n: number; title: string }) {
  return (
    <h2 className="text-xl font-semibold tracking-tight text-ink mb-4">
      <span className="text-brand mr-2">{n}.</span>
      {title}
    </h2>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 rounded-lg border-l-4 border-brand bg-brand/5 px-4 py-3 text-sm text-ink/80">
      {children}
    </div>
  );
}

function Mail({ children }: { children: string }) {
  return (
    <a href={`mailto:${children}`} className="text-brand font-medium hover:underline">
      {children}
    </a>
  );
}


function ContactCard({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="rounded-lg border border-ink/10 bg-surface-muted/50 px-4 py-4">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink/40 mb-2">{title}</p>
      {lines.map((l) => (
        <p key={l} className="text-sm text-ink/75">
          {l.includes("@") ? <Mail>{l}</Mail> : l}
        </p>
      ))}
    </div>
  );
}
