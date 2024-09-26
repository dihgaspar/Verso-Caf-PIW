import { apiClient, getHeaders } from "./api";

// Função para listar todos os pedidos
export const getOrders = async () => {
  const response = await apiClient.get("/orders", {
    headers: getHeaders(),
  });
  return response.data;
};

// Função para buscar um pedido pelo ID
export const getOrderById = async (id: number) => {
  const response = await apiClient.get(`/orders/${id}`, {
    headers: getHeaders(),
  });
  return response.data;
};

// Função para criar um novo pedido
export const createOrder = async (
  cliente: string,
  dishIds: number[],
  bookIds: number[],
  data: Date = new Date(),
) => {
  const response = await apiClient.post(
    "/orders",
    {
      cliente,
      dishIds,
      bookIds,
      data,
    },
    {
      headers: getHeaders(),
    },
  );
  return response.data;
};

// Função para atualizar um pedido
export const updateOrder = async (
  id: number,
  dishIds: number[],
  bookIds: number[],
  status: string,
) => {
  const response = await apiClient.put(
    `/orders/${id}`,
    {
      dishIds,
      bookIds,
      status,
    },
    {
      headers: getHeaders(),
    },
  );
  return response.data;
};

// Função para deletar um pedido
export const deleteOrder = async (id: number) => {
  const response = await apiClient.delete(`/orders/${id}`, {
    headers: getHeaders(),
  });
  return response.data;
};
