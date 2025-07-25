import { PrismaClient } from '@prisma/client';
import { User, UserCreateDTO } from './userDto';

export class UserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createUser(data: UserCreateDTO): Promise<User> {
    const user = await this.prisma.user.create({
      data,
    });

    return user;
  }

  async getUser(id: number): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  }

  async getAllUsers(): Promise<User[]> {
    return await this.prisma.user.findMany({ orderBy: { id: 'asc' } });
  }

  async updateUser(id: number, data: Partial<UserCreateDTO>): Promise<User> {
    const updatedUser = await this.prisma.user.update({
      where: { id },
      data,
    });

    return updatedUser;
  }

  async deleteUser(id: number): Promise<boolean> {
    await this.prisma.user.delete({
      where: { id },
    });

    return true;
  }

  async checkEmailExists(email: string): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    return !!user;
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    return user;
  }
}
