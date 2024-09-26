import axios from "axios";

// Definir a URL base da API
export const API_URL = "http://localhost:3000/api";

// Função auxiliar para pegar o token do localStorage
const getToken = () => {
  return localStorage.getItem("token"); // Obtém o token JWT do localStorage
};

// Função auxiliar para criar os cabeçalhos padrão
export const getHeaders = () => {
  const token = getToken();
  return {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }), // Adiciona o token JWT se estiver presente
  };
};

// Criar a instância do axios com a URL base
export const apiClient = axios.create({
  baseURL: API_URL,
  headers: getHeaders(),
});
