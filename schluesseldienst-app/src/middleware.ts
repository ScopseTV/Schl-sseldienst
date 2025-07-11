import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '../i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: defaultLocale,

  // Optional: If you want to always show the locale prefix, even for the default locale
  // localePrefix: 'always', // Default is 'as-needed'
});

export const config = {
  // Match only internationalized pathnames
  // Adjust this regex if you have specific routes that should not be internationalized
  matcher: ['/', '/(de|en|fr|pirate)/:path*']
};
