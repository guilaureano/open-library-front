import { useTranslation } from 'react-i18next';

type PaginationProps = {
  page: number;
  setPage: (value: number) => void;
  totalResults?: number;
};

const Pagination = ({ page, setPage, totalResults = 0 }: PaginationProps) => {
  const { t } = useTranslation('common');
  const totalPages = Math.ceil(totalResults / 12);

  return (
    <div className="mt-10 flex items-center justify-center gap-4">
      <button
        className="font-semibold text-sm text-primary-foreground rounded-2xl bg-primary p-2 min-w-24 disabled:bg-gray-300"
        disabled={page < 2}
        onClick={() => setPage(page - 1)}
      >
        {t('previous')}
      </button>
      <span>{t('pageOf', { param1: page, param2: totalPages })}</span>
      <button
        className="font-semibold text-sm text-primary-foreground rounded-2xl bg-primary p-2 min-w-24 disabled:bg-gray-300"
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        {t('next')}
      </button>
    </div>
  );
};

export default Pagination;
