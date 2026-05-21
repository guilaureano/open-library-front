import GitHubIcon from '@/shared/assets/github.svg';
import LinkdinIcon from '@/shared/assets/linkedin.svg';
import { ENV } from '@/shared/config/env';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation('layout');

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-muted-foreground flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:gap-0">
        <span className="font-display font-semibold tracking-tight leading-6 text-center sm:text-left">
          <a href={ENV.API_URL} target="_blank" rel="noreferrer">
            {t('footer.text1')}
          </a>
        </span>

        <div className="flex flex-wrap justify-center items-center gap-2">
          <span className="leading-6 text-center">{t('footer.text2')}</span>
          <div className="flex flex-row gap-2">
            <a
              href={ENV.GITHUB_PROFILE}
              target="_blank"
              rel="noreferrer"
              className="flex items-center"
            >
              <img
                className="opacity-70 transition-opacity hover:opacity-100"
                height={24}
                width={24}
                src={GitHubIcon}
                alt="GitHub link icon"
              />
            </a>

            <a
              href={ENV.LINKEDIN_PROFILE}
              target="_blank"
              rel="noreferrer"
              className="flex items-center"
            >
              <img
                className="opacity-70 transition-opacity hover:opacity-100"
                height={24}
                width={24}
                src={LinkdinIcon}
                alt="LinkedIn link icon"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
