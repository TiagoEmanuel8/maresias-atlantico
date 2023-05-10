const newResidentValid = {
  name: 'Helena Laura Ribeiro',
  tower: 1,
  apartment: 101,
  email: 'helenalribeiro@gmail.com',
  rg: 435577220,
  cpf: 76988523421,
  phoneNumber: 8129300801,
  mobileNumber: 81983226641,
  dependentName1: 'Márcia Campos'
}

const invalidResidentName = {
  tower: 2,
  apartment: 501,
  email: 'thomasgcampos@email.com.br',
  rg: '234383318',
  cpf: '99206443402',
  phoneNumber: '8137622958',
  mobileNumber: '81998117672',
  dependentName1: 'Márcia Campos'
}

const invalidResidentTower = {
  name: 'Giovanni Campos',
  apartment: 501,
  email: 'thomasgcampos@email.com.br',
  rg: '234383318',
  cpf: '99206443402',
  phoneNumber: '8137622958',
  mobileNumber: '81998117672',
  dependentName1: 'Márcia Campos'
}

const invalidResidentApartment = {
  name: 'Giovanni Campos',
  tower: 1,
  email: 'thomasgcampos@email.com.br',
  rg: '234383318',
  cpf: '99206443402',
  phoneNumber: '8137622958',
  mobileNumber: '81998117672',
  dependentName1: 'Márcia Campos'
}

const invalidResidentEmail = {
  name: 'Giovanni Campos',
  tower: 1,
  apartment: 501,
  rg: '234383318',
  cpf: '99206443402',
  phoneNumber: '8137622958',
  mobileNumber: '81998117672',
  dependentName1: 'Márcia Campos'
}

const invalidResidentRg = {
  name: 'Giovanni Campos',
  tower: 1,
  apartment: 501,
  email: 'thomasgcampos@email.com.br',
  cpf: '99206443402',
  phoneNumber: '8137622958',
  mobileNumber: '81998117672',
  dependentName1: 'Márcia Campos'
}

const invalidResidentCpf = {
  name: 'Giovanni Campos',
  tower: 1,
  apartment: 501,
  email: 'thomasgcampos@email.com.br',
  rg: '234383318',
  phoneNumber: '8137622958',
  mobileNumber: '81998117672',
  dependentName1: 'Márcia Campos'
}

export {
  newResidentValid,
  invalidResidentName,
  invalidResidentTower,
  invalidResidentApartment,
  invalidResidentEmail,
  invalidResidentRg,
  invalidResidentCpf
}