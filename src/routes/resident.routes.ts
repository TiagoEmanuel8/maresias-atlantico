import { Router } from 'express';
import { ResidentController } from '../controllers/index.controller';
import { ResidentValidate } from '../middlewares/residentMiddleware';

const residentsRouter = Router();

residentsRouter.post(
  '/residents',
  (req, res, next) => new ResidentController(req, res, next).createResident(),
);

residentsRouter.get(
  '/residents',
  (req, res, next) => new ResidentController(req, res, next).getAllResidents(),
);

residentsRouter.get(
  '/residents/:id',
  (req, res, next) => new ResidentValidate().validateResident(req, res, next),
  (req, res, next) => new ResidentController(req, res, next).getResidentById(),
);

residentsRouter.get(
  '/resident',
  (req, res, next) => new ResidentController(req, res, next).getResidentialUnit(),
);

residentsRouter.patch(
  '/residents/:id',
  (req, res, next) => new ResidentValidate().validateResident(req, res, next),
  (req, res, next) => new ResidentController(req, res, next).updateResident(),
);

residentsRouter.delete(
  '/residents/:id',
  (req, res, next) => new ResidentValidate().validateResident(req, res, next),
  (req, res, next) => new ResidentController(req, res, next).deleteResident(),
);

export { residentsRouter };
