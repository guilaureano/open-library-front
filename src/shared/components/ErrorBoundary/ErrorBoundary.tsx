import { logger } from '@/shared/lib/logger/logger';
import { Component, type ErrorInfo, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  fallback?: ReactNode;
};

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    logger.error('UI ERROR', {
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="mx-auto max-w-2xl px-6 py-12 text-center">
            <h2 className="text-xl font-medium">Algo deu errado</h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Tente recarregar a página.
            </p>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
