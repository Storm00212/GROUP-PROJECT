import { Router as ExpressRouter } from 'express';
import { getBookings, getBookingById } from '../controllers/booking.controllers.js';

const router: ExpressRouter = ExpressRouter();

// GET /bookings - Fetch all bookings
router.get('/booking', getBookings);

// GET /bookings/:id - Fetch a single booking by ID
router.get('/booking/:id', getBookingById);

// Add more routes as needed, e.g., POST, PUT, DELETE

export default router;