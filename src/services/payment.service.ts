import { PaymentRepository } from '../repositories/payment.repository.js';
import { Payment } from '../Types/payment.types.js';

export class PaymentService {
    private paymentRepository: PaymentRepository;

    constructor() {
        this.paymentRepository = new PaymentRepository();
    }

    async getAllPayments(): Promise<Payment[]> {
        return await this.paymentRepository.getAllPayments();
    }

    async getPaymentById(id: number): Promise<Payment | null> {
        if (id <= 0) {
            throw new Error('Invalid payment ID');
        }
        return await this.paymentRepository.getPaymentById(id);
    }

    // Add more business logic methods as needed
}