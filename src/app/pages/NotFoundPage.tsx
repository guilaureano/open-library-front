import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
  const { t } = useTranslation('layout');
  return (
    <main className="relative flex flex-1 items-center justify-center overflow-hidden px-6">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 dark:opacity-25">
        <div className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-lg text-center">
        <p
          className="mb-3 text-8xl font-medium tracking-tighter text-foreground/90"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          404
        </p>
        <h1
          className="mb-4 text-2xl font-medium tracking-tight text-foreground md:text-3xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {t('notFoundPage.title')}
        </h1>
        <p className="mb-8 text-muted-foreground">{t('notFoundPage.text1')}</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <NavLink
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            {t('notFoundPage.btn1')}
          </NavLink>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
