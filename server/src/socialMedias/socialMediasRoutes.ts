import { Router } from 'express';
import { SocialMediasController } from './socialMediasController';

const router = Router();
const socialMediasController = new SocialMediasController();

export function setSocialMediasRoutes(app: Router) {
    app.post('/ongs', socialMediasController.createSocialMedia.bind(socialMediasController));
    app.get('/ongs/:id', socialMediasController.getSocialMedia.bind(socialMediasController));
    app.put('/ongs/:id', socialMediasController.updateSocialMedia.bind(socialMediasController));
    app.delete('/ongs/:id', socialMediasController.deleteSocialMedias.bind(socialMediasController));
    app.get('/ongs', socialMediasController.getAllSocialMedias.bind(socialMediasController));
}