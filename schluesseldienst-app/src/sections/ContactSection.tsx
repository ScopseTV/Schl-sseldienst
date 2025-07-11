'use client'; // Für Formularinteraktion und Hooks

import React from 'react';
import Button from '../components/Button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useTranslations } from 'next-intl';

const ContactSection = () => {
  const t = useTranslations('ContactSection');
  const tFooter = useTranslations('Footer'); // Um Telefon und E-Mail konsistent zu halten aus Footer-Übersetzungen

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Hier würde die Logik zum Senden des Formulars stehen.
    // Fürs Erste geben wir nur eine Konsolennachricht aus und zeigen den Disclaimer.
    console.log('Formular gesendet (Demo)');
    alert(t('formDisclaimer'));
  };

  return (
    <section id="kontakt" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Linke Seite: Kontaktinformationen */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">{t('directContactTitle')}</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone size={24} className="text-blue-500 mr-4 mt-1 shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-700">{t('callUs')}</h4>
                  <a href={`tel:${tFooter('phone')}`} className="text-blue-600 hover:text-blue-700 text-lg md:text-xl font-semibold">
                    {tFooter('phone')}
                  </a>
                  <p className="text-sm text-gray-500">{t('callUsInfo')}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail size={24} className="text-blue-500 mr-4 mt-1 shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-700">{t('emailUs')}</h4>
                  <a href={`mailto:${tFooter('email')}`} className="text-blue-600 hover:text-blue-700">
                    {tFooter('email')}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin size={24} className="text-blue-500 mr-4 mt-1 shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-700">{t('locationTitle')}</h4>
                  <p className="text-gray-600">{t('addressLine1')}</p>
                  <p className="text-gray-600">{t('addressLine2')}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock size={24} className="text-blue-500 mr-4 mt-1 shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-700">{t('openingHoursTitle')}</h4>
                  <p className="text-gray-600">{t('weekdays')}</p>
                  <p className="text-gray-600">{t('saturday')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Rechte Seite: Kontaktformular */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">{t('formTitle')}</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    {t('formNameLabel')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder={t('formNamePlaceholder')}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    {t('formEmailLabel')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder={t('formEmailPlaceholder')}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    {t('formPhoneLabel')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder={t('formPhonePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    {t('formMessageLabel')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder={t('formMessagePlaceholder')}
                    required
                  ></textarea>
                </div>

                <div>
                  <Button type="submit" variant="primary" className="w-full" size="lg">
                    {t('formSubmitButton')}
                  </Button>
                </div>
              </div>
            </form>
            <p className="mt-4 text-xs text-gray-500 text-center">
              {t('formDisclaimer')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
