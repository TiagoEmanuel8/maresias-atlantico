import { Router } from 'express';
import { ResidentController } from '../controllers/index.controller';

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
  (req, res, next) => new ResidentController(req, res, next).getResidentById(),
);

residentsRouter.get(
  '/resident',
  (req, res, next) => new ResidentController(req, res, next).getResidentialUnit(),
);

export { residentsRouter };
