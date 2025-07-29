import { Request, Response } from 'express';
import { SchoolService } from './schoolService';

export class SchoolController {
  private schoolService: SchoolService;

  constructor() {
    this.schoolService = new SchoolService();
  }

  public async createSchool(req: Request, res: Response): Promise<Response> {
    const { name, student_quantity, score, phone_number, address_id } =
      req.body;
    if (!name || !student_quantity || !score || !phone_number || !address_id) {
      return res.status(400).json({ error: 'Missing a required field' });
    }
    try {
      const schoolData = req.body;
      console.log(schoolData);
      const newSchool = await this.schoolService.createSchool(schoolData);
      return res.status(201).json(newSchool);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  public async getSchool(req: Request, res: Response): Promise<void> {
    try {
      const schoolId = Number(req.params.id);
      const school = await this.schoolService.getSchool(schoolId);
      if (school) {
        res.status(200).json(school);
      } else {
        res.status(404).json({ error: 'School not found' });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async updateSchool(req: Request, res: Response): Promise<void> {
    try {
      const schoolId = Number(req.params.id);
      const schoolData = req.body;
      const updatedSchool = await this.schoolService.updateSchool(
        schoolId,
        schoolData,
      );
      if (updatedSchool) {
        res.status(200).json(updatedSchool);
      } else {
        res.status(404).json({ error: 'School not found' });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async deleteSchool(req: Request, res: Response): Promise<Response> {
    try {
      const schoolId = Number(req.params.id);
      const deletedSchool = await this.schoolService.deleteSchool(schoolId);
      if (deletedSchool) {
        return res.status(204).send();
      } else {
        return res.status(404).json({ error: 'School not found' });
      }
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  public async getAllSchools(req: Request, res: Response): Promise<Response> {
    try {
      const schools = await this.schoolService.getAllSchools();
      return res.status(200).json(schools);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}
