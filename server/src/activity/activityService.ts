import { PrismaClient } from '@prisma/client';
import { ActivityDTO, CreateActivityDTO } from './activityDto';

export class ActivityService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createActivity(data: CreateActivityDTO): Promise<ActivityDTO> {
    const {
      area_expertise,
      category,
      description,
      ong_id,
      photos,
      status,
      pontuation,
      title,
    } = data;

    const createdAction = await this.prisma.activity.create({
      data: {
        title,
        photos,
        category,
        description,
        pontuation,
        status,
        area_expertise,
        ong: { connect: { id: ong_id } },
      },
      include: {
        ong: true,
      },
    });

    return createdAction;
  }

  async getActivity(id: number): Promise<ActivityDTO | null> {
    return (await this.prisma.activity.findUnique({
      where: { id },
      include: {
        ong: true,
      },
    })) as ActivityDTO | null;
  }

  async updateActivity(
    id: number,
    data: Partial<CreateActivityDTO>,
  ): Promise<ActivityDTO> {
    const updateData: any = { ...data }; // Start with all provided data

    // If ong_id is provided in data, transform it for Prisma's connect
    if (data.ong_id !== undefined) {
      updateData.ong = { connect: { id: data.ong_id } };
      delete updateData.ong_id; // Remove the direct foreign key
    }
    const updatedAction = await this.prisma.activity.update({
      where: { id },
      data: updateData, // Use the transformed data
      include: {
        ong: true,
      },
    });
    return updatedAction as ActivityDTO;
  }

  async deleteActivity(id: number): Promise<ActivityDTO> {
    const deletedAction = await this.prisma.activity.delete({
      where: { id },
      include: {
        ong: true,
      },
    });
    return deletedAction as ActivityDTO;
  }

  async getAllActivities(): Promise<ActivityDTO[]> {
    return (await this.prisma.activity.findMany({
      include: {
        ong: true,
      },
    })) as ActivityDTO[];
  }

  async getActivitiesByOngId(ongId: number): Promise<ActivityDTO[]> {
    return (await this.prisma.activity.findMany({
      where: { ong_id: ongId },
      include: {
        ong: true,
      },
    })) as ActivityDTO[];
  }
}
