import { Router } from 'express';
import { ActivityController } from './activityController';

const router = Router();
const activityController = new ActivityController();

export function setActivityRoutes(app: Router) {
  app.post(
    '/activities',
    activityController.createActivity.bind(activityController),
  );
  app.get(
    '/activities/:id',
    activityController.getActivity.bind(activityController),
  );
  app.put(
    '/activities/:id',
    activityController.updateActivity.bind(activityController),
  );
  app.delete(
    '/activities/:id',
    activityController.deleteActivity.bind(activityController),
  );
  app.get(
    '/activities',
    activityController.getAllActivities.bind(activityController),
  );
  app.get(
    '/activities/ong/:ongId',
    activityController.getActivityByOngId.bind(activityController),
  );
}
