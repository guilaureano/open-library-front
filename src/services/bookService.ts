import { mapBook } from '../adapters/mapBook';
import { searchBooksRequest } from '../api/searchBooks';
import type { Book } from '../types/book.types';

export async function searchBooks(query: string): Promise<Book[]> {
  const data = await searchBooksRequest(query);

  return data.docs.slice(0, 20).map(mapBook);
}
