import { PrismaClient } from '@prisma/client';
import { Ong } from './ongDto'; 

class OngService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async createOng(data: Omit<Ong, 'id'>): Promise<Ong> {
        return await this.prisma.ong.create({
            data,
        });
    }

    async getOng(id: number): Promise<Ong | null> {
        return await this.prisma.ong.findUnique({
            where: { id },
        });
    }

    async updateOng(id: number, data: Partial<Omit<Ong, 'id'>>): Promise<Ong> {
        return await this.prisma.ong.update({
            where: { id },
            data,
        });
    }

    async deleteOng(id: number): Promise<Ong> {
        return await this.prisma.ong.delete({
            where: { id },
        });
    }

    async getAllOngs(): Promise<Ong[]> {
        return await this.prisma.ong.findMany();
    }
}

export default OngService;