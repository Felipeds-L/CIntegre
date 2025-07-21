import { Request, Response } from "express";
import SchoolActionService from "./schoolActionService";

export class SchoolActionController {
    private schoolActionService: SchoolActionService;

    constructor() {
        this.schoolActionService = new SchoolActionService();
    }

    public async createSchoolAction(req: Request, res: Response): Promise<void> {
        try {
            const schoolActionData = req.body;
            const newSchoolAction = await this.schoolActionService.createSchoolAction(schoolActionData);
            res.status(201).json(newSchoolAction);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async getSchoolAction(req: Request, res: Response): Promise<void> {
        try {
            const schoolActionId = Number(req.params.id);
            const schoolAction = await this.schoolActionService.getSchoolAction(schoolActionId);
            if (schoolAction) {
                res.status(200).json(schoolAction);
            } else {
                res.status(404).json({ message: 'School action not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async updateSchoolAction(req: Request, res: Response): Promise<void> {
        try {
            const schoolActionId = Number(req.params.id);
            const schoolActionData = req.body;
            const updatedSchoolAction = await this.schoolActionService.updateSchoolAction(schoolActionId, schoolActionData);
            if (updatedSchoolAction) {
                res.status(200).json(updatedSchoolAction);
            } else {
                res.status(404).json({ message: 'School action not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async deleteSchoolAction(req: Request, res: Response): Promise<void> {
        try {
            const schoolActionId = Number(req.params.id);
            const deletedSchoolAction = await this.schoolActionService.deleteSchoolAction(schoolActionId);
            if (deletedSchoolAction) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'School action not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async getAllSchoolActions(req: Request, res: Response): Promise<void> {
        try {
            const schoolActions = await this.schoolActionService.getAllSchoolActions();
            res.status(200).json(schoolActions);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async getSchoolActionsBySchoolId(req: Request, res: Response): Promise<void> {
        try {
            const schoolId = Number(req.params.schoolId);
            const schoolActions = await this.schoolActionService.getSchoolActionsBySchoolId(schoolId);
            res.status(200).json(schoolActions);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async getSchoolActionsByCausesId(req: Request, res: Response): Promise<void> {
        try {
            const causesId = Number(req.params.causesId);
            const schoolActions = await this.schoolActionService.getSchoolActionsByCausesId(causesId);
            res.status(200).json(schoolActions);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}