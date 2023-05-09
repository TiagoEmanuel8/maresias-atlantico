import { Resident } from '../domains/Resident';
import { IResident } from './IResidents.interface';

interface IServiceResident {
  createResident(resident: IResident): Promise<Resident | null>
  getResidents(): Promise<(Resident | null)[]>
  getResidentById(id: string): Promise<Resident | null>
}

export default IServiceResident;