import cors from 'cors';
import express from 'express';
import debug from 'debug';

require('express-async-errors');

class App {
  public app: express.Application = express();
  public debugLog: debug.IDebugger = debug('app');

  constructor() {
    this.config();
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
    this.app.use(cors());
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => {
      console.log('iniciado porta:', PORT);
    });
  }
}

export { App };

export const { app } = new App();
