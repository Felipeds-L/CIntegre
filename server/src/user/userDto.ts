import { School } from '@prisma/client';
import { Address } from '../address/addressDto';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: string;
  updated_at: string;
  school?: School | null;
  school_id: number;
}

export type UserWithoutPassword = Omit<User, 'password'>;

export interface UserCreateDTO {
  name: string;
  email: string;
  password: string;
}
