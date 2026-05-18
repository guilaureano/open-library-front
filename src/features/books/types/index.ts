export type BookCover = {
  sm: string;
  md: string;
  lg: string;
};

export interface Book {
  authorName?: string[];
  coverUrl: BookCover;
  firstPublishYear?: number;
  id: string;
  isbn?: string;
  title: string;
}

export interface OpenLibraryDoc {
  author_name?: string[];
  cover_i?: number;
  first_publish_year?: number;
  isbn?: string[];
  key: string;
  title: string;
}

export interface OpenLibrarySearchResponse {
  docs: OpenLibraryDoc[];
  numFound: number;
  start: number;
}
