import { PrismaClient } from '@prisma/client';
import { User, UserCreateDTO } from './userDto'; 

export class UserService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async createUser(data: Omit<UserCreateDTO, 'id'>): Promise<User> {
        return await this.prisma.user.create({
            data,
        });
    }

    async getUser(id: number): Promise<User | null> {
        return await this.prisma.user.findUnique({
            where: { id },
        });
    }

    async updateUser(id: number, data: Partial<Omit<UserCreateDTO, 'id'>>): Promise<User> {
        return await this.prisma.user.update({
            where: { id },
            data,
        });
    }

    async deleteUser(id: number): Promise<User> {
        return await this.prisma.user.delete({
            where: { id },
        });
    }

    async getAllUsers(): Promise<User[]> {
        return await this.prisma.user.findMany();
    }
}