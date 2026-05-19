import GitHubIcon from '@/shared/assets/github.svg';
import LinkdinIcon from '@/shared/assets/linkedin.svg';
import { ENV } from '@/shared/config/env';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation('layout');

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-muted-foreground flex justify-between">
        <span className="font-display font-semibold tracking-tight leading-6">
          <a href={ENV.API_URL} target="_blank">
            {t('footer.text1')}
          </a>
        </span>
        <div className="flex gap-2">
          <span className="items-end leading-6">{t('footer.text2')}</span>
          <a href={ENV.GITHUB_PROFILE} target="_blank">
            <img
              className="opacity-70"
              height={24}
              width={24}
              src={GitHubIcon}
            />
          </a>
          <a href={ENV.LINKEDIN_PROFILE} target="_blank">
            <img
              className="opacity-70"
              height={24}
              width={24}
              src={LinkdinIcon}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
