import { Address } from '../address/addressDto';
import { SchoolActivityDTO } from '../schoolActivity/schoolActivityDto';

export interface School {
  id: number;
  name: string;
  student_quantity: number;
  score: number;
  phone_number: string;
  address: Address | null;
  address_id: number;
  schoolActivity?: SchoolActivityDTO[];
}

export interface CreateSchoolDto {
  name: string;
  student_quantity: number;
  score: number;
  phone_number: string;
  address: Address;
}
