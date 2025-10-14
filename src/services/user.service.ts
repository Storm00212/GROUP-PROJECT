import { User } from '../Types/user.types.js';
import { createUser as createUserRepo, getUserByEmail as getUserByEmailRepo } from '../repositories/user.repository.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class UserService {
    async createUser(userData: { first_name: string; last_name: string; email: string; phone_number: string; password: string }) {
        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const user = { ...userData, password: hashedPassword };
        return await createUserRepo(user);
    }

    async getUserByEmail(email: string): Promise<User | null> {
        return await getUserByEmailRepo(email);
    }

    async loginUser(email: string, password: string) {
        // 1. Find user by email
        const user = await this.getUserByEmail(email);
        if (!user) {
            throw new Error('User not found');
        }

        // 2. Compare provided password with hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error('Invalid credentials');
        }

        // 3. Create JWT payload
        const payload = {
            sub: user.id,        // Subject (user ID)
            first_name: user.first_name,
            last_name: user.last_name,
            exp: Math.floor(Date.now() / 1000) + (60 * 60), // 1 hour expiration
        }

        // 4. Generate JWT token
        const secret = process.env.JWT_SECRET as string;
        if (!secret) throw new Error('JWT secret not defined');
        const token = jwt.sign(payload, secret);

        // 5. Return token + user details (without password)
        return {
            message: 'Login successful',
            token,
            user: {
                userid: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                phone_number: user.phone_number
            }
        }
    }
}
