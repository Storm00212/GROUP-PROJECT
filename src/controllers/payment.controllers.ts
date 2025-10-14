import { Request, Response } from 'express';
import { PaymentService } from '../services/payment.service.js';

const paymentService = new PaymentService();

// Fetch all payments
export const getPayments = async (_: Request, res: Response) => {
    try {
        const payments = await paymentService.getAllPayments();
        res.json(payments);
    } catch (error) {
        console.log("Error fetching payments", error);
        res.status(500).send("Server error");
    }
}

// Fetch a single payment by ID
export const getPaymentById = async (req: Request, res: Response) => {
    const idParam = req.params.id;
    if (!idParam) {
        return res.status(400).send("Payment ID is required");
    }
    const paymentId = parseInt(idParam);
    if (isNaN(paymentId)) {
        return res.status(400).send("Invalid payment ID");
    }
    try {
        const payment = await paymentService.getPaymentById(paymentId);
        if (!payment) {
            return res.status(404).send("Payment not found");
        }
        res.json(payment);
    } catch (error) {
        console.log("Error fetching payment", error);
        res.status(500).send("Server error");
    }
    return;
};