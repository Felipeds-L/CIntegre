import { Activity } from '@prisma/client';

export interface OngDTO {
  id: number;
  name: string;
  description: string;
  start_year: number;
  phone_number: string;
  social_medias: string[];

  activity?: Activity[];
}

export interface OngCreateDTO {
  name: string;
  description: string;
  start_year: number;
  phone_number: string;
  social_medias: string[];
}
