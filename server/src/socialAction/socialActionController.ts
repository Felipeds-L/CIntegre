import { Request, Response } from "express";
import SocialActionService from "./socialActionService";

export class SocialActionController {
    private socialActionService: SocialActionService;

    constructor() {
        this.socialActionService = new SocialActionService();
    }

    public async createSocialAction(req: Request, res: Response): Promise<void> {
        try {
            const socialActionData = req.body;
            const newSocialAction = await this.socialActionService.createSocialAction(socialActionData);
            res.status(201).json(newSocialAction);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async getSocialAction(req: Request, res: Response): Promise<void> {
        try {
            const socialActionId = Number(req.params.id);
            const socialAction = await this.socialActionService.getSocialAction(socialActionId);
            if (socialAction) {
                res.status(200).json(socialAction);
            } else {
                res.status(404).json({ message: 'Social action not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async updateSocialAction(req: Request, res: Response): Promise<void> {
        try {
            const socialActionId = Number(req.params.id);
            const socialActionData = req.body;
            const updatedSocialAction = await this.socialActionService.updateSocialAction(socialActionId, socialActionData);
            if (updatedSocialAction) {
                res.status(200).json(updatedSocialAction);
            } else {
                res.status(404).json({ message: 'Social action not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async deleteSocialAction(req: Request, res: Response): Promise<void> {
        try {
            const socialActionId = Number(req.params.id);
            const deletedSocialAction = await this.socialActionService.deleteSocialAction(socialActionId);
            if (deletedSocialAction) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Social action not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async getAllSocialActions(req: Request, res: Response): Promise<void> {
        try {
            const socialActions = await this.socialActionService.getAllSocialActions();
            res.status(200).json(socialActions);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async getSocialActionsByOngId(req: Request, res: Response): Promise<void> {
        try {
            const ongId = Number(req.params.ongId);
            const socialActions = await this.socialActionService.getSocialActionsByOngId(ongId);
            res.status(200).json(socialActions);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async getSocialActionsByCausesId(req: Request, res: Response): Promise<void> {
        try {
            const causesId = Number(req.params.causesId);
            const socialActions = await this.socialActionService.getSocialActionsByCausesId(causesId);
            res.status(200).json(socialActions);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}