import { SocialAction } from '../socialAction/socialActionDto';

export interface Ong {
  id: number;
  name: string;
  description: string;
  start_year: number;
  phone_number: string;
  social_medias: string[];

  activity?: SocialAction[];
}

export interface OngCreateDTO {
  name: string;
  description: string;
  start_year: number;
  phone_number: string;
  social_medias: string[];
}
