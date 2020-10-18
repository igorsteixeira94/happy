import { Router, Request, Response } from 'express';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();

routes.post('/orphanages', OrphanagesController.create);
routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:_id', OrphanagesController.show);

export default routes;
