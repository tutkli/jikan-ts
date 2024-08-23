import { CharactersEndpoints } from '../constants'
import type {
	Character,
	CharacterAnime,
	CharacterFull,
	CharacterManga,
	CharacterVoiceActor,
	CharactersSearchParams,
	JikanImagesCollection
} from '../models'
import { BaseClient } from './base.client'

/**
 * Client used to access the Character Endpoints.
 *
 * @see [Jikan Documentation](https://docs.api.jikan.moe/#tag/characters)
 */
export class CharactersClient extends BaseClient {
	/**
	 * Get complete Character data
	 * @param id The Character ID
	 */
	public getCharacterFullById(id: number) {
		return this.getResource<CharacterFull>(
			CharactersEndpoints.characterFullById,
			{
				id
			}
		)
	}

	/**
	 * Get Character data
	 * @param id The Character ID
	 */
	public getCharacterById(id: number) {
		return this.getResource<Character>(CharactersEndpoints.characterById, {
			id
		})
	}

	/**
	 * Get Character anime data
	 * @param id The Character ID
	 */
	public getCharacterAnime(id: number) {
		return this.getResource<CharacterAnime[]>(
			CharactersEndpoints.characterAnime,
			{ id }
		)
	}

	/**
	 * Get Character manga data
	 * @param id The Character ID
	 */
	public getCharacterManga(id: number) {
		return this.getResource<CharacterManga[]>(
			CharactersEndpoints.charactersManga,
			{ id }
		)
	}

	/**
	 * Get Character voices data
	 * @param id The Character ID
	 */
	public getCharacterVoiceActors(id: number) {
		return this.getResource<CharacterVoiceActor[]>(
			CharactersEndpoints.characterVoiceActors,
			{ id }
		)
	}

	/**
	 * Get Character pictures data
	 * @param id The Character ID
	 */
	public getCharacterPictures(id: number) {
		return this.getResource<JikanImagesCollection[]>(
			CharactersEndpoints.characterPictures,
			{ id }
		)
	}

	/**
	 * Get all the Characters within the given filter. Returns all Characters if no filters are given.
	 * @param searchParams Filter parameters
	 */
	public getCharacterSearch(searchParams: Partial<CharactersSearchParams>) {
		return this.getResource<Character[]>(
			CharactersEndpoints.characterSearch,
			{},
			searchParams
		)
	}
}
