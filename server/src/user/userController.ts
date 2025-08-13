import { Request, Response } from 'express';
import { UserService } from './userService';
import { OngService } from '../ong/ongService';
import { SchoolService } from '../school/schoolService';

export class UserController {
  private userService: UserService;
  private schoolService: SchoolService;
  private ongService: OngService;

  constructor() {
    this.userService = new UserService();
    this.schoolService = new SchoolService();
    this.ongService = new OngService();
  }

  public async createUser(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { name, email, password, school_id, ong_id } =
        req.body;

      if (!name || !email || !password) {
        return res
          .status(400)
          .json({ error: 'Missing a required field' });
      }

      if (
        (school_id && ong_id) ||
        (!school_id && !ong_id)
      ) {
        return res.status(400).json({
          error:
            'O usuário deve estar associado a apenas uma School OU uma Ong.',
        });
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

      const newSchool =
        await this.schoolService.createSchool(schoolData);
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

  public async createUserWithSchoolOrOng(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { userData, schoolData, ongData } = req.body;

      if (!userData || (!schoolData && !ongData)) {
        return res.status(400).json({
          error:
            'Missing user data or organization data (schoolData or ongData)',
        });
      }

      let newUser;
      let createdEntity;

      // Criação de escola
      if (schoolData) {
        const newSchool =
          await this.schoolService.createSchool(schoolData);
        newUser = await this.userService.createUser({
          ...userData,
          school_id: newSchool.id,
        });
        createdEntity = { school: newSchool };
      }

      // Criação de ONG
      else if (ongData) {
        const newOng = await this.ongService.createOng(
          ongData,
        );
        newUser = await this.userService.createUser({
          ...userData,
          ong_id: newOng.id,
        });
        createdEntity = { ong: newOng };
      }

      return res.status(201).json({
        user: newUser,
        ...createdEntity,
      });
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

      const { password, ...userWithoutPassword } = user;

      if (user.school_id) {
        const school = await this.schoolService.getSchool(
          user.school_id,
        );
        res.status(200).json({
          user: userWithoutPassword,
          school,
        });
      }

      if (user.ong_id) {
        const ong = await this.ongService.getOng(
          user.ong_id,
        );
        res.status(200).json({
          user: userWithoutPassword,
          ong,
        });
      }
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
