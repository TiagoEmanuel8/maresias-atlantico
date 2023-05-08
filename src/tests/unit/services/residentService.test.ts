import * as sinon from 'sinon';
import { expect } from 'chai';
import { Request, Response } from 'express';
import { ResidentController } from '';
import { ErrorTypes } from '';
import { ZodError } from 'zod';
import { ResidentModel } from '';
import { ResidentService } from '';
import { residentMock, residentMockId, residentMockUpdate, residentMockUpdateId } from '../../mocks/residentMock';

describe('Resident Service', () => {
  const residentModel = new ResidentModel();
  const residentService = new ResidentService(residentModel);

  before(() => {
    sinon.stub(residentModel, 'create').resolves(residentMockId);
    sinon.stub(residentModel, 'read').resolves([residentMockId]);
    sinon.stub(residentModel, 'readOne')
      .onCall(0).resolves(residentMockId)
      .onCall(1).resolves(null);
    sinon.stub(residentModel, 'delete')
      .onCall(0).resolves(residentMockId)
      .onCall(1).resolves(null);
  });

  after(() => {
    sinon.restore();
  });

  describe('When creating a new resident', () => {
    it('Creates a new resident is succesfully', async () => {
      const newResident = await residentService.create(residentMock);
      expect(newResident).to.be.deep.equal(residentMockId);
    });
    it('Fails when creating a new resident', async () => {
      let error;

      try {
        await residentService.create({});
      } catch (err) {
        error = err;
      }

      expect(error).to.be.instanceOf(ZodError);
    });
  })
  describe('When searching all residents', () => {
    it('Return all residents succesfully', async () => {
      const newResident = await residentService.read();
      expect(newResident).to.be.deep.equal([residentMockId]);
    });
  });

  describe('When searching a resident', () => {
    it('Return resident succesfully', async () => {
      const residents = await residentService.readOne('KozukiOden');
      expect(residents).to.be.deep.equal(residentMockId);
    });
    it('Fails when creating a new resident', async () => {
      let error;

      try {
        await residentService.create({});
      } catch (err) {
        error = err;
      }

      expect(error).to.be.instanceOf(ZodError);
    });
  });

  describe('When updating a resident', () => {
    it('Updating resident is succesfully', async () => {
      sinon.stub(residentModel, 'update').resolves(residentMockUpdateId);

      const updatedResident = await residentService.update('KozukiOden', residentMockUpdate);
      expect(updatedResident).to.be.deep.equal(residentMockUpdateId);

      sinon.restore();
    });
    it('Fails to return an updated resident - Zod Error', async () => {
      let error;

      try {
        await residentService.update('KozukiOden', { INVALID: 'OBJECT' });
      } catch (err: any) {
        error = err;
      }

      expect(error).to.be.instanceOf(ZodError);
    });

    it('Fails to return an updated resident - EntityNotFound', async () => {
      sinon.stub(residentModel, 'update').resolves(null);

      let error;

      try {
        await residentService.update('KozukiOden', residentMockUpdate)
      } catch (err: any) {
        error = err;
      }

      expect(error.message).to.be.equal(ErrorTypes.EntityNotFound);

      sinon.restore();
    });
  });

  describe('When deleting a resident', () => {
    it('Delete a resident succesfully', async () => {
      const deletedResident = await residentService.delete(residentMockId.id);
      expect(deletedResident).to.be.deep.equal(residentMockId);
    });
    it('Fails when creating a new resident', async () => {
      let error;

      try {
        await residentService.create({});
      } catch (err) {
        error = err;
      }

      expect(error.message).to.be.equal(ErrorTypes.EntityNotFound);

    });
  })
})