type Props = {
  language: string;
  limit: number;
  page: number;
  query: string;
};

export function buildSearchQuery({ language, limit, page, query }: Props) {
  const fields = 'key,title,author_name,cover_i,first_publish_year,editions';
  const q = `title:${query} AND language:${language}`;

  return new URLSearchParams({
    q,
    fields,
    page: String(page),
    limit: String(limit),
  });
}
