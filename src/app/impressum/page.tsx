import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — Legal Notice",
  description:
    "AMENZO legal notice (Impressum). Company information, contact details, and legal disclaimers as required by EU regulations.",
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-bg pt-32 pb-20">
      <div className="container-wide max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
          Impressum
        </h1>
        <p className="text-text-muted text-sm mb-12">Legal Notice</p>

        <div className="prose-dark space-y-8 text-text-secondary leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
              Company Information
            </h2>
            <p>
              <strong className="text-text-primary">Company Name:</strong>{" "}
              AMENZO
            </p>
            <p className="mt-2">
              <strong className="text-text-primary">Legal Form:</strong> Sole
              Proprietorship
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
              Contact
            </h2>
            <p>
              <strong className="text-text-primary">Email:</strong>{" "}
              <a
                href="mailto:hello@amenzo.com"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                hello@amenzo.com
              </a>
            </p>
            <p className="mt-2">
              <strong className="text-text-primary">Phone:</strong> +356 9999
              0000
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
              VAT Information
            </h2>
            <p>
              <strong className="text-text-primary">VAT Number:</strong> Pending
              registration
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
              Responsible for Content
            </h2>
            <p>AMENZO</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
              Disclaimer
            </h2>
            <p>
              The information provided on this website has been carefully
              checked and is regularly updated. However, no guarantee can be
              given that all information is complete, correct, and up-to-date
              at all times. AMENZO reserves the right to make changes or
              additions to the information provided.
            </p>
            <p className="mt-3">
              AMENZO is not responsible for the content of external websites
              that are linked from this website. The operators of linked
              websites are solely responsible for their content.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-3">
              Copyright
            </h2>
            <p>
              All content on this website, including texts, images, graphics,
              and the design of the website, is protected by copyright. Any
              reproduction, processing, distribution, or any form of
              commercialisation of such material beyond the scope of copyright
              law requires the prior written consent of AMENZO.
            </p>
            <p className="mt-3">
              &copy; {new Date().getFullYear()} AMENZO. All rights reserved.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
