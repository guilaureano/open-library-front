const apiUrl = import.meta.env.VITE_API_URL;
const coversUrl = import.meta.env.VITE_COVERS_URL;

if (!apiUrl) {
  throw new Error(
    '❌ Erro: A variável VITE_API_URL não foi definida no seu arquivo .env da raiz!',
  );
}

if (!coversUrl) {
  throw new Error(
    '❌ Erro: A variável VITE_COVERS_URL não foi definida no seu arquivo .env da raiz!',
  );
}

export const ENV = {
  API_URL: apiUrl,
  COVERS_URL: coversUrl,
};
