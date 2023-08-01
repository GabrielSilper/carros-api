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
      type: car.type,
      year: car.year,
    });
    return { error: false, status: StatusCodes.CREATED, data: newCar };
  }

  async findAll(): Promise<ServiceData<ICar[]>> {
    const cars = await this.carModel.find({});
    return { error: false, status: StatusCodes.OK, data: cars };
  }

  async findById(id: string): Promise<ServiceData<ICar>> {
    const car = await this.carModel.findById(id).exec();
    if (!car) {
      const message = `Car with id ${id} not found!`;
      return { error: true, status: StatusCodes.NOT_FOUND, data: { message } };
    }
    return { error: false, status: StatusCodes.OK, data: car };
  }

  async update(id: string, car: Partial<ICar>): Promise<ServiceData<ICar>> {
    const carUpdate = await this.carModel.updateOne(
      { _id: id },
      {
        $set: {
          name: car.name,
          image: car.image,
          brand: car.brand,
          type: car.type,
          year: car.year,
        },
      }
    );
    if (carUpdate.matchedCount > 0) {
      const carUpdated = (await this.carModel.findById(id).exec()) as ICar;
      return { error: false, status: StatusCodes.OK, data: carUpdated };
    }
    const message = `Car with id ${id} not found!`;
    return { error: true, status: StatusCodes.NOT_FOUND, data: { message } };
  }

  async delete(id: string): Promise<ServiceData<string>> {
    const carRemoved = await this.carModel.findByIdAndDelete(id);
    if (!carRemoved) {
      const message = `Car with id ${id} not found!`;
      return { error: true, status: StatusCodes.NOT_FOUND, data: { message } };
    }
    const data = `Car ${carRemoved.name} with id ${carRemoved.id} was removed!`;
    return { error: false, status: StatusCodes.OK, data };
  }

  async getAllBrands(): Promise<ServiceData<string[]>> {
    const cars = (await this.carModel.find({}).distinct('brand')) as string[];
    return { error: false, status: StatusCodes.OK, data: cars };
  }

  async getAllTypes(): Promise<ServiceData<string[]>> {
    const cars = (await this.carModel.find({}).distinct('type')) as string[];
    return { error: false, status: StatusCodes.OK, data: cars };
  }

  async getAllYears(): Promise<ServiceData<number[]>> {
    const cars = (await this.carModel.find({}).distinct('year')) as number[];
    return { error: false, status: StatusCodes.OK, data: cars };
  }
}

export default CarService;
