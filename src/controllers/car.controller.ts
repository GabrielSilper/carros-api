import { Request, Response } from 'express';
import CarService from '../services/car.service';

class CarController {
  constructor(private carService = new CarService()) {}

  async create(req: Request, res: Response) {
    const { status, data } = await this.carService.create(req.body);
    res.status(status).json(data);
  }

  async findAll(req: Request, res: Response) {
    const { status, data } = await this.carService.findAll();
    res.status(status).json(data);
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;
    const { status, data } = await this.carService.findById(id);
    res.status(status).json(data);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { status, data } = await this.carService.update(id, req.body);
    res.status(status).json(data);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const { status, data } = await this.carService.delete(id);
    res.status(status).json(data);
  }
}

export default CarController;
