import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt.utils';
import { AuthRepository } from '../auth/authRepository';

// serve para proteger as rotas que precisam de autenticação
// Adiciona a propriedade 'user' ao tipo Request
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        name: string;
        email: string;
        password?: string;
        school_id: number | null;
        ong_id: number | null;
      };
    }
  }
}

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req
      .header('Authorization')
      ?.replace('Bearer ', '');

    if (!token) {
      throw new Error(
        'Token de autenticação não fornecido',
      );
    }

    // Verifica token
    const decoded = verifyToken(token);

    // Busca usuário no banco
    const user = await AuthRepository.findUserById(
      decoded.id,
    );

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    // Adiciona usuário ao request
    req.user = user;
    next();
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};
