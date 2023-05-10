import { Resident } from '../domains/Resident';
import { IResident } from './IResidents.interface';

interface IServiceResident {
  createResident(resident: IResident): Promise<Resident | null>
  getResidents(): Promise<(Resident | null)[]>
  getResidentById(id: string): Promise<Resident | null>
  getResidentialUnit(tower: string, apartment: string): Promise<(Resident | null)>
  updatedResident(_id: string, newResident: IResident): Promise<(Resident | null) >
  deleteResident(id: string): void
}

export default IServiceResident;