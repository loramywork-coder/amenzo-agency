import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "AMENZO privacy policy. How we collect, use, and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-bg pt-32 pb-20">
      <div className="container-wide max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
          Privacy Policy
        </h1>
        <p className="text-text-muted text-sm mb-12">
          Last updated: March 2026
        </p>

        <div className="prose-dark space-y-8 text-text-secondary leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
              1. Introduction
            </h2>
            <p>
              AMENZO (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website amenzo.com and use our services.
            </p>
            <p className="mt-3">
              We comply with the General Data Protection Regulation (GDPR) and applicable Maltese data protection legislation.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
              2. Information We Collect
            </h2>
            <p><strong className="text-text-primary">Personal Information:</strong> When you submit a project brief, contact form, or subscribe to our newsletter, we may collect your name, email address, phone number, company name, and project details.</p>
            <p className="mt-3"><strong className="text-text-primary">Usage Data:</strong> We automatically collect information about how you interact with our website, including IP address, browser type, pages visited, and time spent. We use Vercel Analytics for this purpose, which processes data in compliance with GDPR.</p>
            <p className="mt-3"><strong className="text-text-primary">Cookies:</strong> We use essential cookies required for website functionality. See our Cookie Policy for details.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To respond to your enquiries and project briefs</li>
              <li>To provide and improve our services</li>
              <li>To send project updates and communications you have requested</li>
              <li>To analyse website usage and improve user experience</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
              4. Legal Basis for Processing
            </h2>
            <p>We process your personal data under the following legal bases:</p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li><strong className="text-text-primary">Consent:</strong> When you submit a form or subscribe to communications</li>
              <li><strong className="text-text-primary">Legitimate interest:</strong> Website analytics and service improvement</li>
              <li><strong className="text-text-primary">Contractual necessity:</strong> When processing is required to fulfil a service agreement</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
              5. Data Sharing
            </h2>
            <p>We do not sell your personal data. We may share your information with trusted third-party service providers who assist in operating our business (e.g., email providers, hosting services, analytics tools). All third parties are required to handle your data in compliance with GDPR.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
              6. Data Retention
            </h2>
            <p>We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Project-related data is retained for the duration of our business relationship plus 5 years for legal and accounting purposes.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
              7. Your Rights
            </h2>
            <p>Under GDPR, you have the right to:</p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>Access your personal data</li>
              <li>Rectify inaccurate data</li>
              <li>Request erasure of your data</li>
              <li>Restrict processing of your data</li>
              <li>Data portability</li>
              <li>Object to processing</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, contact us at hello@amenzo.com.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
              8. Security
            </h2>
            <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
              9. Contact
            </h2>
            <p>If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:</p>
            <p className="mt-3">
              AMENZO<br />
              Valletta, Malta<br />
              hello@amenzo.com<br />
              +356 9999 0000
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
