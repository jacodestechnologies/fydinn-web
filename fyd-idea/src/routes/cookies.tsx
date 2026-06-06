import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/landing/LegalPage";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — FirstDate" },
      { name: "description", content: "How FirstDate uses cookies and similar technologies." },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      intro="We use a small set of cookies to keep FirstDate working, secure, and easy to use."
      sections={[
        { heading: "Essential cookies", body: "Required for login, session security, and core functionality." },
        { heading: "Analytics", body: "Anonymous usage data helps us understand what's working and what isn't." },
        { heading: "Preferences", body: "Remember your language, region, and display preferences across visits." },
        { heading: "Your control", body: "You can clear cookies in your browser at any time. Some features may not work without them." },
      ]}
    />
  );
}