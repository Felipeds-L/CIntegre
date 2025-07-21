import { PrismaClient } from "@prisma/client";
import { Causes, CausesCreateDTO } from "./causesDto";
import e from "express";

class CausesService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async createCauses(data: CausesCreateDTO): Promise<Causes> {
        const createdCauses = await this.prisma.causes.create({
            data: {
                name: data.name,
                description: data.description,
                ong: {
                    connect: { id: data.ong_id } // Connect to an existing School
                },
            },
            include: {
                ong: true,
            },
        });

        return createdCauses as Causes;
    }

    async getCauses(id: number): Promise<Causes | null> {
        return await this.prisma.causes.findUnique({
            where: { id },
            include: {
                ong: true,
                school_action: true,
                social_action: true,
            },
        }) as Causes | null; 
    }

    async updateCauses(id: number, data: Partial<CausesCreateDTO>): Promise<Causes> {
        const updateData: any = { ...data }; // Start with all provided data
        // If ong_id is provided in data, transform it for Prisma's connect
        if (data.ong_id !== undefined) {
            updateData.ong = { connect: { id: data.ong_id } };
            delete updateData.ong_id; // Remove the direct foreign key as Prisma expects 'connect'
        }
        const updatedCauses = await this.prisma.causes.update({
            where: { id },
            data: updateData, // Use the transformed data
            include: {
                ong: true,
                school_action: true,
                social_action: true,
            },
        });
        return updatedCauses as Causes;
    }

    async deleteCauses(id: number): Promise<void> {
        await this.prisma.causes.delete({
            where: { id },
        });
    }

    async getAllCauses(): Promise<Causes[]> {
        return await this.prisma.causes.findMany({
            include: {
                ong: true,
                school_action: true,
                social_action: true,
            },
        }) as Causes[];
    }

    async getCausesByOngId(ongId: number): Promise<Causes[]> {
        return await this.prisma.causes.findMany({
            where: { ong_id: ongId },
            include: {
                ong: true,
                school_action: true,
                social_action: true,
            },
        }) as Causes[];
    }
}

export default CausesService;