import { Request, Response } from 'express';
import { InsuranceService } from '../services/insurance.service.js';

const insuranceService = new InsuranceService();

// Fetch all insurances
export const getInsurances = async (_: Request, res: Response) => {
    try {
        const insurances = await insuranceService.getAllInsurances();
        res.json(insurances);
    } catch (error) {
        console.log("Error fetching insurances", error);
        res.status(500).send("Server error");
    }
}

// Fetch a single insurance by ID
export const getInsuranceById = async (req: Request, res: Response) => {
    const idParam = req.params.id;
    if (!idParam) {
        return res.status(400).send("Insurance ID is required");
    }
    const insuranceId = parseInt(idParam);
    if (isNaN(insuranceId)) {
        return res.status(400).send("Invalid insurance ID");
    }
    try {
        const insurance = await insuranceService.getInsuranceById(insuranceId);
        if (!insurance) {
            return res.status(404).send("Insurance not found");
        }
        res.json(insurance);
    } catch (error) {
        console.log("Error fetching insurance", error);
        res.status(500).send("Server error");
    }
    return;
};