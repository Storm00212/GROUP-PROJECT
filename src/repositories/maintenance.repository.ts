import { getPool } from '../db/config.js';
import sql from 'mssql';
import { Maintenance } from '../Types/maintenance.types.js';

export class MaintenanceRepository {
    async getAllMaintenances(): Promise<Maintenance[]> {
        const pool = await getPool();
        const result = await pool.request().query('SELECT * FROM Maintenance');
        return result.recordset as Maintenance[];
    }

    async getMaintenanceById(id: number): Promise<Maintenance | null> {
        const pool = await getPool();
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query('SELECT * FROM Maintenance WHERE id = @id');
        return result.recordset[0] as Maintenance || null;
    }

    // Add more methods as needed, e.g., createMaintenance, updateMaintenance, deleteMaintenance
}