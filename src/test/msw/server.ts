import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// * MSW = Mock Service Worker
export const server = setupServer(...handlers);
