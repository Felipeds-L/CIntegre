import { PrismaClient } from '@prisma/client';
import { comparePassword } from '../utils/bcrypt.utils';
import { LoginDto } from './authDto';

const prisma = new PrismaClient();

export const AuthRepository = {
  async login(loginData: LoginDto) {
    // Busca usuário pelo email
    const user = await prisma.user.findUnique({
      where: { email: loginData.email },
      include: { adress: true }
    });

    if (!user) { // Se o usuário não for encontrado
      throw new Error('Usuário não encontrado');
    }

    // Verifica a senha
    const passwordMatch = await comparePassword(loginData.senha, user.senha);
    if (!passwordMatch) { // Se a senha não bater
      throw new Error('Senha inválida');
    }

    return user;
  },

  async findUserById(id: number) { //função de busca usuário por ID
    return await prisma.user.findUnique({
      where: { id },
      include: { adress: true }
    });
  }
};