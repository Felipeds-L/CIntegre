import { PrismaClient } from "@prisma/client";
import { SocialAction, SocialActionCreateDTO } from "./socialActionDto";

class SocialActionService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async createSocialAction(data: SocialActionCreateDTO): Promise<SocialAction> {
        const createdAction = await this.prisma.socialAction.create({
            data: {
                causes: {
                    connect: { id: data.causes_id } // Connect to an existing Causes
                },
                ong: {
                    connect: { id: data.ong_id } // Connect to an existing Ong
                },
                cover_photo: data.cover_photo,
                title: data.title,
                descricao: data.descricao,
                category: data.category,
                area_expertise: data.area_expertise,
                status: data.status,
                pontuation: data.pontuation,
            },
            include: {
                causes: true,
                ong: true,
            },
        });
        return createdAction as SocialAction;
    }

    async getSocialAction(id: number): Promise<SocialAction | null> {
        return await this.prisma.socialAction.findUnique({
            where: { id },
            include: {
                causes: true,
                ong: true,
            },
        }) as SocialAction | null; 
    }

    async updateSocialAction(id: number, data: Partial<SocialActionCreateDTO>): Promise<SocialAction> {
        const updateData: any = { ...data }; // Start with all provided data
        // If causes_id is provided in data, transform it for Prisma's connect
        if (data.causes_id !== undefined) {
            updateData.causes = { connect: { id: data.causes_id } };
            delete updateData.causes_id; // Remove the direct foreign key as Prisma expects 'connect'
        }
        // If ong_id is provided in data, transform it for Prisma's connect
        if (data.ong_id !== undefined) {
            updateData.ong = { connect: { id: data.ong_id } };
            delete updateData.ong_id; // Remove the direct foreign key
        }
        const updatedAction = await this.prisma.socialAction.update({
            where: { id },
            data: updateData, // Use the transformed data
            include: {
                causes: true,
                ong: true,
            },
        });
        return updatedAction as SocialAction;
    }

    async deleteSocialAction(id: number): Promise<SocialAction> {
        const deletedAction = await this.prisma.socialAction.delete({
            where: { id },
            include: {
                causes: true,
                ong: true,
            },
        });
        return deletedAction as SocialAction;
    }

    async getAllSocialActions(): Promise<SocialAction[]> {
        return await this.prisma.socialAction.findMany({
            include: {
                causes: true,
                ong: true,
            },
        }) as SocialAction[];
    }

    async getSocialActionsByOngId(ongId: number): Promise<SocialAction[]> {
        return await this.prisma.socialAction.findMany({
            where: { ong_id: ongId },
            include: {
                causes: true,
                ong: true,
            },
        }) as SocialAction[];
    }

    async getSocialActionsByCausesId(causesId: number): Promise<SocialAction[]> {
        return await this.prisma.socialAction.findMany({
            where: { causes_id: causesId },
            include: {
                causes: true,
                ong: true,
            },
        }) as SocialAction[];
    }
}

export default SocialActionService;