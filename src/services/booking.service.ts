import { BookingRepository } from '../repositories/booking.repository.js';
import { Booking } from '../Types/booking.types.js';

export class BookingService {
    private bookingRepository: BookingRepository;

    constructor() {
        this.bookingRepository = new BookingRepository();
    }

    async getAllBookings(): Promise<Booking[]> {
        return await this.bookingRepository.getAllBookings();
    }

    async getBookingById(id: number): Promise<Booking | null> {
        if (id <= 0) {
            throw new Error('Invalid booking ID');
        }
        return await this.bookingRepository.getBookingById(id);
    }

    // Add more business logic methods as needed
}