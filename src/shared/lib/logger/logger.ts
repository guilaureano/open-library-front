const shouldLog = import.meta.env.DEV && import.meta.env.MODE !== 'test';
export const logger = {
  error(message: string, payload?: unknown) {
    if (!shouldLog) return;

    console.group('APP ERROR');
    console.error(message);
    console.error(payload);
    console.groupEnd();
  },

  info(message: string, payload?: unknown) {
    if (!shouldLog) return;

    console.info(message, payload);
  },
};
