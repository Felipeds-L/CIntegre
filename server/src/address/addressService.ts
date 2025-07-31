import { PrismaClient } from '@prisma/client';
import { Address, AddressCreateDTO } from './addressDto';

export class AddressService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createAddress(data: AddressCreateDTO): Promise<Address> {
    return await this.prisma.address.create({
      data: {
        street: data.street,
        house_number: data.house_number,
        complement: data?.complement,
        cep: data.cep,
        city: data.city,
        state: data.state,
      },
    });
  }

  async getAddress(id: number): Promise<Address | null> {
    return await this.prisma.address.findUnique({
      where: { id },
    });
  }

  async updateAddress(
    id: number,
    data: Partial<AddressCreateDTO>,
  ): Promise<Address> {
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
