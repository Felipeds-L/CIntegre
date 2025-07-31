import { Request, Response } from 'express';
import { generateToken } from '../utils/jwt.utils';
import { LoginDto } from './authDto';
import { AuthService } from './authService';

const authService = new AuthService();

export const AuthController = {
  async login(req: Request, res: Response) {
    try {
      const loginData: LoginDto = req.body;

      const user = await authService.login(loginData);
      const token = generateToken(user.id);

      res.status(200).json({
        id: user.id,
        email: user.email,
        nome: user.name,
        token,
      });
    } catch (error: any) {
      res.status(401).json({ message: error.message });
    }
  },
};
