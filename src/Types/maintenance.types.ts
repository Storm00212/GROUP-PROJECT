export interface Maintenance {
    id: number;
    carId: number;
    description: string;
    date: Date;
    cost: number;
    // Add other fields as needed based on your DB schema
}