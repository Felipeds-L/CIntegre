import { SocialAction } from "../socialAction/socialActionDto";
import { Causes } from "../causes/causesDto";
import { SocialMedias } from "../socialMedias/socialMediasDto"; 

export interface Ong {
  id: number;
  description: string;
  starting_year: number;
  ong_sustainable: boolean;
  social_medias: SocialMedias;
  cause: Causes;
  social_action: SocialAction;
}

export interface OngCreateDTO {
  description: string;
  starting_year: number;
  ong_sustainable: boolean;
  //social_medias: SocialMedias;
  //cause: Causes;
  //social_action: SocialAction;
}