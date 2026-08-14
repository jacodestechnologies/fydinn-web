const prohibitedConduct = [
  "Creating, uploading, requesting, sharing, distributing, storing, soliciting or facilitating child sexual abuse material (CSAM).",
  "Sexual abuse or sexual exploitation of a child.",
  "Grooming, manipulating, befriending or communicating with a child for a sexual purpose.",
  "Soliciting sexual photographs, videos or other sexually explicit material from a child.",
  "Offering, requesting, arranging or facilitating sexual activity involving a child.",
  "Sex trafficking or commercial sexual exploitation of children.",
  "Sextortion, blackmail, coercion or threats involving a child's actual or alleged intimate images or sexual information.",
  "Using MeantGo to locate, identify, target or contact children for sexual purposes.",
  "Encouraging, facilitating, assisting or conspiring with another person to commit any form of child sexual abuse or exploitation.",
  "Attempting to circumvent MeantGo's age, identity or safety controls for the purpose of accessing or interacting with children.",
  "Any other conduct involving the sexual abuse, exploitation or endangerment of a child.",
];

const groomingExamples = [
  "Attempting to establish a secret or sexual relationship with a child.",
  "Encouraging a child to keep communications or meetings secret.",
  "Requesting or encouraging a child to provide intimate photographs or videos.",
  "Offering money, gifts, benefits or other incentives for sexual activity or sexual material involving a child.",
  "Coercing, threatening or manipulating a child into providing sexual material or participating in sexual activity.",
  "Moving communications with a child to another platform or channel for purposes of sexual exploitation.",
  "Attempting to arrange an offline meeting with a child for sexual or exploitative purposes.",
];

const responseActions = [
  "Reviewing the reported profile, content, messages or activity.",
  "Restricting access to reported content or account functionality.",
  "Removing prohibited content.",
  "Requiring additional age or identity verification.",
  "Conducting additional human review.",
  "Suspending or permanently terminating an account.",
  "Preventing a user from creating or accessing additional accounts, where appropriate and legally permitted.",
  "Preserving relevant information where legally permitted or required.",
  "Escalating matters to designated child-safety personnel.",
  "Reporting confirmed CSAM or other reportable conduct to appropriate authorities or relevant reporting organizations where required by applicable law.",
];

const safetyMeasures = [
  "Age and identity verification through Didit.",
  "Restrictions on age selection during registration that prevent users from selecting an age of 17 or younger.",
  "Periodic human verification and account review.",
  "User reporting and blocking functionality.",
  "Account and content moderation.",
  "Investigation of suspicious activity and safety signals.",
  "Additional verification when circumstances warrant it.",
  "Account restrictions, suspension and termination.",
  "Escalation of serious child-safety concerns to appropriate personnel and authorities where required.",
];

const circumventionExamples = [
  "Providing false age information.",
  "Using another person's identity or verification information.",
  "Attempting to evade age or identity verification.",
  "Creating multiple accounts to circumvent a restriction or termination.",
  "Using fraudulent, manipulated or misleading verification information.",
  "Assisting another person in bypassing MeantGo's age or identity controls.",
];

export default function ChildSafety() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 pb-24 sm:px-6">
      <header className="mb-14">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-brand">Safety</p>
        <h1 className="mb-5 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Child Safety Standards &amp; Child Sexual Abuse and Exploitation Policy
        </h1>
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-ink/55">
          <span>App: MeantGo</span>
          <span>Developer/Company: MeantGo LLC</span>
          <span>Effective Date: August 14, 2026</span>
          <span>Last Updated: August 14, 2026</span>
        </div>
      </header>

      <div className="space-y-14 text-sm leading-relaxed text-ink/80">
        <Section n={1} title="Our Commitment to Child Safety">
          <p>
            MeantGo LLC ("MeantGo," "we," "us," or "our") is committed to protecting children and
            maintaining a safe, respectful and trustworthy environment on the{" "}
            <strong className="font-semibold text-ink">MeantGo</strong> dating platform.
          </p>
          <p>
            MeantGo is an adults-only dating service. The platform is not intended for children or
            anyone below the minimum legal age permitted to use an adult dating service.
          </p>
          <p>
            MeantGo has <strong className="font-semibold text-ink">zero tolerance</strong> for child
            sexual abuse and exploitation ("CSAE"), child sexual abuse material ("CSAM"), child
            grooming, sexual exploitation of children, trafficking, sextortion, or any other conduct
            that sexually abuses, exploits or endangers a child.
          </p>
          <p>
            We maintain preventive, detection and enforcement measures designed to reduce the risk
            of minors accessing or using the platform and to respond to suspected child-safety
            violations when they are identified or reported.
          </p>
        </Section>

        <Section n={2} title="MeantGo Is an Adults-Only Dating Platform">
          <p>MeantGo is designed exclusively for adults.</p>
          <p>
            During registration, users are not permitted to select an age of{" "}
            <strong className="font-semibold text-ink">17 or younger</strong>. The available
            age-selection process is designed to prevent users from registering as minors.
          </p>
          <p>
            Users are required to provide truthful information about their age and identity.
            Providing false information, misrepresenting one's age, using another person's identity,
            or attempting to circumvent MeantGo's age controls is prohibited.
          </p>
          <p>
            The inability to select an age of 17 or younger is one component of MeantGo's broader
            age-assurance and child-safety framework. MeantGo also uses identity and age
            verification, account review, user reporting and enforcement measures to help maintain
            an adults-only environment.
          </p>
        </Section>

        <Section n={3} title="Age and Identity Verification">
          <p>
            MeantGo uses verification technology provided by{" "}
            <strong className="font-semibold text-ink">Didit</strong> as part of its age and
            identity verification processes.
          </p>
          <p>
            Depending on the account and applicable verification flow, users may be required to
            complete age and/or identity verification before receiving full access to MeantGo's
            features.
          </p>
          <p>
            These verification measures are designed to help establish that users meet the
            applicable minimum age requirement and, where applicable, help confirm the authenticity
            of the user's identity.
          </p>
          <p>
            MeantGo recognizes that no age-assurance or identity-verification system can guarantee
            that every attempt to circumvent an age restriction will be detected immediately. For
            this reason, verification is supplemented by ongoing account monitoring, periodic human
            review, user reporting, moderation and enforcement procedures.
          </p>
          <p>
            Successfully completing a verification process does not exempt a user from MeantGo's
            Community Guidelines, Terms of Service or Child Safety Standards. Accounts remain
            subject to ongoing safety monitoring and enforcement.
          </p>
        </Section>

        <Section n={4} title="Periodic Human Verification and Account Review">
          <p>
            In addition to technology-assisted verification, MeantGo conducts periodic human
            verification and review of user accounts.
          </p>
          <p>
            Human review may be used to assess account authenticity, age-related concerns,
            suspicious activity, potential policy violations and other safety risks.
          </p>
          <p>
            Periodic human verification may occur after an account has been created and after a user
            has previously completed verification. This ongoing review helps MeantGo identify
            accounts that may have provided misleading information, attempted to circumvent safety
            controls, changed their behavior, or otherwise present a potential risk to the
            community.
          </p>
          <p>
            Where a review identifies a potential child-safety concern, MeantGo may restrict or
            suspend the account while the matter is investigated and may permanently terminate the
            account where appropriate.
          </p>
        </Section>

        <Section n={5} title="Zero Tolerance for Child Sexual Abuse and Exploitation">
          <p>The following conduct is strictly prohibited on MeantGo:</p>
          <List items={prohibitedConduct} />
          <p>
            These prohibitions apply to profiles, photographs, videos, messages, comments,
            usernames, links, audio, live interactions and any other feature or communication
            mechanism available through MeantGo.
          </p>
        </Section>

        <Section n={6} title="Child Sexual Abuse Material (CSAM)">
          <p>MeantGo strictly prohibits child sexual abuse material.</p>
          <p>
            Users must never create, upload, request, possess, distribute, transmit, advertise,
            solicit, save or otherwise facilitate CSAM through MeantGo.
          </p>
          <p>
            Sexually explicit content involving children is prohibited regardless of how a user
            describes, characterizes or attempts to justify the content.
          </p>
          <p>
            If MeantGo becomes aware of content that may constitute CSAM, we may immediately
            restrict access to the relevant content or account, investigate the matter, preserve
            relevant information where legally permitted or required, terminate accounts, prevent
            further distribution and report the matter to appropriate authorities or reporting
            organizations where required by applicable law.
          </p>
        </Section>

        <Section n={7} title="Grooming and Sexual Solicitation">
          <p>
            MeantGo prohibits grooming and any attempt to establish trust, emotional dependence or a
            relationship with a child for the purpose of sexual abuse, exploitation or solicitation.
          </p>
          <p>Prohibited conduct includes, without limitation:</p>
          <List items={groomingExamples} />
        </Section>

        <Section n={8} title="Reporting Child Safety Concerns">
          <p>
            MeantGo provides users with mechanisms to report suspected child safety violations,
            including suspected minor accounts, grooming, CSAM, sexual exploitation, trafficking,
            sextortion and other conduct that may place a child at risk.
          </p>
          <p>
            Users should use the reporting functionality available within the MeantGo application
            whenever possible. Reports may be submitted from the relevant profile, conversation,
            message, media item or other applicable location within the application.
          </p>
          <p>
            Users who cannot access the in-app reporting mechanism may contact our dedicated Child
            Safety Team directly:
          </p>
          <ContactLine label="Child Safety Email" href="mailto:safety@meantgo.com">
            safety@meantgo.com
          </ContactLine>
          <p>
            <strong className="font-semibold text-ink">Subject:</strong> Child Safety Report -
            MeantGo
          </p>
          <p>
            When submitting a report, users should provide sufficient information to help us
            identify the relevant account or activity.
          </p>
          <p>
            Users should not intentionally download, copy, forward or redistribute suspected CSAM
            for the purpose of making a report.
          </p>
        </Section>

        <Section n={9} title="How MeantGo Responds to Reports">
          <p>
            MeantGo maintains procedures for reviewing and responding to reports involving child
            safety and other serious violations.
          </p>
          <p>Depending on the circumstances, our response may include:</p>
          <List items={responseActions} />
          <p>
            Where necessary to protect users or prevent further distribution of harmful material,
            MeantGo may take immediate protective action before completing a full investigation.
          </p>
        </Section>

        <Section n={10} title="Safety, Moderation and Detection Measures">
          <p>
            MeantGo maintains a layered approach to user safety and child protection. Depending on
            the circumstances and applicable feature, these measures may include:
          </p>
          <List items={safetyMeasures} />
          <p>
            MeantGo continually evaluates and improves its safety measures as threats, technology,
            applicable laws and industry practices evolve.
          </p>
        </Section>

        <Section n={11} title="Circumvention of Safety Controls">
          <p>
            Attempting to bypass, manipulate or defeat MeantGo's age, identity or safety controls is
            prohibited.
          </p>
          <p>Prohibited activity includes, without limitation:</p>
          <List items={circumventionExamples} />
          <p>
            Accounts suspected of circumventing safety controls may be subjected to additional
            verification, restriction, suspension or permanent termination.
          </p>
        </Section>

        <Section n={12} title="Cooperation With Authorities">
          <p>
            MeantGo LLC complies with applicable child-safety and reporting laws and cooperates with
            appropriate law enforcement, child protection authorities and other legally authorized
            organizations when required by law or when otherwise appropriate to protect children.
          </p>
          <p>
            Where legally required, MeantGo may report confirmed CSAM and other reportable
            child-safety violations to the appropriate authority or designated reporting
            organization in the applicable jurisdiction.
          </p>
          <p>
            Where required or legally permitted, we may preserve and disclose relevant information
            in response to lawful requests or when necessary to address an emergency involving a
            threat to the safety of a child or another person.
          </p>
        </Section>

        <Section n={13} title="Child Safety Point of Contact">
          <p>
            MeantGo LLC maintains a designated point of contact for child-safety matters. This
            contact is responsible for receiving child-safety reports and coordinating appropriate
            responses to suspected CSAE, CSAM and other serious child-safety concerns.
          </p>
          <p>
            <strong className="font-semibold text-ink">Company:</strong> MeantGo LLC
          </p>
          <p>
            <strong className="font-semibold text-ink">Child Safety Contact:</strong> MeantGo Child
            Safety Team
          </p>
          <ContactLine label="Email" href="mailto:safety@meantgo.com">
            safety@meantgo.com
          </ContactLine>
          <p>
            This contact may also be used for communications concerning MeantGo's child-safety
            standards, enforcement procedures and responses to suspected CSAE or CSAM.
          </p>
        </Section>

        <Section n={14} title="User Responsibilities">
          <p>
            Every MeantGo user is responsible for complying with this policy and for reporting
            suspected child-safety violations.
          </p>
          <p>
            Users must not attempt to investigate suspected CSAM themselves, confront an alleged
            offender, or redistribute suspected abusive material. Instead, users should report the
            matter through MeantGo's reporting mechanisms and, where appropriate, to the relevant
            authorities.
          </p>
          <p>
            Knowingly submitting false reports, abusing the reporting system, interfering with a
            child-safety investigation or attempting to circumvent MeantGo's safety controls may
            result in enforcement action.
          </p>
        </Section>

        <Section n={15} title="Enforcement">
          <p>
            Violations of this policy may result in immediate removal or restriction of content,
            account suspension, permanent account termination, restriction of access, additional
            verification, prevention of account re-registration, and/or reporting to appropriate
            authorities, subject to applicable law.
          </p>
          <p>
            MeantGo reserves the right to take action against conduct that presents a credible risk
            to child safety even when the conduct does not fit precisely within a single example
            listed in this policy.
          </p>
        </Section>

        <Section n={16} title="Privacy and Information Handling">
          <p>
            Information submitted through child-safety reports and information processed during
            verification or safety investigations will be handled in accordance with MeantGo's
            Privacy Policy and applicable law.
          </p>
          <p>
            We may retain or disclose information relating to safety investigations where necessary
            to comply with legal obligations, protect users, investigate violations, prevent abuse,
            or cooperate with authorized authorities.
          </p>
          <p>
            For information about how MeantGo collects, uses, retains and protects personal
            information, please review our <PolicyLink href="/privacy">Privacy Policy</PolicyLink>.
          </p>
        </Section>

        <Section n={17} title="Related Policies">
          <ul className="mt-3 space-y-2 pl-5 list-disc marker:text-brand">
            <li>
              <PolicyLink href="/terms">Terms of Service</PolicyLink>
            </li>
            <li>
              <PolicyLink href="#">Community Guidelines</PolicyLink>
            </li>
            <li>
              <PolicyLink href="/privacy">Privacy Policy</PolicyLink>
            </li>
          </ul>
        </Section>

        <Section n={18} title="Policy Updates">
          <p>
            MeantGo LLC may periodically update these Child Safety Standards to reflect changes in
            our services, safety practices, applicable laws, regulatory requirements and industry
            standards.
          </p>
          <p>
            The current version of this policy will remain publicly accessible through the MeantGo
            website.
          </p>
        </Section>

        <Section n={19} title="Contact MeantGo">
          <p>
            <strong className="font-semibold text-ink">MeantGo LLC</strong>
          </p>
          <ContactLine label="Child Safety" href="mailto:safety@meantgo.com">
            safety@meantgo.com
          </ContactLine>
          <p>
            For child-safety matters, please use{" "}
            <strong className="font-semibold text-ink">safety@meantgo.com</strong> so that the
            report can be directed to the appropriate team.
          </p>
        </Section>

        <footer className="rounded-lg border-l-4 border-brand bg-brand/5 px-4 py-4 text-sm text-ink/80">
          <p>
            <strong className="font-semibold text-ink">MeantGo Child Safety Commitment:</strong>{" "}
            MeantGo is an adults-only dating platform with zero tolerance for child sexual abuse and
            exploitation. We prohibit CSAM, child grooming, sexual exploitation of children,
            trafficking, sextortion and other conduct that endangers children. We use age and
            identity verification, restrictions on age selection, periodic human account
            verification, reporting mechanisms, moderation and enforcement procedures to help
            protect children and maintain an adults-only environment.
          </p>
          <p className="mt-4 text-xs text-ink/45">
            Copyright 2026 MeantGo LLC. All rights reserved.
          </p>
        </footer>
      </div>
    </article>
  );
}

function Section({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold tracking-tight text-ink">
        <span className="mr-2 text-brand">{n}.</span>
        {title}
      </h2>
      {children}
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2.5 pl-5 list-disc marker:text-brand">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function ContactLine({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <p>
      <strong className="font-semibold text-ink">{label}:</strong>{" "}
      <a href={href} className="font-medium text-brand hover:underline">
        {children}
      </a>
    </p>
  );
}

function PolicyLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="font-medium text-brand hover:underline">
      {children}
    </a>
  );
}
