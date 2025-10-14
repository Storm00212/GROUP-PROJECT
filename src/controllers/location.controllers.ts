import { Request, Response } from 'express';
import { LocationService } from '../services/location.service.js';

const locationService = new LocationService();

// Fetch all locations
export const getLocations = async (_: Request, res: Response) => {
    try {
        const locations = await locationService.getAllLocations();
        res.json(locations);
    } catch (error) {
        console.log("Error fetching locations", error);
        res.status(500).send("Server error");
    }
}

// Fetch a single location by ID
export const getLocationById = async (req: Request, res: Response) => {
    const idParam = req.params.id;
    if (!idParam) {
        return res.status(400).send("Location ID is required");
    }
    const locationId = parseInt(idParam);
    if (isNaN(locationId)) {
        return res.status(400).send("Invalid location ID");
    }
    try {
        const location = await locationService.getLocationById(locationId);
        if (!location) {
            return res.status(404).send("Location not found");
        }
        res.json(location);
    } catch (error) {
        console.log("Error fetching location", error);
        res.status(500).send("Server error");
    }
    return;
};