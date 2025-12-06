import { getRequestConfig } from 'next-intl/server';
import { routing } from './i18n/routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = routing.defaultLocale;
  
  if (requestLocale) {
    try {
      const resolvedLocale = await requestLocale;
      if (resolvedLocale && routing.locales.includes(resolvedLocale)) {
        locale = resolvedLocale;
      }
    } catch (error) {
      // Use default locale if requestLocale fails
      locale = routing.defaultLocale;
    }
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});

export { routing };

