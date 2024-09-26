import { Router } from 'express';
import { DishController } from '../controllers/dishController';
import { authenticateJWT } from '../middleware/authMiddleware';
import { authorizeRole } from '../middleware/roleMiddleware';
import { upload } from '../middleware/upload';

const router = Router();
const dishController = new DishController();

router.post('/', authenticateJWT, authorizeRole(['admin']), upload.single('image'), dishController.create.bind(dishController));
router.put('/:id', authenticateJWT, authorizeRole(['admin']), upload.single('image'), dishController.update.bind(dishController));
router.delete('/:id', authenticateJWT, authorizeRole(['admin']), dishController.delete.bind(dishController));
router.get('/', dishController.getAll.bind(dishController));

export default router;