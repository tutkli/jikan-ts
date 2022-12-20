import { CommonCharacter, JikanPerson } from '../Common';

export interface AnimeCharacter extends CommonCharacter {
  voice_actors: AnimeCharacterVoiceActor[];
}

export interface AnimeCharacterVoiceActor {
  person: JikanPerson;
  language: string;
}
