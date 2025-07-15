import { Causes } from "../causes/causesDto";
import { Ong } from "../ong/ongDto";

export interface SocialAction {
  id: number;
  causes_id: number;
  causes: Causes;
  ong_id: number;
  ong: Ong; //vai parar de dar erro quando o Dto de ong for criado
  cover_photo: string; //url
  title: string;
  descricao: string;
  category: string[]; // 
  area_expertise: string[]; 
  status: string[]; 
  pontuation: number; // 100/200 nao mostrar
}

export interface SocialActionCreateDTO {
  id: number;
  causes_id: number;
  causes: Causes;
  ong_id: number;
  ong: Ong;
  cover_photo: string; //url
  title: string;
  descricao: string;
  category: string[]; // 
  area_expertise: string[]; 
  status: string[]; 
  pontuation: number; // 100/200 nao mostrar
}

/*model SocialAction {
  id     Int      @id @default(autoincrement())
  causes_id   Int
  causes   Causes      @relation(fields: [causes_id], references: [id])
  ong_id  Int
  ong    Ong      @relation(fields: [ong_id], references: [id])
  cover_photo  String //url
  title  String
  descricao String
  category  Category[]
  area_expertise AreaExpertise[]
  status Status[]
  pontuation Int // 100/200 nao mostrar
}*/ 