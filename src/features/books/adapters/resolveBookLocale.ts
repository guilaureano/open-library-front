import type { OpenLibraryDoc } from '../types';

type Props = {
  doc: OpenLibraryDoc;
  language: string;
};

export function resolveBookLocale({ doc, language }: Props) {
  const edition = doc.editions?.docs?.[0];
  const isEnglish = language === 'eng';

  return {
    title: isEnglish ? doc.title : (edition?.title ?? doc.title),

    cover: isEnglish
      ? (doc.cover_i ?? edition?.cover_i)
      : (edition?.cover_i ?? doc.cover_i),
  };
}
