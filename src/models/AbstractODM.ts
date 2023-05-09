import { model, Model, models, Schema } from 'mongoose';
import { IResident } from '../interfaces/index.interface';

abstract class AbstractODM<T> {
  protected schema: Schema;
  protected modelName: string;
  protected model: Model<T>;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(resident: IResident) {
    return this.model.create(resident);
  }

  public async findAll() {
    return this.model.find();
  }

  public async findById(id: string) {
    return this.model.findById(id);
  }

  public async getResidentialUnit(tower: string, apartament: string) {
    const transformParams = { tower: tower.toString(), apartment: apartament.toString() };
    return this.model.findOne(transformParams);
  }

}

export default AbstractODM;