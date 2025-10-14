export interface Booking {
    id: number;
    customerId: number;
    carId: number;
    startDate: Date;
    endDate: Date;
    status: string;
    // Add other fields as needed based on your DB schema
}