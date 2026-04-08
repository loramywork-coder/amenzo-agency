import { generatePageMeta } from "@/lib/seo";
import { LocaleSwitch } from "@/lib/i18n/LocaleSwitch";

export const metadata = generatePageMeta({
  title: "Privacy Policy",
  description: "AMENZO privacy policy. How we collect, use, and protect your personal data under GDPR.",
  path: "/privacy",
  noindex: true,
});

const EnContent = (
  <div className="prose-dark space-y-8 text-text-secondary leading-relaxed">
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">1. Introduction</h2>
      <p>AMENZO (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website amenzo.co and use our services.</p>
      <p className="mt-3">We comply with the General Data Protection Regulation (GDPR) and applicable Dutch data protection legislation.</p>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">2. Information We Collect</h2>
      <p><strong className="text-text-primary">Personal Information:</strong> When you submit a project brief, contact form, or subscribe to our newsletter, we may collect your name, email address, phone number, company name, and project details.</p>
      <p className="mt-3"><strong className="text-text-primary">Usage Data:</strong> We automatically collect information about how you interact with our website, including IP address, browser type, pages visited, and time spent. We use Vercel Analytics for this purpose, which processes data in compliance with GDPR.</p>
      <p className="mt-3"><strong className="text-text-primary">Cookies:</strong> We use essential cookies required for website functionality. See our Cookie Policy for details.</p>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">3. How We Use Your Information</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>To respond to your enquiries and project briefs</li>
        <li>To provide and improve our services</li>
        <li>To send project updates and communications you have requested</li>
        <li>To analyse website usage and improve user experience</li>
        <li>To comply with legal obligations</li>
      </ul>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">4. Legal Basis for Processing</h2>
      <p>We process your personal data under the following legal bases:</p>
      <ul className="list-disc list-inside space-y-2 mt-3">
        <li><strong className="text-text-primary">Consent:</strong> When you submit a form or subscribe to communications</li>
        <li><strong className="text-text-primary">Legitimate interest:</strong> Website analytics and service improvement</li>
        <li><strong className="text-text-primary">Contractual necessity:</strong> When processing is required to fulfil a service agreement</li>
      </ul>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">5. Data Sharing</h2>
      <p>We do not sell your personal data. We may share your information with trusted third-party service providers who assist in operating our business (e.g., email providers, hosting services, analytics tools). All third parties are required to handle your data in compliance with GDPR.</p>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">6. Data Retention</h2>
      <p>We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Project-related data is retained for the duration of our business relationship plus 5 years for legal and accounting purposes.</p>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">7. Your Rights</h2>
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
      <p className="mt-3">To exercise any of these rights, contact us at info@amenzo.co.</p>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">8. Security</h2>
      <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction.</p>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">9. Contact</h2>
      <p>If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:</p>
      <p className="mt-3">
        ProgressPro, trading as Amenzo Studio<br />
        Dammerweg 81, 1394 GR Nederhorst den Berg, The Netherlands<br />
        info@amenzo.co<br />
        +31 62 831 8123
      </p>
    </section>
  </div>
);

const DeContent = (
  <div className="prose-dark space-y-8 text-text-secondary leading-relaxed">
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">1. Einleitung</h2>
      <p>AMENZO (&bdquo;wir&ldquo;, &bdquo;uns&ldquo;, &bdquo;unser&ldquo;) ist dem Schutz Ihrer Privatsphäre verpflichtet. Diese Datenschutzerklärung erläutert, wie wir Ihre Informationen erfassen, nutzen, weitergeben und schützen, wenn Sie unsere Website amenzo.co besuchen und unsere Dienste nutzen.</p>
      <p className="mt-3">Wir handeln im Einklang mit der Datenschutz-Grundverordnung (DSGVO) und den geltenden niederländischen Datenschutzgesetzen.</p>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">2. Welche Informationen wir erfassen</h2>
      <p><strong className="text-text-primary">Personenbezogene Daten:</strong> Wenn Sie ein Projektbriefing oder Kontaktformular einreichen oder unseren Newsletter abonnieren, erfassen wir möglicherweise Ihren Namen, Ihre E-Mail-Adresse, Telefonnummer, Ihren Firmennamen und Projektdetails.</p>
      <p className="mt-3"><strong className="text-text-primary">Nutzungsdaten:</strong> Wir erfassen automatisch Informationen darüber, wie Sie mit unserer Website interagieren, einschließlich IP-Adresse, Browsertyp, besuchten Seiten und Verweildauer. Hierfür verwenden wir Vercel Analytics, das Daten DSGVO-konform verarbeitet.</p>
      <p className="mt-3"><strong className="text-text-primary">Cookies:</strong> Wir verwenden essenzielle Cookies, die für die Funktion der Website erforderlich sind. Details siehe Cookie-Richtlinie.</p>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">3. Wie wir Ihre Informationen nutzen</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Zur Beantwortung Ihrer Anfragen und Projektbriefings</li>
        <li>Zur Bereitstellung und Verbesserung unserer Leistungen</li>
        <li>Zum Versand von Projekt-Updates und angeforderter Kommunikation</li>
        <li>Zur Analyse der Website-Nutzung und Verbesserung der Nutzererfahrung</li>
        <li>Zur Erfüllung gesetzlicher Verpflichtungen</li>
      </ul>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">4. Rechtsgrundlage der Verarbeitung</h2>
      <p>Wir verarbeiten Ihre personenbezogenen Daten auf Grundlage der folgenden Rechtsgrundlagen:</p>
      <ul className="list-disc list-inside space-y-2 mt-3">
        <li><strong className="text-text-primary">Einwilligung:</strong> Beim Absenden eines Formulars oder Abonnement von Mitteilungen</li>
        <li><strong className="text-text-primary">Berechtigtes Interesse:</strong> Website-Analyse und Verbesserung der Leistungen</li>
        <li><strong className="text-text-primary">Vertragserfüllung:</strong> Wenn die Verarbeitung zur Erfüllung eines Dienstleistungsvertrags erforderlich ist</li>
      </ul>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">5. Datenweitergabe</h2>
      <p>Wir verkaufen Ihre personenbezogenen Daten nicht. Wir geben Ihre Informationen möglicherweise an vertrauenswürdige Drittanbieter weiter, die uns beim Betrieb unseres Geschäfts unterstützen (z. B. E-Mail-Anbieter, Hosting-Dienste, Analyse-Tools). Alle Drittanbieter sind verpflichtet, Ihre Daten DSGVO-konform zu verarbeiten.</p>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">6. Speicherdauer</h2>
      <p>Wir speichern Ihre personenbezogenen Daten nur so lange, wie es zur Erfüllung der Zwecke, für die sie erhoben wurden, oder gesetzlich erforderlich ist. Projektbezogene Daten werden für die Dauer unserer Geschäftsbeziehung zuzüglich 5 Jahre für rechtliche und buchhalterische Zwecke aufbewahrt.</p>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">7. Ihre Rechte</h2>
      <p>Nach der DSGVO haben Sie das Recht auf:</p>
      <ul className="list-disc list-inside space-y-2 mt-3">
        <li>Auskunft über Ihre personenbezogenen Daten</li>
        <li>Berichtigung unrichtiger Daten</li>
        <li>Löschung Ihrer Daten</li>
        <li>Einschränkung der Verarbeitung</li>
        <li>Datenübertragbarkeit</li>
        <li>Widerspruch gegen die Verarbeitung</li>
        <li>Widerruf Ihrer Einwilligung jederzeit</li>
      </ul>
      <p className="mt-3">Zur Ausübung dieser Rechte kontaktieren Sie uns unter info@amenzo.co.</p>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">8. Sicherheit</h2>
      <p>Wir treffen geeignete technische und organisatorische Maßnahmen, um Ihre personenbezogenen Daten vor unbefugtem Zugriff, Veränderung, Offenlegung oder Zerstörung zu schützen.</p>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">9. Kontakt</h2>
      <p>Bei Fragen zu dieser Datenschutzerklärung oder zur Ausübung Ihrer Rechte kontaktieren Sie uns bitte:</p>
      <p className="mt-3">
        ProgressPro, geschäftlich tätig als Amenzo Studio<br />
        Dammerweg 81, 1394 GR Nederhorst den Berg, Niederlande<br />
        info@amenzo.co<br />
        +31 62 831 8123
      </p>
    </section>
  </div>
);

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-bg pt-32 pb-20">
      <div className="container-wide max-w-3xl">
        <LocaleSwitch
          en={
            <>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">Privacy Policy</h1>
              <p className="text-text-muted text-sm mb-12">Last updated: March 2026</p>
              {EnContent}
            </>
          }
          de={
            <>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">Datenschutzerklärung</h1>
              <p className="text-text-muted text-sm mb-12">Zuletzt aktualisiert: März 2026</p>
              {DeContent}
            </>
          }
        />
      </div>
    </div>
  );
}
