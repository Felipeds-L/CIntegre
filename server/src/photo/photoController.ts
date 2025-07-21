import { Request, Response } from 'express';
import PhotoService from './photoService';

export class PhotoController {
    private photoService: PhotoService;

    constructor() {
        this.photoService = new PhotoService();
    }

    public async createPhoto(req: Request, res: Response): Promise<void> {
        try {
            const photoData = req.body;
            const newPhoto = await this.photoService.createPhoto(photoData);
            res.status(201).json(newPhoto);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async getPhoto(req: Request, res: Response): Promise<void> {
        try {
            const photoId = Number(req.params.id);
            const photo = await this.photoService.getPhoto(photoId);
            if (photo) {
                res.status(200).json(photo);
            } else {
                res.status(404).json({ message: 'Photo not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async updatePhoto(req: Request, res: Response): Promise<void> {
        try {
            const photoId = Number(req.params.id);
            const photoData = req.body;
            const updatedPhoto = await this.photoService.updatePhoto(photoId, photoData);
            if (updatedPhoto) {
                res.status(200).json(updatedPhoto);
            } else {
                res.status(404).json({ message: 'Photo not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async deletePhoto(req: Request, res: Response): Promise<void> {
        try {
            const photoId = Number(req.params.id);
            const deletedPhoto = await this.photoService.deletePhoto(photoId);
            if (deletedPhoto) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Photo not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async getAllPhotos(req: Request, res: Response): Promise<void> {
        try {
            const photos = await this.photoService.getAllPhotos();
            res.status(200).json(photos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}