import { JikanImages } from './image.model';

export interface CommonCharacter {
  character: CommonCharacterData;
  role: CommonCharacterRole;
}

export interface CommonCharacterData {
  mal_id: number;
  url: string;
  images: JikanImages;
  name: string;
}

export type CommonCharacterRole = 'Main' | 'Supporting';
