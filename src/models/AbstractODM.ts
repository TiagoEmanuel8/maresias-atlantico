import { model, Model, models, Schema } from 'mongoose';
// import { IResident } from '../interfaces/index.interface';

abstract class AbstractODM<T> {
  protected schema: Schema;
  protected modelName: string;
  protected model: Model<T>;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async findAll() {
    return this.model.find();
  }

}

export default AbstractODM;