import { getPool } from '../db/config.js';
import sql from 'mssql';
import { Booking } from '../Types/booking.types.js';

export class BookingRepository {
    async getAllBookings(): Promise<Booking[]> {
        const pool = await getPool();
        const result = await pool.request().query('SELECT * FROM Booking');
        return result.recordset as Booking[];
    }

    async getBookingById(id: number): Promise<Booking | null> {
        const pool = await getPool();
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query('SELECT * FROM Booking WHERE id = @id');
        return result.recordset[0] as Booking || null;
    }

    // Add more methods as needed, e.g., createBooking, updateBooking, deleteBooking
}