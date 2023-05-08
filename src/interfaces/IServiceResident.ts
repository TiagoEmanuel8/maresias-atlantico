import { Resident } from '../domains/Resident';

interface IServiceResident {
  getResidents(): Promise<(Resident | null)[]>
}

export { IServiceResident }