interface IResident {
  id?: string,
  name: string,
  tower: number,
  apartment: number,
  email?: string,
  rg: number,
  cpf: number,
  phoneNumber: number,
  mobileNumber?: number
  dependentName1?: string,
  dependentName2?: string,
  dependentName3?: string,
  dependentName4?: string,
  observation?: string,
}

export { IResident }
