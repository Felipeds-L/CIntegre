import { Router } from 'express';
import { ActivityController } from './activityController';
import { authenticate } from '../middlewares/middleware';

const activityController = new ActivityController();

export function setActivityRoutes(app: Router) {
  app.post(
    '/activities',
    authenticate,
    activityController.createActivity.bind(
      activityController,
    ),
  );
  app.get(
    '/activities/:id',
    authenticate,
    activityController.getActivity.bind(activityController),
  );
  app.put(
    '/activities/:id',
    authenticate,
    activityController.updateActivity.bind(
      activityController,
    ),
  );
  app.delete(
    '/activities/:id',
    authenticate,
    activityController.deleteActivity.bind(
      activityController,
    ),
  );
  app.get(
    '/activities',
    activityController.getAllActivities.bind(
      activityController,
    ),
  );
  app.get(
    '/activities/ong/:ongId',
    authenticate,
    activityController.getActivityByOngId.bind(
      activityController,
    ),
  );
}
