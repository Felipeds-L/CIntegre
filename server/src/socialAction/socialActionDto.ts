import { Causes } from '../causes/causesDto';
import { Ong } from '../ong/ongDto';
import { Status, AreaExpertise, Category } from '@prisma/client';
import { SchoolAction } from '../schoolAction/schoolActionDto';

type SocialActionStatus = Status;
type SocialActionCategory = Category;
type SocialActionAreaExpertise = AreaExpertise;

export interface SocialAction {
  id: number;
  title: string;
  photos: string[]; //url
  descricao: string;
  category: SocialActionCategory; //
  area_expertise: SocialActionAreaExpertise[];
  status: SocialActionStatus;
  pontuation: number; // 100/200 nao mostrar
  ong_id: number;
  ong: Ong;
  schoolActivities: SchoolAction[];
}

export interface SocialActionCreateDTO {
  ong_id: number;
  cover_photo: string; //url
  title: string;
  descricao: string;
  category: SocialActionCategory; //
  area_expertise: SocialActionAreaExpertise[];
  status: SocialActionStatus[];
  pontuation: number; // 100/200 nao mostrar
}
