import * as sinon from 'sinon';
import { expect } from 'chai';
import { Request, Response } from 'express';
import { ResidentController } from '';
import { ResidentModel } from '';
import { ResidentService } from '';
import { residentMock, residentMockId, residentMockUpdate } from '../../mocks/residentMock';

describe('Tests Residents Controllers', () => {
  const residentModel = new ResidentModel();
  const residentService = new ResidentService(residentModel);
  const residentController = new ResidentController(residentService);
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  afterEach(() => {
    sinon.restore();
  })

  describe('When creating a new resident', () => {
    beforeEach(() => {
      sinon.stub(residentService, 'create').resolves(residentMock);
    });
    
    it('Creates a new resident succesfully', async () => {
      req.body = residentMock;
      await residentController.create(req, res);

      const statusStub = res.status as sinon.SinonStub;
      expect(statusStub.calledWith(201)).to.be.true;

      const jsonStub = res.json as sinon.SinonStub;
      expect(jsonStub.calledWith(residentMock)).to.be.true;
    });
  });

  describe('When searching all residents', () => {
    it('Return all residents succesfully', async () => {
      beforeEach(() => {
        sinon.stub(residentService, 'read').resolves([residentMockId]);
      });
  
        await residentController.read(req, res);
  
        const statusStub = res.status as sinon.SinonStub;
        expect(statusStub.calledWith(200)).to.be.true;
  
        const jsonStub = res.json as sinon.SinonStub;
        expect(jsonStub.calledWith([residentMockId])).to.be.true;
    
    });
  });

  describe('When searching a resident', () => {
    beforeEach(() => {
      sinon.stub(residentService, 'readOne').resolves(residentMockId);
    });
    it('Return resident succesfully', async () => {
      req.params = { id: residentMockId.id };
      await ResidentController.readOne(req, res);

      const statusStub = res.status as sinon.SinonStub;
      expect(statusStub.calledWith(200)).to.be.true;

      const jsonStub = res.json as sinon.SinonStub;
      expect(jsonStub.calledWith(residentMockId)).to.be.true;
    });
  });

  describe('When updating a resident', () => {
    beforeEach(() => {
      sinon.stub(residentService, 'update').resolves(residentMockId);
    });
    it('Updating resident is succesfully', async () => {
      req.body = residentMockUpdate;
      req.params = { id: residentMockId.id };
      await residentController.update(req, res);

      const statusStub = res.status as sinon.SinonStub;
      expect(statusStub.calledWith(200)).to.be.true;

      const jsonStub = res.json as sinon.SinonStub;
      expect(jsonStub.calledWith(residentMockId)).to.be.true;

    });
  });

  describe('When deleting a resident', () => {
    beforeEach(() => {
      sinon.stub(residentService, 'delete').resolves(residentMockId);
    });
    it('Delete a resident succesfully', async () => {
      req.params = { id: residentMockId.id };
      await residentController.delete(req, res);

      const statusStub = res.status as sinon.SinonStub;
      expect(statusStub.calledWith(204)).to.be.true;

      const jsonStub = res.json as sinon.SinonStub;
      expect(jsonStub.calledWith()).to.be.true;
    })
  })
})