export const UsersEndpoints = {
	usersSearch: '/users',
	userById: '/users/userbyid/{id}',
	userByUsername: '/users/{username}',
	userFullProfile: '/users/{username}/full',
	userAbout: '/users/{username}/about',
	userStatistics: '/users/{username}/statistics',
	userFavorites: '/users/{username}/favorites',
	userUpdates: '/users/{username}/userupdates',
	userHistory: '/users/{username}/history',
	userFriends: '/users/{username}/friends',
	userReviews: '/users/{username}/reviews',
	userRecommendations: '/users/{username}/recommendations',
	userClubs: '/users/{username}/clubs',
	userExternal: '/users/{username}/external'
} as const
