import { getPool } from '../db/config.js';
import sql from 'mssql';
import { Payment } from '../Types/payment.types.js';

export class PaymentRepository {
    async getAllPayments(): Promise<Payment[]> {
        const pool = await getPool();
        const result = await pool.request().query('SELECT * FROM Payment');
        return result.recordset as Payment[];
    }

    async getPaymentById(id: number): Promise<Payment | null> {
        const pool = await getPool();
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query('SELECT * FROM Payment WHERE id = @id');
        return result.recordset[0] as Payment || null;
    }

    // Add more methods as needed, e.g., createPayment, updatePayment, deletePayment
}