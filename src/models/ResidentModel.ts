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
      dependentName1: { type: String, required: false },
      dependentName2: { type: String, required: false },
      dependentName3: { type: String, required: false },
      dependentName4: { type: String, required: false },
      observation: { type: String, required: false },
    });
    // usar uma nova coleção para armazenar os outros membros da família
    // usar uma nova coleção para armazenar visitantes
    // usar uma nova coleção para armazenar veiculos de visitantes
    super(schema, 'Residents');
  }
}

export { ResidentModel };