import { Router } from "express";
import { SchoolActionController } from "./schoolActionController";

const router = Router();
const schoolActionController = new SchoolActionController();

export function setSchoolActionRoutes(app: Router) {
    app.post('/schoolActions', schoolActionController.createSchoolAction.bind(schoolActionController));
    app.get('/schoolActions/:id', schoolActionController.getSchoolAction.bind(schoolActionController));
    app.put('/schoolActions/:id', schoolActionController.updateSchoolAction.bind(schoolActionController));
    app.delete('/schoolActions/:id', schoolActionController.deleteSchoolAction.bind(schoolActionController));
    app.get('/schoolActions', schoolActionController.getAllSchoolActions.bind(schoolActionController));
    app.get('/schoolActions/school/:schoolId', schoolActionController.getSchoolActionsBySchoolId.bind(schoolActionController));
    app.get('/schoolActions/causes/:causesId', schoolActionController.getSchoolActionsByCausesId.bind(schoolActionController));
}