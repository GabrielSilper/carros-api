import { NewEntity } from '../interfaces';
import ICRUDService from '../interfaces/ICRUDService';
import ICar from '../interfaces/ICar';
import ServiceData from '../interfaces/ServiceData';
import CarModel from '../models/car.model';
import { StatusCodes } from 'http-status-codes';

class CarService implements ICRUDService<ICar> {
  constructor(private carModel = CarModel) {}

  async create(car: NewEntity<ICar>): Promise<ServiceData<ICar>> {
    const newCar = await this.carModel.create({
      name: car.name,
      brand: car.brand,
      image: car.image,
    });
    return { error: false, status: StatusCodes.CREATED, data: newCar };
  }
  async findAll(): Promise<ServiceData<ICar[]>> {
    const cars = await this.carModel.find({});
    return { error: false, status: StatusCodes.OK, data: cars };
  }
}

export default CarService;
