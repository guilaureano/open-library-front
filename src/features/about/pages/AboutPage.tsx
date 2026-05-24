import GitHubIcon from '@/shared/assets/github.svg';
import LinkdinIcon from '@/shared/assets/linkedin.svg';
import { ENV } from '@/shared/config/env';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about');
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-accent">
          {t('highlight')}
        </p>
        <h1
          className="mb-10 text-4xl font-medium tracking-tight md:text-5xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {t('title1')}
        </h1>

        <div className="space-y-8 leading-relaxed text-foreground/80 text-justify">
          <p>
            <strong className="text-foreground">{t('appName')}</strong>{' '}
            {t('phrase1')}
          </p>
          <p>{t('phrase2')}</p>
          <p>{t('phrase3')}</p>
          <p>{t('phrase4')}</p>
        </div>

        <div className="my-12 border-t border-border" />

        <div className="flex items-start gap-4">
          <div className="space-y-6 leading-relaxed text-foreground/80  text-justify">
            <div>
              <h2
                className="mb-2 text-2xl font-medium tracking-tight text-foreground"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {t('title2')}
              </h2>
              <p>{t('phrase5')}</p>
            </div>
            <p>{t('phrase6')}</p>
            <p>{t('phrase7')}</p>
            <p>{t('phrase8')}</p>
            <p>{t('phrase9')}</p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={ENV.GITHUB_PROFILE}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent/10"
              >
                <img
                  className="opacity-70 transition-opacity hover:opacity-100"
                  height={24}
                  width={24}
                  src={GitHubIcon}
                  alt="GitHub link icon"
                />
                GitHub
              </a>

              <a
                href={ENV.LINKEDIN_PROFILE}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent/10"
              >
                <img
                  className="opacity-70 transition-opacity hover:opacity-100"
                  height={24}
                  width={24}
                  src={LinkdinIcon}
                  alt="LinkedIn link icon"
                />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default AboutPage;
