interface IResident {
  id?: string,
  name: string,
  tower: number,
  apartment: number,
  email: string,
  rg: number,
  cpf: number,
  phoneNumber: number,
  mobileNumber?: number,
  observation?: string,
}

export { IResident }
