import { Router } from 'express';
import { register, login } from '../controllers/authController';
// import { authenticateJWT } from '../middleware/authMiddleware';

const router = Router();

// ---> Rotas que não requerem autenticação
router.post('/register', register);
router.post('/login', login);

// // ---> Rotas que requerem autenticação
// router.get('/protected', authenticateJWT, (req, res) =>{
//     res.json({ message:'Essa é uma rota protegida!'});
// });

export default router;