import { MaintenanceRepository } from '../repositories/maintenance.repository.js';
import { Maintenance } from '../Types/maintenance.types.js';

export class MaintenanceService {
    private maintenanceRepository: MaintenanceRepository;

    constructor() {
        this.maintenanceRepository = new MaintenanceRepository();
    }

    async getAllMaintenances(): Promise<Maintenance[]> {
        return await this.maintenanceRepository.getAllMaintenances();
    }

    async getMaintenanceById(id: number): Promise<Maintenance | null> {
        if (id <= 0) {
            throw new Error('Invalid maintenance ID');
        }
        return await this.maintenanceRepository.getMaintenanceById(id);
    }

    // Add more business logic methods as needed
}