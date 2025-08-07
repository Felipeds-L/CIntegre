import { Request, Response } from 'express';
import { UserService } from './userService';
import { SchoolService } from '../school/schoolService';

export class UserController {
  private userService: UserService;
  private schoolService: SchoolService;

  constructor() {
    this.userService = new UserService();
    this.schoolService = new SchoolService();
  }

  public async createUser(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        return res
          .status(400)
          .json({ error: 'Missing a required field' });
      }

      const createdUser = await this.userService.createUser(
        req.body,
      );
      return res.status(201).json(createdUser);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  public async createUserWithSchool(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { userData, schoolData } = req.body;

      if (!userData || !schoolData) {
        return res
          .status(400)
          .json({ error: 'Missing user or school data' });
      }

      // Cria a escola primeiro
      const newSchool =
        await this.schoolService.createSchool(schoolData);

      // Cria o usuário associando a school criada
      const newUser = await this.userService.createUser({
        ...userData,
        school_id: newSchool.id,
      });

      return res
        .status(201)
        .json({ user: newUser, school: newSchool });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  public async getAuthUser(
    req: Request,
    res: Response,
  ): Promise<void> {
    try {
      const user = req.user;

      if (!user) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
      }

      res.status(200).json(user);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async getUser(
    req: Request,
    res: Response,
  ): Promise<void> {
    try {
      const user = await this.userService.getUser(
        Number(req.params.id),
      );

      if (!user) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.status(200).json(user);
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async getAllUsers(
    req: Request,
    res: Response,
  ): Promise<void> {
    try {
      const users = await this.userService.getAllUsers();
      res.status(200).json(users);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async updateUser(
    req: Request,
    res: Response,
  ): Promise<void> {
    try {
      const updatedUser = await this.userService.updateUser(
        Number(req.params.id),
        req.body,
      );
      if (updatedUser) {
        res.status(200).json(updatedUser);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async deleteUser(
    req: Request,
    res: Response,
  ): Promise<void> {
    try {
      const deletedUser = await this.userService.deleteUser(
        Number(req.params.id),
      );
      if (deletedUser) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}
