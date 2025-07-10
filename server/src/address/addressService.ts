import { PrismaClient } from '@prisma/client';
import { Address } from './addressDto';

export class AddressService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async createAddress(data: Omit<Address, 'id'>): Promise<Address> {
        return await this.prisma.address.create({
            data,
        });
    }

    async getAddress(id: number): Promise<Address | null> {
        return await this.prisma.address.findUnique({
            where: { id },
        });
    }

    async updateAddress(id: number, data: Partial<Omit<Address, 'id'>>): Promise<Address> {
        return await this.prisma.address.update({
            where: { id },
            data,
        });
    }

    async deleteAddress(id: number): Promise<Address> {
        return await this.prisma.address.delete({
            where: { id },
        });
    }

    async getAllAddresses(): Promise<Address[]> {
        return await this.prisma.address.findMany();
    }
}