import { Request, Response } from 'express';
import { CustomerService } from '../services/customer.service.js';


const customerService = new CustomerService();

// Fetch all customers
export const getCustomers = async (_: Request, res: Response) => {
    try {
        const customers = await customerService.getAllCustomers();
        res.json(customers);
    } catch (error) {
        console.log("Error fetching customers", error);
        res.status(500).send("Server error");
    }
}

// Fetch a single customer by ID
export const getCustomerById = async (req: Request, res: Response) => {
    const idParam = req.params.id;
    if (!idParam) {
        return res.status(400).send("Customer ID is required");
    }
    const customerId = parseInt(idParam);
    if (isNaN(customerId)) {
        return res.status(400).send("Invalid customer ID");
    }
    try {
        const customer = await customerService.getCustomerById(customerId);
        if (!customer) {
            return res.status(404).send("Customer not found");
        }
        res.json(customer);
    } catch (error) {
        console.log("Error fetching customer", error);
        res.status(500).send("Server error");
    }
     return;
};