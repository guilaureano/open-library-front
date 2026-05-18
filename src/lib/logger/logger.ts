export const logger = {
  error(message: string, payload?: unknown) {
    if (import.meta.env.DEV) {
      console.group('APP ERROR');
      console.error(message);
      console.error(payload);
      console.groupEnd();
    }
  },

  info(message: string, payload?: unknown) {
    if (import.meta.env.DEV) {
      console.info(message, payload);
    }
  },
};
