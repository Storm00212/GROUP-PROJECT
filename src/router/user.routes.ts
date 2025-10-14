import { Router as ExpressRouter } from 'express';
import { UserController } from '../controllers/user.controller.js';
import { authenticateToken } from '../middleware/auth.middleware.js';

const router: ExpressRouter = ExpressRouter();
const userController = new UserController();

// Public routes
router.post('/register', userController.createUser);  // Registration
router.post('/login', userController.loginUser);      // Login

// Protected routes - require authentication
router.use(authenticateToken);  // Apply middleware to routes below
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;