import { Router as ExpressRouter } from 'express';
import { getLocations, getLocationById } from '../controllers/location.controllers.js';

const router: ExpressRouter = ExpressRouter();

// GET /locations - Fetch all locations
router.get('/location', getLocations);

// GET /locations/:id - Fetch a single location by ID
router.get('/location/:id', getLocationById);

// Add more routes as needed, e.g., POST, PUT, DELETE

export default router;