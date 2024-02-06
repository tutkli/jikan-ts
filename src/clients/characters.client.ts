import { CharactersEndpoints } from '../constants';
import {
  Character,
  CharacterAnime,
  CharacterManga,
  CharactersSearchParams,
  CharacterVoiceActor,
  JikanImagesCollection,
  JikanResponse,
} from '../models';
import { BaseClient } from './base.client';

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
  public async getCharacterFullById(
    id: number
  ): Promise<JikanResponse<Character>> {
    return this.getResource<JikanResponse<Character>>(
      CharactersEndpoints.CharacterFullById,
      { id }
    );
  }

  /**
   * Get Character data
   * @param id The Character ID
   * @returns JikanResponse with Character data
   */
  public async getCharacterById(id: number): Promise<JikanResponse<Character>> {
    return this.getResource<JikanResponse<Character>>(
      CharactersEndpoints.CharacterById,
      { id }
    );
  }

  /**
   * Get Character anime data
   * @param id The Character ID
   * @returns JikanResponse with CharacterAnime data
   */
  public async getCharacterAnime(
    id: number
  ): Promise<JikanResponse<CharacterAnime[]>> {
    return this.getResource<JikanResponse<CharacterAnime[]>>(
      CharactersEndpoints.CharacterAnime,
      { id }
    );
  }

  /**
   * Get Character manga data
   * @param id The Character ID
   * @returns JikanResponse with CharacterManga data
   */
  public async getCharacterManga(
    id: number
  ): Promise<JikanResponse<CharacterManga[]>> {
    return this.getResource<JikanResponse<CharacterManga[]>>(
      CharactersEndpoints.CharactersManga,
      { id }
    );
  }

  /**
   * Get Character voices data
   * @param id The Character ID
   * @returns JikanResponse with CharacterVoiceActor data
   */
  public async getCharacterVoiceActors(
    id: number
  ): Promise<JikanResponse<CharacterVoiceActor[]>> {
    return this.getResource<JikanResponse<CharacterVoiceActor[]>>(
      CharactersEndpoints.CharacterVoiceActors,
      { id }
    );
  }

  /**
   * Get Character pictures data
   * @param id The Character ID
   * @returns JikanResponse with JikanImagesCollection data
   */
  public async getCharacterPictures(
    id: number
  ): Promise<JikanResponse<JikanImagesCollection[]>> {
    return this.getResource<JikanResponse<JikanImagesCollection[]>>(
      CharactersEndpoints.CharacterPictures,
      { id }
    );
  }

  /**
   * Get all the Characters within the given filter. Returns all Characters if no filters are given.
   @param searchParams Filter parameters
   * @returns JikanResponse with Character array data
   */
  public async getCharacterSearch(
    searchParams: Partial<CharactersSearchParams>
  ): Promise<JikanResponse<Character[]>> {
    return this.getResource<JikanResponse<Character[]>>(
      CharactersEndpoints.CharacterPictures,
      {},
      searchParams
    );
  }
}
