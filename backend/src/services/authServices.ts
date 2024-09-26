import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret_key';

export const generateToken = (userId: number): string => {
    return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: '1h' });
};