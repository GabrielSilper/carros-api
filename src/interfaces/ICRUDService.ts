import { NewEntity } from '.';
import ICar from './ICar';
import ServiceData from './ServiceData';

export default interface ICRUDService<T> {
  // para adicionar um novo carro no banco.
  create(car: NewEntity<T>): Promise<ServiceData<T>>;
  findAll(): Promise<ServiceData<T[]>>;
  findById?(id: string): Promise<ServiceData<T>>;
  update?(id: string, car: Partial<T>): Promise<ServiceData<T>>;
  delete?(id: string): Promise<ServiceData<string>>;
}
