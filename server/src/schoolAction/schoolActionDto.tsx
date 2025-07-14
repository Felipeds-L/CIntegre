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
  pontuation: number; // ong avalia + porcentagem da doacao
}

export interface SchoolActionCreateDTO {
  id: number;
  school_id: number;
  school: School;
  causes_id: number;
  causes: Causes;
  status: string[]; 
  registers: string;
  pontuation: number; // ong avalia + porcentagem da doacao
}

/*model SchoolAction {
  id   Int    @id @default(autoincrement())
  school_id  Int
  school    School      @relation(fields: [school_id], references: [id])
  causes_id   Int
  causes   Causes      @relation(fields: [causes_id], references: [id])
  status Status[]
  registers  String
  pontuation  Int //ong avalia + porcentagem da doacao
}*/