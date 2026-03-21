import type { PaginationParams, RecentRecommendation } from '../models'
import { RecommendationsEndpoints } from '../endpoints/recommendations.endpoints'
import { BaseClient } from './base.client'

/**
 * **Recommendations Client**
 *
 * Client used to access the Recommendations Endpoints:
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
export class RecommendationsClient extends BaseClient {
	/**
	 * Get recent anime recommendations
	 * @param params Pagination parameters
	 */
	public getRecentAnimeRecommendations(params?: Partial<PaginationParams>) {
		return this.getResource<RecentRecommendation[]>(
			RecommendationsEndpoints.recentAnimeRecommendations,
			{},
			params
		)
	}

	/**
	 * Get recent manga recommendations
	 * @param params Pagination parameters
	 */
	public getRecentMangaRecommendations(params?: Partial<PaginationParams>) {
		return this.getResource<RecentRecommendation[]>(
			RecommendationsEndpoints.recentMangaRecommendations,
			{},
			params
		)
	}
}
