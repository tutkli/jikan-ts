export const MangaEndpoints = {
	mangaSearch: '/manga',
	mangaFullById: '/manga/{id}/full',
	mangaById: '/manga/{id}',
	mangaCharacters: '/manga/{id}/characters',
	mangaPictures: '/manga/{id}/pictures',
	mangaStatistics: '/manga/{id}/statistics',
	mangaRecommendations: '/manga/{id}/recommendations'
} as const
