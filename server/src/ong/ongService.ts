import { PrismaClient } from '@prisma/client';
import { OngDTO, OngCreateDTO } from './ongDto';

export class OngService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createOng(data: OngDTO): Promise<OngCreateDTO> {
    return await this.prisma.ong.create({
      data,
    });
  }

  async getOng(id: number): Promise<OngCreateDTO | null> {
    return await this.prisma.ong.findUnique({
      where: { id },
    });
  }

  async updateOng(id: number, data: Partial<OngDTO>): Promise<OngCreateDTO> {
    return await this.prisma.ong.update({
      where: { id },
      data,
    });
  }

  async deleteOng(id: number): Promise<OngDTO> {
    return await this.prisma.ong.delete({
      where: { id },
    });
  }

  async getAllOngs(): Promise<OngCreateDTO[]> {
    return await this.prisma.ong.findMany();
  }
}
