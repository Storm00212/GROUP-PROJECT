import { getPool } from '../db/config.js';
import sql from 'mssql';
import { Insurance } from '../Types/insurance.types.js';

export class InsuranceRepository {
    async getAllInsurances(): Promise<Insurance[]> {
        const pool = await getPool();
        const result = await pool.request().query('SELECT * FROM Insurance');
        return result.recordset as Insurance[];
    }

    async getInsuranceById(id: number): Promise<Insurance | null> {
        const pool = await getPool();
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query('SELECT * FROM Insurance WHERE id = @id');
        return result.recordset[0] as Insurance || null;
    }

    // Add more methods as needed, e.g., createInsurance, updateInsurance, deleteInsurance
}