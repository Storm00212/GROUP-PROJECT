import { CarsRepository } from '../repositories/cars.repository.js';
import { Car } from '../Types/car.types.js';

export class CarsService {
    private carsRepository: CarsRepository;

    constructor() {
        this.carsRepository = new CarsRepository();
    }

    async getAllCars(): Promise<Car[]> {
        return await this.carsRepository.getAllCars();
    }

    async getCarById(id: number): Promise<Car | null> {
        if (id <= 0) {
            throw new Error('Invalid car ID');
        }
        return await this.carsRepository.getCarById(id);
    }

    // Add more business logic methods as needed
}