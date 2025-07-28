import { Causes } from '../causes/causesDto';

export interface School {
    id: number;
    name: string;
    student_quantity: number;
    score: number;
    phone_number: string
    address_id: number;
    schoolAcivity?: Causes[];
}
