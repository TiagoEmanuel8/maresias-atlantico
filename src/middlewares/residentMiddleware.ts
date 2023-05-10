import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import { ResidentModel } from '../models/ResidentModel';
import { NotFound, UnprocessableEntity } from '../errors/index.error';


class ResidentValidate {
  public async validateResident(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      throw new UnprocessableEntity('Invalid mongo id')
    }

    const residentModel = new ResidentModel();
    const oneResident = await residentModel.findById(id);

    if (!oneResident) {
      throw new NotFound('Resident not found')
    }

    next();
  }
}

export { ResidentValidate };