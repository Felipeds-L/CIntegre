import { PrismaClient } from '@prisma/client';
import { SocialMedias } from './socialMediasDto';

class SocialMediasService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async createSocialMedia(data: Omit<SocialMedias, 'id'>): Promise<SocialMedias> {
        return await this.prisma.socialMedias.create({
            data,
        });
    }

    async getSocialMedia(id: number): Promise<SocialMedias | null> {
        return await this.prisma.socialMedias.findUnique({
            where: { id },
        });
    }

    async updateSocialMedia(id: number, data: Partial<Omit<SocialMedias, 'id'>>): Promise<SocialMedias> {
        return await this.prisma.socialMedias.update({
            where: { id },
            data,
        });
    }

    async deleteSocialMedia(id: number): Promise<SocialMedias> {
        return await this.prisma.socialMedias.delete({
            where: { id },
        });
    }

    async getAllSocialMedias(): Promise<SocialMedias[]> {
        return await this.prisma.socialMedias.findMany();
    }
}

export default SocialMediasService;