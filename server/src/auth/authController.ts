import { Request, Response } from 'express';
import { generateToken } from '../utils/jwt.utils';
import { LoginDto } from './authDto';
import { AuthService } from './authService';

const authService = new AuthService();

export const AuthController = {
  async login(req: Request, res: Response) {
    try {
      const loginData: LoginDto = req.body;

      // User deve vir com school e ong já carregados
      const user = await authService.login(loginData);

      // Identifica o tipo de usuário
      let userType = 'unknown';
      if (user.school) {
        userType = 'school';
      } else if (user.ong) {
        userType = 'ong';
      }

      const token = generateToken(user.id);

      res.status(200).json({
        id: user.id,
        email: user.email,
        nome: user.name,
        token,
        userType,
        school: user.school,
        ong: user.ong,
      });
    } catch (error: any) {
      res.status(401).json({ message: error.message });
    }
  },
};
