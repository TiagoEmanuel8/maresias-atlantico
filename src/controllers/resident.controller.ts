import { Request, Response, NextFunction } from 'express';
import { IServiceResident, IResident } from '../interfaces/index.interface';
import { ResidentService } from '../services/index.service';
import { StatusCodes } from 'http-status-codes';

class ResidentController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private _residentService: IServiceResident;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this._residentService = new ResidentService();
  }

  async createResident() {
    const ActualResident: IResident = {
      ...this.req.body,
      status: this.req.body.status || false,
    };

    const newResident = await this._residentService.createResident(ActualResident);
    return this.res.status(StatusCodes.CREATED).json(newResident);
  }

  async getAllResidents() {
    const residents = await this._residentService.getResidents();
    return this.res.status(StatusCodes.OK).json(residents);
  }

  async getResidentById() {
    const { id } = this.req.params;
    const resident = await this._residentService.getResidentById(id);
    return this.res.status(StatusCodes.OK).json(resident);
  }

  async getResidentByName() {
    const { name } = this.req.body;
    const resident = await this._residentService.getResidentByName(name);
    return this.res.status(StatusCodes.OK).json(resident);
  }
}

export { ResidentController };