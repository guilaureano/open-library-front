import { mapLocaleToOpenLibrary } from '../mapLocale';

describe('mapLocaleToOpenLibrary', () => {
  it.each([
    ['pt-BR', 'por'],
    ['en-US', 'eng'],
    ['es-ES', 'spa'],
    ['unknown', 'eng'],
  ])('maps %s -> %s', (input, expected) => {
    expect(mapLocaleToOpenLibrary(input)).toBe(expected);
  });
});
