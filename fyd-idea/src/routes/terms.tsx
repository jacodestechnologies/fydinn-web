import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/landing/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — FirstDate" },
      { name: "description", content: "The terms and conditions for using the FirstDate dating app." },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="By using FirstDate you agree to these terms. They cover account use, community rules, and our responsibilities to you."
      sections={[
        { heading: "Eligibility", body: "You must be 18 or older and legally able to enter a contract in your jurisdiction." },
        { heading: "Your account", body: "Keep your credentials confidential and your profile accurate. You are responsible for activity on your account." },
        { heading: "Community rules", body: "No harassment, impersonation, or unlawful behavior. We may suspend accounts that violate these rules." },
        { heading: "Subscriptions", body: "Premium plans renew automatically until cancelled. You can manage billing in your account settings." },
        { heading: "Termination", body: "You can delete your account anytime. We can suspend access for safety or policy reasons." },
      ]}
    />
  );
}