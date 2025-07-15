export interface Photo {
  id: number;
  photo_url: string; //url
}

export interface PhotoCreateDTO {
  id: number;
  photo_url: string; //url
}
/*model Photo {
  id   Int    @id @default(autoincrement())
  photo_url String
}*/