import { Router } from 'express';
import { authenticateJWT } from '../middleware/authMiddleware';
import { authorizeRole } from '../middleware/roleMiddleware';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/userController';

const router = Router();

router.get('/', authenticateJWT, authorizeRole(['admin']), getUsers);
router.get('/users/:id', getUserById);
// router.post('/users', createUser);
router.put('/users/:id', authenticateJWT, authorizeRole(['user']), updateUser);
router.delete('/:id', authenticateJWT, authorizeRole(['admin']), deleteUser);

export default router;