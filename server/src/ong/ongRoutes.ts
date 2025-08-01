import { Router } from 'express';
import { OngController } from './ongController';

const router = Router();
const ongController = new OngController();

export function setOngRoutes(app: Router) {
  app.post('/ongs', ongController.createOng.bind(ongController));
  app.get('/ongs/:id', ongController.getOng.bind(ongController));
  app.put('/ongs/:id', ongController.updateOng.bind(ongController));
  app.delete('/ongs/:id', ongController.deleteOng.bind(ongController));
  app.get('/ongs', ongController.getAllOngs.bind(ongController));
}
