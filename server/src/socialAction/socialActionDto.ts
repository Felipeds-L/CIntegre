import { Causes } from "../causes/causesDto";
import { Ong } from "../ong/ongDto";

export interface SocialAction {
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