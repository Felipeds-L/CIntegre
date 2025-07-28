import { SchoolAction } from '../schoolAction/schoolActionDto';

export interface School {
    id: number;
    name: string;
    student_quantity: number;
    score: number;
    phone_number: string
    address_id: number;
    schoolAction?: SchoolAction[];
}
