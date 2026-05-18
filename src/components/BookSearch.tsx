import { useTranslation } from 'react-i18next';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function BookSearch({ value, onChange }: Props) {
  const { t } = useTranslation('books');
  return (
    <input
      type="text"
      placeholder={t('search.placeholder')}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm shadow-sm outline-none transition-all duration-200 focus:border-primary focus:ring-4 focus:ring-primary/10"
    />
  );
}
