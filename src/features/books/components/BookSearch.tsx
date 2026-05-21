import searchIcon from '@/shared/assets/searchIcon.svg';
import { useTranslation } from 'react-i18next';

type Props = {
  value: string;
  onChange: (value: string) => void;
  totalResults?: number;
};

export function BookSearch({ value, onChange, totalResults }: Props) {
  const { t } = useTranslation('books');
  return (
    <div className="flex flex-col mb-10 py-4 gap-4 border-y border-border md:flex-row md:items-center md:justify-between">
      <img src={searchIcon} className="ml-4 h-4 w-4" alt="search icon" />
      <input
        type="text"
        placeholder={t('search.placeholder')}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-4 bg-transparent px-2 py-2 text-ms font-mono outline-none"
      />
      <p className="flex-2 flex font-mono justify-end text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {totalResults && `${t('search.label1')}${totalResults}`}
      </p>
    </div>
  );
}
