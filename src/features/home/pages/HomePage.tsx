import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

export function HomePage() {
  const { t } = useTranslation('home');
  return (
    <main className="relative flex-1 overflow-hidden">
      <section className="mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center md:py-36">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-accent">
          {t('text1')}
        </p>

        <h1 className="mb-6 text-4xl font-medium leading-[1.02] tracking-tight text-balance md:text-5xl lg:text-6xl xl:text-7xl">
          {t('text2')}
          <br />
          <span
            className="italic text-accent"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {t('text3')}
          </span>
        </h1>

        <p className="mb-10 max-w-xl text-lg text-muted-foreground md:text-xl">
          {t('text4')}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <NavLink
            to="/books"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:gap-3 hover:bg-primary/90"
          >
            {t('btn1')}
            {/* <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} /> */}
          </NavLink>
          <NavLink
            to="/authors"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/60 px-7 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-secondary"
          >
            {t('btn2')}
          </NavLink>
        </div>
      </section>
    </main>
  );
}
