import { Router } from 'express';
import { SchoolController } from './schoolController';

const router = Router();
const schoolController = new SchoolController();

export function setSchoolRoutes(app: Router) {
    app.post('/schools', schoolController.createSchool.bind(schoolController));
    app.get('/schools/:id', schoolController.getSchool.bind(schoolController));
    app.put('/schools/:id', schoolController.updateSchool.bind(schoolController));
    app.delete('/schools/:id', schoolController.deleteSchool.bind(schoolController));
    app.get('/schools', schoolController.getAllSchools.bind(schoolController));
}