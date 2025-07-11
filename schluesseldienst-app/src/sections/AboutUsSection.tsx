import React from 'react';
import { Users, Award } from 'lucide-react'; // Coffee Icon entfernt, da nicht verwendet
import { useTranslations } from 'next-intl';

const AboutUsSection = () => {
  const t = useTranslations('AboutUsSection');

  // Der Alt-Text für das Bild sollte ebenfalls übersetzbar sein,
  // oder zumindest eine generische, aber beschreibende Form haben.
  // Hier wird er direkt aus den Übersetzungen geholt.
  // In den JSON-Dateien könnte man einen Schlüssel wie "imageAlt" hinzufügen.
  // Für dieses Beispiel belasse ich es bei einem statischen, aber verbesserten Alt-Text.
  const imageAltText = t('imageAlt', {defaultValue: "Team oder Geschäftsfront des Schlüsseldienstes"});


  // Die Platzhalter [Gründungsjahr einfügen] und [Ihre Stadt/Region] sollten
  // idealerweise durch echte Daten ersetzt werden, ggf. auch über die JSON-Dateien,
  // wenn sie sprachspezifisch variieren oder zentral verwaltet werden sollen.
  // Beispiel: t('paragraph1', {foundingYear: "2010", cityRegion: "Musterstadt"})

  return (
    <section id="ueber-uns" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://via.placeholder.com/600x400/e2e8f0/64748b?text=Unser+Team+oder+Gesch%C3%A4ft"
              alt={imageAltText}
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="text-gray-700 space-y-6">
            <p className="leading-relaxed">
              {t('paragraph1')}
            </p>
            <p className="leading-relaxed">
              {t('paragraph2')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <Award size={32} className="text-blue-500 mr-4 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">{t('feature1Title')}</h4>
                  <p className="text-sm text-gray-600">{t('feature1Text')}</p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <Users size={32} className="text-blue-500 mr-4 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">{t('feature2Title')}</h4>
                  <p className="text-sm text-gray-600">{t('feature2Text')}</p>
                </div>
              </div>
            </div>
             <p className="leading-relaxed mt-4">
              {t('paragraph3')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
