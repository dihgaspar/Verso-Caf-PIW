import { Request, Response, NextFunction } from 'express';
import { User } from '../models/User';

interface CustomRequest extends Request {
    user?: User;
}

export const authorizeRole = (roles: string[]) => {
    return (req: CustomRequest, res: Response, next: NextFunction) => {
        if (!req.user) {
            return res.status(401).json({ message: 'Usuário não autenticado!' });
        }

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Acesso negado!' });
        }

        next();
    };
};