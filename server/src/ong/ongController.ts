import { Request, Response } from 'express';
import { OngService } from './ongService';

export class OngController {
  private ongService: OngService;

  constructor() {
    this.ongService = new OngService();
  }

  public async createOng(req: Request, res: Response): Promise<void> {
    try {
      const ongData = req.body;
      const newOng = await this.ongService.createOng(ongData);
      res.status(201).json(newOng);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async getOng(req: Request, res: Response): Promise<void> {
    try {
      const ongId = Number(req.params.id);
      const ong = await this.ongService.getOng(ongId);
      if (ong) {
        res.status(200).json(ong);
      } else {
        res.status(404).json({ message: 'Ong not found' });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async updateOng(req: Request, res: Response): Promise<void> {
    try {
      const ongId = Number(req.params.id);
      const ongData = req.body;
      const updatedOng = await this.ongService.updateOng(ongId, ongData);
      if (updatedOng) {
        res.status(200).json(updatedOng);
      } else {
        res.status(404).json({ message: 'Ong not found' });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async deleteOng(req: Request, res: Response): Promise<void> {
    try {
      const ongId = Number(req.params.id);
      const deletedOng = await this.ongService.deleteOng(ongId);
      if (deletedOng) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: 'Ong not found' });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async getAllOngs(req: Request, res: Response): Promise<void> {
    try {
      const ongs = await this.ongService.getAllOngs();
      res.status(200).json(ongs);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}
