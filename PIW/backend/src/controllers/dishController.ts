import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Dish } from '../models/Dish';

export class DishController {
    async create(req: Request, res: Response) {
        const { nome, preco, descricao, categoria } = req.body;
        const dish = new Dish();
        dish.nome = nome;
        dish.preco = preco;
        dish.descricao = descricao;
        dish.categoria = categoria;

        if (req.file) {
            dish.imagem = `uploads/${req.file.filename}`
        }
        

        const dishRepository = AppDataSource.getRepository(Dish);
        await dishRepository.save(dish);
        res.status(201).json(dish);
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const dishRepository = AppDataSource.getRepository(Dish);
        const dish = await dishRepository.findOneBy({ id: Number(id) });

        if (!dish) return res.status(404).json({ message: 'Prato não encontrado!' });

        const { nome, preco, descricao, categoria } = req.body;
        Object.assign(dish, { nome, preco, descricao, categoria });
        await dishRepository.save(dish);
        res.json(dish);
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const dishRepository = AppDataSource.getRepository(Dish);
        const result = await dishRepository.delete(id);

        if (result.affected === 0) return res.status(404).json({ message: 'Prato não encontrado!' });
        res.status(204).send();
    }

    async getAll(req: Request, res: Response) {
        const dishRepository = AppDataSource.getRepository(Dish);
        const dishes = await dishRepository.find();
        res.json(dishes);
    }
}
