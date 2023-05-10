import { IResident } from '../interfaces/index.interface';

class Apartment {
  protected id: string | undefined;
  protected name: string;
  protected tower: number;
  protected apartment: number;
  protected email: string;
  protected rg: number;
  protected cpf: number;
  protected phoneNumber?: number;
  protected dependentName1?: string;
  protected dependentName2?: string;
  protected dependentName3?: string;
  protected dependentName4?: string;

  constructor(resident: IResident) {
    this.id = resident.id;
    this.name = resident.name;
    this.tower = resident.tower;
    this.apartment = resident.apartment;
    this.email = resident.email;
    this.rg = resident.rg;
    this.cpf = resident.cpf;
    this.phoneNumber = resident.phoneNumber;
    this.dependentName1 = resident.dependentName1;
    this.dependentName2 = resident.dependentName2;
    this.dependentName3 = resident.dependentName3;
    this.dependentName4 = resident.dependentName4;
  }

  public getId(): string | undefined {  
    return this.id;
  }

  public getName() {  
    return this.name;
  }
  
  public getTower(): number | undefined {
    return this.tower;
  }

  public getApartment(): number | undefined {
    return this.apartment;
  }

  public getEmail(): string | undefined {
    return this.email;
  }

  public getRg(): number | undefined {
    return this.rg;
  }

  public getCpf(): number | undefined {
    return this.cpf;
  }
 
  public getPhoneNumber(): number | undefined {
    return this.phoneNumber;
  }
}

export { Apartment }