import { PrismaClient } from "@prisma/client";
import { SchoolAction, SchoolActionCreateDTO } from "./schoolActionDto";

class SchoolActionService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async createSchoolAction(data: SchoolActionCreateDTO): Promise<SchoolAction> {
        const createdAction = await this.prisma.schoolAction.create({
            data: {
                school: {
                    connect: { id: data.school_id } // Connect to an existing School
                },
                causes: {
                    connect: { id: data.causes_id } // Connect to an existing Causes
                },
                status: data.status,
                registers: data.registers,
                pontuation: data.pontuation,
            },
            
            include: {
                school: true,
                causes: true,
            },
        });

        return createdAction as SchoolAction;
    }

    async getSchoolAction(id: number): Promise<SchoolAction | null> {
        return await this.prisma.schoolAction.findUnique({
            where: { id },
            include: {
                school: true,
                causes: true,
            },
        }) as SchoolAction | null; 
    }

    async updateSchoolAction(id: number, data: Partial<SchoolActionCreateDTO>): Promise<SchoolAction> {
        const updateData: any = { ...data }; // Start with all provided data

        // If school_id is provided in data, transform it for Prisma's connect
        if (data.school_id !== undefined) {
            updateData.school = { connect: { id: data.school_id } };
            delete updateData.school_id; // Remove the direct foreign key as Prisma expects 'connect'
        }
        // If causes_id is provided in data, transform it for Prisma's connect
        if (data.causes_id !== undefined) {
            updateData.causes = { connect: { id: data.causes_id } };
            delete updateData.causes_id; // Remove the direct foreign key
        }

        const updatedAction = await this.prisma.schoolAction.update({
            where: { id },
            data: updateData, // Use the transformed data
            include: {
                school: true,
                causes: true,
            },
        });
        return updatedAction as SchoolAction;
    }


    async deleteSchoolAction(id: number): Promise<SchoolAction> {
        const deletedAction = await this.prisma.schoolAction.delete({
            where: { id },
            include: {
                school: true,
                causes: true,
            },
        });
        return deletedAction as SchoolAction;
    }

    async getAllSchoolActions(): Promise<SchoolAction[]> {
        return await this.prisma.schoolAction.findMany({
            include: {
                school: true,
                causes: true,
            },
        }) as SchoolAction[];
    }

    async getSchoolActionsBySchoolId(schoolId: number): Promise<SchoolAction[]> {
        return await this.prisma.schoolAction.findMany({
            where: { school_id: schoolId },
            include: {
                school: true,
                causes: true,
            },
        }) as SchoolAction[];
    }

    async getSchoolActionsByCausesId(causesId: number): Promise<SchoolAction[]> {
        return await this.prisma.schoolAction.findMany({
            where: { causes_id: causesId },
            include: {
                school: true,
                causes: true,
            },
        }) as SchoolAction[];
    }
}

export default SchoolActionService;