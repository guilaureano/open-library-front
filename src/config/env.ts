const apiUrl = import.meta.env.VITE_API_URL;

if (!apiUrl) {
  throw new Error(
    '❌ Erro: A variável VITE_API_URL não foi definida no seu arquivo .env da raiz!',
  );
}

export const ENV = {
  API_URL: apiUrl,
};
