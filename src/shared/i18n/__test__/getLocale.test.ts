describe('getLocale', () => {
  it('returns resolvedLanguage when available', async () => {
    vi.doMock('../config', () => ({
      default: {
        resolvedLanguage: 'pt-BR',
        language: 'en-US',
      },
    }));

    const { getLocale } = await import('../getLocale');

    expect(getLocale()).toBe('pt-BR');
  });

  it('falls back to language', async () => {
    vi.resetModules();

    vi.doMock('../config', () => ({
      default: {
        resolvedLanguage: undefined,
        language: 'en-US',
      },
    }));

    const { getLocale } = await import('../getLocale');

    expect(getLocale()).toBe('en-US');
  });
});
