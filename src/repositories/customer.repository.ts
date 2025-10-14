import { getPool } from '../db/config.js';
import sql from 'mssql';
import { Customer } from '../Types/customer.types.js';

export class CustomerRepository {
    async getAllCustomers(): Promise<Customer[]> {
        const pool = await getPool();
        const result = await pool.request().query('SELECT * FROM Customer');
        return result.recordset as Customer[];
    }

    async getCustomerById(id: number): Promise<Customer | null> {
        const pool = await getPool();
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query('SELECT * FROM Customers WHERE id = @id');
        return result.recordset[0] as Customer || null;
    }

    // Add more methods as needed, e.g., createCustomer, updateCustomer, deleteCustomer
}