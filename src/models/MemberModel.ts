import { Schema } from 'mongoose';
import { IMemberFamily } from '../interfaces/index.interface';
import AbstractODM from './AbstractODM';

class MemberModel extends AbstractODM<IMemberFamily> {
  constructor() {
    const schema = new Schema<IMemberFamily>({
      dependentName1: { type: String, required: false },
      dependentName2: { type: String, required: false },
      dependentName3: { type: String, required: false },
      dependentName4: { type: String, required: false },
    });
    super(schema, 'Member');
  }
}

export { MemberModel };