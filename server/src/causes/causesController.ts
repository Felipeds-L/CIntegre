import { Request, Response } from "express";
import CausesService from "./causesService";

export class CausesController {
    private causesService: CausesService;

    constructor() {
        this.causesService = new CausesService();
    }

    public async createCauses(req: Request, res: Response): Promise<void> {
        try {
            const causesData = req.body;
            const newCauses = await this.causesService.createCauses(causesData);
            res.status(201).json(newCauses);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async getCauses(req: Request, res: Response): Promise<void> {
        try {
            const causesId = Number(req.params.id);
            const causes = await this.causesService.getCauses(causesId);
            if (causes) {
                res.status(200).json(causes);
            } else {
                res.status(404).json({ message: 'Causes not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async updateCauses(req: Request, res: Response): Promise<void> {
        try {
            const causesId = Number(req.params.id);
            const causesData = req.body;
            const updatedCauses = await this.causesService.updateCauses(causesId, causesData);
            if (updatedCauses) {
                res.status(200).json(updatedCauses);
            } else {
                res.status(404).json({ message: 'Causes not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async deleteCauses(req: Request, res: Response): Promise<void> {
        try {
            const causesId = Number(req.params.id);
            await this.causesService.deleteCauses(causesId);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async getAllCauses(req: Request, res: Response): Promise<void> {
        try {
            const causes = await this.causesService.getAllCauses();
            res.status(200).json(causes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async getCausesByOngId(req: Request, res: Response): Promise<void> {
        try {
            const ongId = Number(req.params.ongId);
            const causes = await this.causesService.getCausesByOngId(ongId);
            if (causes) {
                res.status(200).json(causes);
            } else {
                res.status(404).json({ message: 'No causes found for this ONG' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}