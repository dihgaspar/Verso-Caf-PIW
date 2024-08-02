import { Request, Response, NextFunction } from 'express';
import { User } from '../models/User';

interface CustomRequest extends Request {
    user?: User;
}

export const authorizeRole = (roles: string[]) => {
    return (req: CustomRequest, res: Response, next: NextFunction) => {
        if (!req.user || !roles.includes(req.user.role)) {
            return res.sendStatus(403);
        }
        next();
    };
};