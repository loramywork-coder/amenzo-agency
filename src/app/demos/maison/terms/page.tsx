"use client";

import { LegalPage } from "../_legal";

export default function MaisonTermsPage() {
  return (
    <LegalPage
      eyebrow="Terms & Conditions"
      title="Terms."
      sections={[
        {
          title: "1. Preamble",
          body: [
            "These terms and conditions (the 'Terms') govern your use of maisonnoir.ch and any purchases made through it. Maison Noir SA is a company registered in Geneva, Switzerland.",
            "By placing an order on this website, you agree to be bound by these Terms. If you do not accept them, please do not use the site.",
          ],
        },
        {
          title: "2. Orders and prices",
          body: [
            "All prices are in Swiss Francs (CHF) or Euros (EUR) and include VAT where applicable. We reserve the right to correct pricing errors before your order ships.",
            "An order is confirmed once we send you an order confirmation email. Until that moment, either party may cancel the order without penalty.",
          ],
        },
        {
          title: "3. Payment",
          body: [
            "We accept all major credit cards, Apple Pay, Google Pay, and bank transfer. Payment is processed securely through our payment provider. We do not store card details.",
          ],
        },
        {
          title: "4. Delivery",
          body: [
            "We ship to addresses within Europe in 3–5 business days and worldwide in 7–10 business days. All shipments use carbon-offset carriers.",
            "Delivery times are estimates, not guarantees. Maison Noir is not liable for delays caused by carriers, customs, or force majeure.",
          ],
        },
        {
          title: "5. Returns",
          body: [
            "You may return any unworn item within 30 days of delivery. Items must be in original packaging with all tags attached. Return shipping is free within Europe.",
            "Refunds are processed within 10 working days of receipt of the returned goods.",
          ],
        },
        {
          title: "6. Intellectual property",
          body: [
            "All content on maisonnoir.ch — including text, images, design, and code — is the property of Maison Noir SA and may not be reproduced without written consent.",
          ],
        },
        {
          title: "7. Governing law",
          body: [
            "These Terms are governed by Swiss law. Any dispute shall be settled by the competent courts of Geneva.",
          ],
        },
      ]}
    />
  );
}
