"use client";

import { LegalPage } from "../_legal";

export default function MaisonPrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy."
      sections={[
        {
          title: "Data we collect",
          body: [
            "When you place an order, we collect: name, billing and shipping address, phone number, email, and payment details processed through our payment provider. We do not see or store your card number.",
            "When you browse the site, we collect anonymous analytics through a privacy-friendly provider. No cookies are set unless you accept them.",
          ],
        },
        {
          title: "How we use it",
          body: [
            "Your data is used exclusively to process your orders, fulfil legal obligations, and — if you consent — send you occasional newsletters. We do not sell or share it with third parties for marketing.",
          ],
        },
        {
          title: "Your rights",
          body: [
            "Under the Swiss Data Protection Act (DPA) and the European GDPR, you have the right to access, correct, or delete your personal data. To exercise these rights, write to privacy@maisonnoir.ch.",
          ],
        },
        {
          title: "Retention",
          body: [
            "We retain order data for 10 years as required by Swiss accounting law. Newsletter data is deleted immediately on unsubscribe.",
          ],
        },
        {
          title: "Cookies",
          body: [
            "We use only essential cookies (cart, session) and anonymous analytics. No tracking or advertising cookies.",
          ],
        },
      ]}
    />
  );
}
