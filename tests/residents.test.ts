import frisby from 'frisby';
import { MongoClient, Db } from 'mongodb';
import {
  residentsList,
  newResidentValid,
  invalidResidentName,
  invalidResidentTower,
  invalidResidentApartment,
  invalidResidentEmail,
  invalidResidentRg,
  invalidResidentCpf
} from './mocks/index'

const url = 'http://localhost:3002';
const dbName = 'MaresiasAtlantico'
const mongoUrl = `mongodb://localhost:27017/${dbName}`;

describe('test the endpoint POST /residents', () => {
  let client: MongoClient;
  let db: Db;

  beforeAll(async () => {
    client = await MongoClient.connect(mongoUrl);
    db = client.db(dbName);
  });

  afterAll(async () => {
    await client.close();
  });
  it('should create a new resident', async () => {
    await new Promise<void>((resolve, reject) => {
      frisby.post(`${url}/residents`, newResidentValid)
      .expect('status', 201)
      .then((response) => {
        const { json } = response;
        expect(json.name).toBe('Helena Laura Ribeiro');
        expect(json.tower).toBe(1);
        expect(json.apartment).toBe(101);
        expect(json.email).toBe('helenalribeiro@gmail.com');
        expect(json.rg).toBe(435577220);
        expect(json.cpf).toBe(76988523421);
        resolve();
      })
      .catch((error) => reject(error));
    });
  });
  it('It is not possible to register a new resident without the name field being filled.', async () => {
    await new Promise<void>((resolve, reject) => {
      frisby.post(`${url}/residents`, invalidResidentName)
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('The fields name, tower, apartment, email, cpf, rg are required');
        resolve();
      })
      .catch((error) => reject(error));
    });
  });
  it('It is not possible to register a new resident without the tower field being filled.', async () => {
    await new Promise<void>((resolve, reject) => {
      frisby.post(`${url}/residents`, invalidResidentTower)
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('The fields name, tower, apartment, email, cpf, rg are required');
        resolve();
      })
      .catch((error) => reject(error));
    });
  });
  it('It is not possible to register a new resident without the apartment field being filled.', async () => {
    await new Promise<void>((resolve, reject) => {
      frisby.post(`${url}/residents`, invalidResidentApartment)
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('The fields name, tower, apartment, email, cpf, rg are required');
        resolve();
      })
      .catch((error) => reject(error));
    });
  });
  it('It is not possible to register a new resident without the email field being filled.', async () => {
    await new Promise<void>((resolve, reject) => {
      frisby.post(`${url}/residents`, invalidResidentEmail)
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('The fields name, tower, apartment, email, cpf, rg are required');
        resolve();
      })
      .catch((error) => reject(error));
    });
  });
  it('It is not possible to register a new resident without the rg field being filled.', async () => {
    await new Promise<void>((resolve, reject) => {
      frisby.post(`${url}/residents`, invalidResidentRg)
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('The fields name, tower, apartment, email, cpf, rg are required');
        resolve();
      })
      .catch((error) => reject(error));
    });
  });
  it('It is not possible to register a new resident without the cpf field being filled.', async () => {
    await new Promise<void>((resolve, reject) => {
      frisby.post(`${url}/residents`, invalidResidentCpf)
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('The fields name, tower, apartment, email, cpf, rg are required');
        resolve();
      })
      .catch((error) => reject(error));
    });
  });
});

describe('test the endpoint GET /residents', () => {
  let client: MongoClient;
  let db: Db;

  beforeAll(async () => {
    client = await MongoClient.connect(mongoUrl);
    db = client.db(dbName);
  });

  beforeEach(async () => {
    await db.collection('residents').deleteMany({});
    await db.collection('residents').insertMany(residentsList);
  });

  afterAll(async () => {
    await client.close();
  });

  it('It will be validated that it is possible to list all registered residents', async () => {
      await new Promise<void>((resolve, reject) => {
        frisby.get(`${url}/residents`)
          .expect('status', 200)
          .then((response) => {
            const { json } = response;
            expect(json[0].name).toBe('Juliana Rayssa Maitê da Paz');
            expect(json[0].tower).toBe(1);
            expect(json[0].apartment).toBe(301);
            expect(json[0].email).toBe('julianapaz@gmail.com');
            expect(json[0].rg).toBe(460712998);
              resolve();
          }).catch((error) => reject(error));
      });
  });
// implementar os testes daqui para baixo
  it('should list a user', async () => {
    //
  });
});

describe('test the endpoint PUT /residents', () => {
  it('It will be validated that it is possible to edit a registered resident.', () => {
    //
  })
});

describe('test the endpoint DELETE /residents', () => {
  it('It will be deleted that it is possible to edit a registered resident.', () => {
    //
  })
});