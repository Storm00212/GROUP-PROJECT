export interface Insurance {
    id: number;
    carId: number;
    provider: string;
    policyNumber: string;
    expiryDate: Date;
    // Add other fields as needed based on your DB schema
}