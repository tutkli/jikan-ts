import { MangaEndpoints } from '../constants'
import type {
	CommonCharacter,
	ForumFilter,
	JikanExternalLink,
	JikanForum,
	JikanImages,
	JikanMoreInfo,
	JikanNews,
	JikanRelation,
	JikanResponse,
	Manga,
	MangaSearchParams,
	MangaStatistics,
	Recommendation
} from '../models'
import { BaseClient } from './base.client'

/**
 * **Manga Client**
 *
 * Client used to access the Manga Endpoints:
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
export class MangaClient extends BaseClient {
	/**
	 * Get a Manga with full information by its ID
	 * @param id The Manga ID
	 * @returns JikanResponse with Manga data
	 */
	public async getMangaFullById(id: number) {
		return this.getResource<JikanResponse<Manga>>(
			MangaEndpoints.mangaFullById,
			{ id }
		)
	}

	/**
	 * Get a Manga by its ID
	 * @param id The Manga ID
	 * @returns JikanResponse with Manga data
	 */
	public async getMangaById(id: number) {
		return this.getResource<JikanResponse<Manga>>(MangaEndpoints.mangaById, {
			id
		})
	}

	/**
	 * Get Characters of a specific Manga
	 * @param id The Manga ID
	 * @returns JikanResponse with CommonCharacter array data
	 */
	public async getMangaCharacters(id: number) {
		return this.getResource<JikanResponse<CommonCharacter[]>>(
			MangaEndpoints.mangaCharacters,
			{ id }
		)
	}

	/**
	 * Get a list of manga news
	 * @param id The Manga ID
	 */
	public async getMangaNews(id: string) {
		return this.getResource<JikanResponse<JikanNews[]>>(
			MangaEndpoints.mangaNews,
			{ id }
		)
	}

	/**
	 * Get a list og manga forum topics
	 * @param id The manga ID
	 * @param filter Filter topics
	 */
	public async getMangaTopics(id: string, filter?: ForumFilter) {
		return this.getResource<JikanResponse<JikanForum[]>>(
			MangaEndpoints.mangaTopics,
			{ id },
			filter ? { filter } : undefined
		)
	}

	/**
	 * Get Pictures related to a specific Manga
	 * @param id The Manga ID
	 * @returns JikanResponse with JikanImages array data
	 */
	public async getMangaPictures(id: number) {
		return this.getResource<JikanResponse<JikanImages[]>>(
			MangaEndpoints.mangaPictures,
			{ id }
		)
	}

	/**
	 * Get Statistics related to a specific Manga
	 * @param id The Manga ID
	 * @returns JikanResponse with MangaStatistics data
	 */
	public async getMangaStatistics(id: number) {
		return this.getResource<JikanResponse<MangaStatistics>>(
			MangaEndpoints.mangaStatistics,
			{ id }
		)
	}

	/**
	 * Get more info related to the manga
	 * @param id manga id
	 */
	public async getMangaMoreInfo(id: number) {
		return this.getResource<JikanResponse<JikanMoreInfo>>(
			MangaEndpoints.mangaMoreInfo,
			{ id }
		)
	}

	/**
	 * Get Recommendations related to a specific Manga
	 * @param id The Manga ID
	 * @returns JikanResponse with Recommendation array data
	 */
	public async getMangaRecommendations(id: number) {
		return this.getResource<JikanResponse<Recommendation[]>>(
			MangaEndpoints.mangaRecommendations,
			{ id }
		)
	}

	/**
	 * Get anime Relations
	 * @param id manga id
	 */
	public async getMangaRelations(id: number) {
		return this.getResource<JikanResponse<JikanRelation[]>>(
			MangaEndpoints.mangaRelations,
			{ id }
		)
	}

	/**
	 * Get manga external links
	 * @param id manga id
	 */
	public getMangaExternal(id: number) {
		return this.getResource<JikanResponse<JikanExternalLink[]>>(
			MangaEndpoints.mangaExternal,
			{ id }
		)
	}

	/**
	 * Get all the filtered Mangas. Returns all the Mangas if no filters are given.
	 * @param searchParams Filter parameters
	 * @returns JikanResponse with Manga array data
	 */
	public async getMangaSearch(searchParams?: Partial<MangaSearchParams>) {
		return this.getResource<JikanResponse<Manga[]>>(
			MangaEndpoints.mangaSearch,
			{},
			searchParams
		)
	}
}
