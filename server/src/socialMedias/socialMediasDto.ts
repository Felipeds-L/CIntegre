import { Ong } from "../ong/ongDto";

export interface SocialMedias {
  id: number;
  ong_id: number;
  ong: Ong;
  link_social_media: string; //url
}

export interface SocialMediasCreateDTO {
  ong_id: number;
  link_social_media: string; //url
}