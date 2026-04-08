import { generatePageMeta } from "@/lib/seo";
import { LocaleSwitch } from "@/lib/i18n/LocaleSwitch";

export const metadata = generatePageMeta({
  title: "Cookie Policy",
  description: "AMENZO cookie policy. How we use cookies on our website.",
  path: "/cookies",
  noindex: true,
});

const EnContent = (
  <div className="space-y-8 text-text-secondary leading-relaxed">
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">1. What Are Cookies</h2>
      <p>Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the site owners.</p>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">2. Cookies We Use</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm mt-4">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 pr-4 text-text-primary font-semibold">Cookie</th>
              <th className="text-left py-3 pr-4 text-text-primary font-semibold">Type</th>
              <th className="text-left py-3 pr-4 text-text-primary font-semibold">Purpose</th>
              <th className="text-left py-3 text-text-primary font-semibold">Duration</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">va</td>
              <td className="py-3 pr-4">Analytics</td>
              <td className="py-3 pr-4">Vercel Analytics — anonymous usage data</td>
              <td className="py-3">Session</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">si</td>
              <td className="py-3 pr-4">Performance</td>
              <td className="py-3 pr-4">Vercel Speed Insights — page performance metrics</td>
              <td className="py-3">Session</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4">We do not use any advertising cookies or third-party tracking cookies.</p>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">3. Essential Cookies</h2>
      <p>Some cookies are essential for the website to function properly. These cannot be disabled without affecting the functionality of the site.</p>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">4. Managing Cookies</h2>
      <p>You can control and manage cookies through your browser settings. Please note that disabling cookies may affect the functionality of this and other websites you visit. Most browsers allow you to:</p>
      <ul className="list-disc list-inside space-y-2 mt-3">
        <li>View what cookies are stored and delete them individually</li>
        <li>Block third-party cookies</li>
        <li>Block cookies from specific sites</li>
        <li>Block all cookies</li>
        <li>Delete all cookies when you close your browser</li>
      </ul>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">5. Contact</h2>
      <p>If you have questions about our use of cookies, please contact us at info@amenzo.co.</p>
    </section>
  </div>
);

const DeContent = (
  <div className="space-y-8 text-text-secondary leading-relaxed">
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">1. Was sind Cookies</h2>
      <p>Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Gerät gespeichert werden. Sie werden weit verbreitet eingesetzt, um Websites effizienter funktionieren zu lassen und den Betreibern Informationen bereitzustellen.</p>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">2. Welche Cookies wir verwenden</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm mt-4">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 pr-4 text-text-primary font-semibold">Cookie</th>
              <th className="text-left py-3 pr-4 text-text-primary font-semibold">Typ</th>
              <th className="text-left py-3 pr-4 text-text-primary font-semibold">Zweck</th>
              <th className="text-left py-3 text-text-primary font-semibold">Dauer</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">va</td>
              <td className="py-3 pr-4">Analyse</td>
              <td className="py-3 pr-4">Vercel Analytics — anonyme Nutzungsdaten</td>
              <td className="py-3">Sitzung</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">si</td>
              <td className="py-3 pr-4">Performance</td>
              <td className="py-3 pr-4">Vercel Speed Insights — Performance-Metriken</td>
              <td className="py-3">Sitzung</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4">Wir verwenden keine Werbe-Cookies oder Tracking-Cookies von Drittanbietern.</p>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">3. Essenzielle Cookies</h2>
      <p>Einige Cookies sind für das ordnungsgemäße Funktionieren der Website erforderlich. Diese können nicht deaktiviert werden, ohne die Funktionalität der Website zu beeinträchtigen.</p>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">4. Cookies verwalten</h2>
      <p>Sie können Cookies über Ihre Browsereinstellungen kontrollieren und verwalten. Beachten Sie, dass das Deaktivieren von Cookies die Funktionalität dieser und anderer Websites beeinträchtigen kann. Die meisten Browser ermöglichen Ihnen:</p>
      <ul className="list-disc list-inside space-y-2 mt-3">
        <li>Gespeicherte Cookies einzusehen und einzeln zu löschen</li>
        <li>Cookies von Drittanbietern zu blockieren</li>
        <li>Cookies bestimmter Websites zu blockieren</li>
        <li>Alle Cookies zu blockieren</li>
        <li>Alle Cookies beim Schließen des Browsers zu löschen</li>
      </ul>
    </section>
    <section>
      <h2 className="font-display text-xl font-semibold text-text-primary mb-3">5. Kontakt</h2>
      <p>Bei Fragen zu unserer Verwendung von Cookies kontaktieren Sie uns unter info@amenzo.co.</p>
    </section>
  </div>
);

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-bg pt-32 pb-20">
      <div className="container-wide max-w-3xl">
        <LocaleSwitch
          en={
            <>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">Cookie Policy</h1>
              <p className="text-text-muted text-sm mb-12">Last updated: March 2026</p>
              {EnContent}
            </>
          }
          de={
            <>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">Cookie-Richtlinie</h1>
              <p className="text-text-muted text-sm mb-12">Zuletzt aktualisiert: März 2026</p>
              {DeContent}
            </>
          }
        />
      </div>
    </div>
  );
}
