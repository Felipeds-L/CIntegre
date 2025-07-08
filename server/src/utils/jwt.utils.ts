import jwt, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';
// serve para carregar as variáveis de ambiente do arquivo .env
dotenv.config();

const JWT_SECRET: Secret = process.env.JWT_SECRET || 'sua_chave_secreta';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d';

export const generateToken = (userId: number): string => {
  return jwt.sign({ id: userId }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN as any, // evita erro de tipo
  });
};

export const verifyToken = (token: string): { id: number } => {
  return jwt.verify(token, JWT_SECRET) as { id: number };
};