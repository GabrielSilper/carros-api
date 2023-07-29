import { NewEntity } from '.';
import ICar from './ICar';
import ServiceData from './ServiceData';

export default interface ICRUDService {
  // para adicionar um novo carro no banco.
  add?(car: NewEntity<ICar>): Promise<ServiceData<ICar>>;
  findAll?(): Promise<ServiceData<ICar[]>>;
  findById?(id: number): Promise<ServiceData<ICar>>;
  update?(id: number): Promise<ServiceData<ICar>>;
  delete?(): Promise<void>;
}
