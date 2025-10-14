import { InsuranceRepository } from '../repositories/insurance.repository.js';
import { Insurance } from '../Types/insurance.types.js';

export class InsuranceService {
    private insuranceRepository: InsuranceRepository;

    constructor() {
        this.insuranceRepository = new InsuranceRepository();
    }

    async getAllInsurances(): Promise<Insurance[]> {
        return await this.insuranceRepository.getAllInsurances();
    }

    async getInsuranceById(id: number): Promise<Insurance | null> {
        if (id <= 0) {
            throw new Error('Invalid insurance ID');
        }
        return await this.insuranceRepository.getInsuranceById(id);
    }

    // Add more business logic methods as needed
}