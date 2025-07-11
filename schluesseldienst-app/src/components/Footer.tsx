import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link'; // Import Link für Impressum/Datenschutz

const Footer = () => {
  const t = useTranslations('Footer');
  const currentYear = new Date().getFullYear();

  // Die href-Werte für Impressum und Datenschutz müssen sprachabhängig sein,
  // wenn diese Seiten ebenfalls internationalisiert werden.
  // Für den Moment gehen wir davon aus, dass sie relativ zur aktuellen Sprache sind.
  // z.B. /de/impressum, /en/imprint etc.
  // Dies erfordert, dass die Link-Komponente von next-intl oder eine Hilfsfunktion verwendet wird,
  // um die Locale automatisch voranzustellen. Da wir hier einfache <a>-Tags haben,
  // und diese Seiten noch nicht existieren, belassen wir es vorerst bei relativen Pfaden.
  // Später könnte man dies durch <Link href="/impressum"> oder <Link href="/datenschutz"> ersetzen,
  // wenn diese Routen im i18n-Setup (z.B. in der Middleware) berücksichtigt werden.

  return (
    <footer className="bg-gray-800 text-gray-300 pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h5 className="text-xl font-semibold text-white mb-4">{t('companyName')}</h5>
            <p className="text-sm">
              {t('tagline')}
            </p>
          </div>
          <div>
            <h5 className="text-xl font-semibold text-white mb-4">{t('contactTitle')}</h5>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-blue-400" />
                <a href={`tel:${t('phone')}`} className="hover:text-blue-300">{t('phone')}</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-blue-400" />
                <a href={`mailto:${t('email')}`} className="hover:text-blue-300">{t('email')}</a>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-2 text-blue-400" />
                <span>{t('address')}</span>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-xl font-semibold text-white mb-4">{t('openingHoursTitle')}</h5>
            <p className="text-sm">{t('weekdays')}</p>
            <p className="text-sm">{t('saturday')}</p>
            <p className="text-sm mt-2 font-semibold">{t('emergencyService')}</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>{t('copyright', { currentYear: currentYear })}</p>
          <p className="mt-1">
            {/* Annahme: Impressum und Datenschutz sind noch nicht als internationalisierte Routen vorhanden.
                Wenn sie es wären, würden wir <Link href="/impressum"> verwenden.
                Vorerst einfache Links, die auf nicht existierende Seiten zeigen.
            */}
            <Link href="/impressum" className="hover:text-blue-400">{t('imprint')}</Link>
            <span className="mx-1">|</span>
            <Link href="/datenschutz" className="hover:text-blue-400">{t('privacy')}</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
