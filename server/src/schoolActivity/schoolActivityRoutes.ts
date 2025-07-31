import { Router } from 'express';
import { SchoolActivityController } from './schoolActivityController';

const router = Router();
const schoolActivityController = new SchoolActivityController();

export function setSchoolActivityRoutes(app: Router) {
  app.post(
    '/schoolActivities',
    schoolActivityController.createSchoolActivity.bind(
      schoolActivityController,
    ),
  );
  app.get(
    '/schoolActivities/:id',
    schoolActivityController.getSchoolActivity.bind(schoolActivityController),
  );
  app.put(
    '/schoolActivities/:id',
    schoolActivityController.updateSchoolActivity.bind(
      schoolActivityController,
    ),
  );
  app.delete(
    '/schoolActivities/:id',
    schoolActivityController.deleteSchoolActivity.bind(
      schoolActivityController,
    ),
  );
  app.get(
    '/schoolActivities',
    schoolActivityController.getAllSchoolActivities.bind(
      schoolActivityController,
    ),
  );
  app.get(
    '/schoolActivities/school/:schoolId',
    schoolActivityController.getSchoolActivitiesBySchoolId.bind(
      schoolActivityController,
    ),
  );
}
