import { PrismaClient } from '@prisma/client';
import { comparePassword } from '../utils/bcrypt.utils';
import { LoginDto } from './authDto';

const prisma = new PrismaClient();

export class AuthService {
  async login(loginData: LoginDto) {
    const user = await prisma.user.findFirst({
      where: { email: loginData.email },
      include: { school: true },
    });

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const passwordMatch = await comparePassword(
      loginData.password,
      user.password,
    );
    if (!passwordMatch) {
      throw new Error('Senha inválida');
    }

    return user;
  }

  async findUserById(id: number) {
    return await prisma.user.findUnique({
      where: { id },
    });
  }
}
