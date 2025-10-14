import { Router as ExpressRouter } from 'express';
import { getCustomers, getCustomerById } from '../controllers/customer.controllers.js';

const router: ExpressRouter = ExpressRouter();

// GET /customers - Fetch all customers
router.get('/customers', getCustomers);

// GET /customers/:id - Fetch a single customer by ID
router.get('/customers/:id', getCustomerById);

// Add more routes as needed, e.g., POST, PUT, DELETE

export default router;