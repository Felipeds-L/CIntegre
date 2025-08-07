import { Address } from '../address/addressDto';
import { SchoolActivityDTO } from '../schoolActivity/schoolActivityDto';
import { User } from '../user/userDto';

export interface School {
  id: number;
  name: string;
  student_quantity: number;
  score: number;
  phone_number: string;
  address: Address | null;
  address_id: number;
  schoolActivity?: SchoolActivityDTO[];

  user?: User | null;
}

export interface CreateSchoolDto {
  name: string;
  student_quantity: number;
  score: number;
  phone_number: string;
  address: Address;

  user_id?: number;
}
