const apiUrl = import.meta.env.VITE_API_URL ?? process.env.VITE_API_URL;
const coversUrl =
  import.meta.env.VITE_COVERS_URL ?? process.env.VITE_COVERS_URL;
const githubnUrl = import.meta.env.VITE_GITHUB ?? process.env.VITE_GITHUB;
const linkedinUrl = import.meta.env.VITE_LINKEDIN ?? process.env.VITE_LINKEDIN;

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
  GITHUB_PROFILE: githubnUrl,
  LINKEDIN_PROFILE: linkedinUrl,
};
