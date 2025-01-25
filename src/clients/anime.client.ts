import { AnimeEndpoints } from '../endpoints/anime.endpoints'
import type {
	Anime,
	AnimeCharacter,
	AnimeEpisode,
	AnimeEpisodeVideo,
	AnimePicture,
	AnimeSearchParams,
	AnimeStaff,
	AnimeStatistics,
	AnimeVideos,
	ForumFilter,
	JikanExternalLink,
	JikanForum,
	JikanMoreInfo,
	JikanNews,
	JikanRelation,
	Recommendation
} from '../models'
import { BaseClient } from './base.client'

/**
 * **Anime Client**
 *
 * Client used to access the Anime Endpoints:
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
export class AnimeClient extends BaseClient {
	/**
	 * Get complete anime resource data
	 * @param id anime id
	 */
	public getAnimeFullById(id: number) {
		return this.getResource<Anime>(AnimeEndpoints.animeFullById, { id })
	}

	/**
	 * Get anime resource
	 * @param id anime id
	 */
	public getAnimeById(id: number) {
		return this.getResource<Anime>(AnimeEndpoints.animeById, {
			id
		})
	}

	/**
	 * Get characters of a specific anime
	 * @param id anime id
	 */
	public getAnimeCharacters(id: number) {
		return this.getResource<AnimeCharacter[]>(AnimeEndpoints.animeCharacters, {
			id
		})
	}

	/**
	 * Get staff of a specific Anime
	 * @param id anime id
	 */
	public getAnimeStaff(id: number) {
		return this.getResource<AnimeStaff[]>(AnimeEndpoints.animeStaff, { id })
	}

	/**
	 * Get a list of all the episodes of a specific anime
	 * @param id anime id
	 * @param page page number
	 */
	public getAnimeEpisodes(id: number, page = 1) {
		return this.getResource<AnimeEpisode[]>(
			AnimeEndpoints.animeEpisodes,
			{ id },
			{ page }
		)
	}

	/**
	 * Get a single episode of a specific anime by its id
	 * @param anime_id anime id
	 * @param episode_id episode id
	 */
	public getAnimeEpisodeById(anime_id: number, episode_id: number) {
		return this.getResource<AnimeEpisode>(AnimeEndpoints.animeEpisodeById, {
			id: anime_id,
			episode: episode_id
		})
	}

	/**
	 * Get a list of news articles related to the anime
	 * @param id anime id
	 * @param page page number
	 */
	public getAnimeNews(id: number, page: number) {
		return this.getResource<JikanNews[]>(
			AnimeEndpoints.animeNews,
			{ id },
			{ page }
		)
	}

	/**
	 * Get a list of forum topics related to the anime
	 * @param id anime id
	 * @param filter filter topics
	 */
	public getAnimeForum(id: number, filter?: ForumFilter) {
		return this.getResource<JikanForum[]>(
			AnimeEndpoints.animeForum,
			{ id },
			filter ? { filter } : undefined
		)
	}

	/**
	 * Get videos related to the anime
	 * @param id anime id
	 */
	public getAnimeVideos(id: number) {
		return this.getResource<AnimeVideos>(AnimeEndpoints.animeVideos, { id })
	}

	/**
	 * Get episode videos related to the anime
	 * @param id anime id
	 * @param page page number
	 */
	public getAnimeEpisodeVideos(id: number, page = 1) {
		return this.getResource<AnimeEpisodeVideo[]>(
			AnimeEndpoints.animeVideosEpisodes,
			{ id },
			{ page }
		)
	}

	/**
	 * Get pictures related to the Anime
	 * @param id anime id
	 */
	public getAnimePictures(id: number) {
		return this.getResource<AnimePicture[]>(AnimeEndpoints.animePictures, {
			id
		})
	}

	/**
	 * Get statistics related to the Anime
	 * @param id anime id
	 */
	public getAnimeStatistics(id: number) {
		return this.getResource<AnimeStatistics>(AnimeEndpoints.animeStatistics, {
			id
		})
	}

	/**
	 * Get more info related to the anime
	 * @param id anime id
	 */
	public getAnimeMoreInfo(id: number) {
		return this.getResource<JikanMoreInfo>(AnimeEndpoints.animeMoreInfo, { id })
	}

	/**
	 * Get recommendations based on the anime
	 * @param id anime id
	 */
	public getAnimeRecommendations(id: number) {
		return this.getResource<Recommendation[]>(
			AnimeEndpoints.animeRecommendations,
			{ id }
		)
	}

	/**
	 * Get anime relations
	 * @param id anime id
	 */
	public getAnimeRelations(id: number) {
		return this.getResource<JikanRelation[]>(AnimeEndpoints.animeRelations, {
			id
		})
	}

	/**
	 * Get anime external links
	 * @param id anime id
	 */
	public getAnimeExternal(id: number) {
		return this.getResource<JikanExternalLink[]>(AnimeEndpoints.animeExternal, {
			id
		})
	}

	/**
	 * Get all the Animes within the given filter. Returns all the Animes if no filters are given.
	 * @param searchParams Filter parameters
	 */
	public getAnimeSearch(searchParams?: Partial<AnimeSearchParams>) {
		return this.getResource<Anime[]>(
			AnimeEndpoints.animeSearch,
			{},
			searchParams
		)
	}
}
