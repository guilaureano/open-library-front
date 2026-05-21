import brazil from '@/shared/assets/brazil.svg';
import spain from '@/shared/assets/spain.svg';
import usa from '@/shared/assets/usa.svg';
import { useLocale } from '@/shared/hooks/useLocale';

const languages = [
  {
    code: 'en-US',
    label: 'EN',
    flag: usa,
    name: 'United States of America',
  },
  {
    code: 'es-ES',
    label: 'ES',
    flag: spain,
    name: 'España',
  },
  {
    code: 'pt-BR',
    label: 'PT',
    flag: brazil,
    name: 'Brasil',
  },
] as const;

export function LanguageSwitcher() {
  const { locale, changeLocale } = useLocale();

  return (
    <div className="flex items-center rounded-3xl border border-border bg-surface gap-2">
      {languages.map((lang) => {
        const active = locale === lang.code;

        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => changeLocale(lang.code)}
            aria-label={`Switch language to ${lang.label}`}
            aria-pressed={active}
            className={`flex items-center gap-2 rounded-3xl px-2 py-1 text-sm font-medium text-center transition-all duration-200 ${active ? `bg-primary text-primary-foreground shadow-sm` : `text-muted-foreground hover:bg-surface-muted`}`}
          >
            <img
              height="20"
              width="20"
              src={lang.flag}
              alt={`Flag icon ${lang.name}`}
            />
            <span className="hidden md:inline text-sm font-normal">
              {lang.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
