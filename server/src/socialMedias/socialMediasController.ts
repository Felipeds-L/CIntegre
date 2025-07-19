import { Request, Response } from 'express';
import SocialMediasService from './socialMediasService';

export class SocialMediasController {
    private socialMediaService: SocialMediasService;

    constructor() {
        this.socialMediaService = new SocialMediasService();
    }

    public async createSocialMedia(req: Request, res: Response): Promise<void> {
        try {
            const socialMediaData = req.body;
            const newSocialMedia = await this.socialMediaService.createSocialMedia(socialMediaData);
            res.status(201).json(newSocialMedia);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async getSocialMedia(req: Request, res: Response): Promise<void> {
        try {
            const socialMediaId = Number(req.params.id);
            const socialMedia = await this.socialMediaService.getSocialMedia(socialMediaId);
            if (socialMedia) {
                res.status(200).json(socialMedia);
            } else {
                res.status(404).json({ message: 'Social Media not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async updateSocialMedia(req: Request, res: Response): Promise<void> {
        try {
            const socialMediaId = Number(req.params.id);
            const socialMediaData = req.body;
            const updatedSocialMedia = await this.socialMediaService.updateSocialMedia(socialMediaId, socialMediaData);
            if (updatedSocialMedia) {
                res.status(200).json(updatedSocialMedia);
            } else {
                res.status(404).json({ message: 'Social Media not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async deleteSocialMedias(req: Request, res: Response): Promise<void> {
        try {
            const socialMediaId = Number(req.params.id);
            const deletedSocialMedia = await this.socialMediaService.deleteSocialMedia(socialMediaId);
            if (deletedSocialMedia) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Social Media not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async getAllSocialMedias(req: Request, res: Response): Promise<void> {
        try {
            const socialMedias = await this.socialMediaService.getAllSocialMedias();
            res.status(200).json(socialMedias);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}