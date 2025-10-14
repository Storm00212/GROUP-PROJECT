import { Router as ExpressRouter } from 'express';
import { getInsurances, getInsuranceById } from '../controllers/insurance.controllers.js';

const router: ExpressRouter = ExpressRouter();

// GET /insurances - Fetch all insurances
router.get('/insurance', getInsurances);

// GET /insurances/:id - Fetch a single insurance by ID
router.get('/insurance/:id', getInsuranceById);

// Add more routes as needed, e.g., POST, PUT, DELETE

export default router;