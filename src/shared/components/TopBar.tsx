import bookIcon from '@/shared/assets/book.svg';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

export const TopBar = () => {
  const { t } = useTranslation('layout');

  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <NavLink to="/" className="flex items-center gap-2">
          <img src={bookIcon} alt="book icon" />
          <span className="font-display text-lg font-semibold tracking-tight">
            {t('topbar.logo')}
          </span>
        </NavLink>
        <div className="flex items-center gap-6">
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <NavLink
              to="/books"
              className="transition-colors hover:text-foreground"
            >
              {t('topbar.nav1')}
            </NavLink>
          </nav>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <NavLink
              to="/authors"
              className="transition-colors hover:text-foreground"
            >
              {t('topbar.nav2')}
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};
