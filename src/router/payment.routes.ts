import { Router as ExpressRouter } from 'express';
import { getPayments, getPaymentById } from '../controllers/payment.controllers.js';

const router: ExpressRouter = ExpressRouter();

// GET /payments - Fetch all payments
router.get('/payment', getPayments);

// GET /payments/:id - Fetch a single payment by ID
router.get('/payment/:id', getPaymentById);

// Add more routes as needed, e.g., POST, PUT, DELETE

export default router;