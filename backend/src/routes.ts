import { Router, Request, Response } from 'express';

const routes = Router();

routes.get('/orphanages', (request: Request, response: Response) => {
  return response.json({ message: 'Hello' });
});

export default routes;
