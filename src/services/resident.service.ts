import { Resident } from '../domains/Resident';
import { ResidentModel } from '../models/ResidentModel';
import { BadRequest, NotFound } from '../errors/index.error';
import { IServiceResident, IResident } from '../interfaces/index.interface';

class ResidentService implements IServiceResident {
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private createResidentDomain(newResident: IResident | null): Resident | null {
    if (newResident) {
      return new Resident(newResident);
    }
    return null;
  }

  async createResident(resident: IResident): Promise<Resident | null> {
    const { name, tower, apartment, email, cpf, rg } = resident;
    if (!name || !tower || !apartment || !email || !cpf || !rg) throw new BadRequest('The fields name, tower, apartment, email, cpf, rg are required');
    if (!this.isValidEmail(email)) throw new BadRequest('Invalid Email!');
    if (cpf.toString().length !==  11) throw new BadRequest('Invalid Cpf!');
    if (rg.toString().length >  10) throw new BadRequest('Invalid rg!');

    const residentModel = new ResidentModel();
    const newResident = await residentModel.create(resident);
    return this.createResidentDomain(newResident)
  }

  async getResidents(): Promise<(Resident | null)[]> {
    const residentModel = new ResidentModel();
    const allResidents = await residentModel.findAll();
    return allResidents.map((resident) => this.createResidentDomain(resident))
  }

  async getResidentById(id: string): Promise<(Resident | null)> {
    const residentModel = new ResidentModel();
    const resident = await residentModel.findById(id);
    if(!resident) throw new NotFound('Resident not found');
    return this.createResidentDomain(resident)
  }

  async getResidentialUnit(tower: string, apartment: string): Promise<(Resident | null)> {
    const residentModel = new ResidentModel();
    const resident = await residentModel.getResidentialUnit(tower, apartment);
    if(!resident) throw new NotFound('Resident not found');

    return this.createResidentDomain(resident);
  }

  async updatedResident(id: string, newResident: IResident) {
    // console.log(id, newResident)
    const residentModel = new ResidentModel();
    const updatedResident = await residentModel.updateResident(id, newResident);
    return this.createResidentDomain(updatedResident)
  }

  async deleteResident(id: string) {
    const residentModel = new ResidentModel();
    await residentModel.deleteResident(id);
  }

}

export { ResidentService }