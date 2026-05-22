import App from '@/app/App';
import { I18nProvider } from '@/app/providers/i18n/provider';
import { queryClient } from '@/app/providers/react-query/index';
import { QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ErrorBoundary } from './shared/components/ErrorBoundary/ErrorBoundary';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ErrorBoundary>
    </I18nProvider>
  </StrictMode>,
);
