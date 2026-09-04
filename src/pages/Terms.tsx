import { Link } from "react-router-dom";

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
          <span>Version 1.1</span>
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
            "Profile Information and Representations",
            "Identity and Verification",
            "User Conduct and Acceptable Use",
            "Content You Provide",
            "Messages and Private Communications",
            "Reporting and Moderation",
            "Safety and Interactions With Others",
            "No Background-Check Guarantee",
            "Artificial Intelligence and Automated Systems",
            "Subscriptions and Paid Services",
            "Intellectual Property",
            "Feedback",
            "Third-Party Services and Links",
            "Suspension and Termination",
            "Disclaimers",
            "User Interactions and Release",
            "Limitation of Liability",
            "Indemnification",
            "Dispute Resolution",
            "Governing Law and Disputes",
            "California Residents",
            "Privacy",
            "Child Safety",
            "No Professional Advice",
            "Copyright Complaints",
            "Government Requests and Law Enforcement",
            "Export and Sanctions Compliance",
            "International Users",
            "Consumer Rights",
            "Changes to These Terms",
            "General Provisions",
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
            application and related services (collectively, the "Service"). Our Privacy Policy,
            Community Guidelines, and any feature-specific terms we present to you are
            incorporated into these Terms by reference.
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
              You have not been previously banned from MeantGo, unless we have expressly
              authorised your return; and
            </li>
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
              <Mail>support@meantgo.com</Mail> if you suspect unauthorised access, a compromised
              password, someone impersonating you, or any other breach of security.
            </li>
          </ul>
          <p className="mt-4">
            You may maintain only one account. You may not transfer, sell, rent, or share your
            account with any other person, create an account on behalf of someone else without
            authorisation, or create an account using a false identity.
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
          <Callout>
            MeantGo is a technology platform that facilitates introductions between people. We do
            not guarantee that you will receive matches, that another user will respond to you,
            that you will meet anyone, or that any interaction will lead to a friendship,
            relationship, or other connection. We do not guarantee that a user's profile is
            accurate or that a user is who they claim to be.
          </Callout>
        </section>

        {/* 5 */}
        <section id="section-5">
          <SectionTitle n={5} title="Profile Information and Representations" />
          <p>
            You agree that information you provide through MeantGo — including your identity,
            age, location, relationship status, employment, education, photographs, physical
            characteristics, and intentions — is truthful, current, and not materially
            misleading. You must update your profile promptly if this information changes and
            becomes inaccurate.
          </p>
          <p className="mt-4">
            We may request evidence supporting information you present as verified, and may
            remove or restrict a profile that we reasonably believe is misleading.
          </p>
        </section>

        {/* 6 */}
        <section id="section-6">
          <SectionTitle n={6} title="Identity and Verification" />
          <p>
            MeantGo may offer identity, age, or photo verification features. A "verified"
            badge means only that the applicable verification step was completed to the extent we
            describe at the time — it is not a background check and does not confirm a user's
            character, intentions, honesty, relationship status, or safety.
          </p>
          <Callout>
            Verification does not mean we have run a criminal background check, independently
            confirmed a user's employment, education, or relationship status, or guaranteed that
            the person using an account is who the account represents them to be.
          </Callout>
          <p className="mt-4">
            We may revoke or remove a verification badge at any time where we reasonably believe
            it is appropriate to do so.
          </p>
        </section>

        {/* 7 */}
        <section id="section-7">
          <SectionTitle n={7} title="User Conduct and Acceptable Use" />
          <p>
            MeantGo is built on respect and authenticity. When using the Service, you agree that
            you will NOT:
          </p>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-ink/40">
            Safety and abuse
          </p>
          <ul className="mt-3 space-y-2 pl-5 list-disc marker:text-brand">
            <li>Threaten, stalk, harass, intimidate, blackmail, or abuse another person;</li>
            <li>Engage in sexual exploitation or non-consensual sexual conduct;</li>
            <li>Encourage self-harm, violence, or illegal conduct; or</li>
            <li>Facilitate trafficking or exploitation of any kind.</li>
          </ul>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-ink/40">
            Fraud and deception
          </p>
          <ul className="mt-3 space-y-2 pl-5 list-disc marker:text-brand">
            <li>
              Impersonate any person or entity, or misrepresent your identity, age, or affiliation;
            </li>
            <li>
              Create a fake, fraudulent, or misleading profile, or operate automated accounts or
              bots;
            </li>
            <li>
              Run or participate in romance scams, investment scams, or other schemes to obtain
              money or property through deception; or
            </li>
            <li>Distribute phishing links or engage in identity theft.</li>
          </ul>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-ink/40">
            Sexual content and exploitation
          </p>
          <ul className="mt-3 space-y-2 pl-5 list-disc marker:text-brand">
            <li>
              Upload, share, or transmit content that is unlawful, hateful, defamatory, obscene, or
              sexually explicit without consent;
            </li>
            <li>Distribute non-consensual intimate images, or threaten to distribute them; or</li>
            <li>Solicit sexual content from, or otherwise sexually exploit, a minor.</li>
          </ul>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-ink/40">
            Commercial activity
          </p>
          <ul className="mt-3 space-y-2 pl-5 list-disc marker:text-brand">
            <li>
              Solicit money, advertise, promote, or use the Service for any commercial purpose
              without our written permission;
            </li>
            <li>
              Use MeantGo for escorting, prostitution, or paid-companionship arrangements where
              prohibited by law; or
            </li>
            <li>Recruit users to another commercial platform.</li>
          </ul>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-ink/40">
            Platform abuse
          </p>
          <ul className="mt-3 space-y-2 pl-5 list-disc marker:text-brand">
            <li>
              Request, collect, or share other users' personal or financial information;
            </li>
            <li>
              Scrape, harvest, reverse-engineer, or interfere with the Service, its servers, or its
              security systems;
            </li>
            <li>Circumvent bans or manipulate matching and discovery systems; or</li>
            <li>Use the Service in violation of any applicable law or regulation.</li>
          </ul>
          <p className="mt-5">
            Violations may result in immediate suspension or permanent termination of your account
            and, where appropriate, referral to law enforcement.
          </p>
        </section>

        {/* 8 */}
        <section id="section-8">
          <SectionTitle n={8} title="Content You Provide" />
          <p>
            You retain ownership of the photos, videos, bio, and other content you submit to
            MeantGo ("User Content"). You are solely responsible for your User Content and
            represent that:
          </p>
          <ul className="mt-4 space-y-2 pl-5 list-disc marker:text-brand">
            <li>You own or have the necessary rights to the content you upload;</li>
            <li>Your content does not infringe the rights of any third party;</li>
            <li>You have obtained consent from any identifiable person appearing in it; and</li>
            <li>Your content complies with these Terms and our Community Guidelines.</li>
          </ul>
          <p className="mt-4">
            By submitting User Content, you grant us a limited, non-exclusive, royalty-free
            licence to host, store, display, and distribute that content solely as necessary to
            operate the Service — including displaying your profile to other users, facilitating
            matching, and providing moderation and safety functions. This licence ends when you
            delete the content or your account, subject to standard backup retention.
          </p>
          <p className="mt-4">
            We do not obtain ownership of your User Content merely because you upload it, and we
            will never sell your photographs, messages, or other User Content to third parties.
            We also will not use your name, photograph, or likeness in outside advertising or
            commercial endorsements without your consent.
          </p>
        </section>

        {/* 9 */}
        <section id="section-9">
          <SectionTitle n={9} title="Messages and Private Communications" />
          <p>
            MeantGo provides messaging between matched users. "Private" means the content is not
            intentionally displayed publicly through the ordinary operation of the Service — it
            does not mean your messages are end-to-end encrypted or absolutely inaccessible to us.
          </p>
          <p className="mt-4">
            Subject to applicable law, we may access, preserve, or review messages where
            reasonably necessary to investigate a report of abuse or fraud, protect users from
            imminent harm, respond to legal process, address a security incident, or enforce these
            Terms.
          </p>
        </section>

        {/* 10 */}
        <section id="section-10">
          <SectionTitle n={10} title="Reporting and Moderation" />
          <p>
            You can report abusive, fraudulent, or harmful behaviour at any time through the
            in-app reporting tools or by emailing <Mail>support@meantgo.com</Mail>. Reports may be
            reviewed using a combination of automated systems and human review, and we may warn,
            suspend, or permanently remove an account as a result.
          </p>
          <p className="mt-4">
            We do not guarantee that every prohibited user, fraudulent account, or harmful
            interaction will be identified or prevented, and to protect the privacy and safety of
            everyone involved, we may decline to disclose the details of an enforcement
            investigation.
          </p>
        </section>

        {/* 11 */}
        <section id="section-11">
          <SectionTitle n={11} title="Safety and Interactions With Others" />
          <Callout>
            Dating and meeting people through an online service involves inherent risks. MeantGo
            does not conduct criminal background checks on users. You are responsible for your own
            interactions and safety.
          </Callout>
          <p className="mt-4">We recommend that you:</p>
          <ul className="mt-3 space-y-2 pl-5 list-disc marker:text-brand">
            <li>Communicate through MeantGo before sharing personal contact information;</li>
            <li>Avoid sending money, cryptocurrency, or gift cards to people you meet on MeantGo;</li>
            <li>Independently verify information that matters to you;</li>
            <li>Meet in public places, and tell a trusted person where you're going;</li>
            <li>Avoid sharing passwords, financial details, or authentication codes; and</li>
            <li>Report suspicious behaviour promptly and leave any interaction that feels unsafe.</li>
          </ul>
          <p className="mt-4">
            These recommendations are consistent with public guidance on romance scams and online
            dating safety from the U.S. Federal Trade Commission. We strongly discourage — and
            outside of features we expressly authorise, do not facilitate — financial transfers
            between users, and are not responsible for losses arising from a user voluntarily
            sending money or property to another user.
          </p>
        </section>

        {/* 12 */}
        <section id="section-12">
          <SectionTitle n={12} title="No Background-Check Guarantee" />
          <p>
            Unless expressly identified as such, MeantGo does not represent that it performs
            criminal background checks on all users. Even where a background-check or
            verification feature is offered, no check can guarantee that a person is safe —
            background information may be incomplete, outdated, or unavailable. You remain
            responsible for your own decisions about whether and how to interact with another
            user.
          </p>
        </section>

        {/* 13 */}
        <section id="section-13">
          <SectionTitle n={13} title="Artificial Intelligence and Automated Systems" />
          <p>
            We use automated systems, including machine learning and algorithmic ranking, to power
            features such as discovery, recommendations, search, moderation, fraud detection, and
            spam detection. Automated systems can make mistakes, and we do not guarantee that
            algorithmic recommendations are accurate, unbiased, or appropriate for every user.
          </p>
        </section>

        {/* 14 */}
        <section id="section-14">
          <SectionTitle n={14} title="Subscriptions and Paid Services" />
          <p>
            Certain MeantGo features (such as our premium tier) require payment. Before you
            complete a purchase, we will disclose the applicable price, billing interval, renewal
            terms, and cancellation method. The terms presented to you at checkout form part of
            the agreement for that purchase.
          </p>
          <p className="mt-4">
            If a subscription automatically renews, we will provide the disclosures and obtain the
            consent required by applicable law — including, for California consumers, the material
            renewal-term disclosures required under California Business and Professions Code §
            17602 — before charging you. Where required by law, you may cancel a subscription
            online without unnecessary obstacles, from Settings within the app or by contacting{" "}
            <Mail>support@meantgo.com</Mail>.
          </p>
          <p className="mt-4">
            Except where required by applicable law, payments are non-refundable. Where a
            subscription is purchased through Apple, Google, or another app store, billing and
            cancellation may also be subject to that provider's own terms.
          </p>
        </section>

        {/* 15 */}
        <section id="section-15">
          <SectionTitle n={15} title="Intellectual Property" />
          <p>
            The Service, including its software, design, logos, trademarks, and all content we
            provide (excluding User Content), is owned by MeantGo or its licensors and is
            protected by intellectual property laws. You may not copy, modify, distribute, sell, or
            create derivative works from any part of the Service without our prior written consent.
          </p>
        </section>

        {/* 16 */}
        <section id="section-16">
          <SectionTitle n={16} title="Feedback" />
          <p>
            If you send us suggestions, ideas, or other feedback about MeantGo, you grant us the
            right to use that feedback to operate and improve the Service, without any obligation
            to compensate or credit you.
          </p>
        </section>

        {/* 17 */}
        <section id="section-17">
          <SectionTitle n={17} title="Third-Party Services and Links" />
          <p>
            MeantGo relies on trusted third-party providers to operate, including Sent (SMS
            verification), Google Firebase (push notifications), and Tigris Web Services (media
            storage). Your use of the Service may be subject to those providers' terms. We are not
            responsible for the practices or content of any third-party service.
          </p>
          <p className="mt-4">
            The Service may also contain links to third-party websites. We do not endorse
            third-party content merely because it is accessible through MeantGo, and you access
            any linked site at your own risk.
          </p>
        </section>

        {/* 18 */}
        <section id="section-18">
          <SectionTitle n={18} title="Suspension and Termination" />
          <p>
            We may suspend or terminate your access to the Service, in whole or in part, at any
            time if you violate these Terms, create a safety, fraud, or legal risk for us or other
            users, or for any other lawful reason. Where reasonably practicable, we will provide
            notice and an opportunity to appeal — but we may act immediately where delay could
            create a material safety or security risk.
          </p>
          <p className="mt-4">
            You may delete your account at any time from Settings within the app, or by contacting{" "}
            <Mail>privacy@meantgo.com</Mail>. Upon deletion, your data is handled in accordance with
            our Privacy Policy. Provisions that by their nature should survive termination
            (including ownership, disclaimers, and limitation of liability) will remain in effect.
          </p>
        </section>

        {/* 19 */}
        <section id="section-19">
          <SectionTitle n={19} title="Disclaimers" />
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

        {/* 20 */}
        <section id="section-20">
          <SectionTitle n={20} title="User Interactions and Release" />
          <p>
            You are solely responsible for your interactions with other users, online or in
            person. To the maximum extent permitted by law, you release MeantGo and its officers,
            directors, employees, and agents from claims arising from your interactions with other
            users, except to the extent a claim arises from our own willful misconduct or cannot
            lawfully be released.
          </p>
        </section>

        {/* 21 */}
        <section id="section-21">
          <SectionTitle n={21} title="Limitation of Liability" />
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

        {/* 22 */}
        <section id="section-22">
          <SectionTitle n={22} title="Indemnification" />
          <p>
            You agree to indemnify and hold harmless MeantGo and its affiliates from any claims,
            damages, losses, liabilities, and expenses (including reasonable legal fees) arising
            out of or related to your User Content, your use of the Service, your violation of these
            Terms, or your violation of the rights of any third party.
          </p>
        </section>

        {/* 23 */}
        <section id="section-23">
          <SectionTitle n={23} title="Dispute Resolution" />
          <p>
            Before starting a formal legal proceeding, we ask that you first try to resolve the
            dispute informally by writing to us at <Mail>support@meantgo.com</Mail>, describing the
            nature of the dispute, the relevant facts, and the resolution you're seeking. Most
            concerns can be resolved this way.
          </p>
          <p className="mt-4">
            Nothing in this section prevents you from exercising a statutory right to contact a
            government regulator or pursue a remedy that cannot lawfully be waived.
          </p>
        </section>

        {/* 24 */}
        <section id="section-24">
          <SectionTitle n={24} title="Governing Law and Disputes" />
          <p>
            Except where mandatory law provides otherwise, these Terms are governed by the laws of
            the State of Georgia, USA, without regard to conflict-of-laws principles. To the extent
            a dispute is not resolved informally and applicable law permits contractual venue
            selection, exclusive venue will lie in the state or federal courts located in Georgia,
            subject to any mandatory consumer-protection law applicable in your jurisdiction of
            residence.
          </p>
        </section>

        {/* 25 */}
        <section id="section-25">
          <SectionTitle n={25} title="California Residents" />
          <p>
            If you are a California resident, California Civil Code §§ 1694–1694.4 contains
            specific requirements applicable to dating-service contracts, including a
            three-business-day cancellation right for qualifying contracts and a requirement that
            we maintain a link to dating-safety information and a means to report concerns about
            other users. Where those provisions apply to your use of MeantGo, we will provide the
            cancellation rights, disclosures, and reporting mechanisms California law requires.
          </p>
          <p className="mt-4">
            Nothing in these Terms is intended to waive a right you cannot lawfully waive under
            California — or any other applicable — law.
          </p>
        </section>

        {/* 26 */}
        <section id="section-26">
          <SectionTitle n={26} title="Privacy" />
          <p>
            Your use of MeantGo is also governed by our{" "}
            <Link to="/privacy" className="text-brand font-medium hover:underline">
              Privacy Policy
            </Link>
            , which describes what personal information we collect, how we use and share it, how
            long we keep it, and the rights available to you (including, where applicable,
            California privacy rights under the CCPA/CPRA). The Privacy Policy is not incorporated
            into these Terms in a way that would convert a privacy disclosure into a contractual
            waiver of rights that applicable privacy law does not allow you to waive.
          </p>
        </section>

        {/* 27 */}
        <section id="section-27">
          <SectionTitle n={27} title="Child Safety" />
          <p>
            MeantGo is intended for adults 18 and older, and we prohibit accounts belonging to
            minors. If you believe a minor is using MeantGo, please report the account immediately
            through the in-app reporting tools. For more detail on how we handle child-safety
            concerns, see our{" "}
            <Link to="/child-safety" className="text-brand font-medium hover:underline">
              Child Safety Policy
            </Link>
            .
          </p>
        </section>

        {/* 28 */}
        <section id="section-28">
          <SectionTitle n={28} title="No Professional Advice" />
          <p>
            MeantGo does not provide medical, psychological, legal, or financial advice. Content
            available through the Service should not be treated as professional advice of any
            kind.
          </p>
        </section>

        {/* 29 */}
        <section id="section-29">
          <SectionTitle n={29} title="Copyright Complaints" />
          <p>
            We respect intellectual property rights. If you believe content available through
            MeantGo infringes your copyright, you may submit a notice containing the information
            required by applicable law to <Mail>support@meantgo.com</Mail>. We may terminate the
            accounts of repeat infringers where appropriate.
          </p>
        </section>

        {/* 30 */}
        <section id="section-30">
          <SectionTitle n={30} title="Government Requests and Law Enforcement" />
          <p>
            We may preserve or disclose information where we reasonably believe disclosure is
            required by law, valid legal process, or necessary to protect the rights, safety, or
            property of our users or the public — including contacting law enforcement or
            emergency services where we reasonably believe doing so is necessary to address an
            imminent threat to life or safety.
          </p>
        </section>

        {/* 31 */}
        <section id="section-31">
          <SectionTitle n={31} title="Export and Sanctions Compliance" />
          <p>
            You may not use MeantGo in violation of applicable export-control, sanctions, or trade
            laws, and you represent that you are not using the Service in circumstances prohibited
            by applicable sanctions or export-control laws.
          </p>
        </section>

        {/* 32 */}
        <section id="section-32">
          <SectionTitle n={32} title="International Users" />
          <p>
            If you access MeantGo from outside the United States, you are responsible for
            complying with the laws applicable to your location. We may process and transfer
            information across national borders as described in our Privacy Policy and subject to
            applicable law.
          </p>
        </section>

        {/* 33 */}
        <section id="section-33">
          <SectionTitle n={33} title="Consumer Rights" />
          <p>
            Nothing in these Terms limits or excludes statutory consumer rights, privacy rights, or
            any other right that cannot legally be waived. Where a provision of these Terms
            conflicts with a non-waivable statutory right, that right controls.
          </p>
        </section>

        {/* 34 */}
        <section id="section-34">
          <SectionTitle n={34} title="Changes to These Terms" />
          <p>
            We may update these Terms from time to time to reflect changes in our practices, the
            Service, or applicable law. When we make material changes, we will update the "Last
            Updated" date above and notify you through a prominent in-app notification or by email.
          </p>
          <p className="mt-4">
            Your continued use of MeantGo after changes take effect constitutes acceptance of the
            updated Terms, to the extent permitted by applicable law. If you do not agree to the
            changes, you must stop using the Service and may delete your account.
          </p>
        </section>

        {/* 35 */}
        <section id="section-35">
          <SectionTitle n={35} title="General Provisions" />
          <ul className="mt-1 space-y-3 pl-5 list-disc marker:text-brand">
            <li>
              <strong className="font-semibold text-ink">Force majeure.</strong> We are not liable
              for delay or failure caused by circumstances beyond our reasonable control, including
              natural disasters, internet or power outages, and failures of third-party providers.
            </li>
            <li>
              <strong className="font-semibold text-ink">Severability.</strong> If a provision of
              these Terms is found invalid or unenforceable, it will be enforced to the maximum
              extent permitted by law, and the remaining provisions will remain in effect.
            </li>
            <li>
              <strong className="font-semibold text-ink">No waiver.</strong> Our failure to
              enforce a provision does not waive our right to enforce it later.
            </li>
            <li>
              <strong className="font-semibold text-ink">Assignment.</strong> You may not assign
              or transfer your rights or obligations under these Terms without our prior written
              consent. We may assign these Terms in connection with a merger, acquisition,
              restructuring, or sale of substantially all of our assets.
            </li>
            <li>
              <strong className="font-semibold text-ink">Electronic contracting.</strong> You
              agree that electronic acceptance and electronic records satisfy any legal requirement
              for a written agreement, consistent with applicable electronic-transactions law,
              including the U.S. Electronic Signatures in Global and National Commerce Act.
            </li>
            <li>
              <strong className="font-semibold text-ink">Survival.</strong> Provisions that by
              their nature should survive termination — including intellectual property, User
              Content licences, disclaimers, limitation of liability, and indemnification — will
              survive.
            </li>
            <li>
              <strong className="font-semibold text-ink">Interpretation.</strong> Section headings
              are for convenience only. "Includes" means "includes without limitation." These
              Terms, together with the documents they incorporate by reference, are the entire
              agreement between you and MeantGo regarding the Service.
            </li>
          </ul>
        </section>

        {/* 36 */}
        <section id="section-36">
          <SectionTitle n={36} title="Contact Us" />
          <p>
            If you have questions about these Terms, please contact us:
          </p>
          <div className="mt-5 grid sm:grid-cols-2 gap-4">
            <ContactCard title="Support" lines={["support@meantgo.com"]} />
            <ContactCard title="Privacy & Data" lines={["privacy@meantgo.com"]} />
            <ContactCard
              title="Mailing Address"
              lines={["MeantGo", "3832 Roxberry Hill Lane", "Buford, GA 30518-8541"]}
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
