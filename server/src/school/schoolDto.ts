import { Address } from '../address/addressDto';
import { SchoolAction } from '../schoolAction/schoolActionDto';

export interface School {
  id: number;
  name: string;
  student_quantity: number;
  score: number;
  phone_number: string;
  address: Address | null;
  address_id: number;
  schoolActivity?: SchoolAction[];
}

export interface CreateSchoolDto {
  name: string;
  student_quantity: number;
  score: number;
  phone_number: string;
  address_id: number;
}
