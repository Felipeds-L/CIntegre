import { Request, Response } from 'express';
import { ActivityService } from './activityService';

export class ActivityController {
  private activityService: ActivityService;

  constructor() {
    this.activityService = new ActivityService();
  }

  public async createActivity(req: Request, res: Response): Promise<void> {
    try {
      const {title, photos, description, category, area_expertise, status, pontuation, ong_id, ong} = req.body

      if (!title || !photos || !description || !category || !area_expertise || !status || !pontuation || !ong_id || !ong){
        res.status(400).json({error: 'Missing a required field'})
      }
      const activityData = req.body;

      const newActivity = await this.activityService.createActivity(
        activityData,
      );

      res.status(201).json(newActivity);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async getActivity(req: Request, res: Response): Promise<void> {
    try {
      const activityId = Number(req.params.id);
      const activity = await this.activityService.getActivity(activityId);
      if (activity) {
        res.status(200).json(activity);
      } else {
        res.status(404).json({ error: 'Social action not found' });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async updateActivity(req: Request, res: Response): Promise<void> {
    try {
      const activityId = Number(req.params.id);
      const activityData = req.body;

      const updatedActivity = await this.activityService.updateActivity(
        activityId,
        activityData,
      );

      if (updatedActivity) {
        res.status(200).json(updatedActivity);
      } else {
        res.status(404).json({ message: 'Social action not found' });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async deleteActivity(req: Request, res: Response): Promise<void> {
    try {
      const activityId = Number(req.params.id);
      const deletedActivity = await this.activityService.deleteActivity(
        activityId,
      );

      if (deletedActivity) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: 'Social action not found' });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async getAllActivities(req: Request, res: Response): Promise<void> {
    try {
      const activities = await this.activityService.getAllActivities();

      res.status(200).json(activities);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async getActivityByOngId(req: Request, res: Response): Promise<void> {
    try {
      const ongId = Number(req.params.ongId);
      const activities = await this.activityService.getActivitiesByOngId(ongId);
      res.status(200).json(activities);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}
