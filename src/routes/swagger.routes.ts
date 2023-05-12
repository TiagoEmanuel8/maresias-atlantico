import { Router } from 'express';
import * as swaggerUi from 'swagger-ui-express';
const swaggerDocument = require('../docs/swagger.json');

const swaggerRouter = Router();

swaggerRouter.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

swaggerRouter.use(
  '/redocly',
  (_req, res) => {
    return res.sendFile(process.cwd() + '/src/docs/swagger.json');
  }
);

swaggerRouter.use(
  '/documentation',
  (_req, res) => {
    return res.sendFile(process.cwd() + '/public/index.html');
  }
);

export { swaggerRouter };
