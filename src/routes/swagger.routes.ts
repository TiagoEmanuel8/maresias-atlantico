import { Router } from 'express';
import * as swaggerUi from 'swagger-ui-express';
const swaggerDocument = require('../docs/swagger.json');

const swaggerRouter = Router();

swaggerRouter.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

export { swaggerRouter };
