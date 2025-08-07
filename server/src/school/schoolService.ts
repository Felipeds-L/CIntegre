import { PrismaClient } from '@prisma/client';
import { CreateSchoolDto, School } from './schoolDto';
import { connect } from 'http2';

export class SchoolService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createSchool(
    data: CreateSchoolDto,
  ): Promise<School> {
    const { address, user_id, ...schoolData } = data;

    return await this.prisma.school.create({
      data: {
        name: schoolData.name,
        phone_number: schoolData.phone_number,
        score: schoolData.score,
        student_quantity: schoolData.student_quantity,
        address: {
          create: address,
        },
        user: user_id
          ? {
              connect: { id: user_id },
            }
          : undefined,
      },
      include: {
        address: true,
        user: true,
      },
    });
  }

  async getSchool(id: number): Promise<School | null> {
    return await this.prisma.school.findUnique({
      where: { id },
      include: {
        address: true,
        user: true,
      },
    });
  }

  async updateSchool(
    id: number,
    data: Partial<CreateSchoolDto>,
  ): Promise<School> {
    const { address, user_id, ...schoolData } = data;

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
        user: user_id
          ? {
              connect: { id: user_id },
            }
          : undefined,
      },
      include: {
        address: true,
        user: true,
      },
    });
  }

  async deleteSchool(id: number): Promise<School> {
    return await this.prisma.school.delete({
      where: { id },
      include: {
        address: true,
        user: true,
      },
    });
  }

  async getAllSchools(): Promise<School[]> {
    return await this.prisma.school.findMany({
      include: {
        address: true,
        user: true,
      },
    });
  }
}
