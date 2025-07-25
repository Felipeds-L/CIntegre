import { Router } from 'express';
import { AuthController } from './authController';

const authRoutes = Router();

// authRoutes.post('/login', AuthController.login);

export function setAuthRoutes(app: Router) {
  app.post('/login', AuthController.login);
}
