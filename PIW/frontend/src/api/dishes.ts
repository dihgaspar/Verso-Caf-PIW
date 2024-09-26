import { apiClient, getHeaders } from "./api";

// Função para listar todos os pratos
export const getDishes = async () => {
  const response = await apiClient.get("/dishes", {
    headers: getHeaders(),
  });
  return response.data;
};

// Função para buscar um prato pelo ID
export const getDishById = async (id: number) => {
  const response = await apiClient.get(`/dishes/${id}`, {
    headers: getHeaders(),
  });
  return response.data;
};

// Função para adicionar um novo prato
export const createDish = async (
  nome: string,
  preco: number,
  descricao: string,
  categoria: string,
  imagem?: File,
) => {
  const formData = new FormData();
  formData.append("nome", nome);
  formData.append("preco", preco.toString());
  formData.append("descricao", descricao);
  formData.append("categoria", categoria);

  if (imagem) {
    formData.append("image", imagem);
  }

  const response = await apiClient.post("/dishes", formData, {
    headers: {
      ...getHeaders(),
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const updateDish = async (id: number, formData: FormData) => {
  const response = await apiClient.put(`/dishes/${id}`, formData, {
    headers: {
      ...getHeaders(),
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

// Função para deletar um prato
export const deleteDish = async (id: number) => {
  const response = await apiClient.delete(`/dishes/${id}`, {
    headers: getHeaders(),
  });
  return response.data;
};
