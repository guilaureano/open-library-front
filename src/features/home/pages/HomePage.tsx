import { useTranslation } from 'react-i18next';
import { HomeInputForm } from '../components/HomeInputForm';

function HomePage() {
  const { t } = useTranslation('home');

  return (
    <main className="flex flex-1 items-center justify-center overflow-hidden">
      <section className="mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] font-mono">
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

        <HomeInputForm />
      </section>
    </main>
  );
}

export default HomePage;
