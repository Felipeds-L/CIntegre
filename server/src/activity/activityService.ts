import { PrismaClient } from '@prisma/client';
import {
  ActivityDTO,
  CreateActivityDTO,
} from './activityDto';
import { SchoolActivityService } from '../schoolActivity/schoolActivityService';

export class ActivityService {
  private prisma: PrismaClient;
  private schoolActivityService: SchoolActivityService;

  constructor() {
    this.prisma = new PrismaClient();
    this.schoolActivityService = new SchoolActivityService();
  }

  async createActivity(
    data: CreateActivityDTO,
  ): Promise<ActivityDTO> {
    const activity = data;

    const createdAction = await this.prisma.activity.create(
      {
        data: {
          title: activity.title,
          photos: activity.photos || [],
          category: activity.category,
          description: activity.description,
          pontuation: activity.pontuation,
          status: activity.status,
          area_expertise: activity.area_expertise,
          address: activity.address,
          tags: activity.tags,
          duration: activity.duration,
          start_date: activity.start_date,
          end_date: activity.end_date,
          volunteer_quantity: activity.volunteer_quantity,
          ong: { connect: { id: activity.ong_id } },
        },
        include: {
          ong: true,
        },
      },
    );

    return createdAction;
  }

  async getActivity(
    id: number,
  ): Promise<ActivityDTO | null> {
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
    const updatedAction = await this.prisma.activity.update(
      {
        where: { id },
        data: updateData, // Use the transformed data
        include: {
          ong: true,
        },
      },
    );

    if (data.status === "closed") {
      // Busca todas as SchoolActivity relacionadas a essa atividade
      const schoolActivities = await this.prisma.schoolActivity.findMany({
        where: { activity_id: id },
      });

      // Define a pontuação conforme o tipo da atividade
      const points = updatedAction.category === "volunteer" ? 200 : 100;

      // Atualiza a pontuação de cada SchoolActivity
      for (const sa of schoolActivities) {
        await this.prisma.schoolActivity.update({
          where: { id: sa.id },
          data: { pontuation: points },
        });

        // Opcional: Atualize também o score total da escola
        await this.prisma.school.update({
          where: { id: sa.school_id },
          data: {
            score: {
              increment: points,
            },
          },
        });
      }
    }

    return updatedAction as ActivityDTO;
  }

  async deleteActivity(id: number): Promise<ActivityDTO> {
    const deletedAction = await this.prisma.activity.delete(
      {
        where: { id },
        include: {
          ong: true,
        },
      },
    );
    return deletedAction as ActivityDTO;
  }

  async getAllActivities(): Promise<ActivityDTO[]> {
    return (await this.prisma.activity.findMany({
      include: {
        ong: true,
      },
    })) as ActivityDTO[];
  }

  async getActivitiesByOngId(
    ongId: number,
  ): Promise<ActivityDTO[]> {
    return (await this.prisma.activity.findMany({
      where: { ong_id: ongId },
      include: {
        ong: true,
      },
    })) as ActivityDTO[];
  }
}
