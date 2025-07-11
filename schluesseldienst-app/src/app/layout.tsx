import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap', // Font display strategy
});

// Geist Mono wird hier nicht unbedingt für den Body benötigt,
// kann aber für Code-Blöcke etc. beibehalten werden, falls gewünscht.
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

// Funktion zum Generieren von Metadaten basierend auf der Locale
export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
  // Lade die Übersetzungen für die Metadaten.
  // Der Pfad ist relativ zum aktuellen `layout.tsx`-Modul.
  let messagesForMetadata; // Umbenannt, um Konflikt mit messages unten zu vermeiden
  try {
    messagesForMetadata = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    console.warn(`Missing translation file for metadata (locale: ${locale}), falling back to 'de'. Error: ${error}`);
    messagesForMetadata = (await import(`../../messages/de.json`)).default;
  }

  const getMetaDataTranslation = (key: string) => {
    return messagesForMetadata.Metadata?.[key] || (key === 'title' ? "Missing Title" : "Missing Description");
  };

  return {
    title: getMetaDataTranslation('title'),
    description: getMetaDataTranslation('description'),
    openGraph: {
      title: getMetaDataTranslation('title'),
      description: getMetaDataTranslation('description'),
      locale: locale,
    },
  };
}

const LocksmithSchema = {
  "@context": "https://schema.org",
  "@type": "Locksmith",
  "name": "Schlüsseldienst Schnell (Platzhalter)",
  "description": "Ihr zuverlässiger 24/7 Schlüsseldienst für Türöffnungen, Sicherheitstechnik und Einbruchschutz in [Ihre Stadt/Region].",
  "url": "https://www.ihre-schluesseldienst-domain.de (PLATZHALTER)",
  "telephone": "+491234567890 (PLATZHALTER)",
  "email": "info@ihre-schluesseldienst-domain.de (PLATZHALTER)",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Musterstraße 123 (PLATZHALTER)",
    "addressLocality": "Musterstadt (PLATZHALTER)",
    "postalCode": "12345 (PLATZHALTER)",
    "addressRegion": "Bundesland (PLATZHALTER)",
    "addressCountry": "DE"
  },
  "openingHours": "Mo-Su 00:00-23:59", // Beispiel für 24/7
  "areaServed": { // Hier können Sie die bedienten Gebiete genauer definieren
    "@type": "AdministrativeArea",
    "name": "[Ihre Stadt/Region] (PLATZHALTER)"
  },
  "image": "https://www.ihre-schluesseldienst-domain.de/platzhalter-logo.png (PLATZHALTER)", // URL zu Ihrem Logo
  "priceRange": "€€ (PLATZHALTER)", // Preisspanne, z.B. €, €€, €€€
  // Fügen Sie hier weitere relevante Eigenschaften hinzu, z.B. "paymentAccepted"
};

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server'; // Um Nachrichten serverseitig zu laden

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<RootLayoutProps>) {
  // Nachrichten für die aktuelle Locale laden
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        {/* Das dynamische Generieren von Metadaten erfolgt durch `generateMetadata` */}
        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LocksmithSchema) }}
        />
        {/* Weitere Head-Elemente wie Tracking-Scripts können hier eingefügt werden */}
      </head>
      <body
        // Apply Geist Sans as the primary font. Antialiased for better rendering.
        // Die Variable --font-geist-mono ist optional, wenn nicht explizit für bestimmte Elemente genutzt.
        className={`${geistSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
