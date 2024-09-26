import { apiClient, getHeaders } from "./api";

// Função para listar todos os livros
export const getBooks = async () => {
  const response = await apiClient.get("/books", {
    headers: getHeaders(),
  });
  return response.data;
};

// Função para buscar um livro pelo ID
export const getBookById = async (id: number) => {
  const response = await apiClient.get(`/books/${id}`, {
    headers: getHeaders(),
  });
  return response.data;
};

// Função para adicionar um novo livro
export const createBook = async (
  titulo: string,
  autor: string,
  genero: string,
  ano: number,
  disponivel: boolean,
  imagem?: File, // Arquivo opcional para a imagem
) => {
  const formData = new FormData();
  formData.append("titulo", titulo);
  formData.append("autor", autor);
  formData.append("genero", genero);
  formData.append("ano", ano.toString());
  formData.append("disponivel", disponivel ? "true" : "false");

  if (imagem) {
    formData.append("image", imagem);
  }

  const response = await apiClient.post("/books", formData, {
    headers: {
      ...getHeaders(),
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

// Função para atualizar um livro
export const updateBook = async (
  id: number,
  titulo: string,
  autor: string,
  genero: string,
  ano: number,
  disponivel: boolean,
  imagem?: File, // Arquivo opcional para a imagem
) => {
  const formData = new FormData();
  formData.append("titulo", titulo);
  formData.append("autor", autor);
  formData.append("genero", genero);
  formData.append("ano", ano.toString());
  formData.append("disponivel", disponivel ? "true" : "false");

  if (imagem) {
    formData.append("image", imagem);
  }

  const response = await apiClient.put(`/books/${id}`, formData, {
    headers: {
      ...getHeaders(),
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

// Função para deletar um livro
export const deleteBook = async (id: number) => {
  const response = await apiClient.delete(`/books/${id}`, {
    headers: getHeaders(),
  });
  return response.data;
};

// Função para deletar um livro por ID
export const deleteBookById = async (id: number) => {
  try {
    const response = await apiClient.delete(`/books/${id}`, {
      headers: getHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar o livro:", error);
    throw error;
  }
};

// Função para atualizar um livro por ID
export const updateBookById = async (
  id: number,
  titulo: string,
  autor: string,
  genero: string,
  ano: number,
  disponivel: boolean,
  imagem?: File, // Arquivo opcional para a imagem
) => {
  try {
    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("autor", autor);
    formData.append("genero", genero);
    formData.append("ano", ano.toString());
    formData.append("disponivel", disponivel ? "true" : "false");

    if (imagem) {
      formData.append("image", imagem);
    }

    const response = await apiClient.put(`/books/${id}`, formData, {
      headers: {
        ...getHeaders(),
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar o livro:", error);
    throw error;
  }
};
