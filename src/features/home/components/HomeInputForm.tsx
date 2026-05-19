import searchIcon from '@/shared/assets/searchIcon.svg';
import { useState, type SubmitEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

type SearchType = 'title' | 'authors';

export const HomeInputForm = () => {
  const { t } = useTranslation('home');
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [type, setType] = useState<SearchType>('title');
  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    const q = `?search=${query.trim()}`;
    if (type === 'title') {
      navigate({ pathname: '/books', search: q });
    } else {
      navigate({ pathname: '/authors', search: q });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl rounded-2xl border border-border bg-background/70 p-3 shadow-sm backdrop-blur"
    >
      <fieldset className="flex items-center px-4 gap-6 border-b border-border/60 pb-2 text-sm">
        <legend className="sr-only">{t('aria1')}</legend>
        {(['title', 'authors'] as const).map((opt) => (
          <label
            key={opt}
            className="flex cursor-pointer items-center gap-2 text-muted-foreground has-checked:text-foreground"
          >
            <input
              type="radio"
              name="search-type"
              value={opt}
              checked={type === opt}
              onChange={() => setType(opt)}
              className="h-4 w-4 cursor-pointer accent-[hsl(var(--accent))]"
            />
            <span className="capitalize">
              {opt === 'title' ? t('label1') : t('label2')}
            </span>
          </label>
        ))}
      </fieldset>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center mt-3">
        <div className="flex flex-1 items-center gap-2 rounded-xl bg-background/60 px-4 py-2">
          <img src={searchIcon} className="h-4 w-4" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={type === 'title' ? t('place1') : t('place2')}
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            aria-label={t('aria2')}
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          aria-label={t('btn1')}
        >
          {t('btn1')}
        </button>
      </div>
    </form>
  );
};
