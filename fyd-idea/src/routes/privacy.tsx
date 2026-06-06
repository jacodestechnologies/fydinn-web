import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/landing/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — FirstDate" },
      { name: "description", content: "How FirstDate collects, uses, and protects your personal information." },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Your privacy matters. This policy explains what information we collect, why we collect it, and the choices you have."
      sections={[
        { heading: "Information we collect", body: "Profile details, photos, messages, and usage data needed to operate FirstDate and keep the community safe." },
        { heading: "How we use it", body: "We match you with compatible people, verify identities, improve our product, and comply with legal obligations." },
        { heading: "Sharing", body: "We do not sell your personal data. We share limited information with trusted processors who help us run the service." },
        { heading: "Your choices", body: "You can edit your profile, control visibility, download your data, or delete your account at any time." },
        { heading: "Contact", body: "Questions? Reach our privacy team at privacy@firstdate.app." },
      ]}
    />
  );
}