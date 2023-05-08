import 'express-async-errors';
import express from 'express';
import { residentsRouter } from './routes/index.routes';
import { errorHandler } from './middlewares/errorMiddleware';

const app = express();

app.use(express.json());
app.use(residentsRouter);
app.use(errorHandler);

export default app;
