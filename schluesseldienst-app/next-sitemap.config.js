/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.ihre-schluesseldienst-domain.de', // Wichtig: Ersetzen Sie dies durch Ihre tatsächliche Domain
  generateRobotsTxt: true, // next-sitemap generiert und aktualisiert die robots.txt
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      // Beispiel: { userAgent: 'Googlebot', disallow: ['/confidential'] },
    ],
    // Die Sitemap-Direktive wird automatisch hinzugefügt.
  },
  // Wenn wir i18n mit Pfad-basiertem Routing (z.B. /en/about, /de/about) verwenden,
  // wird next-sitemap dies normalerweise automatisch erkennen und entsprechende
  // hreflang-Tags generieren, wenn die Seitenstruktur dies widerspiegelt.
  // Für komplexere i18n-Setups könnten Anpassungen hier oder über `transform` nötig sein.
  // Vorerst gehen wir davon aus, dass die Standardkonfiguration mit den Sprachpfaden funktioniert.

  // Wichtig für Next.js App Router:
  // next-sitemap benötigt möglicherweise zusätzliche Konfiguration oder läuft im Post-Build-Schritt
  // um die Routen korrekt zu erfassen. Die Standardkonfiguration zielt oft auf den Pages Router ab.
  // Wir müssen sicherstellen, dass es mit dem App Router funktioniert.
  // Laut Dokumentation sollte es mit dem App Router funktionieren, wenn `outDir` in next.config.js nicht gesetzt ist
  // oder entsprechend berücksichtigt wird.

  // Ausschluss von bestimmten Routen, falls nötig
  // exclude: ['/api/*', '/server-sitemap.xml'],

  // Für den App Router ist es wichtig, dass der Build-Prozess abgeschlossen ist, bevor next-sitemap läuft.
};
