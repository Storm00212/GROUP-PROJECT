import { CustomerRepository } from '../repositories/customer.repository.js';
import { Customer } from '../Types/customer.types.js';

export class CustomerService {
    private customerRepository: CustomerRepository;

    constructor() {
        this.customerRepository = new CustomerRepository();
    }

    async getAllCustomers(): Promise<Customer[]> {
        return await this.customerRepository.getAllCustomers();
    }

    async getCustomerById(id: number): Promise<Customer | null> {
        if (id <= 0) {
            throw new Error('Invalid customer ID');
        }
        return await this.customerRepository.getCustomerById(id);
    }

    // Add more business logic methods as needed
}