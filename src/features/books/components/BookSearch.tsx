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
      <input
        type="text"
        placeholder={t('search.placeholder')}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-4 rounded-2xl border border-border bg-surface px-4 py-2 text-sm shadow-sm outline-none transition-all duration-200 focus:border-primary focus:ring-4 focus:ring-primary/10"
      />
      <p className="flex-2 flex font-mono justify-end text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {totalResults && `${t('search.label1')}${totalResults}`}
      </p>
    </div>
  );
}
