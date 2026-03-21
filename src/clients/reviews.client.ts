import { ReviewsEndpoints } from '../endpoints/reviews.endpoints'
import type { AnimeReview, MangaReview, ReviewsParams } from '../models'
import { BaseClient } from './base.client'

/**
 * **Reviews Client**
 *
 * Client used to access the Reviews Endpoints:
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
export class ReviewsClient extends BaseClient {
	/**
	 * Get recent anime reviews
	 * @param params Review parameters
	 */
	public getRecentAnimeReviews(params?: Partial<ReviewsParams>) {
		return this.getResource<AnimeReview[]>(
			ReviewsEndpoints.animeReviews,
			{},
			params
		)
	}

	/**
	 * Get recent manga reviews
	 * @param params Review parameters
	 */
	public getRecentMangaReviews(params?: Partial<ReviewsParams>) {
		return this.getResource<MangaReview[]>(
			ReviewsEndpoints.mangaReviews,
			{},
			params
		)
	}
}
