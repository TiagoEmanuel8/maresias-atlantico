import { Resident } from '../domains/Resident';
import { IResident } from './IResidents.interface';

interface IServiceResident {
  createResident(resident: IResident): Promise<Resident | null>
  getResidents(): Promise<(Resident | null)[]>
  getResidentById(id: string): Promise<Resident | null>
  getResidentialUnit(tower: string, apartament: string): Promise<(Resident | null)>
  updatedResident(id: string, newResident: IResident): Promise<(Resident | null) >
  deleteResident(id: string)
}

export default IServiceResident;