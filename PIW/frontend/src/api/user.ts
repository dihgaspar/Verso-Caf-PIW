import { apiClient, getHeaders } from "./api";

// Função para fazer o login
export const login = async (email: string, password: string) => {
  const response = await apiClient.post(
    "/auth/login",
    { email, password },
    {
      headers: getHeaders(), // Usa o cabeçalho padrão
    },
  );
  const token = response.data.token;
  if (token) {
    localStorage.setItem("token", token); // Armazena o token no localStorage
    localStorage.setItem("role", response.data.user.role); // Armazena a role no localStorage
    localStorage.setItem("name", response.data.user.name); // Armazena o nome no localStorage
  }
  return response.data; // Retorna os dados do login
};

// Função para fazer o registro de usuário
export const register = async (
  name: string,
  email: string,
  password: string,
  role: string,
) => {
  const response = await apiClient.post(
    "/auth/register",
    { name, email, password, role },
    {
      headers: getHeaders(), // Usa o cabeçalho padrão
    },
  );
  return response.data; // Retorna o token JWT e uma mensagem
};

// Função para listar todos os usuários (somente admins)
export const getUsers = async () => {
  const response = await apiClient.get("/users", {
    headers: getHeaders(), // Usa o cabeçalho com o token
  });
  return response.data; // Retorna a lista de usuários
};

// Função para buscar um usuário pelo ID (somente admins)
export const getUserById = async (id: number) => {
  const response = await apiClient.get(`/users/${id}`, {
    headers: getHeaders(), // Usa o cabeçalho com o token
  });
  return response.data; // Retorna os detalhes do usuário
};

// Função para atualizar um usuário (somente admins)
export const updateUser = async (
  id: number,
  name: string,
  email: string,
  password: string,
) => {
  const response = await apiClient.put(
    `/users/${id}`,
    { name, email, password },
    {
      headers: getHeaders(), // Usa o cabeçalho com o token
    },
  );
  return response.data; // Retorna os dados atualizados do usuário
};

// Função para deletar um usuário (somente admins)
export const deleteUser = async (id: number) => {
  const response = await apiClient.delete(`/users/${id}`, {
    headers: getHeaders(), // Usa o cabeçalho com o token
  });
  return response.data; // Retorna o resultado da exclusão
};

// Função para logout
export const logout = () => {
  localStorage.removeItem("token"); // Remove o token do localStorage
};
