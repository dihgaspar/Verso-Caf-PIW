import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Book } from '../models/Book';

export class BookController {
    async create(req: Request, res: Response) {
        const { titulo, autor, genero, ano } = req.body;
        const book = new Book();
        book.titulo = titulo;
        book.autor = autor;
        book.genero = genero;
        book.ano = ano;

        if (req.file) {
            book.imagem = `uploads/${req.file.filename}`
        }

        const bookRepository = AppDataSource.getRepository(Book);
        await bookRepository.save(book);
        res.status(201).json(book);
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const bookRepository = AppDataSource.getRepository(Book);
        const book = await bookRepository.findOneBy({ id: Number(id) });

        if (!book) return res.status(404).json({ message: 'Livro não encontrado!' });

        const { titulo, autor, genero, ano } = req.body;
        Object.assign(book, { titulo, autor, genero, ano });
        await bookRepository.save(book);
        res.json(book);
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const bookRepository = AppDataSource.getRepository(Book);
        const result = await bookRepository.delete(id);

        if (result.affected === 0) return res.status(404).json({ message: 'Livro não encontrado!' });
        res.status(204).send();
    }

    async getAll(req: Request, res: Response) {
        const bookRepository = AppDataSource.getRepository(Book);
        const books = await bookRepository.find();
        res.json(books);
    }
}