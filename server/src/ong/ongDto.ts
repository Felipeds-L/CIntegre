import { Causes } from '../causes/causesDto';

export interface Ong {
  id: number;
  name: string;
  description: string;
  start_year: number;
  phone_number: string;
  social_medias: string[];

  cause?: Causes[];
  // social_action: SocialAction; - Causes is the SocialAction
}

export interface OngCreateDTO {
  name: string;
  description: string;
  start_year: number;
  phone_number: string;
  social_medias: string[];
  //social_medias: SocialMedias;
  //cause: Causes;
  //social_action: SocialAction;
}
