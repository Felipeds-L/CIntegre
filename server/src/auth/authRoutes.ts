import express from 'express';
import { AuthController } from './authController';

const authRoutes = express.Router();

authRoutes.post('/login', AuthController.login);

export default authRoutes;