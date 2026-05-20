import '@testing-library/jest-dom';
import { server } from './msw/server';

process.env.VITE_API_URL = 'https://openlibrary.org';
process.env.VITE_COVERS_URL = 'https://covers.openlibrary.org/b/id/';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
