import { IResident } from '../interfaces/IResidents.interface';
import { Apartament } from './Apartment';

class Resident extends Apartament {
  constructor(resident: IResident) {
    super(resident);
  }
}

export { Resident }