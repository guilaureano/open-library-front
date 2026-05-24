import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

type TMenuDropdownMobile = {
  closeMenu: () => void;
};

export const MenuDropdownMobile = ({ closeMenu }: TMenuDropdownMobile) => {
  const { t } = useTranslation('layout');
  return (
    <div className="absolute top-full left-0 z-50 w-full border-b border-border bg-background px-6 py-4 shadow-sm md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
      <nav className="flex flex-col gap-4 text-sm font-medium text-muted-foreground">
        <NavLink
          to="/"
          onClick={closeMenu}
          className="transition-colors font-semibold hover:text-foreground py-1 border-b border-amber-950"
        >
          Home
        </NavLink>
        <NavLink
          to="/books"
          onClick={closeMenu}
          className="transition-colors font-semibold hover:text-foreground py-1 border-b border-amber-950"
        >
          {t('topbar.nav1')}
        </NavLink>
        <NavLink
          to="/authors"
          onClick={closeMenu}
          className="transition-colors font-semibold hover:text-foreground py-1 border-b border-amber-950"
        >
          {t('topbar.nav2')}
        </NavLink>
        <NavLink
          to="/about"
          onClick={closeMenu}
          className="transition-colors font-semibold hover:text-foreground py-1 border-b border-amber-950"
        >
          {t('topbar.nav3')}
        </NavLink>
      </nav>
    </div>
  );
};
