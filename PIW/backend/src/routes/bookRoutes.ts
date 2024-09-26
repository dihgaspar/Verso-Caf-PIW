import { Router } from 'express';
import { BookController } from '../controllers/bookController';
import { authenticateJWT } from '../middleware/authMiddleware';
import { authorizeRole } from '../middleware/roleMiddleware';
import { upload } from '../middleware/upload';

const router = Router();
const bookController = new BookController();

router.post('/', authenticateJWT, authorizeRole(['admin']), upload.single('image'), bookController.create.bind(bookController));
router.put('/:id', authenticateJWT, authorizeRole(['admin']), upload.single('image'), bookController.update.bind(bookController));
router.delete('/:id', authenticateJWT, authorizeRole(['admin']), bookController.delete.bind(bookController));
router.get('/', bookController.getAll.bind(bookController));

export default router;