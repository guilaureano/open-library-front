import bookIcon from '@/shared/assets/book.svg';
import closeIcon from '@/shared/assets/closeIcon.svg';
import menuIcon from '@/shared/assets/menuIcon.svg';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MenuDropdownMobile } from './MenuDropdownMobile';

export const Topbar = () => {
  const { t } = useTranslation('layout');
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="relative border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <NavLink to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <img src={bookIcon} alt="book icon" />
          <span className="font-display text-lg font-semibold tracking-tight">
            {t('topbar.logo')}
          </span>
        </NavLink>

        <div className="flex items-center gap-4 md:gap-6">
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <NavLink
              to="/books"
              className="transition-colors hover:text-foreground"
            >
              {t('topbar.nav1')}
            </NavLink>
            <NavLink
              to="/authors"
              className="transition-colors hover:text-foreground"
            >
              {t('topbar.nav2')}
            </NavLink>
          </nav>

          <LanguageSwitcher />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:text-foreground md:hidden focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <img
                src={closeIcon}
                width={24}
                height={24}
                className="text-muted"
              />
            ) : (
              <img
                src={menuIcon}
                width={24}
                height={24}
                className="text-muted"
              />
            )}
          </button>
        </div>
      </div>

      {isOpen && <MenuDropdownMobile closeMenu={closeMenu} />}
    </header>
  );
};
