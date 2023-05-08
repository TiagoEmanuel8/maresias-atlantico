// import * as sinon from 'sinon';
// import mongoose from 'mongoose';
// import { expect } from 'chai';
// import { Request, Response } from 'express';
// import { ResidentController } from '';
// import { ErrorTypes } from '';
// import { ZodError } from 'zod';
// import { ResidentModel } from '';
// import { ResidentService } from '';
// import { residentMock, residentMockId, residentMockUpdate, residentMockUpdateId } from '../../mocks/residentMock';

// describe('Resident Model', () => {
//   const residentModel = new ResidentModel();

//   beforeEach(() => {
//     sinon.stub(mongoose.Model, 'create').resolves(residentMock);
//     sinon.stub(mongoose.Model, 'find').resolves([residentMockId]);
//     sinon.stub(mongoose.Model, 'findOne').resolves(residentMockId);
//     sinon.stub(mongoose.Model, 'findByIdAndUpdate').resolves(residentMockUpdateId);
//     sinon.stub(mongoose.Model, 'findByIdAndDelete').resolves(residentMockUpdateId);
//   });

//   afterEach(() => {
//     sinon.restore();
//   });

//   describe('When creating a new resident', () => {
//     it('Creates a new resident is succesfully', async () => {
//       const newResident = await residentModel.create(residentMock);
//       expect(newResident).to.be.deep.equal(residentMockId);
//     });
//   });

//   describe('When searching all residents', () => {
//     it('Return all residents succesfully', async () => {
//       const residents = await residentModel.read();
//       expect(residents).to.be.deep.equal([residentMockId]);
//     });
//   });

//   describe('When searching a resident', () => {
//     it('Return resident succesfully', async () => {
//       const validIdStub = sinon.stub(mongoose, 'isValidObjectId').returns(true);
//       const resident = await residentModel.readOne('KozukiOden');
//       expect(resident).to.be.deep.equal(residentMockId);
//       validIdStub.restore();
//     });
//     it('Fails to return a resident when id is not found', async () => {
//       const invalidIdStub = sinon.stub(mongoose, 'isValidObjectId').returns(false);
//       // residentMockUpdatedWithId
//       try {
//         await residentModel.readOne('KurozumiOrochi');
//       } catch (err: any) {
//         expect(err.message).to.be.equal('InvalidMongoId');
//       }

//       invalidIdStub.restore();
//     });
//   });

//   describe('When updating a resident', () => {
//     it('Updating resident is succesfully', async () => {
//       const updatedResident = await residentModel.update('6352f8ea74092b2e6a784c51', residentMock);
//       expect(updatedResident).to.be.deep.equal(residentMockUpdateId);
//     });
//     it('Fails to return a resident when id is not found', async () => {
//       try {
//         await residentModel.update('KurozumiOrochi', residentMockUpdate);
//       } catch (err: any) {
//         expect(err.message).to.be.equal(ErrorTypes.InvalidMongoId);
//       }
//     });
//   });

//   describe('When deleting a resident', () => {
//     it('Delete a resident succesfully', async () => {
//       const deletedResident = await residentModel.delete('6352f8ea74092b2e6a784c51');
//       expect(deletedResident).to.be.deep.equal(residentMockUpdateId);
//     });
//   })
// })