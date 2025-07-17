//import { Ong } from "../ong/ongDto";

export interface SocialMedias {
  id: number;
  ong_id: number;
  //ong: Ong; //vai parar de dar erro quando o Dto de ong for criado
  link_social_media: string; //url
}

export interface SocialMediasCreateDTO {
  id: number;
  ong_id: number;
  //ong: Ong; //vai parar de dar erro quando o Dto de ong for criado
  link_social_media: string; //url
}