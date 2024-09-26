import { Router } from 'express';
import { OrderController } from '../controllers/orderController';
import { authenticateJWT } from '../middleware/authMiddleware';
// import { authorizeRole } from '../middleware/roleMiddleware';

const router = Router();
const orderController = new OrderController();

router.post('/', authenticateJWT, orderController.create.bind(orderController));
router.put('/:id', authenticateJWT, orderController.update.bind(orderController));
router.delete('/:id', authenticateJWT, orderController.delete.bind(orderController));
router.get('/', authenticateJWT, orderController.getAll.bind(orderController));

export default router;