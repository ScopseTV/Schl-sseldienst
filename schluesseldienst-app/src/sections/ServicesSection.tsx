import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { KeyRound, ShieldAlert, Car, Building, Wrench, Lock } from 'lucide-react'; // Lock Icon hinzugefügt
import { useTranslations } from 'next-intl';

// Die Icons bleiben hier definiert, da sie Teil der Struktur und nicht des übersetzbaren Inhalts sind.
// Man könnte die Icon-Namen auch in die JSON-Dateien aufnehmen und dynamisch laden,
// aber das würde die Komplexität erhöhen. Für dieses Projekt ist es so einfacher.
const serviceIcons: { [key: string]: React.ReactNode } = {
  doorOpenings: <KeyRound size={40} className="text-blue-500 mb-4" />,
  burglaryProtection: <ShieldAlert size={40} className="text-blue-500 mb-4" />,
  carOpening: <Car size={40} className="text-blue-500 mb-4" />,
  lockingSystems: <Building size={40} className="text-blue-500 mb-4" />,
  repairs: <Wrench size={40} className="text-blue-500 mb-4" />,
  otherServices: <Lock size={40} className="text-blue-500 mb-4" />, // Angepasstes Icon für "Weitere Dienste"
};

const ServicesSection = () => {
  const t = useTranslations('ServicesSection');

  // Die Struktur der Dienste wird aus den Übersetzungsdateien geladen.
  // Wir nehmen an, dass `t.raw('services')` ein Array von Objekten zurückgibt.
  // Jeder Service sollte einen `iconKey` haben, der auf `serviceIcons` verweist.
  const servicesData = t.raw('services') as Array<{ title: string; description: string; iconKey: string }>;

  return (
    <section id="leistungen" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={serviceIcons[service.iconKey] || <KeyRound size={40} className="text-blue-500 mb-4" /> /* Fallback Icon */}
              title={service.title} // Wird direkt aus dem JSON-Objekt genommen
              description={service.description} // Wird direkt aus dem JSON-Objekt genommen
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
