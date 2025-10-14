import { LocationRepository } from '../repositories/location.repository.js';
import { Location } from '../Types/location.types.js';

export class LocationService {
    private locationRepository: LocationRepository;

    constructor() {
        this.locationRepository = new LocationRepository();
    }

    async getAllLocations(): Promise<Location[]> {
        return await this.locationRepository.getAllLocations();
    }

    async getLocationById(id: number): Promise<Location | null> {
        if (id <= 0) {
            throw new Error('Invalid location ID');
        }
        return await this.locationRepository.getLocationById(id);
    }

    // Add more business logic methods as needed
}