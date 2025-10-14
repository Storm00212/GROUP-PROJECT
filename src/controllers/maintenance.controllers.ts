import { Request, Response } from 'express';
import { MaintenanceService } from '../services/maintenance.service.js';

const maintenanceService = new MaintenanceService();

// Fetch all maintenances
export const getMaintenances = async (_: Request, res: Response) => {
    try {
        const maintenances = await maintenanceService.getAllMaintenances();
        res.json(maintenances);
    } catch (error) {
        console.log("Error fetching maintenances", error);
        res.status(500).send("Server error");
    }
}

// Fetch a single maintenance by ID
export const getMaintenanceById = async (req: Request, res: Response) => {
    const idParam = req.params.id;
    if (!idParam) {
        return res.status(400).send("Maintenance ID is required");
    }
    const maintenanceId = parseInt(idParam);
    if (isNaN(maintenanceId)) {
        return res.status(400).send("Invalid maintenance ID");
    }
    try {
        const maintenance = await maintenanceService.getMaintenanceById(maintenanceId);
        if (!maintenance) {
            return res.status(404).send("Maintenance not found");
        }
        res.json(maintenance);
    } catch (error) {
        console.log("Error fetching maintenance", error);
        res.status(500).send("Server error");
    }
    return;
};