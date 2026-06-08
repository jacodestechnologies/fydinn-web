const sections = [
  {
    heading: "Acceptance of Terms",
    body: "By downloading, accessing, or using MeantGo, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the app.",
  },
  {
    heading: "Eligibility",
    body: "You must be at least 18 years old to use MeantGo. By creating an account, you confirm that you meet this age requirement and that all information you provide is accurate and truthful.",
  },
  {
    heading: "Your Account",
    body: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately at hello@meantgo.app if you suspect unauthorised access.",
  },
  {
    heading: "Acceptable Use",
    body: "You agree not to use MeantGo to harass, deceive, or harm other users. Sharing explicit content without consent, impersonating other people, or using the platform for commercial solicitation are all strictly prohibited and may result in immediate account termination.",
  },
  {
    heading: "Content Ownership",
    body: "You retain ownership of the content you post on MeantGo. By uploading it, you grant us a limited licence to display it within the app for the purpose of operating the service. We will never sell your content to third parties.",
  },
  {
    heading: "Termination",
    body: "We reserve the right to suspend or terminate accounts that violate these terms, at our sole discretion. You may also delete your account at any time from within the app settings.",
  },
  {
    heading: "Disclaimers",
    body: "MeantGo is provided on an 'as-is' basis. We do not guarantee that you will form a connection or relationship through the platform. We are not responsible for the conduct of users you meet through the app.",
  },
  {
    heading: "Changes to These Terms",
    body: "We may update these terms from time to time. We will notify you of material changes via email or an in-app notification. Continued use of MeantGo after a change constitutes acceptance of the updated terms.",
  },
];

export default function Terms() {
  return (
    <article className="max-w-3xl mx-auto px-6 pt-16 pb-32">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand mb-6">Legal</p>
      <h1 className="font-display text-5xl md:text-6xl font-black leading-[1] text-ink mb-6 tracking-tight">
        Terms of Service
      </h1>
      <p className="text-xl leading-8 text-ink/65 mb-16">
        Please read these terms carefully before using MeantGo. They govern your use of the platform.
      </p>

      <div className="space-y-12">
        {sections.map((s) => (
          <section key={s.heading} className="border-t border-ink/10 pt-10">
            <h2 className="font-display text-2xl font-bold text-ink mb-4">{s.heading}</h2>
            <p className="text-ink/68 leading-8">{s.body}</p>
          </section>
        ))}
      </div>

      <p className="mt-16 text-xs text-ink/40 border-t border-ink/10 pt-6 uppercase tracking-widest font-semibold">
        Last updated — June 2026 · Placeholder copy. Replace before launch.
      </p>
    </article>
  );
}
