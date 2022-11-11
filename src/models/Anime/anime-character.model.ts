import { CommonCharacter } from '../Common/character.model';
import { JikanPerson } from '../Common/person.model';

export interface AnimeCharacter extends CommonCharacter {
  voice_actors: AnimeCharacterVoiceActor[];
}

export interface AnimeCharacterVoiceActor {
  person: JikanPerson;
  language: string;
}
