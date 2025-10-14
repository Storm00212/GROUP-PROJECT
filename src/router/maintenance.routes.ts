import { Router as ExpressRouter } from 'express';
import { getMaintenances, getMaintenanceById } from '../controllers/maintenance.controllers.js';

const router: ExpressRouter = ExpressRouter();

// GET /maintenances - Fetch all maintenances
router.get('/maintenance', getMaintenances);

// GET /maintenances/:id - Fetch a single maintenance by ID
router.get('/maintenance/:id', getMaintenanceById);

// Add more routes as needed, e.g., POST, PUT, DELETE

export default router;