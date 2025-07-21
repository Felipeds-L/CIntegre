import { PrismaClient } from "@prisma/client";
import { Photo } from "./photoDto";

class PhotoService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async createPhoto(data: Omit<Photo, 'id'>): Promise<Photo> {
        return await this.prisma.photo.create({
            data,
        });
    }

    async getPhoto(id: number): Promise<Photo | null> {
        return await this.prisma.photo.findUnique({
            where: { id },
        });
    }

    async updatePhoto(id: number, data: Partial<Omit<Photo, 'id'>>): Promise<Photo> {
        return await this.prisma.photo.update({
            where: { id },
            data,
        });
    }

    async deletePhoto(id: number): Promise<Photo> {
        return await this.prisma.photo.delete({
            where: { id },
        });
    }

    async getAllPhotos(): Promise<Photo[]> {
        return await this.prisma.photo.findMany();
    }
}

export default PhotoService;