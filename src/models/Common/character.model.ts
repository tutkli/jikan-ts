import type { JikanImages } from './image.model'
import type { JikanPerson } from './person.model'

export interface CommonCharacter {
	character: CommonCharacterData & { name: string }
	role: CharacterRole
}

export interface CommonCharacterData {
	mal_id: number
	url: string
	images: JikanImages
}

export interface CharacterVoiceActor {
	person: JikanPerson
	language: string
}

export type CharacterRole = 'Main' | 'Supporting'
