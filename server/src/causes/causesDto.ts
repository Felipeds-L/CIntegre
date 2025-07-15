import { SchoolAction } from "../schoolAction/schoolActionDto";
import { SocialAction } from "../socialAction/socialActionDto";
import { Ong } from "../ong/ongDto";

export interface Causes {
  id: number;
  ong_id: number;
  ong: Ong; //vai parar de dar erro quando o Dto de ong for criado
  name: string;
  description: string;
  school_action?: SchoolAction[];
  social_action?: SocialAction[];
}

export interface CausesCreateDTO {
  id: number;
  ong_id: number;
  ong: Ong;
  name: string;
  description: string;
  school_action?: SchoolAction[];
  social_action?: SocialAction[];
}

//model Causes {
//  id   Int    @id @default(autoincrement())
//  ong_id  Int
//  ong    Ong      @relation(fields: [ong_id], references: [id])
//  name  String
//  description  String
//  school_action SchoolAction[]
//  social_action SocialAction[]
//}