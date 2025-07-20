import { Router } from 'express';
import { SocialMediasController } from './socialMediasController';

const router = Router();
const socialMediasController = new SocialMediasController();

export function setSocialMediasRoutes(app: Router) {
    app.post('/socialMedias', socialMediasController.createSocialMedia.bind(socialMediasController));
    app.get('/socialMedias/:id', socialMediasController.getSocialMedia.bind(socialMediasController));
    app.put('/socialMedias/:id', socialMediasController.updateSocialMedia.bind(socialMediasController));
    app.delete('/socialMedias/:id', socialMediasController.deleteSocialMedias.bind(socialMediasController));
    app.get('/socialMedias', socialMediasController.getAllSocialMedias.bind(socialMediasController));
}