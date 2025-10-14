export interface Payment {
    id: number;
    bookingId: number;
    amount: number;
    paymentDate: Date;
    paymentMethod: string;
    status: string;
    // Add other fields as needed based on your DB schema
}