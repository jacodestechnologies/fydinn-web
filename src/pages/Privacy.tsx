const sections = [
  {
    heading: "Information We Collect",
    body: "We collect information you provide when creating your profile — such as your name, email address, date of birth, photos, and video introductions. We also collect the interests and relationship intentions you select, along with usage data generated as you interact with the app.",
  },
  {
    heading: "How We Use Your Information",
    body: "Your information is used to create and maintain your account, power our matching algorithm, personalise your experience, communicate with you about the service, and improve the platform over time. We do not sell your personal data to third parties.",
  },
  {
    heading: "Sharing Your Information",
    body: "Your profile is visible to other verified MeantGo members based on your visibility settings. We may share data with trusted service providers who assist us in operating the platform, always under strict confidentiality agreements.",
  },
  {
    heading: "Data Security",
    body: "We use industry-standard encryption and security practices to protect your data. All messages on MeantGo are end-to-end encrypted. We conduct regular security audits and respond promptly to any identified vulnerabilities.",
  },
  {
    heading: "Your Rights",
    body: "You have the right to access, correct, or delete your personal data at any time from within the app settings. You may also request a copy of the data we hold about you or ask us to restrict its processing by contacting our privacy team.",
  },
  {
    heading: "Cookies",
    body: "We use cookies and similar technologies to keep you logged in, understand how you use the app, and show you relevant content. You can manage your cookie preferences at any time. See our Cookie Policy for full details.",
  },
  {
    heading: "Contact",
    body: "For any privacy-related questions or requests, reach out to privacy@meantgo.app. We aim to respond within 72 hours.",
  },
];

export default function Privacy() {
  return (
    <article className="max-w-3xl mx-auto px-6 pt-16 pb-32">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand mb-6">Legal</p>
      <h1 className="font-display text-5xl md:text-6xl font-black leading-[1] text-ink mb-6 tracking-tight">
        Privacy Policy
      </h1>
      <p className="text-xl leading-8 text-ink/65 mb-16">
        We believe your data belongs to you. Here's exactly how we collect it, use it, and protect it.
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
