import { Router } from 'express';
import { UserController } from './userController';
import { authenticate } from '../middlewares/middleware';

const userController = new UserController();

export function setUserRoutes(app: Router) {
  app.post(
    '/users',
    userController.createUser.bind(userController),
  );
  app.post(
    '/users-with-school',
    userController.createUserWithSchool.bind(
      userController,
    ),
  );
  app.get(
    '/users/me',
    authenticate,
    userController.getAuthUser.bind(userController),
  );
  app.get(
    '/users',
    authenticate,
    userController.getAllUsers.bind(userController),
  );
  app.get(
    '/users/:id',
    authenticate,
    userController.getUser.bind(userController),
  );
  app.put(
    '/users/:id',
    authenticate,
    userController.updateUser.bind(userController),
  );
  app.delete(
    '/users/:id',
    authenticate,
    userController.deleteUser.bind(userController),
  );
}
