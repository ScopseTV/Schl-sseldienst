'use client'; // Notwendig für onClick Handler und useTranslations auf Client-Seite

import React from 'react';
import Button from '../components/Button';
import { PhoneOutgoing } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl'; // Um die aktuelle Locale für den Link zu bekommen

const HeroSection = () => {
  const t = useTranslations('HeroSection');
  const tFooter = useTranslations('Footer'); // Für die Telefonnummer
  const locale = useLocale();

  const handleScrollToServices = () => {
    const servicesSection = document.getElementById('leistungen');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Die Telefonnummer sollte idealerweise auch aus den Sprachdateien kommen,
  // falls sie sprachspezifisch ist oder anders formatiert wird.
  // Ich nehme sie hier aus Footer.phone als Beispiel.
  const phoneNumber = tFooter('phone');


  return (
    <section
      className="relative bg-cover bg-center text-white py-32 md:py-48"
      // Sie sollten hier ein echtes, ansprechendes Bild verwenden.
      style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080/4A5568/FFFFFF?text=Modernes+Schluesseldienst+Banner')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Erhöhte Opazität für bessere Lesbarkeit */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
          {t('title')}
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          {t('subtitle')}
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center items-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => window.location.href = `tel:${phoneNumber}`}
            leftIcon={<PhoneOutgoing size={24} className="mr-2" />}
            className="w-full sm:w-auto"
          >
            {t('callButton')}
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={handleScrollToServices}
            className="border-white text-white hover:bg-white hover:text-gray-800 w-full sm:w-auto"
            // Das Icon könnte auch dynamisch sein, falls gewünscht
          >
            {t('servicesButton')}
          </Button>
        </div>
        <p className="mt-8 text-sm text-gray-300">
          {t('availability')}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
