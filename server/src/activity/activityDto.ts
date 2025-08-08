import { OngDTO } from '../ong/ongDto';
import {
  Status,
  AreaExpertise,
  Category,
} from '@prisma/client';
import { SchoolActivityDTO } from '../schoolActivity/schoolActivityDto';

type SocialActionStatus = Status;
type SocialActionCategory = Category;
type SocialActionAreaExpertise = AreaExpertise;

export interface ActivityDTO {
  id: number;
  title: string;
  photos: string[]; //url
  description: string;
  category: SocialActionCategory; //
  area_expertise: SocialActionAreaExpertise[];
  status: SocialActionStatus;
  pontuation: number; // 100/200 nao mostrar
  ong_id: number;
  ong: OngDTO;
  schoolActivities?: SchoolActivityDTO[];
}

export interface CreateActivityDTO {
  ong_id: number;
  tags: string[];
  address: string;
  duration: string;
  start_date: Date;
  end_date: Date;
  volunteer_quantity: number;
  title: string;
  photos: string[]; //url
  description: string;
  category: SocialActionCategory; //
  area_expertise: SocialActionAreaExpertise[];
  status: SocialActionStatus;
  pontuation: number; // 100/200 nao mostrar
}
