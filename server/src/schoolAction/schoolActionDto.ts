import { School } from "../school/schoolDto";
import { Causes } from "../causes/causesDto";
import { Status } from "@prisma/client";

type SchoolActionStatus = Status;

export interface SchoolAction {
  id: number;
  school_id: number;
  school: School;
  causes_id: number;
  causes: Causes;
  status: SchoolActionStatus[]; 
  registers: string;
  pontuation: number; // ong avalia 
}

export interface SchoolActionCreateDTO {
  //id: number;
  school_id: number;
  //school: School;
  causes_id: number;
  //causes: Causes;
  status: SchoolActionStatus[]; 
  registers: string;
  pontuation: number; // ong avalia 
}