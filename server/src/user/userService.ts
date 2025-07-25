import { PrismaClient } from '@prisma/client';
import { User, UserCreateDTO, UserWithoutPassword } from './userDto';
import { UserRepository } from './userRepository';
import { hashPassword } from '../utils/bcrypt.utils';

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(data: UserCreateDTO): Promise<UserWithoutPassword> {
    const { name, email, password } = data;

    if (!name || !email || !password) {
      throw new Error('required fields are missing');
    }

    const emailExists = await this.userRepository.checkEmailExists(email);

    if (emailExists) {
      throw new Error('user already exists');
    }

    if (password.length < 6) {
      throw new Error('password must be at least 6 characters long');
    }

    const hashedPassword = await hashPassword(password);

    const user = await this.userRepository.createUser({
      ...data,
      password: hashedPassword,
    });

    const userWithoutPassword = this.hidePassword(user);

    return userWithoutPassword;
  }

  async getUser(id: number): Promise<UserWithoutPassword | null> {
    const verifiedId = await this.verifyIdParam(id);
    id = verifiedId;

    const user = await this.userRepository.getUser(id);

    if (user) {
      const userWithoutPassword = this.hidePassword(user);
      return userWithoutPassword;
    }

    return null;
  }

  async getAllUsers(): Promise<UserWithoutPassword[]> {
    const users = await this.userRepository.getAllUsers();

    const usersResponse = users.map((user) => {
      return this.hidePassword(user);
    });

    return usersResponse;
  }

  async updateUser(
    id: number,
    data: Partial<Omit<UserCreateDTO, 'id'>>,
  ): Promise<UserWithoutPassword> {
    const verifiedId = await this.verifyIdParam(id);
    id = verifiedId;

    const userExists = await this.userRepository.getUser(id);

    if (userExists === null) {
      throw new Error('user not found');
    }

    const dataToUpdate = { ...data };

    if (dataToUpdate.password) {
      if (dataToUpdate.password.length < 6) {
        throw new Error('password must be at least 6 characters long');
      }
      dataToUpdate.password = await hashPassword(dataToUpdate.password);
    }

    if (data.email) {
      const emailOwner = await this.userRepository.findUserByEmail(data.email);
      if (emailOwner && emailOwner.id !== id) {
        throw new Error('email already exists');
      }
    }

    const updatedUser = await this.userRepository.updateUser(id, data);

    const userWithoutPassword = this.hidePassword(updatedUser);

    return userWithoutPassword;
  }

  async deleteUser(id: number): Promise<boolean> {
    const verifiedId = await this.verifyIdParam(id);
    id = verifiedId;

    const userExists = await this.userRepository.getUser(id);

    if (userExists === null) {
      return false;
    }

    await this.userRepository.deleteUser(id);

    return true;
  }

  hidePassword(user: User): UserWithoutPassword {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async verifyIdParam(id: number): Promise<number> {
    const maxUnsignedInt = 2 ** 32 - 1; // Maximum value for a 32-bit unsigned integer

    if (isNaN(id) || id < 1 || id > maxUnsignedInt) {
      throw new Error('invalid user id');
    }

    return id;
  }
}
