import { SchoolAction } from '../schoolAction/schoolActionDto';

export interface School {
    id: number;
    cnpj: string;
    student_number: number;
    score: number;
    //schoolAction?: SchoolAction;
}
