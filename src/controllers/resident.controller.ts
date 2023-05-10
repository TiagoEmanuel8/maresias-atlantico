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

  async getResidentialUnit() {
    const { tower, apartment } = this.req.body;
    const resident = await this._residentService.getResidentialUnit(tower, apartment);
    return this.res.status(StatusCodes.OK).json(resident);
  }

  async updateResident() {
    const { id } = this.req.params;
    const ActualResident: IResident = {
      ...this.req.body,
      status: this.req.body.status || false,
    };
    const updatedResident = await this._residentService.updatedResident(id, ActualResident);
    return this.res.status(StatusCodes.OK).json(updatedResident);
  }

  async deleteResident() {
    const { id } = this.req.params;
    const resident = await this._residentService.deleteResident(id);
    return this.res.status(StatusCodes.NO_CONTENT).json(resident);
  }
}

export { ResidentController };