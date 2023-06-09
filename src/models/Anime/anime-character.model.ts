import { CharacterVoiceActor, CommonCharacter } from '../Common';

export interface AnimeCharacter extends CommonCharacter {
  voice_actors: CharacterVoiceActor[];
}
