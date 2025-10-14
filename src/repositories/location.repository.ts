import { getPool } from '../db/config.js';
import sql from 'mssql';
import { Location } from '../Types/location.types.js';

export class LocationRepository {
    async getAllLocations(): Promise<Location[]> {
        const pool = await getPool();
        const result = await pool.request().query('SELECT * FROM Location');
        return result.recordset as Location[];
    }

    async getLocationById(id: number): Promise<Location | null> {
        const pool = await getPool();
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query('SELECT * FROM Location WHERE id = @id');
        return result.recordset[0] as Location || null;
    }

    // Add more methods as needed, e.g., createLocation, updateLocation, deleteLocation
}