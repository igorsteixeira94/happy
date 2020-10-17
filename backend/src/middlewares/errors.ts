import { ErrorRequestHandler } from 'express';

const errorMiddleware: ErrorRequestHandler = (
  error,
  request,
  response,
  next,
) => {
  console.log(error);

  return response.status(500).json({ error: 'Internal server error' });
};

export default errorMiddleware;
