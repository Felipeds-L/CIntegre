import { Router } from 'express';
import { UserController } from './userController';

const router = Router();
const userController = new UserController();

export function setUserRoutes(app: Router) {
    app.post('/users', userController.createUser.bind(userController));
    app.get('/users/:id', userController.getUser.bind(userController));
    app.put('/users/:id', userController.updateUser.bind(userController));
    app.delete('/users/:id', userController.deleteUser.bind(userController));
    app.get('/users', userController.getAllUsers.bind(userController));
}