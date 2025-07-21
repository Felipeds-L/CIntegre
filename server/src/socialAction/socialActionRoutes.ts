import { Router } from "express";
import { SocialActionController } from "./socialActionController";

const router = Router();
const socialActionController = new SocialActionController();

export function setSocialActionRoutes(app: Router) {
    app.post('/socialActions', socialActionController.createSocialAction.bind(socialActionController));
    app.get('/socialActions/:id', socialActionController.getSocialAction.bind(socialActionController));
    app.put('/socialActions/:id', socialActionController.updateSocialAction.bind(socialActionController));
    app.delete('/socialActions/:id', socialActionController.deleteSocialAction.bind(socialActionController));
    app.get('/socialActions', socialActionController.getAllSocialActions.bind(socialActionController));
    app.get('/socialActions/causes/:causesId', socialActionController.getSocialActionsByCausesId.bind(socialActionController));
    app.get('/socialActions/ong/:ongId', socialActionController.getSocialActionsByOngId.bind(socialActionController));
}