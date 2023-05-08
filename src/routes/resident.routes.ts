import { Router } from 'express';
import { ResidentController } from '../controllers/index.controller';

const residentsRouter = Router();

residentsRouter.get(
  '/residents',
  (req, res, next) => new ResidentController(req, res, next).getAllResidents(),
);

export { residentsRouter };
