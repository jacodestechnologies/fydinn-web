export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-6 py-16 pb-24">
      {/* Page header */}
      <div className="mb-14">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand mb-5">Legal</p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-ink mb-5">
          Privacy Policy
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
            "Introduction",
            "Information We Collect",
            "How We Use Your Information",
            "How We Share Your Information",
            "Data Retention and Security",
            "Your Rights and Choices",
            "Push Notifications",
            "Location Data",
            "Media Content",
            "Children's Privacy",
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
          <SectionTitle n={1} title="Introduction" />
          <p>
            MeantGo ("we," "our," or "us") is a mobile application that helps people discover and
            form meaningful connections based on shared interests, compatible intentions, and genuine
            compatibility. This Privacy Policy explains what personal information we collect, why we
            collect it, how we protect it, and the rights you hold over your data.
          </p>
          <Callout>
            By downloading, registering for, or using the MeantGo app, you acknowledge that you
            have read and understood this Privacy Policy. If you do not agree, please do not use
            the Service.
          </Callout>
          <p className="mt-4">
            MeantGo is available on iOS (Apple App Store) and Android (Google Play Store). This
            Policy applies to all versions of the app and any related web properties or services
            we operate.
          </p>
        </section>

        {/* 2 */}
        <section id="section-2">
          <SectionTitle n={2} title="Information We Collect" />

          <SubTitle>Information You Provide</SubTitle>
          <Table
            headers={["Data", "Purpose", "Required"]}
            rows={[
              ["Phone number", "Account creation and OTP-based login", "Yes"],
              ["Email address", "Account correspondence and recovery", "Yes"],
              ["Full name", "Profile display", "Yes"],
              ["Date of birth", "Age verification (18+) and profile display", "Yes"],
              ["Gender", "Personalised discovery", "Yes"],
              ["Relationship intention", "Matching with compatible users", "Yes"],
              ["Interests (60+ options)", "Core matching algorithm input", "Yes"],
              ["Profile photos (up to 6)", "Profile display in discovery feed", "Yes — min. 2"],
              ["Profile video", "Introductory video on profile card", "Optional"],
              ["Bio", "Personal description", "Optional"],
              ["Height", "Profile display", "Optional"],
              ["Lifestyle preferences", "Smoking and alcohol habits", "Optional"],
              ["Family plans", "Children and future plans", "Optional"],
            ]}
          />

          <SubTitle>Information Collected Automatically</SubTitle>
          <Table
            headers={["Data", "Purpose"]}
            rows={[
              ["GPS coordinates (with permission)", "Proximity-based discovery and distance display"],
              ["Device push token (FCM)", "Delivering push notifications"],
              ["App usage data", "Improving app performance and user experience"],
              ["Authentication tokens (JWT)", "Maintaining your secure login session"],
              ["OTP codes (temporary, max 5 min)", "Phone number verification during login"],
            ]}
          />

          <SubTitle>Information from Third Parties</SubTitle>
          <Table
            headers={["Source", "Data", "Why"]}
            rows={[
              ["sent.dm", "OTP delivery confirmation", "Phone number verification"],
              ["Firebase (Google)", "Device push token", "Push notification delivery"],
              ["AWS S3", "Media file keys", "Confirming successful photo/video upload"],
            ]}
          />
          <p className="mt-4">
            We do not purchase or acquire personal data from data brokers or marketing providers.
          </p>
        </section>

        {/* 3 */}
        <section id="section-3">
          <SectionTitle n={3} title="How We Use Your Information" />
          <p>We use the information we collect to:</p>
          <ul className="mt-4 space-y-2.5 pl-5 list-disc marker:text-brand">
            <li>Create and authenticate your account</li>
            <li>Display your profile to other users in the discovery feed</li>
            <li>Power personalised matching based on your interests, intention, and location</li>
            <li>Process and manage Intent requests between users</li>
            <li>Enable in-app messaging between matched users</li>
            <li>Send OTP codes, push notifications, and transactional emails</li>
            <li>Detect and investigate accounts that violate our Community Guidelines</li>
            <li>Enforce age verification (18+)</li>
            <li>Analyse anonymised usage patterns to improve the app</li>
            <li>Comply with applicable laws and legal obligations</li>
          </ul>
        </section>

        {/* 4 */}
        <section id="section-4">
          <SectionTitle n={4} title="How We Share Your Information" />
          <Callout>We do not sell your personal data.</Callout>

          <SubTitle>With Other Users</SubTitle>
          <p>
            Your display name, age, photos, video, bio, interests, height, lifestyle preferences,
            family plans, and online status are visible to other registered users as part of the
            normal discovery experience. Your phone number, email address, and precise GPS
            coordinates are never shared with other users.
          </p>

          <SubTitle>With Service Providers</SubTitle>
          <p>
            We share data with trusted processors who act strictly on our instructions:
          </p>
          <Table
            headers={["Provider", "Data Shared", "Purpose"]}
            rows={[
              ["sent.dm", "Phone number", "OTP SMS delivery"],
              ["Google Firebase (FCM)", "Device push token", "Push notification delivery"],
              ["Amazon Web Services (S3)", "Photos and videos (encrypted)", "Cloud media storage"],
              ["Redis", "Temporary OTP codes and rate-limit counters", "Session management"],
            ]}
          />
          <p className="mt-4">
            All providers are bound by data processing agreements that prohibit them from using
            your data for any purpose beyond their contracted service.
          </p>

          <SubTitle>Legal Disclosures and Business Transfers</SubTitle>
          <p>
            We may disclose your information where required by law, to protect our users or
            platform, or in connection with a merger, acquisition, or sale of assets. We will
            notify you of any such transfer and any material changes to data handling.
          </p>
        </section>

        {/* 5 */}
        <section id="section-5">
          <SectionTitle n={5} title="Data Retention and Security" />

          <SubTitle>How Long We Keep Your Data</SubTitle>
          <Table
            headers={["Data", "Retention"]}
            rows={[
              ["Active account data", "For the duration of your account"],
              ["Inactive accounts (24+ months)", "May be deleted after prior notice"],
              ["Deleted account data", "Removed from active systems within 30 days; backups purged within 90 days"],
              ["OTP codes", "5 minutes from generation"],
              ["JWT access tokens", "12 hours"],
              ["JWT refresh tokens", "7 days"],
              ["Legal hold data", "As long as required by law"],
            ]}
          />

          <SubTitle>Security Measures</SubTitle>
          <ul className="mt-3 space-y-2.5 pl-5 list-disc marker:text-brand">
            <li>All data in transit is encrypted using TLS (Transport Layer Security)</li>
            <li>
              Authentication tokens are stored in hardware-backed secure storage (iOS Keychain /
              Android Keystore) via flutter_secure_storage
            </li>
            <li>API access uses short-lived, signed JWT tokens with refresh token rotation</li>
            <li>
              OTP endpoints are rate-limited: 3 send attempts per hour per phone number, with
              automatic lockout after repeated failed verifications
            </li>
            <li>
              Photos and videos are uploaded directly to AWS S3 via time-limited presigned URLs
              and never pass through our application servers
            </li>
            <li>Internal access to personal data is restricted to authorised personnel</li>
          </ul>
          <p className="mt-4 text-ink/55 text-xs">
            No security system is completely impenetrable. In the event of a breach likely to affect
            your rights, we will notify you and applicable authorities as required by law.
          </p>
        </section>

        {/* 6 */}
        <section id="section-6">
          <SectionTitle n={6} title="Your Rights and Choices" />
          <Table
            headers={["Right", "How to exercise it"]}
            rows={[
              ["Access your data", "Contact us at support@meantgo.com"],
              ["Correct your data", "Update directly in the app or contact us"],
              ["Delete your account and data", "Settings > Delete Account, or contact us — processed within 30 days"],
              ["Withdraw location consent", "Device settings: revoke location permission at any time"],
              ["Withdraw notification consent", "Device settings or app notification preferences"],
              ["Opt out of marketing", "Unsubscribe link in emails or contact us"],
            ]}
          />
          <p className="mt-4">
            Depending on your country of residence you may have additional rights under local
            privacy law (including GDPR for EEA/UK users, CCPA for California residents, and NDPA
            for Nigerian residents). To exercise any right, contact us at support@meantgo.com and
            we will respond within 30 days.
          </p>
        </section>

        {/* 7 */}
        <section id="section-7">
          <SectionTitle n={7} title="Push Notifications" />
          <p>
            We use Firebase Cloud Messaging (FCM) to send you push notifications, including new
            Intent requests, messages from matched users, and important app updates. To do this,
            we store your device's FCM push token on our servers.
          </p>
          <p className="mt-4">You can disable push notifications at any time:</p>
          <ul className="mt-3 space-y-2 pl-5 list-disc marker:text-brand">
            <li>
              iOS: Settings &gt; MeantGo &gt; Notifications
            </li>
            <li>
              Android: Settings &gt; Apps &gt; MeantGo &gt; Notifications
            </li>
            <li>Within the MeantGo app: Settings &gt; Notification Preferences</li>
          </ul>
          <p className="mt-4">
            Disabling notifications does not affect your ability to use the app. You can still
            check your Intents and messages manually.
          </p>
        </section>

        {/* 8 */}
        <section id="section-8">
          <SectionTitle n={8} title="Location Data" />
          <p>
            With your explicit permission, we collect your GPS coordinates to enable proximity-based
            discovery (e.g., the Nearby section in Explore) and calculate distances between users.
            Your precise coordinates are never shown to other users — only a rounded distance
            indicator (e.g., "3 km away") appears on profile cards.
          </p>
          <p className="mt-4">
            We request "while using the app" location access only. We do not collect location in
            the background. You can grant or revoke location permission at any time in your device
            settings. If you revoke access, distance-based features will be disabled but the rest
            of the app continues to work normally.
          </p>
        </section>

        {/* 9 */}
        <section id="section-9">
          <SectionTitle n={9} title="Media Content" />
          <p>
            You may upload up to six profile photos and one video introduction. All files are
            transmitted directly to Amazon S3 cloud storage via pre-signed HTTPS URLs and never
            pass through our application servers.
          </p>
          <p className="mt-4">
            Your photos and video are visible to any authenticated MeantGo user who views your
            profile. You are solely responsible for ensuring that content you upload does not
            violate third-party rights or our Community Guidelines.
          </p>
          <p className="mt-4">
            When you remove a photo or video, or delete your account, the media is deleted from
            cloud storage within 30 days and from backups within 90 days.
          </p>
        </section>

        {/* 10 */}
        <section id="section-10">
          <SectionTitle n={10} title="Children's Privacy" />
          <Callout>
            MeantGo is strictly for users aged 18 and over. We do not knowingly collect personal
            information from anyone under 18.
          </Callout>
          <p className="mt-4">
            Date of birth is collected at registration to verify minimum age eligibility. If we
            discover that a user under 18 has created an account, we will immediately suspend the
            account and delete all associated data. If you believe a minor is using MeantGo,
            contact us at support@meantgo.com and we will take prompt action.
          </p>
        </section>

        {/* 11 */}
        <section id="section-11">
          <SectionTitle n={11} title="Changes to This Policy" />
          <p>
            We may update this Privacy Policy to reflect changes in our practices or applicable
            law. When we make material changes, we will update the "Last Updated" date above and
            notify you through a prominent in-app notification. For significant changes that affect
            how we process your data, we may request your renewed consent.
          </p>
          <p className="mt-4">
            Your continued use of MeantGo after notification constitutes acceptance of the updated
            Policy. Previous versions are available on request.
          </p>
        </section>

        {/* 12 */}
        <section id="section-12">
          <SectionTitle n={12} title="Contact Us" />
          <p>
            For privacy-related questions, requests, or concerns, please reach out to us:
          </p>
          <div className="mt-5 grid sm:grid-cols-2 gap-4">
            <ContactCard
              title="General Privacy"
              lines={["support@meantgo.com", "In-App: Settings > Help & Support"]}
            />
            <ContactCard
              title="Mailing Address"
              lines={["MeantGo", "3832 Roxberry Hill Lane", "Buford, GA 30518-8541"]}
            />
          </div>
          <p className="mt-5">
            We respond to all privacy requests within 30 days. For complex requests requiring
            additional time, we will inform you of the delay and the reasons for it.
          </p>
          <p className="mt-4 text-ink/55">
            If you are in the UK or EEA and are unsatisfied with our response, you may contact the
            UK ICO (ico.org.uk) or your local EU supervisory authority. Nigerian residents may
            contact NITDA (nitda.gov.ng).
          </p>
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

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-base font-semibold text-ink mt-7 mb-3">{children}</h3>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 rounded-lg border-l-4 border-brand bg-brand/5 px-4 py-3 text-sm text-ink/80">
      {children}
    </div>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-lg border border-ink/10">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-surface-muted border-b border-ink/10">
            {headers.map((h) => (
              <th
                key={h}
                className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-ink/50 whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`border-b border-ink/8 last:border-0 ${
                i % 2 === 1 ? "bg-surface-muted/40" : ""
              }`}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-4 py-3 align-top leading-relaxed ${
                    j === 0 ? "font-medium text-ink whitespace-nowrap" : "text-ink/65"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ContactCard({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="rounded-lg border border-ink/10 bg-surface-muted/50 px-4 py-4">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink/40 mb-2">{title}</p>
      {lines.map((l) => (
        <p key={l} className="text-sm text-ink/75">
          {l}
        </p>
      ))}
    </div>
  );
}
