import 'express-async-errors';
import express from 'express';
import { residentsRouter, swaggerRouter } from './routes/index.routes';
import { errorMiddleware } from './middlewares/errorMiddleware';

const app = express();
require('express-async-errors');

app.use(express.json());
app.use(swaggerRouter);
app.use(residentsRouter);
app.use(errorMiddleware);

export default app;
