export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-6 py-16 pb-24">
      {/* Page header */}
      <div className="mb-14">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand mb-5">Legal</p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-ink mb-5">
          Terms of Service
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
            "Acceptance of These Terms",
            "Eligibility and Age Requirement",
            "Your Account",
            "The Service",
            "User Conduct and Acceptable Use",
            "Content You Provide",
            "Safety and Interactions With Others",
            "Intellectual Property",
            "Third-Party Services",
            "Suspension and Termination",
            "Disclaimers",
            "Limitation of Liability",
            "Indemnification",
            "Governing Law and Disputes",
            "Changes to These Terms",
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
          <SectionTitle n={1} title="Acceptance of These Terms" />
          <p>
            These Terms of Service ("Terms") form a binding agreement between you and MeantGo
            ("we," "our," or "us") governing your access to and use of the MeantGo mobile
            application and related services (collectively, the "Service").
          </p>
          <Callout>
            By downloading, registering for, accessing, or using MeantGo, you confirm that you
            have read, understood, and agree to be bound by these Terms and our Privacy Policy.
            If you do not agree, you must not use the Service.
          </Callout>
        </section>

        {/* 2 */}
        <section id="section-2">
          <SectionTitle n={2} title="Eligibility and Age Requirement" />
          <p>
            MeantGo is intended exclusively for individuals who are 18 years of age or older. By
            creating an account, you represent and warrant that:
          </p>
          <ul className="mt-4 space-y-2 pl-5 list-disc marker:text-brand">
            <li>You are at least 18 years old;</li>
            <li>
              You have the legal capacity to enter into a binding agreement in your jurisdiction;
            </li>
            <li>You are not barred from using the Service under any applicable law;</li>
            <li>
              All information you provide during registration and onboarding is accurate, current,
              and truthful.
            </li>
          </ul>
          <p className="mt-4">
            We verify minimum age eligibility using the date of birth you provide at registration.
            Accounts found to belong to a person under 18 will be suspended and deleted.
          </p>
        </section>

        {/* 3 */}
        <section id="section-3">
          <SectionTitle n={3} title="Your Account" />
          <p>
            To use MeantGo you must register an account using a valid phone number and email
            address. You are responsible for:
          </p>
          <ul className="mt-4 space-y-2 pl-5 list-disc marker:text-brand">
            <li>
              Maintaining the confidentiality of your account, login credentials, and one-time
              passcodes (OTPs);
            </li>
            <li>All activity that occurs under your account;</li>
            <li>
              Promptly notifying us at{" "}
              <Mail>support@meantgo.com</Mail> if you suspect unauthorised access or any breach of
              security.
            </li>
          </ul>
          <p className="mt-4">
            You may maintain only one account. You may not transfer, sell, or share your account
            with any other person.
          </p>
        </section>

        {/* 4 */}
        <section id="section-4">
          <SectionTitle n={4} title="The Service" />
          <p>
            MeantGo helps people discover and form meaningful connections based on shared
            interests, compatible intentions, and genuine compatibility. The Service includes:
          </p>
          <ul className="mt-4 space-y-2 pl-5 list-disc marker:text-brand">
            <li>A personalised discovery feed based on your interests, intention, and location;</li>
            <li>Intent requests that let you express interest in another user;</li>
            <li>In-app messaging between matched users;</li>
            <li>Profile creation with photos, an optional video introduction, and a bio.</li>
          </ul>
          <p className="mt-4">
            We may add, modify, or remove features of the Service at any time. We do not guarantee
            that the Service, or any particular feature, will always be available or uninterrupted.
          </p>
        </section>

        {/* 5 */}
        <section id="section-5">
          <SectionTitle n={5} title="User Conduct and Acceptable Use" />
          <p>
            MeantGo is built on respect and authenticity. When using the Service, you agree that
            you will NOT:
          </p>
          <ul className="mt-4 space-y-2.5 pl-5 list-disc marker:text-brand">
            <li>Harass, threaten, intimidate, abuse, or harm any other user;</li>
            <li>
              Impersonate any person or entity, or misrepresent your identity, age, or affiliation;
            </li>
            <li>
              Create a fake, fraudulent, or misleading profile, or operate automated accounts or
              bots;
            </li>
            <li>
              Upload, share, or transmit content that is unlawful, hateful, defamatory, obscene, or
              sexually explicit without consent;
            </li>
            <li>
              Solicit money, advertise, promote, or use the Service for any commercial purpose
              without our written permission;
            </li>
            <li>
              Request, collect, or share other users' personal or financial information;
            </li>
            <li>
              Attempt to access, scrape, reverse-engineer, or interfere with the Service, its
              servers, or its security systems;
            </li>
            <li>Use the Service in violation of any applicable law or regulation.</li>
          </ul>
          <p className="mt-4">
            Violations may result in immediate suspension or permanent termination of your account
            and, where appropriate, referral to law enforcement.
          </p>
        </section>

        {/* 6 */}
        <section id="section-6">
          <SectionTitle n={6} title="Content You Provide" />
          <p>
            You retain ownership of the photos, videos, bio, and other content you submit to
            MeantGo ("User Content"). You are solely responsible for your User Content and
            represent that:
          </p>
          <ul className="mt-4 space-y-2 pl-5 list-disc marker:text-brand">
            <li>You own or have the necessary rights to the content you upload;</li>
            <li>Your content does not infringe the rights of any third party;</li>
            <li>Your content complies with these Terms and our Community Guidelines.</li>
          </ul>
          <p className="mt-4">
            By submitting User Content, you grant us a limited, non-exclusive, royalty-free licence
            to host, store, display, and distribute that content solely for the purpose of
            operating and providing the Service. This licence ends when you delete the content or
            your account, subject to standard backup retention. We will never sell your User
            Content to third parties.
          </p>
        </section>

        {/* 7 */}
        <section id="section-7">
          <SectionTitle n={7} title="Safety and Interactions With Others" />
          <Callout>
            MeantGo provides a platform for connection, but we do not conduct criminal background
            checks on users. You are responsible for your own interactions and safety.
          </Callout>
          <p className="mt-4">
            We encourage you to exercise caution and good judgement when interacting with other
            users, both online and in person. You can report abusive, fraudulent, or harmful
            behaviour at any time through the in-app reporting tools or by emailing{" "}
            <Mail>support@meantgo.com</Mail>. We review reports and may take action including
            warning, suspending, or permanently removing accounts.
          </p>
        </section>

        {/* 8 */}
        <section id="section-8">
          <SectionTitle n={8} title="Intellectual Property" />
          <p>
            The Service, including its software, design, logos, trademarks, and all content we
            provide (excluding User Content), is owned by MeantGo or its licensors and is
            protected by intellectual property laws. You may not copy, modify, distribute, sell, or
            create derivative works from any part of the Service without our prior written consent.
          </p>
        </section>

        {/* 9 */}
        <section id="section-9">
          <SectionTitle n={9} title="Third-Party Services" />
          <p>
            MeantGo relies on trusted third-party providers to operate, including Twilio (SMS
            verification), Google Firebase (push notifications), and Amazon Web Services (media
            storage). Your use of the Service may be subject to those providers' terms. We are not
            responsible for the practices or content of any third-party service.
          </p>
        </section>

        {/* 10 */}
        <section id="section-10">
          <SectionTitle n={10} title="Suspension and Termination" />
          <p>
            We may suspend or terminate your access to the Service, in whole or in part, at any
            time and at our sole discretion if you violate these Terms, create risk or legal
            exposure for us, or for any other lawful reason.
          </p>
          <p className="mt-4">
            You may delete your account at any time from Settings within the app, or by contacting{" "}
            <Mail>privacy@meantgo.com</Mail>. Upon deletion, your data is handled in accordance with
            our Privacy Policy. Provisions that by their nature should survive termination
            (including ownership, disclaimers, and limitation of liability) will remain in effect.
          </p>
        </section>

        {/* 11 */}
        <section id="section-11">
          <SectionTitle n={11} title="Disclaimers" />
          <p>
            The Service is provided on an "as is" and "as available" basis, without warranties of
            any kind, whether express or implied. To the fullest extent permitted by law, we
            disclaim all warranties including merchantability, fitness for a particular purpose, and
            non-infringement.
          </p>
          <p className="mt-4">
            We do not guarantee that you will find a match, form a connection, or enter into any
            relationship through the Service. We are not responsible for the conduct, statements, or
            actions of any user, whether online or offline.
          </p>
        </section>

        {/* 12 */}
        <section id="section-12">
          <SectionTitle n={12} title="Limitation of Liability" />
          <p>
            To the maximum extent permitted by applicable law, MeantGo and its officers,
            directors, employees, and partners will not be liable for any indirect, incidental,
            special, consequential, or punitive damages, or any loss of profits, data, goodwill, or
            other intangible losses, arising from your use of or inability to use the Service.
          </p>
          <p className="mt-4">
            Where liability cannot be excluded but may be limited, our total aggregate liability
            will not exceed the greater of the amount you paid us in the twelve months preceding the
            claim, or USD 50.
          </p>
        </section>

        {/* 13 */}
        <section id="section-13">
          <SectionTitle n={13} title="Indemnification" />
          <p>
            You agree to indemnify and hold harmless MeantGo and its affiliates from any claims,
            damages, losses, liabilities, and expenses (including reasonable legal fees) arising
            out of or related to your User Content, your use of the Service, your violation of these
            Terms, or your violation of the rights of any third party.
          </p>
        </section>

        {/* 14 */}
        <section id="section-14">
          <SectionTitle n={14} title="Governing Law and Disputes" />
          <p>
            These Terms are governed by the laws of the Federal Republic of Nigeria, without regard
            to its conflict-of-law principles. Any dispute arising from or relating to these Terms
            or the Service will be subject to the exclusive jurisdiction of the competent courts of
            Nigeria, except where applicable mandatory consumer-protection law in your country of
            residence provides otherwise.
          </p>
        </section>

        {/* 15 */}
        <section id="section-15">
          <SectionTitle n={15} title="Changes to These Terms" />
          <p>
            We may update these Terms from time to time to reflect changes in our practices, the
            Service, or applicable law. When we make material changes, we will update the "Last
            Updated" date above and notify you through a prominent in-app notification or by email.
          </p>
          <p className="mt-4">
            Your continued use of MeantGo after changes take effect constitutes acceptance of the
            updated Terms. If you do not agree to the changes, you must stop using the Service and
            may delete your account.
          </p>
        </section>

        {/* 16 */}
        <section id="section-16">
          <SectionTitle n={16} title="Contact Us" />
          <p>
            If you have questions about these Terms, please contact us:
          </p>
          <div className="mt-5 grid sm:grid-cols-2 gap-4">
            <ContactCard title="Support" lines={["support@meantgo.com"]} />
            <ContactCard title="Privacy & Data" lines={["privacy@meantgo.com"]} />
            <ContactCard
              title="Mailing Address"
              lines={["MeantGo", "[Company Legal Address]", "Nigeria"]}
            />
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
