import { useTranslation } from 'react-i18next';

export const BookWelcome = () => {
  const { t } = useTranslation('books');

  return (
    <section className="mb-14 max-w-2xl">
      <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {t('welcome.subtitle')}
      </p>
      <h1 className="mb-4 text-5xl font-medium leading-[1.05] tracking-tight md:text-6xl">
        {t('welcome.text1')}
      </h1>
      <p className="mt-2 text-muted-foreground">{t('welcome.description')}</p>
    </section>
  );
};
