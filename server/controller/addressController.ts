import { Request, Response } from 'express';
import { AddressService } from '../services/addressService';

export class AddressController {
    private addressService: AddressService;

    constructor() {
        this.addressService = new AddressService();
    }

    public async createAddress(req: Request, res: Response): Promise<void> {
        try {
            const address = await this.addressService.createAddress(req.body);
            res.status(201).json(address);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async getAddress(req: Request, res: Response): Promise<void> {
        try {
            const address = await this.addressService.getAddress(req.params.id);
            if (!address) {
                res.status(404).json({ message: 'Address not found' });
                return;
            }
            res.status(200).json(address);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async updateAddress(req: Request, res: Response): Promise<void> {
        try {
            const updatedAddress = await this.addressService.updateAddress(req.params.id, req.body);
            if (!updatedAddress) {
                res.status(404).json({ message: 'Address not found' });
                return;
            }
            res.status(200).json(updatedAddress);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async deleteAddress(req: Request, res: Response): Promise<void> {
        try {
            const deleted = await this.addressService.deleteAddress(req.params.id);
            if (!deleted) {
                res.status(404).json({ message: 'Address not found' });
                return;
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}