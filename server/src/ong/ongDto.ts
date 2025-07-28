import { SocialAction } from "../socialAction/socialActionDto";
import { Causes } from "../causes/causesDto";
import { SocialMedias } from "../socialMedias/socialMediasDto";

export interface Ong {
  id: number;
  name: string;
  description: string;
  start_year: number;
  phone_number: string;
  social_medias: string[];
  activity: SocialAction[];
}

export interface OngCreateDTO {
  name: string;
  description: string;
  start_year: number;
  phone_number: string;
  social_medias: string[];
  activity: SocialAction[];
  //social_medias: SocialMedias;
  //cause: Causes;
  //social_action: SocialAction;
}