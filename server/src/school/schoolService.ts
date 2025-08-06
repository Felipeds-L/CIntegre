import { PrismaClient } from '@prisma/client';
import { CreateSchoolDto, School } from './schoolDto';

export class SchoolService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createSchool(
    data: CreateSchoolDto,
  ): Promise<School> {
    const { address, ...schoolData } = data;

    return await this.prisma.school.create({
      data: {
        name: schoolData.name,
        phone_number: schoolData.phone_number,
        score: schoolData.score,
        student_quantity: schoolData.student_quantity,
        address: {
          create: address,
        },
      },
      include: {
        address: true,
      },
    });
  }

  async getSchool(id: number): Promise<School | null> {
    return await this.prisma.school.findUnique({
      where: { id },
      include: {
        address: true,
      },
    });
  }

  async updateSchool(
    id: number,
    data: Partial<CreateSchoolDto>,
  ): Promise<School> {
    const { address, ...schoolData } = data;

    return await this.prisma.school.update({
      where: { id },
      data: {
        name: data.name,
        student_quantity: data.student_quantity,
        score: data.score,
        phone_number: data.phone_number,
        address: address
          ? {
              update: address,
            }
          : undefined,
      },
      include: {
        address: true,
      },
    });
  }

  async deleteSchool(id: number): Promise<School> {
    return await this.prisma.school.delete({
      where: { id },
      include: {
        address: true,
      },
    });
  }

  async getAllSchools(): Promise<School[]> {
    return await this.prisma.school.findMany({
      include: {
        address: true,
      },
    });
  }
}
