import { PrismaClient } from '@prisma/client';
import { User, UserCreateDTO, UserWithoutPassword } from './userDto';
import { hashPassword } from '../utils/bcrypt.utils';

export class UserService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createUser(data: UserCreateDTO): Promise<UserWithoutPassword> {
    const { name, email, password } = data;

    if (!name || !email || !password) {
      throw new Error('required fields are missing');
    }

    const emailExists = await this.prisma.user.findUnique({ where: { email } });
    if (emailExists) {
      throw new Error('user already exists');
    }

    if (password.length < 6) {
      throw new Error('password must be at least 6 characters long');
    }

    const hashedPassword = await hashPassword(password);

    const user = await this.prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });

    return this.hidePassword(user);
  }

  async getUser(id: number): Promise<UserWithoutPassword | null> {
    const verifiedId = await this.verifyIdParam(id);

    const user = await this.prisma.user.findUnique({
      where: { id: verifiedId },
    });

    return user ? this.hidePassword(user) : null;
  }

  async getAllUsers(): Promise<UserWithoutPassword[]> {
    const users = await this.prisma.user.findMany({ orderBy: { id: 'asc' } });

    return users.map((user) => this.hidePassword(user));
  }

  async updateUser(
    id: number,
    data: Partial<Omit<UserCreateDTO, 'id'>>,
  ): Promise<UserWithoutPassword> {
    const verifiedId = await this.verifyIdParam(id);

    const userExists = await this.prisma.user.findUnique({
      where: { id: verifiedId },
    });

    if (!userExists) {
      throw new Error('user not found');
    }

    if (data.password && data.password.length < 6) {
      throw new Error('password must be at least 6 characters long');
    }

    if (data.password) {
      data.password = await hashPassword(data.password);
    }

    if (data.email) {
      const emailOwner = await this.prisma.user.findUnique({
        where: { email: data.email },
      });
      if (emailOwner && emailOwner.id !== verifiedId) {
        throw new Error('email already exists');
      }
    }

    const updatedUser = await this.prisma.user.update({
      where: { id: verifiedId },
      data,
    });

    return this.hidePassword(updatedUser);
  }

  async deleteUser(id: number): Promise<boolean> {
    const verifiedId = await this.verifyIdParam(id);

    const userExists = await this.prisma.user.findUnique({
      where: { id: verifiedId },
    });

    if (!userExists) return false;

    await this.prisma.user.delete({ where: { id: verifiedId } });

    return true;
  }

  hidePassword(user: User): UserWithoutPassword {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async verifyIdParam(id: number): Promise<number> {
    const maxUnsignedInt = 2 ** 32 - 1;
    if (isNaN(id) || id < 1 || id > maxUnsignedInt) {
      throw new Error('invalid user id');
    }
    return id;
  }
}
