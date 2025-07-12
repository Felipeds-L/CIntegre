import { Request, Response } from 'express';
import { generateToken } from '../utils/jwt.utils';
import { AuthRepository } from './authRepository';
import { LoginDto } from './authDto';

export const AuthController = {
  async login(req: Request, res: Response) {
    try {
      const loginData: LoginDto = req.body;
      
      // Autentica usuário
      const user = await AuthRepository.login(loginData);
      
      // Gera token JWT
      const token = generateToken(user.id);

      // Retorna dados do usuário e token
      res.status(200).json({
        id: user.id,
        username: user.username,
        email: user.email,
        nome: user.name,
        numeroContato: user.phone_number,
        address: user.address_id,
        token
      });
      //Se o usuário não for encontrado ou a senha estiver incorreta, dará erro
    } catch (error: any) {
      res.status(401).json({ message: error.message });
    }
  }
};