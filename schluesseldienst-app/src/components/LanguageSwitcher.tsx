'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { locales } from '../../i18n'; // Pfad zum Projekt-Root angepasst
import { Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function LanguageSwitcher() {
  const t = useTranslations('LanguageSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname(); // Gibt den Pfad ohne Locale zurück, z.B. /about

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const switchLocale = (nextLocale: string) => {
    // Der Pathname von next/navigation enthält bereits nicht mehr das alte Locale-Präfix
    // Daher können wir ihn direkt für den neuen Link verwenden.
    // next-intl's Middleware wird das neue Locale-Präfix hinzufügen.
    router.push(`/${nextLocale}${pathname}`);
    setIsOpen(false);
  };

  // Schließen des Dropdowns bei Klick außerhalb
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // Hilfsfunktion, um den vollen Namen der Sprache anzuzeigen
  const getLocaleName = (loc: string) => {
    switch (loc) {
      case 'de': return 'Deutsch';
      case 'en': return 'English';
      case 'fr': return 'Français';
      case 'pirate': return 'Arrr! (Pirate)';
      default: return loc.toUpperCase();
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label={t('changeLanguage')}
      >
        <Globe size={20} className="mr-1" />
        <span className="hidden sm:inline">{getLocaleName(locale)}</span>
        <svg className={`w-4 h-4 ml-1 hidden sm:inline transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 py-1 w-36 bg-gray-700 rounded-md shadow-lg z-50">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => switchLocale(loc)}
              disabled={locale === loc}
              className={`block w-full text-left px-4 py-2 text-sm ${
                locale === loc
                ? 'bg-blue-500 text-white cursor-not-allowed'
                : 'text-gray-300 hover:bg-gray-600 hover:text-white'
              } disabled:opacity-50`}
            >
              {getLocaleName(loc)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
