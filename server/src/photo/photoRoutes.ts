import { Router } from 'express';
import { PhotoController } from './photoController';

const router = Router();
const photoController = new PhotoController();

export function setPhotoRoutes(app: Router) {
    app.post('/photos', photoController.createPhoto.bind(photoController));
    app.get('/photos/:id', photoController.getPhoto.bind(photoController));
    app.put('/photos/:id', photoController.updatePhoto.bind(photoController));
    app.delete('/photos/:id', photoController.deletePhoto.bind(photoController));
    app.get('/photos', photoController.getAllPhotos.bind(photoController));
}