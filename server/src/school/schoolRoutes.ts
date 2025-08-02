import { Router } from 'express';
import { SchoolController } from './schoolController';
import { authenticate } from '../middlewares/middleware';
const schoolController = new SchoolController();

export function setSchoolRoutes(app: Router) {
  app.post(
    '/schools',
    authenticate,
    schoolController.createSchool.bind(schoolController),
  );
  app.get(
    '/schools/:id',
    authenticate,
    schoolController.getSchool.bind(schoolController),
  );
  app.put(
    '/schools/:id',
    authenticate,
    schoolController.updateSchool.bind(schoolController),
  );
  app.delete(
    '/schools/:id',
    authenticate,
    schoolController.deleteSchool.bind(schoolController),
  );
  app.get(
    '/schools',
    authenticate,
    schoolController.getAllSchools.bind(schoolController),
  );
}
