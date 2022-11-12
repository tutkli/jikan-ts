import { JikanImages } from './image.model';

export interface CommonCharacter {
  character: CommonCharacterData;
  role: CharacterRole;
}

export interface CommonCharacterData {
  mal_id: number;
  url: string;
  images: JikanImages;
  name: string;
}

export enum CharacterRole {
  main = 'Main',
  supporting = 'Supporting',
}
