import { BaseClient } from './base.client';
import {
  Character,
  CharacterAnime,
  CharacterManga,
  CharactersSearchParams,
  CharacterVoiceActor,
  JikanImagesCollection,
  JikanResponse,
} from '../models';
import { CharactersEndpoints } from '../constants';
import { CacheAxiosResponse } from 'axios-cache-interceptor';
import { AxiosError } from 'axios';

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
   * @param mal_id The Character ID
   * @returns JikanResponse with Character data
   */
  public async getCharacterFullById(mal_id: number): Promise<JikanResponse<Character>> {
    return new Promise<JikanResponse<Character>>((resolve, reject) => {
      const endpoint = this.replacePathParams(CharactersEndpoints.CharacterFullById, { id: mal_id });
      this.api
        .get<JikanResponse<Character>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<Character>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Character data
   * @param mal_id The Character ID
   * @returns JikanResponse with Character data
   */
  public async getCharacterById(mal_id: number): Promise<JikanResponse<Character>> {
    return new Promise<JikanResponse<Character>>((resolve, reject) => {
      const endpoint = this.replacePathParams(CharactersEndpoints.CharacterById, { id: mal_id });
      this.api
        .get<JikanResponse<Character>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<Character>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Character anime data
   * @param mal_id The Character ID
   * @returns JikanResponse with CharacterAnime data
   */
  public async getCharacterAnime(mal_id: number): Promise<JikanResponse<CharacterAnime[]>> {
    return new Promise<JikanResponse<CharacterAnime[]>>((resolve, reject) => {
      const endpoint = this.replacePathParams(CharactersEndpoints.CharacterAnime, { id: mal_id });
      this.api
        .get<JikanResponse<CharacterAnime[]>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<CharacterAnime[]>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Character manga data
   * @param mal_id The Character ID
   * @returns JikanResponse with CharacterManga data
   */
  public async getCharacterManga(mal_id: number): Promise<JikanResponse<CharacterManga[]>> {
    return new Promise<JikanResponse<CharacterManga[]>>((resolve, reject) => {
      const endpoint = this.replacePathParams(CharactersEndpoints.CharactersManga, { id: mal_id });
      this.api
        .get<JikanResponse<CharacterManga[]>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<CharacterManga[]>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Character voices data
   * @param mal_id The Character ID
   * @returns JikanResponse with CharacterVoiceActor data
   */
  public async getCharacterVoiceActors(mal_id: number): Promise<JikanResponse<CharacterVoiceActor[]>> {
    return new Promise<JikanResponse<CharacterVoiceActor[]>>((resolve, reject) => {
      const endpoint = this.replacePathParams(CharactersEndpoints.CharacterVoiceActors, { id: mal_id });
      this.api
        .get<JikanResponse<CharacterVoiceActor[]>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<CharacterVoiceActor[]>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Character pictures data
   * @param mal_id The Character ID
   * @returns JikanResponse with JikanImagesCollection data
   */
  public async getCharacterPictures(mal_id: number): Promise<JikanResponse<JikanImagesCollection[]>> {
    return new Promise<JikanResponse<JikanImagesCollection[]>>((resolve, reject) => {
      const endpoint = this.replacePathParams(CharactersEndpoints.CharacterPictures, { id: mal_id });
      this.api
        .get<JikanResponse<JikanImagesCollection[]>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<JikanImagesCollection[]>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get all the Characters within the given filter. Returns all Characters if no filters are given.
   @param searchParams Filter parameters
   * @returns JikanResponse with Character array data
   */
  public async getCharacterSearch(searchParams: Partial<CharactersSearchParams>): Promise<JikanResponse<Character[]>> {
    return new Promise<JikanResponse<Character[]>>((resolve, reject) => {
      const endpoint = `${CharactersEndpoints.CharacterSearch}`;
      this.api
        .get<JikanResponse<Character[]>>(endpoint, { params: searchParams })
        .then((response: CacheAxiosResponse<JikanResponse<Character[]>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }
}
