import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Order } from "../models/Order";

export class OrderController {
  async create(req: Request, res: Response) {
    const { cliente, livros, pedidos, status } = req.body;

    const order = new Order();
    order.cliente = cliente;
    order.livros = livros;
    order.pedidos = pedidos;
    order.status = status || "pendente";

    try {
      const orderRepository = AppDataSource.getRepository(Order);
      await orderRepository.save(order);
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json({ message: "Erro ao criar pedido", error });
    }
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { livros, pedidos, status } = req.body;

    try {
      const orderRepository = AppDataSource.getRepository(Order);
      const order = await orderRepository.findOneBy({ id: Number(id) });

      if (!order) {
        return res.status(404).json({ message: "Pedido não encontrado" });
      }

      if (livros) order.livros = livros;
      if (pedidos) order.pedidos = pedidos;
      if (status) order.status = status;

      await orderRepository.save(order);
      res.json(order);
    } catch (error) {
      res.status(500).json({ message: "Erro ao atualizar pedido", error });
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const orderRepository = AppDataSource.getRepository(Order);
      const result = await orderRepository.delete({ id: Number(id) });

      if (result.affected === 0) {
        return res.status(404).json({ message: "Pedido não encontrado" });
      }

      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Erro ao excluir pedido", error });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const orderRepository = AppDataSource.getRepository(Order);
      const orders = await orderRepository.find();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ message: "Erro ao listar pedidos", error });
    }
  }
}
