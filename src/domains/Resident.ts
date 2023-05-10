import { IResident } from '../interfaces/IResidents.interface';
import { Apartment } from './Apartment';

class Resident extends Apartment {
  constructor(resident: IResident) {
    super(resident);
  }
}

export { Resident }