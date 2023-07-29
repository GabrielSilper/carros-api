import { NewEntity } from '../interfaces';
import ICRUDService from '../interfaces/ICRUDService';
import ICar from '../interfaces/ICar';
import ServiceData from '../interfaces/ServiceData';

class CarService implements ICRUDService<ICar> {
  add(car: NewEntity<ICar>): Promise<ServiceData<ICar>> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<ServiceData<ICar[]>> {
    throw new Error('Method not implemented.');
  }
}
