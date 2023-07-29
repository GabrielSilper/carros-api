import { NewEntity } from '.';
import ICar from './ICar';
import ServiceData from './ServiceData';

export default interface ICRUDService<T> {
  // para adicionar um novo carro no banco.
  add(car: NewEntity<T>): Promise<ServiceData<T>>;
  findAll(): Promise<ServiceData<T[]>>;
  findById?(id: number): Promise<ServiceData<T>>;
  update?(id: number): Promise<ServiceData<T>>;
  delete?(): Promise<void>;
}
