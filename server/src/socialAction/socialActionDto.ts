import { Causes } from "../causes/causesDto";
import { Ong } from "../ong/ongDto";
import { Status, AreaExpertise, Category } from "@prisma/client";

type SocialActionStatus = Status;
type SocialActionCategory = Category;
type SocialActionAreaExpertise = AreaExpertise;

export interface SocialAction {
  id: number;
  causes_id: number;
  causes: Causes;
  ong_id: number;
  ong: Ong; 
  cover_photo: string; //url
  title: string;
  descricao: string;
  category: SocialActionCategory[]; // 
  area_expertise: SocialActionAreaExpertise[]; 
  status: SocialActionStatus[]; 
  pontuation: number; // 100/200 nao mostrar
}

export interface SocialActionCreateDTO {
  //id: number;
  causes_id: number;
  //causes: Causes;
  ong_id: number;
  //ong: Ong;
  cover_photo: string; //url
  title: string;
  descricao: string;
  category: SocialActionCategory[]; // 
  area_expertise: SocialActionAreaExpertise[]; 
  status: SocialActionStatus[]; 
  pontuation: number; // 100/200 nao mostrar
}