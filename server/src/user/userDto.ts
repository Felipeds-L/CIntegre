import { Address } from '../address/addressDto';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

export interface UserWithoutPassword {
  id: number;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
}

export interface UserCreateDTO {
  name: string;
  email: string;
  password: string;
}
