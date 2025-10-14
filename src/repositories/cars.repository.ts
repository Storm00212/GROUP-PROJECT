import { getPool } from '../db/config.js';
import sql from 'mssql';
import type { Car } from '../Types/car.types'; // ✅ Correct way — use "import type"

export class CarsRepository {
  async getAllCars(): Promise<Car[]> {
    const pool = await getPool();
    const result = await pool.request().query('SELECT * FROM Car');
    return result.recordset as Car[];
  }

  async getCarById(id: number): Promise<Car | null> {
    const pool = await getPool();
    const result = await pool.request()
      .input('id', sql.Int, id)
      .query('SELECT * FROM Car WHERE id = @id');
    return result.recordset[0] as Car || null;
  }
}
