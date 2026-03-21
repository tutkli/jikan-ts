import type {
	JikanImages,
	PeopleSearchParams,
	Person,
	PersonAnimePosition,
	PersonFull,
	PersonMangaPosition,
	PersonVoiceActingRole
} from '../models'
import { PeopleEndpoints } from '../endpoints/people.endpoints'
import { BaseClient } from './base.client'

/**
 * **People Client**
 *
 * Client used to access the People Endpoints:
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
export class PeopleClient extends BaseClient {
	/**
	 * Get complete person data
	 * @param id Person ID
	 */
	public getPersonFullById(id: number) {
		return this.getResource<PersonFull>(PeopleEndpoints.personFullById, { id })
	}

	/**
	 * Get person by ID
	 * @param id Person ID
	 */
	public getPersonById(id: number) {
		return this.getResource<Person>(PeopleEndpoints.personById, {
			id
		})
	}

	/**
	 * Get anime staff positions of a person
	 * @param id Person ID
	 */
	public getPersonAnime(id: number) {
		return this.getResource<PersonAnimePosition[]>(
			PeopleEndpoints.personAnime,
			{ id }
		)
	}

	/**
	 * Get voice acting roles of a person
	 * @param id Person ID
	 */
	public getPersonVoices(id: number) {
		return this.getResource<PersonVoiceActingRole[]>(
			PeopleEndpoints.personVoices,
			{ id }
		)
	}

	/**
	 * Get manga works of a person
	 * @param id Person ID
	 */
	public getPersonManga(id: number) {
		return this.getResource<PersonMangaPosition[]>(
			PeopleEndpoints.personManga,
			{ id }
		)
	}

	/**
	 * Get pictures of a person
	 * @param id Person ID
	 */
	public getPersonPictures(id: number) {
		return this.getResource<JikanImages[]>(PeopleEndpoints.personPictures, {
			id
		})
	}

	/**
	 * Search people
	 * @param searchParams Search parameters
	 */
	public getPeopleSearch(searchParams?: Partial<PeopleSearchParams>) {
		return this.getResource<Person[]>(
			PeopleEndpoints.peopleSearch,
			{},
			searchParams
		)
	}
}
