import { Router as ExpressRouter } from 'express';
import { getCars, getCarById } from '../controllers/cars.controllers.js';

const router: ExpressRouter = ExpressRouter();

// GET /cars - Fetch all cars
router.get('/Car', getCars);

// GET /cars/:id - Fetch a single car by ID
router.get('/Car/:id', getCarById);

// Add more routes as needed, e.g., POST, PUT, DELETE

export default router;