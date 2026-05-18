import bookIcon from '@/assets/book.svg';
import { useTranslation } from 'react-i18next';

export const TopBar = () => {
  const { t } = useTranslation('books');

  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <img src={bookIcon} alt="book icon" />
          <span className="font-display text-lg font-semibold tracking-tight">
            {t('topbar.logo')}
          </span>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#" className="transition-colors hover:text-foreground">
              {t('topbar.nav1')}
            </a>
          </nav>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#" className="transition-colors hover:text-foreground">
              {t('topbar.nav2')}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
