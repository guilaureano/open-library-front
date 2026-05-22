import { searchBooks } from '../searchBooks';

describe('searchBooks (MSW)', () => {
  it('returns raw api response', async () => {
    const result = await searchBooks({
      language: 'por',
      query: 'harry',
    });

    expect(result.docs).toHaveLength(1);
    expect(result.docs[0].title).toBe('Harry Potter and the Philosopher Stone');
  });
});
