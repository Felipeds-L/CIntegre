import { Router } from "express";
import { CausesController } from "./causesController";

const router = Router();
const causesController = new CausesController();

export function setCausesRoutes(app: Router) {
    app.post('/causes', causesController.createCauses.bind(causesController));
    app.get('/causes/:id', causesController.getCauses.bind(causesController));
    app.put('/causes/:id', causesController.updateCauses.bind(causesController));
    app.delete('/causes/:id', causesController.deleteCauses.bind(causesController));
    app.get('/causes', causesController.getAllCauses.bind(causesController));
    app.get('/causes/ong/:ongId', causesController.getCausesByOngId.bind(causesController));
}