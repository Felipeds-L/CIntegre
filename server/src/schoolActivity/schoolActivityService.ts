import { PrismaClient } from '@prisma/client';
import {
  SchoolActivityCreateDTO,
  SchoolActivityDTO,
} from './schoolActivityDto';

export class SchoolActivityService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  // bal bla
  async createSchoolActivity(
    data: SchoolActivityCreateDTO,
  ): Promise<SchoolActivityDTO> {
    const { school_id, activity_id, status, pontuation } =
      data;

    const schoolId = Number(school_id);
    const activityId = Number(activity_id);

    const createdAction =
      await this.prisma.schoolActivity.create({
        data: {
          school: {
            connect: { id: schoolId }, // Connect to an existing School
          },
          activity: {
            connect: { id: activityId },
          },
          status: status,
          pontuation: pontuation,
        },

        include: {
          school: {
            include: {
              address: true,
            },
          },
          activity: {
            include: {
              ong: true,
            },
          },
        },
      });

    return createdAction;
  }

  async getSchoolActivity(
    id: number,
  ): Promise<SchoolActivityDTO | null> {
    return (await this.prisma.schoolActivity.findUnique({
      where: { id },
      include: {
        school: true,
      },
    })) as SchoolActivityDTO | null;
  }

  async updateSchoolActivity(
    id: number,
    data: Partial<SchoolActivityCreateDTO>,
  ): Promise<SchoolActivityDTO> {
    const updateData: any = { ...data }; // Start with all provided data

    // If school_id is provided in data, transform it for Prisma's connect
    if (data.school_id !== undefined) {
      updateData.school = {
        connect: { id: data.school_id },
      };
      delete updateData.school_id; // Remove the direct foreign key as Prisma expects 'connect'
    }
    // If activity_id is provided in data, transform it for Prisma's connect
    if (data.activity_id !== undefined) {
      updateData.activity = {
        connect: { id: data.activity_id },
      };
      delete updateData.activity_id; // Remove the direct foreign key
    }

    const updatedAction =
      await this.prisma.schoolActivity.update({
        where: { id },
        data: updateData, // Use the transformed data
        include: {
          school: true,
          activity: true,
        },
      });
    return updatedAction as SchoolActivityDTO;
  }

  async deleteSchoolActivity(
    id: number,
  ): Promise<SchoolActivityDTO> {
    const deletedAction =
      await this.prisma.schoolActivity.delete({
        where: { id },
        include: {
          school: true,
          activity: true,
        },
      });
    return deletedAction as SchoolActivityDTO;
  }

  async getAllSchoolActivities(): Promise<
    SchoolActivityDTO[]
  > {
    return (await this.prisma.schoolActivity.findMany({
      include: {
        school: true,
      },
    })) as SchoolActivityDTO[];
  }

  async getSchoolActivitiesBySchoolId(
    schoolId: number,
  ): Promise<SchoolActivityDTO[]> {
    return (await this.prisma.schoolActivity.findMany({
      where: { school_id: schoolId },
      include: {
        school: {
          include: {
            address: true,
          },
        },
        activity: {
          include: {
            ong: true,
          },
        },
      },
    })) as SchoolActivityDTO[];
  }
}
