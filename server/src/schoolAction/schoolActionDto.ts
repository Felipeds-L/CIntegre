import { School } from "../school/schoolDto";
import { Causes } from "../causes/causesDto";

export interface SchoolAction {
  id: number;
  school_id: number;
  school: School;
  causes_id: number;
  causes: Causes;
  status: string[]; 
  registers: string;
  pontuation: number; // ong avalia 
}

export interface SchoolActionCreateDTO {
  id: number;
  school_id: number;
  school: School;
  causes_id: number;
  causes: Causes;
  status: string[]; 
  registers: string;
  pontuation: number; // ong avalia 
}