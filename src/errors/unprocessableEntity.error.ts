import { StatusCodes } from 'http-status-codes';

class UnprocessableEntity extends Error {
  public statusCode: number;
  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.UNPROCESSABLE_ENTITY;
  }
}

export { UnprocessableEntity }

