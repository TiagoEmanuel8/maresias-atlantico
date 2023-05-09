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

export { residentsRouter };
