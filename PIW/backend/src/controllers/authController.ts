import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { AppDataSource } from '../data-source';
import { User } from '../models/User';
import { generateToken } from '../utils/jwtUtils';
import { JWT_SECRET } from '../config';
import jwt from 'jsonwebtoken';

const userRepository = AppDataSource.getRepository(User);

export const register = async (req: Request, res: Response) => {
    const { name, email, password, role } = req.body;

    try {
        // ---> Checar se um usuário já existe
        const existingUser = await userRepository.findOneBy({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Usuário já existe!' });
        }

        // ---> Hash da senha
        const hashedPassword = await bcrypt.hash(password, 10);

        // ---> Criar um novo Usuário
        const user = new User();
        user.name = name;
        user.email = email;
        user.password = hashedPassword;
        user.role = role;

        const result = await userRepository.save(user);

        // // ---> Define 'user' como role padrão
        // user.role = role || 'user';

        // ---> Gerar token JWT
        const token = generateToken(result.id);

        return res.status(201).json({ message: 'Usuário registrado com sucesso:', token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro no server!' });
    }
};

export const login = async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;
  
    try {
        const user = await userRepository.findOneBy({ email });
    
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }

        // console.log('Senha fornecida:', password);
        // console.log('Hash armazenado:', user.password);

        const isMatch = await bcrypt.compare(password, user.password);
    
        if (!isMatch) {
            return res.status(400).json({ message: 'Senha incorreta.' });
        }
    
        const token = jwt.sign(
            { id: user.id, role: user.role },
            JWT_SECRET,
            { expiresIn: '1h' }
        );
    
        return res.json({ token });
        } catch (error) {
        console.error('Erro ao fazer login:', error);
        return res.status(500).json({ message: 'Erro interno do servidor.' });
        }
  };