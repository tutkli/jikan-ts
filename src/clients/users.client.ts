import type {
	AnimeReview,
	MangaReview,
	PaginationParams,
	RecentRecommendation,
	ReviewsParams
} from '../models'
import type {
	UserHistoryType,
	UsersSearchParams
} from '../models/users/users-params.model'
import type {
	User,
	UserAbout,
	UserById,
	UserClub,
	UserExternalLink,
	UserFavorites,
	UserFriend,
	UserFull,
	UserHistoryEntry,
	UserStatistics,
	UserUpdates
} from '../models/users/users.model'
import { UsersEndpoints } from '../endpoints/users.endpoints'
import { BaseClient } from './base.client'

/**
 * **Users Client**
 *
 * Client used to access the Users Endpoints:
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
export class UsersClient extends BaseClient {
	/**
	 * @returns Search results for Users
	 * @param params Filter parameters
	 */
	public getUsersSearch(params: Partial<UsersSearchParams> = {}) {
		return this.getResource<User[]>(UsersEndpoints.usersSearch, {}, params)
	}

	/**
	 * @returns The username and profile URL for a given MAL user id
	 * @param id User's MAL ID
	 */
	public getUserById(id: number) {
		return this.getResource<UserById>(UsersEndpoints.userById, { id })
	}

	/**
	 * @returns User profile resource
	 * @param username User's username
	 */
	public getUserByUsername(username: string) {
		return this.getResource<User>(UsersEndpoints.userByUsername, { username })
	}

	/**
	 * @returns User profile together with statistics and external links
	 * @param username User's username
	 */
	public getUserFullProfile(username: string) {
		return this.getResource<UserFull>(UsersEndpoints.userFullProfile, {
			username
		})
	}

	/**
	 * @returns The user's "about" section
	 * @param username User's username
	 */
	public getUserAbout(username: string) {
		return this.getResource<UserAbout>(UsersEndpoints.userAbout, { username })
	}

	/**
	 * @returns The user's anime and manga statistics
	 * @param username User's username
	 */
	public getUserStatistics(username: string) {
		return this.getResource<UserStatistics>(UsersEndpoints.userStatistics, {
			username
		})
	}

	/**
	 * @returns The user's favorite anime, manga, characters and people
	 * @param username User's username
	 */
	public getUserFavorites(username: string) {
		return this.getResource<UserFavorites>(UsersEndpoints.userFavorites, {
			username
		})
	}

	/**
	 * @returns The user's recent anime and manga list updates
	 * @param username User's username
	 */
	public getUserUpdates(username: string) {
		return this.getResource<UserUpdates>(UsersEndpoints.userUpdates, {
			username
		})
	}

	/**
	 * @returns The user's activity history
	 * @param username User's username
	 * @param type Optionally restrict the history to `anime` or `manga`
	 */
	public getUserHistory(username: string, type?: UserHistoryType) {
		return this.getResource<UserHistoryEntry[]>(
			UsersEndpoints.userHistory,
			{ username },
			type ? { type } : {}
		)
	}

	/**
	 * @returns The user's friends
	 * @param username User's username
	 * @param params Pagination parameters
	 */
	public getUserFriends(
		username: string,
		params: Partial<PaginationParams> = {}
	) {
		return this.getResource<UserFriend[]>(
			UsersEndpoints.userFriends,
			{ username },
			params
		)
	}

	/**
	 * @returns The user's reviews
	 * @param username User's username
	 * @param params Review parameters
	 */
	public getUserReviews(username: string, params: Partial<ReviewsParams> = {}) {
		return this.getResource<Array<AnimeReview | MangaReview>>(
			UsersEndpoints.userReviews,
			{ username },
			params
		)
	}

	/**
	 * @returns The recommendations made by the user
	 * @param username User's username
	 * @param params Pagination parameters
	 */
	public getUserRecommendations(
		username: string,
		params: Partial<PaginationParams> = {}
	) {
		return this.getResource<RecentRecommendation[]>(
			UsersEndpoints.userRecommendations,
			{ username },
			params
		)
	}

	/**
	 * @returns The clubs the user belongs to
	 * @param username User's username
	 * @param params Pagination parameters
	 */
	public getUserClubs(
		username: string,
		params: Partial<PaginationParams> = {}
	) {
		return this.getResource<UserClub[]>(
			UsersEndpoints.userClubs,
			{ username },
			params
		)
	}

	/**
	 * @returns The external links listed on the user's profile
	 * @param username User's username
	 */
	public getUserExternal(username: string) {
		return this.getResource<UserExternalLink[]>(UsersEndpoints.userExternal, {
			username
		})
	}
}
