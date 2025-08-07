import { School, Ong } from '@prisma/client';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;

  school?: School | null;
  school_id?: number | null;

  ong?: Ong | null;
  ong_id?: number | null;
}

export type UserWithoutPassword = Omit<User, 'password'>;

export interface UserCreateDTO {
  name: string;
  email: string;
  password: string;
  school_id?: number;
  ong_id?: number;
}
