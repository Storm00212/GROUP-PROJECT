import { Request, Response } from 'express';
import { CarsService } from '../services/cars.service.js';
import { Car } from '../Types/car.types.js';

const carsService = new CarsService();

// Fetch all cars
export const getCars = async ( _ : Request, res: Response) => {
    try {
        const cars: Car[] = await carsService.getAllCars();
        res.json(cars);
    } catch (error) {
        console.log("Error fetching cars", error);
        res.status(500).send("Server error");
    }
}

// Fetch a single car by ID
export const getCarById = async (req: Request, res: Response) => {
    const idParam = req.params.id;
    if (!idParam) {
        return res.status(400).send("Car ID is required");
    }
    const carId = parseInt(idParam);
    if (isNaN(carId)) {
        return res.status(400).send("Invalid car ID");
    }
    try {
        const car = await carsService.getCarById(carId);
        if (!car) {
            return res.status(404).send("Car not found");
        }
        res.json(car);
    } catch (error) {
        console.log("Error fetching car", error);
        res.status(500).send("Server error");
    }

    return;
};