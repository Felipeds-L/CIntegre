import { Request, Response } from 'express';
import { AddressService } from './addressService';

export class AddressController {
    private addressService: AddressService;

    constructor() {
        this.addressService = new AddressService();
    }

    public async createAddress(req: Request, res: Response): Promise<void> {
        try {
            const address = await this.addressService.createAddress(req.body);
            res.status(201).json(address);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    public async getAllAddress(req: Request, res: Response): Promise<void>{
        try {
            const address = await this.addressService.getAllAddresses();
            res.status(200).json(address);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    public async getAddress(req: Request, res: Response): Promise<void> {
        try {
            const address = await this.addressService.getAddress(Number(req.params.id));
            if (!address) {
                res.status(404).json({ message: 'Address not found' });
                return;
            }
            res.status(200).json(address);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    public async updateAddress(req: Request, res: Response): Promise<void> {
        try {
            const updatedAddress = await this.addressService.updateAddress(Number(req.params.id), req.body);
            if (!updatedAddress) {
                res.status(404).json({ message: 'Address not found' });
                return;
            }
            res.status(200).json(updatedAddress);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    public async deleteAddress(req: Request, res: Response): Promise<void> {
        try {
            const deleted = await this.addressService.deleteAddress(Number(req.params.id));
            if (!deleted) {
                res.status(404).json({ message: 'Address not found' });
                return;
            }
            res.status(204).send();
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}