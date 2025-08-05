import { Address } from '../address/addressDto';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

export type UserWithoutPassword = Omit<User, 'password'>

export interface UserCreateDTO {
  name: string;
  email: string;
  password: string;
}
