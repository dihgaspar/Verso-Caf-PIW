import { Router } from 'express';
import { authenticateJWT } from '../middleware/authMiddleware';
import { authorizeRole } from '../middleware/roleMiddleware';
import { getUsers, getUserById, updateUser, deleteUser } from '../controllers/userController';

const router = Router();

router.get('/', authenticateJWT, authorizeRole(['admin']), getUsers);
router.get('/:id', authenticateJWT, authorizeRole(['admin']), getUserById);
router.put('/:id', authenticateJWT, authorizeRole(['admin']),  updateUser);
router.delete('/:id', authenticateJWT, authorizeRole(['admin']), deleteUser);

export default router;