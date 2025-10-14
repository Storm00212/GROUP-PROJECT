import { getPool } from '../db/config.js';
import { User } from '../Types/user.types.js';

export const createUser = async (user: { first_name: string; last_name: string; email: string; phone_number: string; password: string }) => {
    const pool = await getPool();
    await pool
        .request()
        .input('first_name', user.first_name)
        .input('last_name', user.last_name)
        .input('email', user.email)
        .input('phone_number', user.phone_number)
        .input('password', user.password)  // This is now hashed
        .query('INSERT INTO Users (first_name, last_name, email, phone_number, password) VALUES (@first_name, @last_name, @email, @phone_number, @password)');
    return { message: 'User created successfully' };
}

export const getUserByEmail = async (email: string): Promise<User | null> => {
    const pool = await getPool();
    const result = await pool
        .request()
        .input('email', email)
        .query('SELECT * FROM Users WHERE email = @email');
    return result.recordset[0] || null;
}