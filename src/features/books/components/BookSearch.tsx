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
    <div className="flex flex-wrap flex-row items-center p-4 mb-10 py-4 gap-4 border-y border-border md:justify-between">
      <div className="flex flex-1 flex-row items-center">
        <img src={searchIcon} className="h-4 w-4" alt="search icon" />
        <input
          type="text"
          placeholder={t('search.placeholder')}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 min-w-2xs bg-transparent px-2 py-2 text-ms font-mono outline-none"
        />
      </div>
      <p className="justify-end leading-10 font-mono text-xs uppercase tracking-[0.2em] text-muted-foregroun">
        {totalResults && `${t('search.label1')}${totalResults}`}
      </p>
    </div>
  );
}
