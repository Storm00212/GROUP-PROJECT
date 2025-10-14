import { Request, Response } from 'express';
import { BookingService } from '../services/booking.service.js';


const bookingService = new BookingService();

// Fetch all bookings
export const getBookings = async (_: Request, res: Response) => {
    try {
        const bookings = await bookingService.getAllBookings();
        res.json(bookings);
    } catch (error) {
        console.log("Error fetching bookings", error);
        res.status(500).send("Server error");
    }
}

// Fetch a single booking by ID
export const getBookingById = async (req: Request, res: Response) => {
    const idParam = req.params.id;
    if (!idParam) {
        return res.status(400).send("Booking ID is required");
    }
    const bookingId = parseInt(idParam);
    if (isNaN(bookingId)) {
        return res.status(400).send("Invalid booking ID");
    }
    try {
        const booking = await bookingService.getBookingById(bookingId);
        if (!booking) {
            return res.status(404).send("Booking not found");
        }
        res.json(booking);
    } catch (error) {
        console.log("Error fetching booking", error);
        res.status(500).send("Server error");
    }
     return;
};