import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { User } from '../models/User';
import bcrypt from 'bcryptjs';

const userRepository = AppDataSource.getRepository(User);

// ---> Listar todos os Usuários
export const getUsers = async (req: Request, res: Response) => {
    const users = await userRepository.find();
    res.json(users);
};

// ---> Encontrar um Usuário
export const getUserById = async (req: Request, res: Response) => {
    const userId = parseInt(req.params.id);
    // console.log('User ID:', userId);
    const user = await userRepository.findOneBy({ id: userId });
    if (!user) {
        return res.status(404).send('Usuário não encontrado!');
    }
    res.json(user);
};

// ---> Criar um Usuário
export const createUser = async (req: Request, res: Response) => {
    const { name, email } = req.body

    
    const user = userRepository.create(req.body);
    const result = await userRepository.save(user);
    res.send(result);
};

// ---> Atualizar um Usuário
export const updateUser = async (req: Request, res: Response) => {
    const user = await userRepository.findOneBy({ id: parseInt(req.params.id) });
    if (!user) {
        return res.status(404).send('Usuário não encontrado!');
    }

    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    user.name = name;
    user.email = email;
    user.password = hashedPassword;

    await userRepository.save(user);
    res.status(200).send('Usuário atualizado!');
};

// ---> Deletar um Usuário
export const deleteUser = async (req: Request, res: Response) => {
    const result = await userRepository.delete({ id: parseInt(req.params.id) });
    res.send(result);
};