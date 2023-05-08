import { Request, Response, NextFunction } from 'express';
import { IServiceResident } from '../interfaces/index.interface';
import { ResidentService } from '../services/index.service';
import { StatusCodes } from 'http-status-codes';

class ResidentController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private _residentService: IServiceResident

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this._residentService = new ResidentService();
  }

  async getAllResidents() {
    try {
      const residents = await this._residentService.getResidents()
      return this.res.status(StatusCodes.OK).json(residents)
    } catch (e) {
      return this.res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: e });
    }
  }
}

export { ResidentController };