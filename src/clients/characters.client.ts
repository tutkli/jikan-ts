import { CharactersEndpoints } from '../constants'
import type {
	Character,
	CharacterAnime,
	CharacterManga,
	CharacterVoiceActor,
	CharactersSearchParams,
	JikanImagesCollection,
	JikanResponse
} from '../models'
import { BaseClient } from './base.client'

/**
 * **Characters Client**
 *
 * Client used to access the Character Endpoints:
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
export class CharactersClient extends BaseClient {
	/**
	 * Get complete Character data
	 * @param id The Character ID
	 * @returns JikanResponse with Character data
	 */
	public async getCharacterFullById(id: number) {
		return this.getResource<JikanResponse<Character>>(
			CharactersEndpoints.characterFullById,
			{ id }
		)
	}

	/**
	 * Get Character data
	 * @param id The Character ID
	 * @returns JikanResponse with Character data
	 */
	public async getCharacterById(id: number) {
		return this.getResource<JikanResponse<Character>>(
			CharactersEndpoints.characterById,
			{ id }
		)
	}

	/**
	 * Get Character anime data
	 * @param id The Character ID
	 * @returns JikanResponse with CharacterAnime data
	 */
	public async getCharacterAnime(id: number) {
		return this.getResource<JikanResponse<CharacterAnime[]>>(
			CharactersEndpoints.characterAnime,
			{ id }
		)
	}

	/**
	 * Get Character manga data
	 * @param id The Character ID
	 * @returns JikanResponse with CharacterManga data
	 */
	public async getCharacterManga(id: number) {
		return this.getResource<JikanResponse<CharacterManga[]>>(
			CharactersEndpoints.charactersManga,
			{ id }
		)
	}

	/**
	 * Get Character voices data
	 * @param id The Character ID
	 * @returns JikanResponse with CharacterVoiceActor data
	 */
	public async getCharacterVoiceActors(id: number) {
		return this.getResource<JikanResponse<CharacterVoiceActor[]>>(
			CharactersEndpoints.characterVoiceActors,
			{ id }
		)
	}

	/**
	 * Get Character pictures data
	 * @param id The Character ID
	 * @returns JikanResponse with JikanImagesCollection data
	 */
	public async getCharacterPictures(id: number) {
		return this.getResource<JikanResponse<JikanImagesCollection[]>>(
			CharactersEndpoints.characterPictures,
			{ id }
		)
	}

	/**
   * Get all the Characters within the given filter. Returns all Characters if no filters are given.
   @param searchParams Filter parameters
   * @returns JikanResponse with Character array data
   */
	public async getCharacterSearch(
		searchParams: Partial<CharactersSearchParams>
	) {
		return this.getResource<JikanResponse<Character[]>>(
			CharactersEndpoints.characterSearch,
			{},
			searchParams
		)
	}
}
