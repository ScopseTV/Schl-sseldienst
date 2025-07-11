import {getRequestConfig} from 'next-intl/server';

export const locales = ['de', 'en', 'fr', 'pirate'];
export const defaultLocale = 'de';

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    // Optionally, you can throw an error or default to a specific locale
    // For now, we'll rely on the middleware to handle invalid locales
  }

  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
