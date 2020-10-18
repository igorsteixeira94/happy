import { Router, Request, Response } from 'express';
import multer from 'multer';

import uploadConfig from './config/multer';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/orphanages', upload.array('images'), OrphanagesController.create);
routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:_id', OrphanagesController.show);

export default routes;
