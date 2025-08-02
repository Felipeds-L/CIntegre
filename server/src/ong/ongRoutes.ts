import { Router } from 'express';
import { OngController } from './ongController';
import { authenticate } from '../middlewares/middleware';

const ongController = new OngController();

export function setOngRoutes(app: Router) {
  app.post(
    '/ongs',
    authenticate,
    ongController.createOng.bind(ongController),
  );
  app.get(
    '/ongs/:id',
    authenticate,
    ongController.getOng.bind(ongController),
  );
  app.put(
    '/ongs/:id',
    authenticate,
    ongController.updateOng.bind(ongController),
  );
  app.delete(
    '/ongs/:id',
    authenticate,
    ongController.deleteOng.bind(ongController),
  );
  app.get(
    '/ongs',
    authenticate,
    ongController.getAllOngs.bind(ongController),
  );
}
