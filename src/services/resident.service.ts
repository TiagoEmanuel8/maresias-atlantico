import { Resident } from '../domains/Resident';
import { ResidentModel } from '../models/ResidentModel';
import { IServiceResident, IResident } from '../interfaces/index.interface';

class ResidentService implements IServiceResident {
  private createResidentDomain(newResident: IResident | null): Resident | null {
    if (newResident) {
      return new Resident(newResident);
    }
    return null;
  }

  async createResident(resident: IResident): Promise<Resident | null> {
    const residentModel = new ResidentModel();
    const newResident = await residentModel.create(resident);
    return this.createResidentDomain(newResident)
  }

  async getResidents(): Promise<(Resident | null)[]> {
    const residentModel = new ResidentModel();
    const allResidents = await residentModel.findAll();
    return allResidents.map((resident) => this.createResidentDomain(resident))
  }
}

export { ResidentService }