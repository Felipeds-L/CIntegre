import { Router } from 'express';
import { SchoolActivityController } from './schoolActivityController';
import { authenticate } from '../middlewares/middleware';

const schoolActivityController =
  new SchoolActivityController();

export function setSchoolActivityRoutes(app: Router) {
  app.post(
    '/schoolActivities',
    authenticate,
    schoolActivityController.createSchoolActivity.bind(
      schoolActivityController,
    ),
  );
  app.get(
    '/schoolActivities/:id',
    authenticate,
    schoolActivityController.getSchoolActivity.bind(
      schoolActivityController,
    ),
  );
  app.put(
    '/schoolActivities/:id',
    authenticate,
    schoolActivityController.updateSchoolActivity.bind(
      schoolActivityController,
    ),
  );
  app.delete(
    '/schoolActivities/:id',
    authenticate,
    schoolActivityController.deleteSchoolActivity.bind(
      schoolActivityController,
    ),
  );
  app.get(
    '/schoolActivities',
    authenticate,
    schoolActivityController.getAllSchoolActivities.bind(
      schoolActivityController,
    ),
  );
  app.get(
    '/schoolActivities/school/:schoolId',
    authenticate,
    schoolActivityController.getSchoolActivitiesBySchoolId.bind(
      schoolActivityController,
    ),
  );
}
