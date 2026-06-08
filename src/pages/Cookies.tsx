const sections = [
  {
    heading: "What Are Cookies?",
    body: "Cookies are small text files stored on your device when you visit a website or use an app. They help the service remember your preferences and understand how you interact with the platform.",
  },
  {
    heading: "Essential Cookies",
    body: "These cookies are necessary for MeantGo to function. They keep you logged in, maintain your session, and ensure security features work correctly. You cannot opt out of essential cookies while using the app.",
  },
  {
    heading: "Analytics Cookies",
    body: "We use analytics cookies to understand how users navigate the app, which features are most used, and where people encounter difficulties. This data is aggregated and anonymised — it does not identify you personally.",
  },
  {
    heading: "Preference Cookies",
    body: "These cookies remember choices you make, such as your theme preference (light or dark mode) and notification settings, so you do not have to reconfigure them each visit.",
  },
  {
    heading: "Managing Your Preferences",
    body: "You can review and update your cookie preferences at any time from within the app's Settings > Privacy section. Opting out of non-essential cookies may affect some features of your experience.",
  },
  {
    heading: "Third-Party Cookies",
    body: "Some features — such as crash reporting and app analytics — are powered by trusted third-party services. These providers may set their own cookies subject to their own privacy policies. We only work with providers who meet our data protection standards.",
  },
];

export default function Cookies() {
  return (
    <article className="max-w-3xl mx-auto px-6 pt-16 pb-32">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand mb-6">Legal</p>
      <h1 className="font-display text-5xl md:text-6xl font-black leading-[1] text-ink mb-6 tracking-tight">
        Cookie Policy
      </h1>
      <p className="text-xl leading-8 text-ink/65 mb-16">
        A plain-language explanation of how and why we use cookies on MeantGo.
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
