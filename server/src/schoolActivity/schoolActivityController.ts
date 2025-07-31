import { Request, Response } from 'express';
import { SchoolActivityService } from './schoolActivityService';

export class SchoolActivityController {
  private schoolActivityService: SchoolActivityService;

  constructor() {
    this.schoolActivityService = new SchoolActivityService();
  }

  public async createSchoolActivity(
    req: Request,
    res: Response,
  ): Promise<void> {
    try {
      const schoolActivityData = req.body;
      const newSchoolActivity =
        await this.schoolActivityService.createSchoolActivity(
          schoolActivityData,
        );
      res.status(201).json(newSchoolActivity);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async getSchoolActivity(req: Request, res: Response): Promise<void> {
    try {
      const schoolActionId = Number(req.params.id);
      const schoolAction = await this.schoolActivityService.getSchoolActivity(
        schoolActionId,
      );
      if (schoolAction) {
        res.status(200).json(schoolAction);
      } else {
        res.status(404).json({ message: 'School action not found' });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async updateSchoolActivity(
    req: Request,
    res: Response,
  ): Promise<void> {
    try {
      const schoolActionId = Number(req.params.id);
      const schoolActionData = req.body;
      const updatedSchoolAction =
        await this.schoolActivityService.updateSchoolActivity(
          schoolActionId,
          schoolActionData,
        );
      if (updatedSchoolAction) {
        res.status(200).json(updatedSchoolAction);
      } else {
        res.status(404).json({ message: 'School action not found' });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async deleteSchoolActivity(
    req: Request,
    res: Response,
  ): Promise<void> {
    try {
      const schoolActionId = Number(req.params.id);
      const deletedSchoolAction =
        await this.schoolActivityService.deleteSchoolActivity(schoolActionId);
      if (deletedSchoolAction) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: 'School action not found' });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async getAllSchoolActivities(
    req: Request,
    res: Response,
  ): Promise<void> {
    try {
      const schoolActions =
        await this.schoolActivityService.getAllSchoolActivities();
      res.status(200).json(schoolActions);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async getSchoolActivitiesBySchoolId(
    req: Request,
    res: Response,
  ): Promise<void> {
    try {
      const schoolId = Number(req.params.schoolId);
      const schoolActions =
        await this.schoolActivityService.getSchoolActivitiesBySchoolId(
          schoolId,
        );
      res.status(200).json(schoolActions);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}
