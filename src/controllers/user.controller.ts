import { Request, Response } from 'express';
import { UserService } from '../services/user.service.js';

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    createUser = async (req: Request, res: Response) => {
        try {
            const { first_name, last_name, email, phone_number, password } = req.body;

            const result = await this.userService.createUser({
                first_name,
                last_name,
                email,
                phone_number,
                password
            });

            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ message: 'Error creating user', error });
        }
    };

    loginUser = async (req: Request, res: Response) => {
        console.log('Login attempt for email:', req.body.email);
        try {
            const { email, password } = req.body;
            const result = await this.userService.loginUser(email, password);
            console.log('Login successful for email:', email);
            return res.json(result);
        } catch (error) {
            console.log('Login failed for email:', req.body.email, 'Error:', (error as Error).message);
            return res.status(401).json({ message: (error as Error).message });
        }
    };

    getAllUsers = async (_: Request, res: Response) => {
        try {
            // TODO: Implement getAllUsers in UserService
            res.json([]);
        } catch (error) {
            res.status(500).json({ message: 'Failed to fetch users', error });
        }
    }

    getUserById = async (req: Request, res: Response) => {
        try {
            const userId = req.params.id;
            // TODO: Implement getUserById in UserService
            const user = null; // await this.userService.getUserById(parseInt(userId));
            // Example usage to avoid unused variable error:
            void userId;
            if (!user) {
                res.status(404).json({ message: 'User not found' });
            } else {
                res.json(user);
            }
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }

    updateUser = async (_: Request, res: Response) => {
        try {
            // TODO: Implement updateUser
            res.status(501).json({ message: 'Not implemented' });
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }

    deleteUser = async (_: Request, res: Response) => {
        try {
            // TODO: Implement deleteUser
            res.status(501).json({ message: 'Not implemented' });
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }
}