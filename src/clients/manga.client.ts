import { MangaEndpoints } from '../endpoints/manga.endpoints'
import type {
	CommonCharacter,
	ForumFilter,
	JikanExternalLink,
	JikanForum,
	JikanImages,
	JikanMoreInfo,
	JikanNews,
	JikanRelation,
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
	 */
	public getMangaFullById(id: number) {
		return this.getResource<Manga>(MangaEndpoints.mangaFullById, { id })
	}

	/**
	 * Get a Manga by its ID
	 * @param id The Manga ID
	 */
	public getMangaById(id: number) {
		return this.getResource<Manga>(MangaEndpoints.mangaById, {
			id
		})
	}

	/**
	 * Get Characters of a specific Manga
	 * @param id The Manga ID
	 */
	public getMangaCharacters(id: number) {
		return this.getResource<CommonCharacter[]>(MangaEndpoints.mangaCharacters, {
			id
		})
	}

	/**
	 * Get a list of manga news
	 * @param id The Manga ID
	 */
	public getMangaNews(id: string) {
		return this.getResource<JikanNews[]>(MangaEndpoints.mangaNews, { id })
	}

	/**
	 * Get a list og manga forum topics
	 * @param id The manga ID
	 * @param filter Filter topics
	 */
	public getMangaTopics(id: string, filter?: ForumFilter) {
		return this.getResource<JikanForum[]>(
			MangaEndpoints.mangaTopics,
			{ id },
			filter ? { filter } : undefined
		)
	}

	/**
	 * Get Pictures related to a specific Manga
	 * @param id The Manga ID
	 */
	public getMangaPictures(id: number) {
		return this.getResource<JikanImages[]>(MangaEndpoints.mangaPictures, { id })
	}

	/**
	 * Get Statistics related to a specific Manga
	 * @param id The Manga ID
	 */
	public getMangaStatistics(id: number) {
		return this.getResource<MangaStatistics>(MangaEndpoints.mangaStatistics, {
			id
		})
	}

	/**
	 * Get more info related to the manga
	 * @param id manga id
	 */
	public getMangaMoreInfo(id: number) {
		return this.getResource<JikanMoreInfo>(MangaEndpoints.mangaMoreInfo, { id })
	}

	/**
	 * Get Recommendations related to a specific Manga
	 * @param id The Manga ID
	 */
	public getMangaRecommendations(id: number) {
		return this.getResource<Recommendation[]>(
			MangaEndpoints.mangaRecommendations,
			{ id }
		)
	}

	/**
	 * Get anime Relations
	 * @param id manga id
	 */
	public getMangaRelations(id: number) {
		return this.getResource<JikanRelation[]>(MangaEndpoints.mangaRelations, {
			id
		})
	}

	/**
	 * Get manga external links
	 * @param id manga id
	 */
	public getMangaExternal(id: number) {
		return this.getResource<JikanExternalLink[]>(MangaEndpoints.mangaExternal, {
			id
		})
	}

	/**
	 * Get all the filtered Mangas. Returns all the Mangas if no filters are given.
	 * @param searchParams Filter parameters
	 */
	public getMangaSearch(searchParams?: Partial<MangaSearchParams>) {
		return this.getResource<Manga[]>(
			MangaEndpoints.mangaSearch,
			{},
			searchParams
		)
	}
}
