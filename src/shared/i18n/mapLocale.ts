const localeMap = {
  'pt-BR': 'por',
  'en-US': 'eng',
  'es-ES': 'spa',
} as const;

export function mapLocaleToOpenLibrary(locale: string) {
  return localeMap[locale as keyof typeof localeMap] ?? 'eng';
}
