import { PrismaClient } from '@prisma/client';
import { School } from '../types';

class SchoolService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async createSchool(data: Omit<School, 'id'>): Promise<School> {
        return await this.prisma.school.create({
            data,
        });
    }

    async getSchool(id: number): Promise<School | null> {
        return await this.prisma.school.findUnique({
            where: { id },
        });
    }

    async updateSchool(id: number, data: Partial<Omit<School, 'id'>>): Promise<School> {
        return await this.prisma.school.update({
            where: { id },
            data,
        });
    }

    async deleteSchool(id: number): Promise<School> {
        return await this.prisma.school.delete({
            where: { id },
        });
    }

    async getAllSchools(): Promise<School[]> {
        return await this.prisma.school.findMany();
    }
}

export default SchoolService;