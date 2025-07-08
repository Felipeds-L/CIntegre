import { Request, Response } from 'express';
import SchoolService from '../services/schoolService';

export class SchoolController {
    private schoolService: SchoolService;

    constructor() {
        this.schoolService = new SchoolService();
    }

    public async createSchool(req: Request, res: Response): Promise<void> {
        try {
            const schoolData = req.body;
            const newSchool = await this.schoolService.createSchool(schoolData);
            res.status(201).json(newSchool);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async getSchool(req: Request, res: Response): Promise<void> {
        try {
            const schoolId = req.params.id;
            const school = await this.schoolService.getSchool(schoolId);
            if (school) {
                res.status(200).json(school);
            } else {
                res.status(404).json({ message: 'School not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async updateSchool(req: Request, res: Response): Promise<void> {
        try {
            const schoolId = req.params.id;
            const schoolData = req.body;
            const updatedSchool = await this.schoolService.updateSchool(schoolId, schoolData);
            if (updatedSchool) {
                res.status(200).json(updatedSchool);
            } else {
                res.status(404).json({ message: 'School not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async deleteSchool(req: Request, res: Response): Promise<void> {
        try {
            const schoolId = req.params.id;
            const deletedSchool = await this.schoolService.deleteSchool(schoolId);
            if (deletedSchool) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'School not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async getAllSchools(req: Request, res: Response): Promise<void> {
        try {
            const schools = await this.schoolService.getAllSchools();
            res.status(200).json(schools);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}