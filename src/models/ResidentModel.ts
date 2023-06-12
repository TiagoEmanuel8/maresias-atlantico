import { Schema } from 'mongoose';
import { IResident } from '../interfaces/index.interface';
import AbstractODM from './AbstractODM';

class ResidentModel extends AbstractODM<IResident> {
  constructor() {
    const schema = new Schema<IResident>({
      name: { type: String, required: true },
      tower: { type: Number, required: false },
      apartment: { type: Number, required: false },
      email: { type: String, required: true },
      rg: { type: Number, required: true },
      cpf: { type: Number, required: true },
      phoneNumber: { type: Number, required: true },
      mobileNumber: { type: Number, required: false },
      observation: { type: String, required: false },
    });
    super(schema, 'Residents');
  }
}

export { ResidentModel };